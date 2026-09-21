import MaterialIcon from "@/components/material-icon";
import { ABOUT_STATS } from "@/lib/about";

export default function AboutHero() {
  return (
    <>
      <div className="relative w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl"></div>
        <div className="absolute top-48 -left-20 w-80 h-80 rounded-full bg-surface-variant/40 blur-3xl"></div>
      </div>

      <section className="relative w-full pt-6 md:pt-10 pb-16">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span>About NUTRIPAK • Purpose &amp; Science</span>
            </div>
            <div className="flex items-center gap-4 text-outline font-label-sm text-label-sm">
              <span>EST. 2021</span>
              <span>•</span>
              <span>SAN FRANCISCO &amp; OXFORD</span>
              <span>•</span>
              <span className="text-secondary font-bold">CLINICAL MONOGRAPH 04</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col gap-4">
              <h1 className="font-display-hero text-headline-lg-mobile md:text-display-hero text-primary tracking-tight font-normal leading-[1.08]">
                Nutrition engineered for cellular truth,{" "}
                <span className="italic font-light text-surface-tint">not shelf-life.</span>
              </h1>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4 pb-2">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Founded in 2021 by clinical researchers and nutritional
                biochemists, NUTRIPAK was created to eliminate synthetic oxides,
                heavy binders, and marketing fiction from daily longevity
                regimens.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a
                  className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md hover:text-primary transition-colors"
                  href="#sustainable-standards"
                >
                  <span>Our Sustainable Standards</span>
                  <MaterialIcon name="arrow_downward" className="text-[18px]" />
                </a>
                <span className="text-outline-variant">•</span>
                <a
                  className="inline-flex items-center gap-2 text-secondary font-label-md text-label-md hover:text-primary transition-colors"
                  href="#batch-lookup"
                >
                  <span>Verify Batch COA</span>
                  <MaterialIcon name="verified" className="text-[18px]" />
                </a>
              </div>
            </div>
          </div>

          <div className="w-full rounded-xl bg-surface-container p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    <MaterialIcon name={stat.icon} className="text-[18px]" />
                    <span>{stat.label}</span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-headline-md text-headline-md text-primary font-normal">
                      {stat.value}
                    </span>
                    {stat.suffix ? (
                      <span className="font-label-sm text-label-sm text-outline font-bold">
                        {stat.suffix}
                      </span>
                    ) : null}
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}