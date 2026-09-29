import MaterialIcon from "@/components/material-icon";
import { ABOUT_PILLARS, ABOUT_PILLARS_SECTION } from "@/lib/about";

export default function PillarsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-12">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-tight max-w-2xl">
          {ABOUT_PILLARS_SECTION.heading}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ABOUT_PILLARS.map((pillar) => (
            <div
              key={pillar.index}
              className="rounded-xl bg-surface-container-lowest p-8 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary">
                  <MaterialIcon name={pillar.icon} className="text-[26px]" />
                </div>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
                  {pillar.index}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {pillar.description}
                </p>
              </div>
              <div className="flex items-center gap-2 font-label-sm text-label-sm text-secondary font-semibold">
                <MaterialIcon name="check_circle" className="text-[16px]" />
                <span>{pillar.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
