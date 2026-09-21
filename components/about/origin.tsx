import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import { ABOUT_PILLARS, LAB_IMAGE } from "@/lib/about";

export default function OriginSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 relative rounded-xl overflow-hidden min-h-[460px] bg-surface-container shadow-md flex flex-col justify-end p-8">
            <Image
              src={LAB_IMAGE}
              alt="Editorial portrait of lead scientist Dr. Elena Vance in the sunlit NUTRIPAK Nutrition Lab"
              fill
              sizes="(min-width: 1024px) 660px, 100vw"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent"></div>
            <div className="relative z-10 flex flex-col gap-3 text-on-primary">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm uppercase tracking-wider font-bold">
                  NUTRIPAK LAB 01
                </span>
                <span className="font-caption text-caption text-secondary-fixed">
                  San Francisco BioDistrict
                </span>
              </div>
              <blockquote className="font-headline-md text-headline-md font-normal leading-snug">
                “Most commercial vitamins pass through your intestinal tract
                entirely unabsorbed. We spent three full years engineering lipid
                matrices that protect micronutrients past the gastric acid
                barrier.”
              </blockquote>
              <div className="flex items-center justify-between pt-2 flex-wrap gap-3">
                <div>
                  <p className="font-title-md text-title-md font-bold text-on-primary">
                    Dr. Elena Vance, Ph.D.
                  </p>
                  <p className="font-body-sm text-body-sm text-surface-tint">
                    Co-Founder &amp; Chief Scientific Officer
                  </p>
                </div>
                <div className="flex items-center gap-1 font-label-sm text-label-sm bg-primary/70 px-3 py-1.5 rounded-lg text-primary-fixed">
                  <MaterialIcon name="verified" className="text-[16px]" />
                  <span>Peer-Reviewed Formulations</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between gap-8 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm">
            <div className="flex flex-col gap-6">
              <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
                OUR ORIGIN &amp; STANDARD
              </span>
              <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-tight">
                Crafted for physiological bioavailability, never cost-cutting.
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                In 2021, our founders were reviewing peer-reviewed
                bioavailability assays and made an unsettling discovery: more
                than 73% of retail multivitamins use low-grade magnesium oxide
                and synthetic dl-alpha tocopherols with human absorption rates
                under eight percent.
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                We asked a simple question:{" "}
                <strong className="text-on-surface font-semibold">
                  What if daily nutritional supplementation had the
                  pharmacological rigorousness of clinical therapeutics, with
                  the organic purity of whole botanicals?
                </strong>
              </p>
            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-surface-container-low p-6 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center font-bold font-title-lg">
                  EV
                </div>
                <div>
                  <p className="font-title-md text-title-md text-primary font-bold">
                    Dr. Elena Vance, Ph.D.
                  </p>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Stanford Clinical Fellow • Biochemistry
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold font-title-lg">
                  MS
                </div>
                <div>
                  <p className="font-title-md text-title-md text-primary font-bold">
                    Marcus Sterling
                  </p>
                  <p className="font-caption text-caption text-on-surface-variant">
                    Oxford Formulation Chemist • Bio-Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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