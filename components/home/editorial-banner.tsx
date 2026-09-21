import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import { EDITORIAL_IMAGE } from "@/lib/site";

const METRICS = [
  { value: "94%", label: "Reported higher sustained daytime energy" },
  { value: "89%", label: "Observed deeper restorative sleep" },
  { value: "100%", label: "Clean-label verified & vegan certified" },
];

export default function EditorialBanner() {
  return (
    <section className="w-full bg-surface-container-high py-16 md:py-24 px-margin-mobile md:px-margin overflow-hidden">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={EDITORIAL_IMAGE}
            alt="Radiant morning wellness ritual with Nutripak supplements"
            width={960}
            height={640}
            className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            THE NUTRIPAK METHOD
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
            Daily wellness <br />
            <span className="italic font-normal">made beautifully simpler.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            No more cluttered medicine cabinets with twenty confusing bottles.
            Nutripak custom-curates your exact daily clinical dosage into clean,
            portable, compostable daily sachets.
          </p>
          <div className="grid grid-cols-3 gap-6 w-full pt-4">
            {METRICS.map((metric) => (
              <div key={metric.value} className="flex flex-col">
                <span className="font-headline-md text-headline-md text-primary font-bold">
                  {metric.value}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  {metric.label}
                </span>
              </div>
            ))}
          </div>
          <a
            className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-container text-on-primary px-8 py-4 font-label-md text-label-md uppercase tracking-wider font-semibold transition-all"
            href="#featured-products"
          >
            <span>Explore Daily Essentials</span>
            <MaterialIcon name="arrow_forward" className="text-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
}