"use client";

import { useState } from "react";

import MaterialIcon from "@/components/material-icon";
import { CONCIERGE_FAQS, TELEPHONE_HREF } from "@/lib/contact";

export default function ConciergeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin py-20 w-full">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-2">
            Concierge Protocol
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-normal tracking-tight">
            Frequently Answered Inquiries
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Clear, clinical clarity on how we manage client intakes,
            contraindications, and subscriptions.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {CONCIERGE_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-xl bg-surface-container-lowest shadow-sm overflow-hidden transition-all"
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-surface-container-low transition-colors"
                  type="button"
                  onClick={() => toggle(index)}
                >
                  <span className="font-title-lg text-title-lg text-primary font-semibold">
                    {faq.question}
                  </span>
                  <MaterialIcon
                    name="expand_more"
                    className={`text-secondary transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="px-6 text-on-surface-variant font-body-md text-body-md overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? 320 : 0 }}
                >
                  <p className="pb-6">{faq.answer}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-8 rounded-xl bg-surface-container flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-title-lg text-title-lg text-primary font-bold">
              Prefer real-time dialogue?
            </h4>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Our clinical concierges are available via phone and encrypted
              messaging.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              className="px-6 py-3 rounded-full bg-surface-container-lowest text-primary hover:bg-surface-container-high font-label-md text-label-md font-bold transition-all shadow-sm flex items-center gap-2"
              href={TELEPHONE_HREF}
            >
              <MaterialIcon name="call" className="text-[18px]" />
              <span>Call Concierge</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}