import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import Reveal from "@/components/hero-examples/reveal";
import { Cta, Pill, Rating } from "@/components/hero-examples/ui";
import { HERO_IMAGE, ROUTES } from "@/lib/site";

const STATS = [
  { value: "100%", label: "Natural whey" },
  { value: "Peptide", label: "Rich blend" },
  { value: "0 g", label: "Added flavour" },
];

export default function HeroBold() {
  return (
    <section
      className="relative isolate flex min-h-[calc(100svh_-_7rem)] w-full flex-col overflow-hidden bg-[#04241f] text-white"
      aria-labelledby="hero-bold-title"
    >
      <Image
        src={HERO_IMAGE}
        alt="Two premium Nutripak supplement bottles on a light oak table"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[#04241f]/72"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(11,107,90,0.55)_0%,transparent_62%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04241f] via-transparent to-[#04241f]/40"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 flex-col px-margin-mobile py-8 md:px-margin md:py-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary-container animate-hero-pulse" />
            NUTRIPAK · PROTEIOS
          </span>
          <span>No. 01 / Everyday fuel</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-14 text-center md:py-20">
          <Reveal>
            <Pill tone="light">New · Peptide-rich whey</Pill>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-bold-title"
              className="mx-auto mt-7 max-w-[14ch] text-balance text-[clamp(3.4rem,8vw,7.2rem)] font-black leading-[0.86] tracking-[-0.06em]"
            >
              Power your{" "}
              <span className="font-display-hero font-normal italic tracking-normal text-secondary-container">
                everyday.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mx-auto mt-7 max-w-2xl text-balance font-body-lg text-body-lg text-white/65">
              Peptide-rich whey protein for faster absorption, lean strength and
              recovery that keeps up with you — unflavoured, so it fits any
              routine.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Cta href={ROUTES.product("proteios")} tone="lime">
                Shop PROTEIOS
              </Cta>
              <Cta
                href={ROUTES.shop}
                tone="outline"
                icon="north_east"
                className="border-white/25 bg-white/5 text-white backdrop-blur-md hover:bg-white/10"
              >
                Explore the range
              </Cta>
            </div>
          </Reveal>
        </div>

        <Reveal delay={320} className="w-full">
          <div className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-5 rounded-[1.6rem] border border-white/15 bg-white/[0.08] p-4 shadow-[0_50px_120px_-60px_rgba(0,0,0,0.95)] backdrop-blur-2xl md:grid-cols-[1fr_auto] md:items-center md:gap-10 md:p-5">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4 md:justify-start md:border-0 md:pb-0">
              <Rating tone="light" label="4.9/5 from 12,500+ routines" />
            </div>

            <dl className="grid grid-cols-3 divide-x divide-white/10">
              {STATS.map((stat) => (
                <div key={stat.label} className="px-4 first:pl-0 last:pr-0">
                  <dt className="text-[7.5px] font-bold uppercase tracking-[0.11em] text-white/40">
                    {stat.label}
                  </dt>
                  <dd className="mt-1.5 text-[16px] font-black leading-none tracking-[-0.04em] text-secondary-container">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-[#04241f]/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-center justify-center gap-x-8 gap-y-3 px-margin-mobile py-4 text-center md:px-margin md:justify-between">
          {[
            "Clinically guided formulation",
            "Quality ingredients",
            "Sealed for freshness",
            "Free shipping across Pakistan",
          ].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-wider text-white/55"
            >
              <MaterialIcon
                name="check_circle"
                className="text-[16px] text-secondary-container"
              />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
