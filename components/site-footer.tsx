"use client";

import Link from "next/link";

import { ROUTES } from "@/lib/site";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
  wide?: boolean;
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "SHOP",
    links: [
      { label: "All Products", href: ROUTES.shop },
      { label: "Best Sellers", href: `${ROUTES.shop}#best-sellers` },
      { label: "New Arrivals", href: ROUTES.shop },
      { label: "Bundles", href: ROUTES.shop },
      { label: "Subscriptions", href: ROUTES.shop },
    ],
  },
  {
    title: "GOALS",
    links: [
      { label: "Sleep", href: ROUTES.category("sleep") },
      { label: "Energy", href: ROUTES.category("energy") },
      { label: "Immunity", href: ROUTES.category("immunity") },
      { label: "Digestive", href: ROUTES.category("digestive") },
      { label: "Beauty", href: ROUTES.category("beauty") },
      { label: "Daily Essentials", href: ROUTES.category("daily-essentials") },
    ],
  },
  {
    title: "LEARN",
    links: [
      { label: "Science Lab", href: ROUTES.about },
      { label: "Ingredients Glossary", href: ROUTES.about },
      { label: "Wellness Blog", href: ROUTES.blog },
      { label: "Research Studies", href: ROUTES.about },
    ],
  },
  {
    title: "ABOUT",
    links: [
      { label: "Our Story", href: ROUTES.about },
      { label: "Clinical Board", href: ROUTES.about },
      { label: "Quality & Testing", href: ROUTES.about },
      { label: "Sustainability", href: ROUTES.about },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "Order Tracking", href: ROUTES.confirmation },
      { label: "Shipping & Returns", href: ROUTES.contact },
      { label: "Help Center", href: ROUTES.contact },
      { label: "FAQs", href: ROUTES.contact },
    ],
    wide: true,
  },
];

const PAYMENT_BADGES = ["Apple Pay", "Visa", "Mastercard", "Amex", "PayPal"];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low pt-16 pb-12 mt-space-xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="p-space-lg md:p-space-xl rounded-xl bg-surface-container mb-16 flex flex-col lg:flex-row items-center justify-between gap-space-lg">
          <div className="max-w-xl text-center lg:text-left">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-2">
              THE NUTRIPAK CHRONICLE
            </span>
            <h3 className="font-headline-md text-headline-md text-primary font-normal leading-tight mb-2">
              Wellness worth opening your inbox for.
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Science-backed vitality tips, early batch releases, and clinician
              formulations delivered weekly.
            </p>
          </div>
          <div className="w-full lg:w-auto flex-1 max-w-md">
            <form
              className="flex flex-col sm:flex-row gap-2"
              onSubmit={(event) => event.preventDefault()}
            >
              <input
                className="w-full px-4 py-3 rounded-full bg-surface-container-lowest border-0 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Enter your personal email"
                type="email"
                aria-label="Email address"
              />
              <button
                className="rounded-full bg-primary text-on-primary font-label-md text-label-md px-6 py-3 hover:bg-primary-container transition-colors whitespace-nowrap font-semibold"
                type="submit"
              >
                Subscribe
              </button>
            </form>
            <p className="font-caption text-caption text-on-surface-variant mt-2 text-center lg:text-left">
              Join 85,000+ conscious optimizers. Unsubscribe anytime.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-lg pb-16">
          {FOOTER_COLUMNS.map((column) => (
            <div
              key={column.title}
              className={`flex flex-col gap-3 ${
                column.wide ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <h4 className="font-label-md text-label-md uppercase tracking-wider text-primary font-bold mb-1">
                {column.title}
              </h4>
              {column.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-body-sm text-body-sm text-on-surface-variant hover:text-secondary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="py-8 bg-surface-container/60 rounded-xl px-6 mb-8">
          <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
            *These statements have not been evaluated by the Food and Drug
            Administration. These products are not intended to diagnose, treat,
            cure, or prevent any disease. Consult your healthcare practitioner
            before initiating any nutritional supplementation regimen,
            particularly if pregnant, nursing, or currently under medical
            supervision.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4 text-on-surface-variant font-caption text-caption">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <p>© 2025 NUTRIPAK Inc. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <Link href="#terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <Link href="#privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="#accessibility" className="hover:text-primary transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {PAYMENT_BADGES.map((badge) => (
              <span
                key={badge}
                className="px-2.5 py-1 rounded bg-surface-container-lowest text-[10px] font-bold tracking-wider text-on-surface uppercase shadow-sm"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}