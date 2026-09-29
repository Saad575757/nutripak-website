import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { ABOUT_PRINCIPLES } from "@/lib/about";

export default function PrinciplesSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="rounded-2xl bg-primary text-on-primary p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-10 -mt-16 w-64 h-64 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col gap-4 max-w-2xl">
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md font-normal leading-tight">
              {ABOUT_PRINCIPLES.heading}
            </h2>
            <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
              {ABOUT_PRINCIPLES.body}
            </p>
          </div>
          <Link
            className="relative z-10 bg-secondary hover:bg-on-secondary-container text-on-secondary px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-colors flex items-center gap-2 shrink-0"
            href="/about#quality"
          >
            <span>{ABOUT_PRINCIPLES.cta}</span>
            <MaterialIcon name="east" className="text-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
