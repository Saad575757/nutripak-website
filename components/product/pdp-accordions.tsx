"use client";

import { useState } from "react";

import MaterialIcon from "@/components/material-icon";
import type { PdpRecord } from "@/lib/pdps";

function SupplementFacts({ pdp }: { pdp: PdpRecord }) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm text-on-surface">
      <div className="flex justify-between items-baseline pb-2">
        <span className="font-headline-sm text-headline-sm font-extrabold uppercase tracking-tight text-primary">
          Supplement Facts
        </span>
        <span className="font-body-sm text-body-sm text-on-surface-variant">
          {pdp.servingSize}
        </span>
      </div>
      <div className="font-caption text-caption text-on-surface-variant pb-2">
        {pdp.servings}
      </div>
      <div className="h-1 bg-primary w-full my-2"></div>
      <div className="flex justify-between font-label-sm text-label-sm py-1 font-bold text-primary">
        <span>Amount Per Serving</span>
        <span>% Daily Value</span>
      </div>
      <div className="h-0.5 bg-outline-variant/60 w-full my-1"></div>
      {pdp.facts.map((row) => (
        <div key={row.name} className="flex flex-col">
          <div className="flex justify-between items-center py-2 text-body-sm font-body-sm">
            <div>
              <span className="font-bold text-primary">{row.name}</span>
              <span className="text-on-surface-variant text-[12px] block sm:inline">
                {row.detail}
              </span>
            </div>
            <div className="text-right">
              <span className="font-bold">{row.amount}</span>
              <span className={`font-semibold ml-4 ${row.dvClass}`}>{row.dv}</span>
            </div>
          </div>
          <div className="h-px bg-surface-container-high w-full"></div>
        </div>
      ))}
      <div className="h-0.5 bg-primary w-full my-2"></div>
      <div className="font-caption text-caption text-on-surface-variant py-1">
        * Daily Value (DV) not established.
      </div>
      <div className="mt-4 pt-3 bg-surface-container-low p-3 rounded-lg font-caption text-caption text-on-surface-variant leading-relaxed">
        <strong className="font-bold text-primary">Other Clean Ingredients:</strong>{" "}
        {pdp.otherIngredients}
        <br />
        <strong className="font-bold text-secondary">Free From:</strong> {pdp.freeFrom}
      </div>
    </div>
  );
}

function AccordionContent({ pdp, index }: { pdp: PdpRecord; index: number }) {
  if (index === 0) return <SupplementFacts pdp={pdp} />;

  if (index === 1) {
    return (
      <div className="p-5 rounded-xl bg-surface-container-lowest font-body-md text-body-md text-on-surface-variant flex flex-col gap-3 leading-relaxed">
        <p>{pdp.mechanismIntro}</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-2">
          {pdp.mechanismSteps.map((step) => (
            <div key={step.label} className="p-3 bg-surface-container-low rounded-lg">
              <span className="font-label-sm text-[12px] font-bold text-primary block">
                {step.label}
              </span>
              <span className="font-caption text-[11px]">{step.text}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (index === 2) {
    return (
      <div className="p-5 rounded-xl bg-surface-container-lowest font-body-md text-body-md text-on-surface-variant flex flex-col gap-3 leading-relaxed">
        {pdp.howTo.map((item) => (
          <div key={item.title} className="flex items-start gap-3">
            <MaterialIcon name={item.icon} className="text-secondary text-[22px] mt-0.5" />
            <div>
              <strong className="font-bold text-primary block">{item.title}</strong>
              {item.text}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (index === 3) {
    return (
      <div className="p-5 rounded-xl bg-surface-container-lowest font-body-md text-body-md text-on-surface-variant flex flex-col gap-3">
        <p>{pdp.clinicalCopy}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {pdp.clinicalChips.map((chip) => (
            <span
              key={chip}
              className="px-3 py-1.5 rounded-lg bg-surface-container font-caption text-caption text-primary font-bold flex items-center gap-1"
            >
              <MaterialIcon name="check" className="text-[16px] text-secondary" />
              {chip}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 rounded-xl bg-surface-container-lowest font-body-md text-body-md text-on-surface-variant flex flex-col gap-3 leading-relaxed">
      <p>{pdp.suitedForIntro}</p>
      <ul className="list-disc pl-5 flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface">
        {pdp.suitedFor.map((item) => (
          <li key={item.lead}>
            <strong className="font-bold text-primary">{item.lead}</strong>
            {item.rest}
          </li>
        ))}
      </ul>
    </div>
  );
}

const ACCORDION_TITLES = [
  { icon: "table_rows", label: "Supplement Facts & Clinical Dosage" },
  { icon: "hub", label: "What It Does & Biological Mechanism" },
  { icon: "schedule", label: "How to Take for Peak Bioavailability" },
  { icon: "verified_user", label: "Clinical Studies & Third-Party Testing" },
  { icon: "group", label: "Who It's For & Daily Synergy" },
];

export default function PdpAccordions({ pdp }: { pdp: PdpRecord }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="max-w-[1320px] w-full mx-auto px-margin-mobile md:px-margin py-16">
      <div className="flex flex-col max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold block mb-2">
            EMPIRICAL TRANSPARENCY
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary font-normal">
            What&rsquo;s inside, down to the microgram.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Zero proprietary blends. Zero hidden carriers. Pure bio-active synergy.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {ACCORDION_TITLES.map((title, index) => {
            const open = openIndex === index;
            return (
              <div
                key={title.label}
                className="rounded-xl bg-surface-container-low overflow-hidden transition-all"
              >
                <button
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-title-lg text-title-lg text-primary font-bold hover:bg-surface-container transition-colors"
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                >
                  <span className="flex items-center gap-3">
                    <MaterialIcon name={title.icon} className="text-secondary" />
                    {title.label}
                  </span>
                  <MaterialIcon
                    name="expand_more"
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`px-6 pb-6 pt-1 ${open ? "" : "hidden"}`}
                >
                  <AccordionContent pdp={pdp} index={index} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}