import Image from "next/image";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { ROUTES } from "@/lib/site";

const BENEFITS = [
  {
    value: "100%",
    label: "natural whey",
    position: "right-[19%] top-[4%] animate-hero-float",
  },
  {
    value: "Peptide",
    label: "rich blend",
    position: "left-[4%] top-[29%] animate-hero-float-slow",
  },
  {
    value: "0 g",
    label: "added flavour",
    position: "left-0 bottom-[11%] animate-hero-float",
  },
];

const STATS = [
  { label: "Natural whey", value: "100%" },
  { label: "Rich blend", value: "Peptide" },
  { label: "Added flavour", value: "0 g" },
];

export default function HeroRitual() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#a9c49a] px-[30px] pb-20 pt-20 text-[#103d19] max-lg:px-4 max-lg:pb-7 max-lg:pt-4"
      aria-labelledby="hero-ritual-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(246,245,233,0.14),transparent_44%,rgba(16,61,25,0.14))]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_32%_38%,rgba(246,245,233,0.42),transparent_52%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_88%_92%,rgba(16,61,25,0.16),transparent_38%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-grain opacity-[0.035] mix-blend-multiply"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col">
        <div className="relative grid w-full grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-0">
          <div
            id="ritual-stage"
            className="relative w-[min(50vw,680px)] animate-hero-fade-up justify-self-center self-center max-lg:order-2 max-lg:h-[42vh] max-lg:min-h-[330px] max-lg:w-[min(100%,500px)] lg:h-[min(56vh,580px)] lg:min-h-[430px]"
            style={{ animationDelay: "0.24s" }}
          >
            <div
              className="absolute left-[1%] top-[15%] z-[3] flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#103d19]/70 max-lg:left-[2%] max-lg:text-[8px]"
              aria-hidden="true"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#103d19]/60" />
              Daily nutrition
              <span className="h-px w-8 bg-[#103d19]/25 max-lg:w-5" />
            </div>

            <div
              className="absolute left-[7%] top-[-3%] aspect-square w-[82%] rounded-full border border-dashed border-[#f6f5e9]/45 animate-hero-spin max-lg:hidden"
              aria-hidden="true"
            />
            <div
              className="absolute left-[12%] top-[1%] aspect-square w-[74%] rounded-full border-[9px] border-[#f6f5e9] shadow-[inset_0_0_0_1px_rgba(16,61,25,0.05),0_38px_80px_-48px_rgba(16,61,25,0.65)] max-lg:border-[7px]"
              aria-hidden="true"
            />

            {BENEFITS.map((benefit) => (
              <div
                key={benefit.value}
                className={`absolute z-[3] flex aspect-square w-[92px] flex-col items-center justify-center rounded-full bg-[#f6f5e9]/80 text-center leading-[0.95] text-[#103d19] shadow-[0_18px_36px_-22px_rgba(16,61,25,0.45)] ring-1 ring-white/60 backdrop-blur-md max-lg:w-[73px] ${benefit.position}`}
              >
                <strong className="text-[19px] font-black tracking-[-0.06em] max-lg:text-[15px]">
                  {benefit.value}
                </strong>
                <span className="mt-1 text-[7px] font-bold uppercase tracking-[0.08em] opacity-60 max-lg:text-[6.5px]">
                  {benefit.label}
                </span>
              </div>
            ))}

            <div className="absolute left-1/2 top-[5%] z-[2] aspect-square w-[66%] -translate-x-1/2 overflow-hidden rounded-full shadow-[0_30px_60px_-30px_rgba(16,61,25,0.45)] ring-1 ring-[#103d19]/10">
              <Image
                src="/home-hero-1.jpeg"
                alt="Two premium Nutripak supplement bottles on a light oak table"
                fill
                priority
                sizes="(max-width: 1024px) 52vw, 450px"
                className="object-cover"
              />
            </div>
          </div>

          <div
            className="relative z-20 w-full max-w-[500px] animate-hero-fade-up px-[4%] max-lg:order-1 max-lg:w-full max-lg:max-w-[520px] max-lg:px-1 lg:self-center lg:pl-[4%] lg:pr-[7%]"
            style={{ animationDelay: "0.1s" }}
          >
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

            {/* <div className="mt-5 inline-flex flex-wrap items-center gap-2.5 rounded-full border border-white/40 bg-[#f6f5e9]/25 px-3 py-1.5 backdrop-blur-sm">
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
            </div> */}

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
