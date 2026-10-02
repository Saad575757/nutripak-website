"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import MaterialIcon from "@/components/material-icon";

/** Time on screen before the veil wipes away. */
const HOLD_MS = 2500;
/** Duration of the wipe, and of the gap before the overlay unmounts. */
const EXIT_MS = 700;

const HEADLINE = ["Better nutrition.", "Built around you."];

const PRODUCTS = ["PROTEIOS", "ADA-Glu", "SUBSET"];

type IntroPhase = "hidden" | "playing" | "leaving";

/**
 * Module scope, not component state. It resets on every document load — so
 * opening or reloading the homepage always plays the intro — but survives
 * client-side navigation, so heading home from another page does not replay it.
 */
let hasPlayedThisDocument = false;

export default function HomepageIntro() {
  const [phase, setPhase] = useState<IntroPhase>("hidden");
  const timers = useRef<{ hold: number; unmount: number } | null>(null);

  /**
   * Resolved once per mount. StrictMode double-invokes effects in dev, so
   * deciding inside the effect would consume the module flag on the first pass
   * and skip the intro on the second.
   */
  const shouldPlay = useRef<boolean | null>(null);

  const clearTimers = useCallback(() => {
    if (!timers.current) return;
    window.clearTimeout(timers.current.hold);
    window.clearTimeout(timers.current.unmount);
    timers.current = null;
  }, []);

  useEffect(() => {
    if (shouldPlay.current === null) {
      const override = new URLSearchParams(window.location.search).get("intro");
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (override === "0") shouldPlay.current = false;
      else if (override === "1") shouldPlay.current = true;
      else if (reduced) shouldPlay.current = false;
      else {
        shouldPlay.current = !hasPlayedThisDocument;
        if (shouldPlay.current) hasPlayedThisDocument = true;
      }
    }

    if (!shouldPlay.current) return;

    // Start on the next frame so the first paint is an un-animated veil.
    const frame = window.requestAnimationFrame(() => {
      setPhase("playing");
      timers.current = {
        hold: window.setTimeout(() => setPhase("leaving"), HOLD_MS),
        unmount: window.setTimeout(
          () => setPhase("hidden"),
          HOLD_MS + EXIT_MS,
        ),
      };
    });

    return () => {
      window.cancelAnimationFrame(frame);
      clearTimers();
    };
  }, [clearTimers]);

  // Hold the page still while the veil is up.
  useEffect(() => {
    if (phase === "hidden") return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [phase]);

  const skip = useCallback(() => {
    clearTimers();
    setPhase((current) =>
      current === "playing"
        ? "leaving"
        : current === "leaving"
          ? current
          : current,
    );
    timers.current = {
      hold: 0,
      unmount: window.setTimeout(() => setPhase("hidden"), EXIT_MS),
    };
  }, [clearTimers]);

  useEffect(() => {
    if (phase === "hidden") return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") skip();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [phase, skip]);

  if (phase === "hidden") return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-primary text-on-primary flex flex-col justify-between px-margin-mobile md:px-margin py-8 md:py-12 ${
        // Mutually exclusive: two animation utilities on one element would
        // collide, since the later rule in the sheet wins.
        phase === "playing"
          ? "animate-intro-veil"
          : phase === "leaving"
            ? "animate-intro-exit"
            : ""
      }`}
      onClick={skip}
    >
      <div
        className="flex items-center justify-between animate-intro-fade"
        style={{ animationDelay: "80ms" }}
      >
        <span className="font-label-md text-label-md font-bold uppercase tracking-[0.42em] text-secondary-container">
          Nutripak
        </span>
        <button
          className="inline-flex items-center gap-1.5 font-label-sm text-label-sm uppercase tracking-widest text-on-primary/70 hover:text-secondary-container transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary-container"
          onClick={skip}
          type="button"
        >
          <span>Skip</span>
          <MaterialIcon name="close" className="text-[16px]" />
        </button>
      </div>

      <p className="flex flex-col">
        {HEADLINE.map((line, index) => (
          <span className="block overflow-hidden pb-[0.08em]" key={line}>
            <span
              className="block font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary font-normal leading-[0.95] tracking-tight animate-intro-line"
              style={{ animationDelay: `${220 + index * 130}ms` }}
            >
              {line}
            </span>
          </span>
        ))}
      </p>

      <div className="flex flex-col gap-5">
        <ul
          className="flex flex-wrap items-center gap-x-6 gap-y-2 animate-intro-fade"
          style={{ animationDelay: "760ms" }}
        >
          {PRODUCTS.map((product) => (
            <li
              className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-on-primary/60"
              key={product}
            >
              {product}
            </li>
          ))}
        </ul>

        <div className="h-px w-full bg-on-primary/15 overflow-hidden">
          <div
            className="h-px w-full origin-left bg-secondary-container animate-intro-sweep"
            style={{ animationDelay: "260ms" }}
          />
        </div>
      </div>
    </div>
  );
}