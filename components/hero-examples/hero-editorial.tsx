import Image from "next/image";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
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
      className="relative isolate w-full overflow-hidden bg-[#08231c] text-[#f6f5e9]"
      aria-labelledby="hero-editorial-title"
    >
      <Image
        src="/home-hero-1.jpeg"
        alt="Two premium Nutripak supplement bottles on a light oak table"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[#103d19]/60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#08231c]/95 via-[#103d19]/55 to-[#08231c]/85"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(199,232,132,0.22),transparent_36%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.06] mix-blend-overlay"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh_-_7rem)] w-full max-w-[1320px] flex-col px-margin-mobile py-10 md:px-margin md:py-14">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/15 pb-4 text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c7e884] animate-hero-pulse" />
            PROTEIOS · Peptide-rich whey
          </span>
          <span>Unflavoured · Everyday</span>
        </div>

        <div className="mt-6 grid flex-1 grid-cols-1 items-stretch gap-4 lg:grid-cols-12">
          <div className="order-2 flex flex-col justify-between gap-10 py-2 lg:order-none lg:col-span-6">
            <div className="hidden w-fit items-center gap-2.5 rounded-full border border-white/15 bg-white/10 py-1.5 pl-1.5 pr-4 backdrop-blur-md sm:flex">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#c7e884] text-[#0d2b22]">
                <MaterialIcon name="bolt" fill className="text-[16px]" />
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

            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-[#c7e884]">
                Peptide-rich whey
              </p>
              <p className="mt-2 font-display-hero text-[3.2rem] leading-none text-white lg:text-[4.2rem]">
                PROTEIOS
              </p>

              <div className="mt-5 inline-flex flex-wrap items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 backdrop-blur-md">
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

          <div className="order-1 flex flex-col gap-3 lg:order-none lg:col-span-5 lg:col-start-8">
            <Reveal delay={60}>
              <div className="relative overflow-hidden rounded-[2.5rem] bg-[#c7e884] p-7 text-[#0d2b22] shadow-[0_40px_100px_-50px_rgba(0,0,0,0.8)] md:p-9">
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
                    Peptide-rich whey protein for faster absorption, lean
                    strength and recovery that keeps up with you — unflavoured,
                    so it fits any routine.
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

            <Reveal delay={120}>
              <div className="flex flex-col justify-between rounded-[2.5rem] border border-white/15 bg-white/10 p-5 shadow-sm backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/55">
                    The numbers
                  </p>
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-[#c7e884] text-[#0d2b22]">
                    <MaterialIcon name="science" className="text-[16px]" />
                  </span>
                </div>

                <dl className="mt-4 grid grid-cols-3 gap-2">
                  {STATS.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-[1.4rem] bg-[#f6f5e9]/90 px-4 py-4 text-[#103d19] ring-1 ring-white/70"
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

                <p className="mt-4 text-[10px] font-medium text-white/60">
                  Unflavoured · Fits any routine.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      <div className="relative z-10 overflow-hidden border-t border-white/10 bg-[#08231c]/80 py-4 backdrop-blur-sm">
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
