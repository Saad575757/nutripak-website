"use client";

import { useState } from "react";

import MaterialIcon from "@/components/material-icon";
import type { PdpRecord } from "@/lib/pdps";

export default function PdpFaq({ pdp }: { pdp: PdpRecord }) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenIndexes((current) =>
      current.includes(index)
        ? current.filter((i) => i !== index)
        : [...current, index]
    );
  };

  return (
    <section className="max-w-[1320px] w-full mx-auto px-margin-mobile md:px-margin pb-16">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        <div className="text-center">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-1">
            QUESTIONS &amp; ANSWERS
          </span>
          <h3 className="font-headline-md text-headline-md text-primary font-normal">
            Frequently Asked Questions
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          {pdp.faqs.map((faq, index) => {
            const open = openIndexes.includes(index);
            return (
              <div key={faq.question} className="rounded-xl bg-surface-container-low overflow-hidden">
                <button
                  className="w-full p-5 text-left font-title-md text-title-md text-primary font-bold flex justify-between items-center hover:bg-surface-container transition-colors"
                  type="button"
                  onClick={() => toggle(index)}
                >
                  <span>{faq.question}</span>
                  <MaterialIcon
                    name="expand_more"
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`px-5 pb-5 pt-1 text-body-sm font-body-sm text-on-surface-variant leading-relaxed ${
                    open ? "" : "hidden"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}