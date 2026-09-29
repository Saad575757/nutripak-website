import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { ABOUT_OFFER, ABOUT_OFFER_CARDS } from "@/lib/about";
import { ROUTES } from "@/lib/site";

export default function OfferSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low" id="what-we-offer">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-12">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-tight">
          {ABOUT_OFFER.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ABOUT_OFFER_CARDS.map((card) => (
            <div
              key={card.name}
              className="rounded-xl bg-surface-container-lowest p-8 flex flex-col gap-5 shadow-sm hover:shadow-md transition-shadow group"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-secondary-container/40 flex items-center justify-center text-secondary">
                  <MaterialIcon name={card.icon} className="text-[22px]" />
                </div>
                <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-bold">
                  {card.name}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold leading-snug">
                {card.title}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {card.description}
              </p>
              <Link
                className="mt-auto inline-flex items-center gap-1.5 self-start text-secondary font-label-md text-label-md font-semibold hover:underline"
                href={card.href}
              >
                <span>View {card.name}</span>
                <MaterialIcon name="east" className="text-[18px]" />
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-secondary hover:bg-on-secondary-container text-on-secondary px-8 py-4 font-label-md text-label-md font-bold transition-colors"
            href={ROUTES.shop}
          >
            <span>{ABOUT_OFFER.cta}</span>
            <MaterialIcon name="east" className="text-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
