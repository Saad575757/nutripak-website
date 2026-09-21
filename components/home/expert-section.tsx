import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import { EXPERT_IMAGE } from "@/lib/site";

const CREDENTIALS = [
  "Stanford Research Fellow",
  "14+ Published Clinical Studies",
  "Verified Safety Oversight",
];

export default function ExpertSection() {
  return (
    <section className="w-full py-16 md:py-24 px-margin-mobile md:px-margin">
      <div className="max-w-[1320px] mx-auto bg-surface-container-lowest rounded-3xl p-8 md:p-16 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={EXPERT_IMAGE}
              alt="Dr. Elena Vance, Ph.D. Clinical Nutritionist"
              fill
              sizes="(min-width: 1024px) 420px, 100vw"
              className="object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md rounded-xl p-3 flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-primary font-bold">
                Clinical Advisory Board
              </span>
              <MaterialIcon name="verified" className="text-secondary text-[20px]" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <div className="w-10 h-10 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center">
            <MaterialIcon name="format_quote" className="text-[24px]" />
          </div>
          <blockquote className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-light italic leading-snug">
            “Most commercial supplements use cheap synthetic oxide forms that
            your body excretes without absorbing. At Nutripak, every ingredient
            is selected in its active, cellular-available form.”
          </blockquote>
          <div>
            <h4 className="font-title-lg text-title-lg text-primary font-bold">
              Dr. Elena Vance, Ph.D.
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Director of Nutritional Science &amp; Metabolic Research
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {CREDENTIALS.map((credential, index) => (
                <span
                  key={credential}
                  className={`px-3 py-1 rounded-full font-label-sm text-label-sm ${
                    index === CREDENTIALS.length - 1
                      ? "bg-secondary-container/30 text-secondary font-semibold"
                      : "bg-surface-container text-on-surface"
                  }`}
                >
                  {credential}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}