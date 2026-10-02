import MaterialIcon from "@/components/material-icon";
import type { ShopProduct } from "@/lib/shop";

export default function ProductFaq({ product }: { product: ShopProduct }) {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-10">
        <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal">
          Frequently Asked Questions
        </h2>

        <div className="max-w-3xl w-full flex flex-col gap-4">
          {product.faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-xl bg-surface-container-lowest border border-surface-container px-6 py-4"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none justify-between gap-6 items-start">
                <h3 className="font-title-md text-title-md text-primary font-bold">
                  {faq.question}
                </h3>
                <span className="mt-1 flex items-center justify-center transition-transform group-open:rotate-180">
                  <MaterialIcon
                    name="expand_more"
                    className="text-[24px] text-outline"
                  />
                </span>
              </summary>
              <div className="pt-4 flex flex-col gap-3">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </p>
                {faq.points ? (
                  <ul className="flex flex-col gap-2 pl-1">
                    {faq.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 font-body-sm text-body-sm text-on-surface-variant"
                      >
                        <MaterialIcon
                          name="fiber_manual_record"
                          className="text-[10px] text-secondary mt-1.5 shrink-0"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
