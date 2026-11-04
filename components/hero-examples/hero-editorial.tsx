import Image from "next/image";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import Parallax from "@/components/hero-examples/parallax";
import Reveal from "@/components/hero-examples/reveal";
import { ROUTES } from "@/lib/site";

const STATS = [
  { label: "Natural whey", value: "100%" },
  { label: "Rich blend", value: "Peptide" },
  { label: "Added flavour", value: "0 g" },
];

const MARQUEE_WORDS = [
  "Peptide-rich whey",
  "Rapid absorption",
  "Lean strength",
  "MPS support",
  "Unflavoured",
  "Fits any routine",
];

export default function HeroEditorial() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-[#f3f1e7] text-[#103d19]"
      aria-labelledby="hero-editorial-title"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-70 [background-image:linear-gradient(rgba(16,61,25,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(16,61,25,0.06)_1px,transparent_1px)] [background-size:96px_96px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_76%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 -top-20 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(199,232,132,0.55),transparent_66%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-20 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(16,61,25,0.12),transparent_66%)] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05] mix-blend-multiply"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-margin-mobile py-10 md:px-margin md:py-14">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#103d19]/15 pb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-[#103d19]/55">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#103d19] animate-hero-pulse" />
            PROTEIOS · Peptide-rich whey
          </span>
          <span>Unflavoured · Everyday</span>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 lg:grid-cols-12">
          <Parallax
            className="group relative isolate min-h-[480px] overflow-hidden rounded-[2.5rem] bg-[#08231c] shadow-[0_60px_140px_-60px_rgba(0,46,40,0.7)] lg:col-span-7 lg:row-span-2 lg:min-h-[620px]"
            strength={12}
          >
            <div className="parallax-layer absolute inset-0">
              <Image
                src="/home-hero-1.jpeg"
                alt="Two premium Nutripak supplement bottles on a light oak table"
                fill
                sizes="(max-width: 1024px) 92vw, 760px"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08231c] via-[#08231c]/25 to-[#08231c]/10" />
              <div className="absolute inset-0 bg-grain opacity-[0.1] mix-blend-overlay" />

              <span
                className="pointer-events-none absolute right-2 top-16 hidden select-none text-[8rem] font-black leading-none text-transparent sm:block lg:text-[9.5rem]"
                style={{ WebkitTextStroke: "1.5px rgba(199,232,132,0.4)" }}
                aria-hidden="true"
              >
                01
              </span>

              <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c7e884] animate-hero-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                  PROTEIOS · No. 01
                </span>
              </div>

              <div className="absolute right-4 top-4 hidden items-center gap-2.5 rounded-full border border-white/15 bg-white/10 py-1.5 pl-1.5 pr-4 backdrop-blur-md sm:flex">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#c7e884] text-[#0d2b22]">
                  <MaterialIcon
                    name="bolt"
                    fill
                    className="text-[16px]"
                  />
                </span>
                <div>
                  <p className="text-[7.5px] font-bold uppercase tracking-[0.16em] text-[#c7e884]">
                    Rapid absorption
                  </p>
                  <p className="text-[10px] leading-tight text-white/60">
                    Peptide rich
                  </p>
                </div>
              </div>

              <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#c7e884]">
                    Peptide-rich whey
                  </p>
                  <p className="mt-1 font-display-hero text-[2.6rem] leading-none text-white lg:text-[3.1rem]">
                    PROTEIOS
                  </p>
                </div>

                <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-md">
                  <div className="flex items-center gap-0.5 text-[#e8b45a]">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <MaterialIcon
                        key={star}
                        name="star"
                        fill
                        className="text-[12px]"
                      />
                    ))}
                  </div>
                  <span className="text-[9.5px] text-white/75">
                    4.9/5 from 12,500+ routines
                  </span>
                </div>
              </div>
            </div>
          </Parallax>

          <Reveal className="lg:col-span-5" delay={60}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-[2.5rem] bg-[#c7e884] p-7 text-[#0d2b22] md:p-9">
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full border border-[#0d2b22]/10"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-white/30 blur-2xl"
                aria-hidden="true"
              />

              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#0d2b22]/15 bg-white/35 px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-[0.14em]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#0d2b22] animate-hero-pulse" />
                  New · Peptide-rich whey
                </span>

                <h1
                  id="hero-editorial-title"
                  className="mt-5 text-[clamp(2.4rem,4.2vw,3.7rem)] font-black leading-[0.92] tracking-[-0.05em]"
                >
                  Power your{" "}
                  <span className="font-display-hero font-normal italic tracking-normal">
                    everyday.
                  </span>
                </h1>

                <p className="mt-4 max-w-[360px] font-body-md text-body-md text-[#0d2b22]/75">
                  Peptide-rich whey protein for faster absorption, lean strength
                  and recovery that keeps up with you — unflavoured, so it fits
                  any routine.
                </p>
              </div>

              <div className="relative mt-6 flex flex-wrap items-center gap-2.5">
                <Link
                  href={ROUTES.product("proteios")}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#0d2b22] py-1.5 pl-5 pr-1.5 text-[10px] font-bold uppercase tracking-[0.1em] text-[#f6f5e9] shadow-[0_20px_40px_-22px_rgba(13,43,34,0.9)] transition-all hover:-translate-y-0.5 hover:bg-[#08231c]"
                >
                  Shop PROTEIOS
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white/10 transition-transform group-hover:translate-x-0.5">
                    <MaterialIcon
                      name="arrow_forward"
                      className="text-[16px]"
                    />
                  </span>
                </Link>
                <Link
                  href={ROUTES.shop}
                  className="group inline-flex items-center gap-2 rounded-full border border-[#0d2b22]/25 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.1em] transition-colors hover:bg-white/30"
                >
                  Explore the range
                  <MaterialIcon
                    name="north_east"
                    className="text-[16px] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-5" delay={120}>
            <div className="flex h-full flex-col justify-between rounded-[2.5rem] border border-[#103d19]/10 bg-white/55 p-5 shadow-sm backdrop-blur-md">
              <div className="flex items-center justify-between">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#103d19]/55">
                  The numbers
                </p>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#103d19] text-[#f6f5e9]">
                  <MaterialIcon name="science" className="text-[16px]" />
                </span>
              </div>

              <dl className="mt-4 grid grid-cols-3 gap-2">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.4rem] bg-[#f6f5e9]/80 px-4 py-4 ring-1 ring-white/70"
                  >
                    <dt className="text-[7.5px] font-bold uppercase tracking-[0.12em] opacity-55">
                      {stat.label}
                    </dt>
                    <dd className="mt-2 text-[clamp(1.4rem,2vw,2rem)] font-black leading-none tracking-[-0.05em]">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="mt-4 text-[10px] font-medium text-[#103d19]/55">
                Unflavoured · Fits any routine.
              </p>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative overflow-hidden border-y border-[#103d19]/10 bg-[#08231c] py-4">
        <div className="flex w-max animate-marquee items-center">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-6 pr-6"
            >
              {MARQUEE_WORDS.map((word) => (
                <span
                  key={word}
                  className="flex items-center gap-6 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.22em] text-[#f6f5e9]/60"
                >
                  {word}
                  <MaterialIcon
                    name="asterisk"
                    className="text-[13px] text-[#c7e884]"
                  />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
