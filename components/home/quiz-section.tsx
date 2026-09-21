"use client";

import { useState } from "react";

import MaterialIcon from "@/components/material-icon";

interface QuizOption {
  emoji: string;
  title: string;
  description: string;
}

const QUIZ_OPTIONS: QuizOption[] = [
  { emoji: "⚡", title: "All-Day Energy", description: "Prevent midday slumps" },
  { emoji: "🌙", title: "Restorative Sleep", description: "Fall asleep faster" },
  {
    emoji: "🛡️",
    title: "Immune Defense",
    description: "Year-round resilience",
  },
  {
    emoji: "✨",
    title: "Skin Radiance",
    description: "Collagen & hydration",
  },
];

const STEPS = [
  { step: "01. GOALS", title: "Share Needs" },
  { step: "02. HABITS", title: "Diet & Rhythm" },
  { step: "03. NUTRIPAK", title: "Daily Sachets" },
];

export default function QuizSection() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section
      className="w-full bg-primary text-on-primary py-16 md:py-24 px-margin-mobile md:px-margin relative overflow-hidden"
      id="quiz-section"
    >
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
            SMART FORMULATION SYSTEM
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-normal leading-tight">
            Not sure where to begin? <br />
            <span className="italic text-primary-fixed">We do the science for you.</span>
          </h2>
          <p className="font-body-lg text-body-lg text-on-primary/80">
            Answer a quick series of lifestyle, sleep, and nutritional
            questions. Our algorithmic clinical engine builds your custom daily
            sachet with zero guesswork.
          </p>

          <div className="grid grid-cols-3 gap-4 w-full pt-4">
            {STEPS.map((item) => (
              <div key={item.step} className="flex flex-col gap-1">
                <span className="font-label-sm text-label-sm text-secondary-fixed">
                  {item.step}
                </span>
                <span className="font-title-md text-title-md text-white">
                  {item.title}
                </span>
              </div>
            ))}
          </div>

          <button
            className="mt-4 inline-flex items-center gap-3 rounded-full bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed px-8 py-4 font-label-md text-label-md font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105"
            type="button"
          >
            <span>Take the 2-Minute Quiz (Save 20%)</span>
            <MaterialIcon name="psychology" className="text-[18px]" />
          </button>
        </div>

        <div className="lg:col-span-6">
          <div className="bg-surface-container-lowest text-on-surface rounded-3xl p-6 md:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                  QUESTION 1 OF 5
                </span>
              </div>
              <span className="font-caption text-caption text-on-surface-variant">
                Takes ~120 seconds
              </span>
            </div>

            <h3 className="font-headline-sm text-headline-sm text-primary mb-6">
              What is your primary wellness priority right now?
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              {QUIZ_OPTIONS.map((option, index) => {
                const isSelected = selected === index;
                return (
                  <button
                    key={option.title}
                    className={`flex items-center gap-3 p-4 rounded-2xl text-left transition-all ${
                      isSelected
                        ? "bg-secondary-container text-on-secondary-fixed"
                        : "bg-surface-container-low hover:bg-secondary-container/20"
                    }`}
                    onClick={() => setSelected(index)}
                    type="button"
                  >
                    <span className="text-xl">{option.emoji}</span>
                    <div>
                      <strong className="font-title-md text-title-md block text-primary">
                        {option.title}
                      </strong>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {option.description}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4">
              <div className="w-1/2 bg-surface-container rounded-full h-2 overflow-hidden">
                <div className="bg-secondary h-full rounded-full w-1/5 transition-all duration-300"></div>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                Step 1 of 5
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}