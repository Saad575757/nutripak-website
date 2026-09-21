import type { PdpRecord } from "@/lib/pdps";

export default function BioTimeline({ pdp }: { pdp: PdpRecord }) {
  return (
    <section className="w-full bg-surface-container py-16">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-1">
              THE BIO-TIMELINE
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-normal">
              Sustained systemic release.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            How your cellular defenses systematically transform throughout a
            single day and across 14 days of consistent adherence.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pdp.timeline.map((step, index) => (
            <div
              key={step.badge}
              className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-surface-container text-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                  {step.badge}
                </span>
                <h3 className="font-title-lg text-title-lg text-primary font-bold mt-1">
                  {step.title}
                </h3>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}