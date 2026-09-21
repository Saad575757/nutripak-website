"use client";

import { useState } from "react";

import MaterialIcon from "@/components/material-icon";

const QUICK_ACTIONS = [
  { emoji: "⚡", label: "Steady Energy" },
  { emoji: "🌙", label: "Deep Sleep" },
  { emoji: "🧪", label: "Check Ingredients" },
];

export default function AiAssistant() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {open && (
        <div className="w-80 max-w-[calc(100vw-3rem)] bg-surface-container-lowest rounded-2xl shadow-2xl p-4 flex flex-col gap-3 transition-all">
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <span className="font-title-md text-title-md text-primary font-bold">
                Nutripak Health AI
              </span>
            </div>
            <button
              className="text-on-surface-variant hover:text-on-surface transition-colors"
              onClick={() => setOpen(false)}
              type="button"
              aria-label="Close AI assistant"
            >
              <MaterialIcon name="close" className="text-[18px]" />
            </button>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant bg-surface-container-low p-3 rounded-xl">
            Hi! I am your clinical routine advisor. What wellness milestone are
            you targeting this month?
          </p>
          <div className="flex flex-wrap gap-1.5">
            {QUICK_ACTIONS.map((action) => (
              <button
                key={action.label}
                className="px-2.5 py-1 rounded-full bg-surface-container hover:bg-surface-container-high text-primary font-caption text-caption transition-colors"
                type="button"
              >
                {action.emoji} {action.label}
              </button>
            ))}
          </div>
        </div>
      )}
      <button
        aria-label="Open AI Health Assistant"
        className="pointer-events-auto w-14 h-14 rounded-full bg-primary text-on-primary shadow-[0_4px_12px_rgba(15,23,42,0.15),0_20px_32px_-6px_rgba(15,23,42,0.2)] flex items-center justify-center hover:bg-primary-container transition-transform hover:scale-105 active:scale-95 group"
        type="button"
        onClick={() => setOpen((value) => !value)}
      >
        <span
          className={`material-symbols-outlined text-[26px] text-secondary-container transition-transform group-hover:rotate-12 ${
            open ? "rotate-12" : ""
          }`}
        >
          smart_toy
        </span>
      </button>
    </div>
  );
}