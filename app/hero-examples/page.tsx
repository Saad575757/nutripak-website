import type { Metadata } from "next";

import HeroShowcase from "@/components/hero-examples/hero-showcase";

export const metadata: Metadata = {
  title: "Hero concepts",
  description:
    "Three premium hero section directions for the Nutripak storefront.",
};

export default function HeroExamplesPage() {
  return (
    <div className="w-full">
      <HeroShowcase />
    </div>
  );
}
