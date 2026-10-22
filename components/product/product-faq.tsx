import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { ROUTES } from "@/lib/site";
import type { ShopProduct } from "@/lib/shop";

export default function ProductFaq({ product }: { product: ShopProduct }) {
  if (product.faqs.length === 0) return null;

  return (
    <section className="w-full py-16 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col gap-10 px-margin-mobile md:px-margin">
        <h2 className="text-center font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal">
          Frequently Asked Questions
        </h2>

        <div className="flex w-full flex-col gap-4">
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

        <Link
          className="mx-auto inline-flex w-fit items-center gap-2 rounded-full border border-primary px-6 py-3 font-label-md text-label-md font-semibold text-primary hover:bg-primary hover:text-on-primary transition-colors"
          href={ROUTES.faqs}
        >
          <MaterialIcon name="help" className="text-[18px]" />
          <span>View all product FAQs</span>
        </Link>
      </div>
    </section>
  );
}
