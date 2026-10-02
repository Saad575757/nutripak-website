import type { Metadata } from "next";

import ContactHero from "@/components/contact/contact-hero";
import OfficeCards from "@/components/contact/office-cards";
import QueryForm from "@/components/contact/query-form";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <div className="w-full flex flex-col gap-0">
      <ContactHero />
      <OfficeCards />
      <QueryForm />
    </div>
  );
}
