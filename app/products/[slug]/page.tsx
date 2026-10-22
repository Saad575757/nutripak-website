import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductFaq from "@/components/product/product-faq";
import ProductFeatures from "@/components/product/product-features";
import ProductHero from "@/components/product/product-hero";
import ProductReviews from "@/components/product/product-reviews";
import { getCatalogProduct, getCatalogSlugs } from "@/lib/catalog";

/** Refresh from the dashboard database at most this often. */
export const revalidate = 30;

export async function generateStaticParams() {
  const slugs = await getCatalogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = await getCatalogProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — Nutripak`,
    description: product.tagline,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = await getCatalogProduct(slug);
  if (!product) notFound();

  return (
    <div className="flex flex-col">
      <ProductHero product={product} />
      <ProductFeatures product={product} />
      <ProductReviews slug={product.slug} productName={product.name} />
      <ProductFaq product={product} />
    </div>
  );
}
