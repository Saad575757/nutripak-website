import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ProductFaq from "@/components/product/product-faq";
import ProductFeatures from "@/components/product/product-features";
import ProductHero from "@/components/product/product-hero";
import {
  SHOP_PRODUCTS,
  getProductForSlug,
} from "@/lib/shop";

export function generateStaticParams() {
  return SHOP_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductForSlug(slug);
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
  const product = getProductForSlug(slug);
  if (!product) notFound();

  return (
    <div className="flex flex-col">
      <ProductHero product={product} />
      <ProductFeatures product={product} />
      <ProductFaq product={product} />
    </div>
  );
}
