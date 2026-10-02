import { CONTACT_HERO, CONTACT_SHARED_DETAILS, PARENT_COMPANY } from "@/lib/contact";
import { ROUTES } from "@/lib/site";

export default function ContactHero() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[920px] h-[340px] bg-gradient-to-b from-primary-fixed-dim/20 via-secondary-container/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      </div>

      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin pt-6 pb-12">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant mb-6"
        >
          <a className="hover:text-primary transition-colors" href={ROUTES.home}>
            Home
          </a>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">
            {CONTACT_HERO.breadcrumbLabel}
          </span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              {CONTACT_HERO.badge} • Karachi, Pakistan
            </div>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary tracking-tight font-normal mb-4">
              {CONTACT_HERO.heading}
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {CONTACT_HERO.intro}
            </p>
          </div>

          <div className="flex flex-col gap-3 self-start lg:self-end">
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"
              href={CONTACT_SHARED_DETAILS.websiteHref}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div>
                <p className="font-label-md text-label-md text-primary font-bold">
                  {CONTACT_SHARED_DETAILS.website}
                </p>
                <p className="font-caption text-caption text-on-surface-variant">
                  {PARENT_COMPANY}
                </p>
              </div>
            </a>
            <a
              className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow"
              href={CONTACT_SHARED_DETAILS.emailHref}
            >
              <div>
                <p className="font-label-md text-label-md text-primary font-bold">
                  {CONTACT_SHARED_DETAILS.email}
                </p>
                <p className="font-caption text-caption text-on-surface-variant">
                  Email us
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
