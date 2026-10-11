import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import { EMAIL } from "@/lib/contact";
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
                Would you like help choosing the right product?
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                We are here to guide you.
                Browse our FAQs for honest, easy-to-follow answers. If you can’t find
                what you need, please send us a question and we will gladly help.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
            <a
              className="w-full lg:w-auto px-6 py-3 rounded-full bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-semibold transition-all shadow-sm flex items-center justify-center gap-2"
              href={`mailto:${EMAIL}`}
            >
              <MaterialIcon name="chat_bubble_outline" className="text-[18px]" />
              <span>Email</span>
            </a>
            <a
              className="hidden sm:inline-flex px-6 py-3 rounded-full bg-surface-container-lowest hover:bg-surface-bright text-primary font-label-md text-label-md font-semibold transition-colors"
              href={ROUTES.faqs}
            >
              FAQS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}