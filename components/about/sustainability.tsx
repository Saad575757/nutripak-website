import MaterialIcon from "@/components/material-icon";
import { MONOGRAPHS, SUSTAINABILITY_CARDS } from "@/lib/about";

export default function SustainabilityAndClinical() {
  return (
    <section className="w-full py-16 md:py-24" id="sustainable-standards">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              SUSTAINABLE STANDARDS
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-tight">
              Packaging that preserves potency — and the planet.
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We refuse to treat packaging as an afterthought. From Miron violet
              apothecary glass to reusable refill architecture, every material
              choice carries clinical or ecological rationale.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SUSTAINABILITY_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-surface-container-lowest p-7 flex flex-col justify-between gap-8 border border-surface-container/60 hover:border-surface-container hover:shadow-md transition-all group"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                  <MaterialIcon name={card.icon} className="text-[24px]" />
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {card.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {card.description}
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between gap-3 border-t border-surface-container/60 pt-4">
                <span className="font-body-sm text-body-sm text-secondary font-semibold">
                  {card.label}
                </span>
                <span className="font-caption text-caption text-outline">
                  {card.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-2xl bg-surface-container-low p-8 md:p-12 flex flex-col gap-8 border border-surface-container"
          id="open-science"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-2 border-b border-surface-container/60 pb-6">
            <div className="flex flex-col gap-3">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                CLINICAL RESEARCH TIMELINE
              </span>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                Three-year principal investigation &amp; internal peer review.
              </h3>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
              Our formula decisions are grounded in laboratory data streams
              published openly to advance the fundamentals of human nutrition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-body-sm text-body-sm text-on-surface">
            {MONOGRAPHS.map((mono) => (
              <div
                key={mono.code}
                className="rounded-xl bg-surface-container-lowest p-7 flex flex-col justify-between gap-6"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline font-bold">
                      {mono.code}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-surface-variant text-secondary font-label-sm text-label-sm uppercase">
                      {mono.tag}
                    </span>
                  </div>
                  <h4 className="font-title-md text-title-md text-primary font-bold">
                    {mono.title}
                  </h4>
                  <p className="text-on-surface-variant leading-relaxed">
                    {mono.description}
                  </p>
                </div>
                <div className="pt-4 flex items-center justify-between gap-3 border-t border-surface-container">
                  <span className="font-label-sm text-label-sm text-on-surface-variant italic">
                    {mono.journal}
                  </span>
                  <a
                    className="inline-flex items-center gap-1 text-secondary font-label-sm text-label-sm font-semibold hover:underline"
                    href="#open-science"
                  >
                    <span>Read Paper</span>
                    <MaterialIcon name="east" className="text-[16px]" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-primary text-on-primary p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-10 -mt-16 w-64 h-64 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 w-full">
            <div className="flex flex-col gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-secondary-fixed font-label-sm text-label-sm uppercase tracking-wider self-start">
                <MaterialIcon name="support_agent" className="text-[16px]" />
                <span>Clinical Concierge Desk</span>
              </div>
              <h3 className="font-headline-md text-headline-md font-bold">
                Not sure which formula is right for you?
              </h3>
              <p className="font-body-md text-body-md text-on-primary-container leading-relaxed max-w-xl">
                Our registered geneticists and clinical pharmacists build custom
                micro-protocols for every individual BioGen report and
                supplement stack.
              </p>
            </div>
            <button
              className="bg-secondary hover:bg-on-secondary-container text-on-secondary px-8 py-4 rounded-xl font-label-md text-label-md font-bold transition-colors flex items-center gap-2 shrink-0"
              type="button"
            >
              <span>Speak with Concierge</span>
              <MaterialIcon name="east" className="text-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}