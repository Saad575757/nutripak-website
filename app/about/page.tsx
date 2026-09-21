import type { Metadata } from "next";

import AboutHero from "@/components/about/about-hero";
import AdvisoryBoard from "@/components/about/advisory-board";
import BatchLookup from "@/components/about/batch-lookup";
import FaqSection from "@/components/about/faq";
import OriginSection from "@/components/about/origin";
import PressTicker from "@/components/about/press";
import SustainabilityAndClinical from "@/components/about/sustainability";

export const metadata: Metadata = {
  title: "About Us & Science",
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col gap-0">
      <AboutHero />
      <OriginSection />
      <AdvisoryBoard />
      <BatchLookup />
      <SustainabilityAndClinical />
      <PressTicker />
      <FaqSection />
    </div>
  );
}