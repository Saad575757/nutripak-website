import type { Metadata } from "next";

import BiochemistBanner from "@/components/shop/biochemist-banner";
import QualityStrip from "@/components/shop/quality-strip";
import ShopCatalog from "@/components/shop/shop-catalog";
import ShopHero from "@/components/shop/shop-hero";
import ShopNotice from "@/components/shop/shop-notice";
import { getCatalogProducts } from "@/lib/catalog";

/** Refresh from the dashboard database at most this often. */
export const revalidate = 30;

export const metadata: Metadata = {
  title: "Shop All Formulations",
  description:
    "Clinically engineered nutraceutical formulations with chelated minerals, active co-enzymes, and liposomal bioavailability.",
};

export default async function ShopPage() {
  const products = await getCatalogProducts();

  return (
    <div className="w-full flex flex-col gap-0">
      <ShopNotice />
      <ShopHero count={products.length} />
      <ShopCatalog products={products} />
      <QualityStrip />
      <BiochemistBanner />
    </div>
  );
}
