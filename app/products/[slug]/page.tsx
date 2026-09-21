import { notFound } from "next/navigation";

import PdpHeader from "@/components/product/pdp-header";
import PdpGallery from "@/components/product/pdp-gallery";
import PdpBuybox from "@/components/product/pdp-buybox";
import FormulatorNote from "@/components/product/formulator-note";
import PdpAccordions from "@/components/product/pdp-accordions";
import BioTimeline from "@/components/product/bio-timeline";
import ReviewsSection from "@/components/product/reviews-section";
import PdpFaq from "@/components/product/pdp-faq";
import Pairings from "@/components/product/pairings";
import { getPdpForSlug } from "@/lib/pdps";
import { SHOP_PRODUCTS } from "@/lib/shop";

export function generateStaticParams() {
  return SHOP_PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pdp = getPdpForSlug(slug);
  if (!pdp) return {};
  const product = SHOP_PRODUCTS.find((p) => p.slug === slug);
  return {
    title: `${product?.name ?? ""} — Nutripak`,
    description: pdp.subtitle,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pdp = getPdpForSlug(slug);
  if (!pdp) notFound();

  const product = SHOP_PRODUCTS.find((p) => p.slug === slug)!;

  return (
    <div className="flex flex-col">
      <PdpHeader pdp={pdp} name={product.name} />
      <section className="max-w-[1320px] w-full mx-auto px-margin-mobile md:px-margin py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <PdpGallery pdp={pdp} />
          <PdpBuybox product={product} pdp={pdp} />
        </div>
      </section>
      <FormulatorNote pdp={pdp} />
      <PdpAccordions pdp={pdp} />
      <BioTimeline pdp={pdp} />
      <ReviewsSection pdp={pdp} />
      <PdpFaq pdp={pdp} />
      <Pairings pairings={pdp.pairings} />
    </div>
  );
}