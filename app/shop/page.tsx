import type { Metadata } from "next";

import BiochemistBanner from "@/components/shop/biochemist-banner";
import QualityStrip from "@/components/shop/quality-strip";
import ShopBrowser from "@/components/shop/shop-browser";
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
      <ShopBrowser products={products} />
      <QualityStrip />
      <BiochemistBanner />
    </div>
  );
}
