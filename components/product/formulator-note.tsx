import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import type { PdpRecord } from "@/lib/pdps";

export default function FormulatorNote({ pdp }: { pdp: PdpRecord }) {
  return (
    <section className="w-full bg-surface-container-low py-16">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-lowest rounded-2xl p-6 md:p-12 shadow-sm">
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-xl overflow-hidden bg-surface-container shadow-md">
              <Image
                src={pdp.formulatorImage}
                alt="Dr. Elena Vance in clinical research nutrition laboratory"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-on-primary p-3 rounded-xl shadow-lg hidden sm:flex items-center gap-2">
              <MaterialIcon name="science" className="text-secondary-fixed text-[24px]" />
              <div className="flex flex-col">
                <span className="font-label-sm text-[11px] uppercase tracking-wider font-bold">
                  Lab Validated
                </span>
                <span className="font-caption text-[11px] opacity-90">
                  Stanford Clinical Research Board
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-secondary font-label-sm text-label-sm uppercase tracking-widest font-bold">
              <MaterialIcon name="neurology" className="text-[18px]" />
              THE FORMULATOR&rsquo;S NOTE
            </div>
            <h2 className="font-headline-md text-headline-md text-primary font-normal leading-tight">
              &ldquo;{pdp.formulatorQuote}&rdquo;
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {pdp.formulatorCopy}
            </p>
            <div className="pt-2 flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="font-title-md text-title-md text-primary font-bold">
                  {pdp.formulatorName}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {pdp.formulatorRole}
                </p>
              </div>
              <div className="flex items-center gap-3">
                {pdp.formulatorChips.map((chip) => (
                  <div
                    key={chip}
                    className="px-3 py-1 rounded-full bg-surface-container text-primary font-label-sm text-[12px] font-semibold"
                  >
                    {chip}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}