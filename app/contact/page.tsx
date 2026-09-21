import type { Metadata } from "next";

import ContactChannels from "@/components/contact/contact-channels";
import ContactHero from "@/components/contact/contact-hero";
import ConciergeFaq from "@/components/contact/concierge-faq";
import ConciergeForm from "@/components/contact/concierge-form";
import GlobalLocations from "@/components/contact/global-locations";

export const metadata: Metadata = {
  title: "Clinical Concierge",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col gap-0">
      <ContactHero />

      <section className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <ContactChannels />
          <ConciergeForm />
        </div>
      </section>

      <GlobalLocations />
      <ConciergeFaq />
    </div>
  );
}