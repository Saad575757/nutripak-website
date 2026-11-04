"use client";

import { useState, type ComponentType } from "react";

import HeroBold from "@/components/hero-examples/hero-bold";
import HeroEditorial from "@/components/hero-examples/hero-editorial";
import HeroRitual from "@/components/hero-examples/hero-ritual";

interface HeroExample {
  id: string;
  name: string;
  tag: string;
  note: string;
  component: ComponentType;
}

const HEROES: HeroExample[] = [
  {
    id: "pulse",
    name: "Pulse",
    tag: "Bold split · Pepsi-inspired",
    note: "High-energy dark hero with oversized type, a rotating halo and a floating product.",
    component: HeroBold,
  },
  {
    id: "ritual",
    name: "Ritual",
    tag: "Matcha reference · editorial poster",
    note: "Sage poster hero with a giant wordmark, ringed product stage and floating benefit badges.",
    component: HeroRitual,
  },
  {
    id: "atelier",
    name: "Atelier",
    tag: "Modern bento · PROTEIOS",
    note: "Cinematic product tile, lime editorial panel and glass stat cards.",
    component: HeroEditorial,
  },
];

type ViewMode = "single" | "all";

export default function HeroShowcase() {
  const [active, setActive] = useState(0);
  const [view, setView] = useState<ViewMode>("single");

  const ActiveHero = HEROES[active].component;

  return (
    <div className="bg-surface">
      <div className="border-b border-primary/10 bg-surface-container-low">
        <div className="mx-auto max-w-[1320px] px-margin-mobile py-8 md:px-margin md:py-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="font-label-sm text-label-sm uppercase tracking-[0.22em] text-secondary">
                Design explorations
              </p>
              <h1 className="mt-2 text-[clamp(1.9rem,3.4vw,2.75rem)] font-black tracking-[-0.03em] text-primary">
                Hero section concepts
              </h1>
              <p className="mt-2 max-w-xl font-body-md text-body-md text-on-surface-variant">
                Three premium directions inspired by the references — bold
                energy, quiet ritual, and editorial nutrition. Preview each on
                its own or compare them stacked.
              </p>
            </div>

            <div className="inline-flex w-fit rounded-full bg-surface-container p-1">
              {(
                [
                  { value: "single", label: "One at a time" },
                  { value: "all", label: "Stack all" },
                ] as const
              ).map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setView(option.value)}
                  className={`rounded-full px-4 py-2 font-label-sm text-label-sm uppercase tracking-wider transition-colors ${
                    view === option.value
                      ? "bg-primary text-on-primary shadow-sm"
                      : "text-on-surface-variant hover:text-primary"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {view === "single" ? (
            <div
              role="tablist"
              aria-label="Hero concepts"
              className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {HEROES.map((hero, index) => {
                const selected = index === active;
                return (
                  <button
                    key={hero.id}
                    id={`hero-tab-${hero.id}`}
                    role="tab"
                    type="button"
                    aria-selected={selected}
                    aria-controls="hero-example-panel"
                    onClick={() => setActive(index)}
                    className={`flex flex-col items-start rounded-2xl border p-4 text-left transition-all ${
                      selected
                        ? "border-secondary bg-secondary-container/20 shadow-sm"
                        : "border-primary/10 bg-surface-container-lowest hover:border-primary/25"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full font-label-sm text-[11px] ${
                          selected
                            ? "bg-secondary text-on-secondary"
                            : "bg-surface-container text-on-surface-variant"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-title-md text-title-md text-primary">
                        {hero.name}
                      </span>
                    </span>
                    <span className="mt-2 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                      {hero.tag}
                    </span>
                    <span className="mt-2 font-body-sm text-body-sm text-on-surface-variant/80">
                      {hero.note}
                    </span>
                  </button>
                );
              })}
            </div>
          ) : null}
        </div>
      </div>

      {view === "single" ? (
        <div
          id="hero-example-panel"
          role="tabpanel"
          aria-labelledby={`hero-tab-${HEROES[active].id}`}
        >
          <ActiveHero key={HEROES[active].id} />
        </div>
      ) : (
        <div className="flex flex-col">
          {HEROES.map((hero, index) => {
            const Hero = hero.component;
            return (
              <div key={hero.id}>
                <div className="flex flex-col gap-1 bg-primary px-margin-mobile py-4 text-on-primary sm:flex-row sm:items-center sm:justify-between md:px-margin">
                  <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary-container">
                    {String(index + 1).padStart(2, "0")} · {hero.name}
                  </span>
                  <span className="font-body-sm text-body-sm text-white/60">
                    {hero.tag}
                  </span>
                </div>
                <Hero />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
