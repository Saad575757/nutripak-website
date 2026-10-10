import { cache } from "react";

import { isDatabaseConfigured, query } from "@/lib/db";
import { SHOP_PRODUCTS, type ShopProduct } from "@/lib/shop";

/**
 * Server-side catalogue. Products are read from the same Neon database the
 * Nutripak dashboard edits, so price/name/description/image changes made there
 * flow through to the storefront.
 *
 * The dashboard has no columns for our merchandising extras (cart variant,
 * key features, FAQs), so those are merged from the static definitions by slug
 * and simply fall back to `[]` for products the dashboard adds on its own.
 */

interface ProductRow {
  slug: string;
  name: string;
  sku: string;
  shortDescription: string | null;
  fullDescription: string | null;
  price: string;
  benefits: string | null;
  category_name: string | null;
  image_url: string | null;
  image_alt: string | null;
}

const CATALOG_SQL = `
  SELECT
    p.slug,
    p.name,
    p.sku,
    p."shortDescription",
    p."fullDescription",
    p.price,
    p.benefits,
    c.name AS category_name,
    (
      SELECT pi.url FROM "ProductImage" pi
      WHERE pi."productId" = p.id
      ORDER BY pi."isMain" DESC, pi."sortOrder" ASC
      LIMIT 1
    ) AS image_url,
    (
      SELECT pi.alt FROM "ProductImage" pi
      WHERE pi."productId" = p.id
      ORDER BY pi."isMain" DESC, pi."sortOrder" ASC
      LIMIT 1
    ) AS image_alt
  FROM "Product" p
  LEFT JOIN "Category" c ON c.id = p."categoryId"
  WHERE p.status = 'ACTIVE'
`;

const BASE_ORDER = SHOP_PRODUCTS.map((product) => product.slug);

/** Shown when a dashboard product has no image uploaded yet. */
const PLACEHOLDER_IMAGE = "/products/placeholder.svg";

function splitLines(value: string | null): string[] {
  if (!value) return [];
  return value
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);
}

/**
 * Finds the static definition a dashboard row belongs to. The dashboard can
 * rewrite a product's slug (it appends the SKU on edit), so SKU — not slug — is
 * the stable join key. Slug matching is only a fallback for safety.
 */
function findBase(row: ProductRow): ShopProduct | undefined {
  return (
    SHOP_PRODUCTS.find((product) => product.sku === row.sku) ??
    SHOP_PRODUCTS.find((product) => product.slug === row.slug)
  );
}

function toShopProduct(row: ProductRow): ShopProduct {
  const base = findBase(row);

  // Products without an uploaded image still appear, using a placeholder.
  const image = (row.image_url ?? "").trim() || base?.image || PLACEHOLDER_IMAGE;

  const tagline = (row.shortDescription ?? "").trim() || base?.tagline || "";
  const description =
    (row.fullDescription ?? "").trim() || tagline || base?.description || "";
  const benefits = splitLines(row.benefits);

  return {
    // Keep the storefront's canonical URL slug for known products so dashboard
    // slug rewrites never break existing links.
    slug: base?.slug ?? row.slug,
    name: (row.name ?? "").trim() || base?.name || row.slug,
    sku: row.sku || base?.sku || "",
    tagline,
    description,
    pricePkr: Number(row.price) || 0,
    variant:
      base?.variant ||
      (row.category_name ?? "").trim() ||
      "Nutripak formulation",
    image,
    alt: (row.image_alt ?? "").trim() || base?.alt || `${row.name} product image`,
    keyFeatures: benefits.length ? benefits : base?.keyFeatures ?? [],
    faqs: base?.faqs ?? [],
  };
}

/** Keeps the known products in their merchandised order, extras appended. */
function sortByBaseOrder(products: ShopProduct[]): ShopProduct[] {
  return [...products].sort((a, b) => {
    const indexA = BASE_ORDER.indexOf(a.slug);
    const indexB = BASE_ORDER.indexOf(b.slug);
    if (indexA === -1 && indexB === -1) return 0;
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;
    return indexA - indexB;
  });
}

async function loadCatalogProducts(): Promise<ShopProduct[]> {
  if (!isDatabaseConfigured()) return SHOP_PRODUCTS;

  try {
    const result = await query<ProductRow>(CATALOG_SQL);
    const products = result.rows.map(toShopProduct);
    return sortByBaseOrder(products);
  } catch (error) {
    console.error("Catalog could not be loaded from the database:", error);
    return SHOP_PRODUCTS;
  }
}

/** Per-request memoised catalogue read. */
export const getCatalogProducts = cache(loadCatalogProducts);

export const getCatalogProduct = cache(async (slug: string) => {
  const products = await getCatalogProducts();
  return products.find((product) => product.slug === slug);
});

export async function getCatalogSlugs(): Promise<string[]> {
  // Called from generateStaticParams, outside a render pass, so read directly.
  const products = await loadCatalogProducts();
  return products.map((product) => product.slug);
}
