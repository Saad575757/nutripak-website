import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import Parallax from "@/components/hero-examples/parallax";
import Reveal from "@/components/hero-examples/reveal";
import { Cta, Pill, Rating } from "@/components/hero-examples/ui";
import { formatPkr } from "@/lib/shop";
import { HERO_IMAGE, ROUTES } from "@/lib/site";

const STATS = [
  { value: "100%", label: "Natural whey" },
  { value: "Peptide", label: "Rich blend" },
  { value: "0 g", label: "Added flavour" },
];

export default function HeroBold() {
  return (
    <section
      className="relative isolate w-full overflow-hidden bg-[#04241f] text-white"
      aria-labelledby="hero-bold-title"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(11,107,90,0.85)_0%,transparent_48%),radial-gradient(circle_at_6%_6%,rgba(13,59,51,0.9)_0%,transparent_42%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-secondary-container/20 blur-3xl animate-hero-drift"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-14 px-margin-mobile py-16 md:px-margin md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div className="flex flex-col items-start">
          <Reveal>
            <Pill tone="light">New · Peptide-rich whey</Pill>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-bold-title"
              className="mt-6 max-w-[13ch] text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.9] tracking-[-0.045em]"
            >
              Power your{" "}
              <span className="font-display-hero font-normal italic tracking-normal text-secondary-container">
                everyday.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl font-body-lg text-body-lg text-white/70">
              Peptide-rich whey protein for faster absorption, lean strength and
              recovery that keeps up with you — unflavoured, so it fits any
              routine.
            </p>
          </Reveal>

          <Reveal delay={240} className="w-full">
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Cta href={ROUTES.product("proteios")} tone="lime">
                Shop PROTEIOS
              </Cta>
              <Cta
                href={ROUTES.shop}
                tone="outline"
                icon="north_east"
                className="text-white"
              >
                Explore the range
              </Cta>
            </div>
          </Reveal>

          <Reveal delay={320} className="w-full">
            <div className="mt-8">
              <Rating tone="light" />
            </div>
          </Reveal>

          <Reveal delay={400} className="w-full">
            <dl className="mt-8 grid w-full max-w-lg grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-6">
              {STATS.map((stat) => (
                <div key={stat.label} className="px-4 first:pl-0">
                  <dt className="font-body-sm text-body-sm uppercase tracking-widest text-white/50">
                    {stat.label}
                  </dt>
                  <dd className="mt-1 font-display-hero text-[28px] leading-none text-secondary-container">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Parallax
          className="relative mx-auto aspect-square w-full max-w-[540px]"
          strength={18}
        >
          <div className="parallax-layer relative h-full w-full">
            <div
              className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_34%_26%,rgba(174,210,84,0.42),rgba(0,105,92,0.22)_46%,transparent_72%)] blur-2xl"
              aria-hidden="true"
            />
            <div
              className="absolute inset-[2%] rounded-full border border-dashed border-white/20 animate-hero-spin"
              aria-hidden="true"
            />
            <div
              className="absolute inset-[10%] rounded-full border border-white/10"
              aria-hidden="true"
            />

            <div className="absolute inset-[15%] overflow-hidden rounded-full border border-white/15 bg-[#f2efe3] shadow-[0_45px_120px_-40px_rgba(0,0,0,0.8)]">
              <Image
                src={HERO_IMAGE}
                alt="Two premium Nutripak supplement bottles on a light oak table"
                fill
                priority
                sizes="(max-width: 1024px) 88vw, 520px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04241f]/30 via-transparent to-transparent" />
            </div>

            <div className="absolute left-0 top-[10%] flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md animate-hero-float md:-left-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-container text-on-secondary-fixed">
                <MaterialIcon name="bolt" className="text-[20px]" fill />
              </span>
              <div>
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-container">
                  Rapid absorption
                </p>
                <p className="font-body-sm text-body-sm text-white/60">
                  Peptide rich
                </p>
              </div>
            </div>

            <div className="absolute bottom-[20%] right-0 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-md animate-hero-float-slow md:-right-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-secondary-container">
                <MaterialIcon name="fitness_center" className="text-[18px]" />
              </span>
              <div>
                <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary-container">
                  MPS support
                </p>
                <p className="font-body-sm text-body-sm text-white/60">
                  Lean strength
                </p>
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 flex w-[min(100%,19rem)] -translate-x-1/2 items-center justify-between gap-3 rounded-2xl border border-white/15 bg-[#04241f]/80 px-4 py-3 backdrop-blur-xl">
              <div>
                <p className="font-label-sm text-label-sm uppercase tracking-widest text-white/50">
                  PROTEIOS
                </p>
                <p className="font-title-lg text-title-lg text-white">
                  {formatPkr(2800)}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary-container px-4 py-2 font-label-sm text-label-sm uppercase tracking-wider text-on-secondary-fixed">
                Add
                <MaterialIcon name="add" className="text-[16px]" />
              </span>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="relative border-t border-white/10 bg-white/[0.03]">
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
