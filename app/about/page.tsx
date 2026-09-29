import type { Metadata } from "next";

import AboutHero from "@/components/about/about-hero";
import AdvisoryBoard from "@/components/about/advisory-board";
import CommitmentSection from "@/components/about/commitment";
import DownloadsSection from "@/components/about/downloads";
import FaqSection from "@/components/about/faq";
import OfferSection from "@/components/about/offer";
import OriginSection from "@/components/about/origin";
import PillarsSection from "@/components/about/pillars";
import PrinciplesSection from "@/components/about/principles";
import QualitySection from "@/components/about/quality";
import StorySections from "@/components/about/story";

export const metadata: Metadata = {
  title: "About Us & Science",
};

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col gap-0">
      <AboutHero />
      <OriginSection />
      <StorySections />
      <PillarsSection />
      <AdvisoryBoard />
      <QualitySection />
      <CommitmentSection />
      <OfferSection />
      <PrinciplesSection />
      <FaqSection />
      <DownloadsSection />
    </div>
  );
}
