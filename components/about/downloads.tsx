import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { ABOUT_DOWNLOADS } from "@/lib/about";

export default function DownloadsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low" id="downloads">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-8">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-tight">
          {ABOUT_DOWNLOADS.heading}
        </h2>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {ABOUT_DOWNLOADS.items.map((item) => (
            <li key={item.href}>
              <Link
                className="group flex items-center gap-4 rounded-xl bg-surface-container-lowest px-6 py-5 shadow-sm hover:shadow-md transition-all"
                href={item.href}
              >
                <div className="w-11 h-11 shrink-0 rounded-full bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <MaterialIcon name="picture_as_pdf" className="text-[22px]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-title-md text-title-md text-primary font-bold">
                    {item.label}
                  </span>
                  <span className="font-caption text-caption text-on-surface-variant uppercase">
                    PDF
                  </span>
                </div>
                <MaterialIcon
                  name="download"
                  className="ml-auto text-[20px] text-outline group-hover:text-secondary transition-colors"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
