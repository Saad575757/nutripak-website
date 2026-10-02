"use client";

import Link from "next/link";

import { ROUTES } from "@/lib/site";

interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "PRODUCTS",
    links: [
      { label: "SUBSET", href: ROUTES.product("subset") },
      { label: "ADA-Glu", href: ROUTES.product("ada-glu") },
      { label: "Proteios", href: ROUTES.product("proteios") },
      { label: "Find the Right Product", href: `${ROUTES.home}#quiz-section` },
      { label: "Download Product Guide", href: `${ROUTES.about}#downloads` },
    ],
  },
  {
    title: "NUTRITION SCIENCE",
    links: [
      { label: "Balanced Nutrition", href: ROUTES.product("subset") },
      { label: "Diabetes Care", href: ROUTES.product("ada-glu") },
      { label: "Protein & Recovery", href: ROUTES.product("proteios") },
      { label: "General Health", href: ROUTES.shop },
    ],
  },
  {
    title: "LEARN",
    links: [
      { label: "Media & Blog", href: ROUTES.blog },
      { label: "Health Tips", href: ROUTES.blog },
      { label: "Nutrition Fact Sheets", href: `${ROUTES.about}#downloads` },
      { label: "For Healthcare Professionals", href: ROUTES.contact },
    ],
  },
  {
    title: "ABOUT",
    links: [
      { label: "About Nutripak", href: ROUTES.about },
      { label: "Our Team", href: ROUTES.about },
      { label: "Quality & Safety", href: `${ROUTES.about}#quality` },
      { label: "Careers", href: ROUTES.contact },
    ],
  },
  {
    title: "SUPPORT",
    links: [
      { label: "Contact Us", href: ROUTES.contact },
      { label: "Send a Query", href: `${ROUTES.contact}#query` },
      { label: "FAQs", href: `${ROUTES.about}#faq` },
      { label: "Where to Buy", href: ROUTES.shop },
      { label: "Request Samples", href: ROUTES.contact },
    ],
  },
];

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
] as const;

type SocialIconName = (typeof SOCIAL_LINKS)[number]["icon"];

/** Official brand glyphs (Simple Icons paths, CC0). */
const SOCIAL_ICON_PATHS: Record<SocialIconName, string> = {
  facebook:
    "M24 12.073C24 5.446 18.627 0 12 0S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  instagram:
    "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.441 1.441 0 012.88 0z",
};

function SocialIcon({ name }: { name: SocialIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
      className="w-[18px] h-[18px]"
    >
      <path d={SOCIAL_ICON_PATHS[name]} />
    </svg>
  );
}

const PAYMENT_BADGES = [
  // "Apple Pay",
  // "Visa",
  // "Mastercard",
  // "Amex",
  // "PayPal",
  "Cash On delivery",
];

export default function SiteFooter() {
  return (
    <footer className="w-full bg-surface-container-low pt-16 pb-12 mt-space-xl">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="p-space-lg md:p-space-xl rounded-xl bg-surface-container mb-16 flex flex-col lg:flex-row items-center justify-between gap-space-lg">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="font-headline-md text-headline-md text-primary font-normal leading-tight mb-2">
              Stay Informed
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Get straightforward health tips and Nutripak updates delivered to
              your inbox — no spam, just useful stuff.
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
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-lg pb-16">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-3">
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

        <div className="py-8 bg-surface-container/60 rounded-xl px-6 mb-8 flex flex-col gap-6">
          <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
            Disclaimer: These products are not a substitute for medical
            treatment. Please consult your doctor before use.
          </p>
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                className="w-9 h-9 rounded-full bg-surface-container-lowest text-on-surface-variant inline-flex items-center justify-center hover:bg-secondary hover:text-on-secondary transition-colors"
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={social.label}
              >
                <SocialIcon name={social.icon} />
              </a>
            ))}
          </div>
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
              <Link
                href="#accessibility"
                className="hover:text-primary transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
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
