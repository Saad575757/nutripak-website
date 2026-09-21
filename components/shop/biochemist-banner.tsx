import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import { BIOCHEMIST_IMAGE } from "@/lib/shop";
import { ROUTES } from "@/lib/site";

export default function BiochemistBanner() {
  return (
    <section className="w-full py-16">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="rounded-2xl bg-surface-container p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="flex items-center gap-6 max-w-2xl">
            <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-surface-container-highest">
              <Image
                src={BIOCHEMIST_IMAGE}
                alt="Portrait of a smiling female clinical biochemist in modern lab setting holding a pure glass formulation bottle."
                fill
                sizes="64px"
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-secondary border-2 border-surface"></span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-1">
                Have questions regarding contraindications or routine stacking?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Speak directly with our team of clinical biochemists and
                functional nutritionists via Live Chat. No sales pitch, purely
                pharmacological clarity.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
            <button
              className="w-full lg:w-auto px-6 py-3 rounded-full bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
              type="button"
            >
              <MaterialIcon name="chat_bubble_outline" className="text-[18px]" />
              <span>Start Biochemist Chat</span>
            </button>
            <a
              className="hidden sm:inline-flex px-6 py-3 rounded-full bg-surface-container-lowest hover:bg-surface-bright text-primary font-label-md text-label-md font-semibold transition-colors"
              href={ROUTES.about}
            >
              Explore Science Lab
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}