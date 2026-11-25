"use client";

import Image from "next/image";
import { useState } from "react";

import MaterialIcon from "@/components/material-icon";
import { DOCTOR_TESTIMONIALS } from "@/lib/doctor-testimonials";
import { EXPERT_IMAGE } from "@/lib/site";

const TOTAL = DOCTOR_TESTIMONIALS.length;

/** Quotes longer than this are collapsed until the reader opts in. */
const LONG_QUOTE_CHARS = 350;

export default function ExpertSection() {
  const [active, setActive] = useState(0);
  const [expandedFor, setExpandedFor] = useState<number | null>(null);
  const item = DOCTOR_TESTIMONIALS[active];
  const isLong = item.quote.length > LONG_QUOTE_CHARS;
  const isExpanded = expandedFor === active;

  const go = (direction: number) => {
    setActive((current) => (current + direction + TOTAL) % TOTAL);
  };

  return (
    <section className="w-full py-16 md:py-24 px-margin-mobile md:px-margin">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <span className="font-label-sm text-label-sm font-bold uppercase tracking-[0.22em] text-secondary">
            Clinician voices
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary leading-tight">
            Trusted by healthcare professionals.
          </h2>
        </div>

        <div className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm aspect-square rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={EXPERT_IMAGE}
                alt="Clinical advisory visual"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-surface-container-lowest/90 backdrop-blur-md rounded-xl p-3 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-primary font-bold">
                  Verified clinician
                </span>
                <MaterialIcon
                  name="verified"
                  className="text-secondary text-[20px]"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <div className="w-10 h-10 rounded-full bg-secondary-container/40 text-secondary flex items-center justify-center">
              <MaterialIcon name="format_quote" className="text-[24px]" />
            </div>

            <blockquote
              key={item.doctor}
              className={`animate-hero-fade-up text-[clamp(1.1rem,2vw,1.5rem)] font-medium leading-snug tracking-[-0.01em] text-primary whitespace-pre-line ${
                isLong && !isExpanded ? "line-clamp-4" : ""
              }`}
            >
              “{item.quote}”
            </blockquote>

            {isLong ? (
              <button
                type="button"
                onClick={() => setExpandedFor(isExpanded ? null : active)}
                aria-expanded={isExpanded}
                className="inline-flex items-center gap-1.5 font-label-sm text-label-sm font-bold uppercase tracking-wider text-secondary transition-colors hover:text-primary"
              >
                {isExpanded ? "Show less" : "Read full testimonial"}
                <MaterialIcon
                  name={isExpanded ? "expand_less" : "expand_more"}
                  className="text-[18px]"
                />
              </button>
            ) : null}

            <div key={`${item.doctor}-meta`} className="animate-hero-fade-in">
              <h4 className="font-title-lg text-title-lg text-primary font-bold">
                {item.doctor}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {item.role}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="px-3 py-1 rounded-full bg-secondary-container/30 text-secondary font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                  Verified clinician
                </span>
                {item.hospital
                  ? item.hospital.split(", ").map((hospital) => (
                      <span
                        key={hospital}
                        className="px-3 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm"
                      >
                        {hospital}
                      </span>
                    ))
                  : null}
              </div>
            </div>

            <div className="flex w-full flex-wrap items-center justify-between gap-4 pt-2">
              <div className="flex items-center gap-2">
                {DOCTOR_TESTIMONIALS.map((testimonial, index) => (
                  <button
                    key={testimonial.doctor}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-current={index === active}
                    className={`h-2 rounded-full transition-all ${
                      index === active
                        ? "w-8 bg-secondary"
                        : "w-2 bg-primary/20 hover:bg-primary/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(-1)}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 text-primary transition-colors hover:bg-surface-container"
                >
                  <MaterialIcon name="arrow_back" className="text-[20px]" />
                </button>
                <button
                  type="button"
                  onClick={() => go(1)}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-on-primary transition-colors hover:bg-primary-container"
                >
                  <MaterialIcon name="arrow_forward" className="text-[20px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
