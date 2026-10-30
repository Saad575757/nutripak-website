import type { Metadata } from "next";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { ABOUT_DOWNLOADS } from "@/lib/about";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Downloads",
  description:
    "Download the NutriPak Product Guide and Nutrition Fact Sheets as PDF files.",
};

const DOWNLOAD_NOTES = [
  {
    icon: "menu_book",
    title: "Product Guide",
    description:
      "A plain-language overview of SUBSET, ADA-glu, and PROTEIOS, including who each formula is for.",
  },
  {
    icon: "science",
    title: "Nutrition Fact Sheets",
    description:
      "Per-serving reference values for energy, protein, carbohydrate, fat, fibre, and key micronutrients.",
  },
  {
    icon: "print",
    title: "Print or share",
    description:
      "Both files are press-ready A4 PDFs, easy to print for a clinic, pharmacy, or family member.",
  },
];

export default function DownloadsPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary text-on-primary">
        <div className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin py-14 md:py-20 flex flex-col gap-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-label-sm text-label-sm text-on-primary/70"
          >
            <Link className="hover:text-secondary-container" href={ROUTES.home}>
              Home
            </Link>
            <span className="text-on-primary/40">/</span>
            <Link
              className="hover:text-secondary-container"
              href={ROUTES.about}
            >
              About
            </Link>
            <span className="text-on-primary/40">/</span>
            <span className="text-secondary-container font-semibold">
              Downloads
            </span>
          </nav>

          <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-secondary-container font-bold">
            Resources
          </span>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-normal leading-tight">
            Downloads
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/80 leading-relaxed max-w-2xl">
            The NutriPak Product Guide and Nutrition Fact Sheets are available
            as PDF files. Open them in your browser or download a copy to keep.
          </p>
        </div>
      </section>

      <section id="downloads" className="w-full py-14 md:py-20">
        <div className="max-w-[1000px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-12">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {ABOUT_DOWNLOADS.items.map((item) => (
              <li key={item.href}>
                <a
                  className="group flex h-full items-start gap-4 rounded-2xl bg-surface-container-lowest p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                  href={item.href}
                  download
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-container text-on-secondary-fixed">
                    <MaterialIcon
                      name="picture_as_pdf"
                      className="text-[24px]"
                    />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="font-title-lg text-title-lg text-primary font-bold">
                      {item.label}
                    </span>
                    <span className="font-caption text-caption uppercase tracking-wider text-on-surface-variant">
                      {item.file}
                    </span>
                    <span className="mt-2 inline-flex items-center gap-1 font-label-md text-label-md font-semibold text-secondary">
                      Download PDF
                      <MaterialIcon
                        name="download"
                        className="text-[18px] transition-transform group-hover:translate-y-0.5"
                      />
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DOWNLOAD_NOTES.map((note) => (
              <div
                key={note.title}
                className="rounded-2xl bg-surface-container-low p-6 flex flex-col gap-3"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface-container-lowest text-secondary">
                  <MaterialIcon name={note.icon} className="text-[21px]" />
                </span>
                <h2 className="font-title-md text-title-md text-primary font-bold">
                  {note.title}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {note.description}
                </p>
              </div>
            ))}
          </div>

          <p className="rounded-xl bg-surface-container px-5 py-4 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            These documents are for general product information only. They are
            not a substitute for medical advice. Please consult your doctor or
            dietitian before starting any new supplement.
          </p>

          <div>
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-container text-on-primary px-7 py-3.5 font-label-md text-label-md font-bold transition-colors"
              href={ROUTES.shop}
            >
              <span>Explore the products</span>
              <MaterialIcon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
