import MaterialIcon from "@/components/material-icon";
import { ROUTES } from "@/lib/site";
import { CONTACT_METRICS } from "@/lib/contact";

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
          <a className="hover:text-primary transition-colors" href={ROUTES.contact}>
            Support
          </a>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">Clinical Concierge</span>
        </nav>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-high text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold mb-5 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
              </span>
              Direct Clinical Access • Mon–Fri 8:00 AM–7:00 PM EST
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-normal mb-4">
              Speak directly with our clinical team &amp; concierge.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              No generic bots or support ticket labyrinths. Every inquiry is
              personally triaged and reviewed by certified wellness advisors,
              clinical biochemists, or dedicated formulation specialists.
            </p>
          </div>

          <div className="flex flex-wrap lg:flex-col sm:flex-row gap-3 self-start lg:self-end">
            {CONTACT_METRICS.map((metric) => (
              <div
                key={metric.value}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-surface-container-lowest shadow-sm"
              >
                <div className="w-9 h-9 rounded-full bg-secondary-container/40 flex items-center justify-center text-primary">
                  <MaterialIcon name={metric.icon} className="text-[20px]" />
                </div>
                <div>
                  <p className="font-label-md text-label-md text-primary font-bold">
                    {metric.value}
                  </p>
                  <p className="font-caption text-caption text-on-surface-variant">
                    {metric.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}