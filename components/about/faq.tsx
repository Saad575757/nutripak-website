import MaterialIcon from "@/components/material-icon";
import { ABOUT_FAQS } from "@/lib/about";

export default function FaqSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-12">
        <div className="text-center flex flex-col items-center gap-4">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
            FIELD NOTES
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-tight">
            Frequently asked questions.
          </h2>
        </div>

        <div className="max-w-3xl mx-auto w-full flex flex-col gap-4">
          {ABOUT_FAQS.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-xl bg-surface-container-lowest border border-surface-container px-6 py-4"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none justify-between gap-6 items-start">
                <h4 className="font-title-md text-title-md text-primary font-bold">
                  {faq.question}
                </h4>
                <span className="mt-1 flex items-center justify-center transition-transform group-open:rotate-180">
                  <MaterialIcon name="expand_more" className="text-[24px] text-outline" />
                </span>
              </summary>
              <p className="pt-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}