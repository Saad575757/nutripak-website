import Image from "next/image";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import Reveal from "@/components/hero-examples/reveal";
import { Cta, Pill, Rating } from "@/components/hero-examples/ui";
import { formatPkr } from "@/lib/shop";
import { HERO_IMAGE, ROUTES } from "@/lib/site";

const STATS = [
  { value: "100%", label: "Natural whey" },
  { value: "Peptide", label: "Rich blend" },
  { value: "0 g", label: "Added flavour" },
];

const TICKER = [
  "Peptide-rich whey",
  "Unflavoured",
  "Made for everyday",
  "Lean strength",
  "Fast absorption",
];

export default function HeroLumen() {
  return (
    <section
      className="relative isolate flex min-h-[calc(100svh_-_7rem)] w-full flex-col overflow-hidden bg-[#f1ecdf] text-[#0d2f22]"
      aria-labelledby="hero-lumen-title"
    >
      <Image
        src={HERO_IMAGE}
        alt="Two premium Nutripak supplement bottles on a light oak table"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center lg:object-[66%_center]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[#f1ecdf]/72"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f1ecdf] via-[#f1ecdf]/88 to-[#f1ecdf]/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#f1ecdf] via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 flex-col px-margin-mobile py-8 md:px-margin md:py-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0d2f22]/15 pb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#0d2f22]/55">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            NUTRIPAK · PROTEIOS
          </span>
          <span>No. 01 / Everyday fuel</span>
        </div>

        <div className="grid flex-1 grid-cols-1 items-center gap-10 py-10 lg:grid-cols-12 lg:gap-8">
          <div className="flex flex-col items-start lg:col-span-8">
            <Reveal>
              <Pill tone="cream">New · Peptide-rich whey</Pill>
            </Reveal>

            <Reveal delay={80}>
              <h1
                id="hero-lumen-title"
                className="mt-6 max-w-[11ch] text-[clamp(3.2rem,6.6vw,6.2rem)] font-black leading-[0.86] tracking-[-0.06em]"
              >
                Power your{" "}
                <span className="font-display-hero font-normal italic tracking-normal text-secondary">
                  everyday.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl font-body-lg text-body-lg text-[#0d2f22]/65">
                Peptide-rich whey protein for faster absorption, lean strength
                and recovery that keeps up with you — unflavoured, so it fits any
                routine.
              </p>
            </Reveal>

            <Reveal delay={240} className="w-full">
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Cta href={ROUTES.product("proteios")} tone="teal">
                  Shop PROTEIOS
                </Cta>
                <Cta
                  href={ROUTES.shop}
                  tone="outline"
                  icon="north_east"
                  className="border-[#0d2f22]/25 bg-transparent text-[#0d2f22] hover:bg-[#0d2f22]/5"
                >
                  Explore the range
                </Cta>
              </div>
            </Reveal>

            <Reveal delay={320} className="w-full">
              <div className="mt-8">
                <Rating />
              </div>
            </Reveal>
          </div>

          <Reveal
            className="relative hidden lg:col-span-3 lg:col-start-10 lg:block"
            delay={140}
          >
            <div className="rounded-[1.75rem] border border-[#0d2f22]/15 bg-[#f1ecdf]/80 p-6 shadow-[0_40px_100px_-55px_rgba(13,47,34,0.75)] backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-[#0d2f22]/50">
                  The formula
                </span>
                <span className="h-2 w-2 rounded-full bg-secondary" />
              </div>

              <p className="mt-5 font-display-hero text-[2.55rem] leading-none tracking-[-0.03em]">
                PROTEIOS
              </p>
              <p className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#0d2f22]/45">
                Peptide-rich whey
              </p>

              <dl className="mt-6 space-y-3">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-baseline justify-between gap-3 border-b border-[#0d2f22]/10 pb-2.5 last:border-0 last:pb-0"
                  >
                    <dt className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#0d2f22]/45">
                      {stat.label}
                    </dt>
                    <dd className="text-[15px] font-black leading-none tracking-[-0.03em]">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-5 flex items-end justify-between gap-4 border-t border-[#0d2f22]/10 pt-5">
                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.16em] text-[#0d2f22]/45">
                    From
                  </p>
                  <p className="mt-1 text-[22px] font-black leading-none tracking-[-0.04em]">
                    {formatPkr(2800)}
                  </p>
                </div>
                <Link
                  href={ROUTES.product("proteios")}
                  className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 font-label-sm text-[10px] uppercase tracking-wider text-on-primary transition-transform hover:-translate-y-0.5"
                >
                  Add
                  <MaterialIcon name="add" className="text-[16px]" />
                </Link>
              </div>

              <div className="mt-5">
                <Rating label="4.9/5 from 12,500+ routines" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden bg-[#0d2f22] text-[#f1ecdf]">
        <div className="flex w-max animate-marquee items-center gap-8 py-3">
          {[...TICKER, ...TICKER].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center gap-8 whitespace-nowrap font-label-sm text-[9px] uppercase tracking-[0.22em]"
            >
              {item}
              <span className="h-1 w-1 rounded-full bg-[#f1ecdf]/40" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
