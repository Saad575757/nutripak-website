import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import { ADVISORY_BOARD } from "@/lib/about";

export default function AdvisoryBoard() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl flex flex-col gap-3">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              THE CLINICAL COUNCIL
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-tight">
              Formulated by clinicians, validated by clinical trials.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Our independent Scientific Advisory Board steers all research
            protocols, ingredient thresholds, and contraindication screening.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ADVISORY_BOARD.map((expert) => (
            <div
              key={expert.name}
              className="rounded-xl bg-surface-container-lowest p-6 flex flex-col justify-between gap-6 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex flex-col gap-4">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container">
                  <Image
                    src={expert.image}
                    alt={expert.alt}
                    fill
                    sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-md text-on-primary font-label-sm text-label-sm">
                    {expert.badge}
                  </div>
                </div>
                <div>
                  <h3 className="font-title-lg text-title-lg text-primary font-bold">
                    {expert.name}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary font-semibold">
                    {expert.role}
                  </p>
                  <p className="font-caption text-caption text-on-surface-variant mt-1">
                    {expert.meta}
                  </p>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {expert.bio}
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between font-label-sm text-label-sm text-outline">
                <span>{expert.focus}</span>
                <MaterialIcon name="verified" className="text-[16px] text-secondary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}