import Image from "next/image";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { ROUTES } from "@/lib/site";

const STATS = [
  { label: "Natural whey", value: "100%" },
  { label: "Rich blend", value: "Peptide" },
  { label: "Added flavour", value: "0 g" },
];

export default function HeroRitual() {
  return (
    <section
      className="relative isolate flex min-h-[calc(100svh_-_7rem)] w-full overflow-hidden bg-[#a9c49a] text-[#103d19]"
      aria-labelledby="hero-ritual-title"
    >
      <Image
        src="/home-hero-1.jpeg"
        alt="Two premium Nutripak supplement bottles on a light oak table"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center lg:object-[62%_center]"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[#a9c49a]/60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#a9c49a] via-[#a9c49a]/70 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#103d19]/25 via-transparent to-[#103d19]/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035] mix-blend-multiply"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 items-center px-margin-mobile py-12 md:px-margin md:py-16">
        <div className="max-w-[560px] animate-hero-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#f6f5e9]/55 px-3.5 py-1.5 text-[9.5px] font-bold uppercase tracking-[0.15em] shadow-sm ring-1 ring-white/60 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#103d19] animate-hero-pulse" />
            New · Peptide-rich whey
          </span>

          <h1
            id="hero-ritual-title"
            className="mt-5 text-[clamp(58px,6.8vw,96px)] font-black uppercase leading-[0.78] tracking-[-0.085em] max-lg:text-[clamp(53px,16vw,90px)]"
          >
            <span className="block">Power</span>
            <span className="ml-[0.16em] block text-[#f6f5e9]">Your</span>
            <span className="ml-[0.02em] block">Everyday.</span>
          </h1>

          <p className="mt-5 max-w-[360px] font-body-md text-body-md opacity-80 max-lg:mt-4">
            Peptide-rich whey protein for faster absorption, lean strength and
            recovery that keeps up with you — unflavoured, so it fits any
            routine.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2.5">
            <Link
              href={ROUTES.product("proteios")}
              className="group inline-flex items-center gap-3 rounded-full bg-[#103d19] py-1.5 pl-5 pr-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#f6f5e9] shadow-[0_20px_40px_-22px_rgba(16,61,25,0.85)] transition-all hover:-translate-y-0.5 hover:bg-[#0b2f13]"
            >
              Shop PROTEIOS
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#f6f5e9]/10 transition-transform group-hover:translate-x-0.5">
                <MaterialIcon name="arrow_forward" className="text-[16px]" />
              </span>
            </Link>
            <Link
              href={ROUTES.shop}
              className="group inline-flex items-center gap-2 rounded-full border border-[#103d19]/20 bg-[#f6f5e9]/20 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] backdrop-blur-sm transition-colors hover:bg-[#f6f5e9]/40"
            >
              Explore the range
              <MaterialIcon
                name="north_east"
                className="text-[16px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          <div className="mt-5 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-white/40 bg-[#f6f5e9]/25 px-3 py-1.5 backdrop-blur-sm">
            <div className="flex items-center gap-0.5 text-[#a36a12]">
              {[0, 1, 2, 3, 4].map((star) => (
                <MaterialIcon
                  key={star}
                  name="star"
                  fill
                  className="text-[14px]"
                />
              ))}
            </div>
            <span className="text-[10px] font-medium opacity-70">
              4.9/5 from 12,500+ routines
            </span>
          </div>

          <dl className="mt-5 grid w-full max-w-[410px] grid-cols-3 divide-x divide-[#103d19]/10 rounded-2xl border border-white/40 bg-[#f6f5e9]/25 px-1 py-3.5 backdrop-blur-sm">
            {STATS.map((stat) => (
              <div key={stat.label} className="px-3">
                <dt className="text-[7.5px] font-bold uppercase tracking-[0.12em] opacity-55">
                  {stat.label}
                </dt>
                <dd className="mt-1.5 text-[18px] font-black leading-none tracking-[-0.04em]">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div
        className="absolute bottom-[25px] right-[30px] hidden items-center gap-2 rounded-full border border-[#103d19]/15 bg-[#f6f5e9]/20 px-3 py-1.5 text-[8.5px] font-bold uppercase tracking-[0.14em] opacity-70 backdrop-blur-sm md:flex"
        aria-hidden="true"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#103d19] animate-hero-pulse" />
        Scroll
        <span className="h-px w-6 bg-[#103d19]/40" />
      </div>
    </section>
  );
}
