import Image from "next/image";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import {
  ABOUT_HERO,
  ABOUT_STATS,
  HERO_LIFESTYLE_IMAGE,
} from "@/lib/about";
import { ROUTES } from "@/lib/site";

export default function AboutHero() {
  return (
    <>
      <div className="relative w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin overflow-hidden pointer-events-none">
        <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl"></div>
        <div className="absolute top-48 -left-20 w-80 h-80 rounded-full bg-surface-variant/40 blur-3xl"></div>
      </div>

      <section className="relative w-full pt-6 md:pt-10 pb-16">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span>{ABOUT_HERO.label}</span>
            </div>
            <div className="flex items-center gap-3 text-outline font-label-sm text-label-sm">
              <span className="text-secondary font-bold uppercase tracking-wider">
                {ABOUT_HERO.strip}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7 flex flex-col gap-4">
              <h1 className="font-display-hero text-headline-lg-mobile md:text-display-hero text-primary tracking-tight font-normal leading-[1.08]">
                {ABOUT_HERO.headline}
              </h1>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-5 pb-2">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {ABOUT_HERO.intro}
              </p>
              <div className="flex items-center gap-3">
                <Link
                  className="inline-flex items-center gap-2 rounded-full bg-secondary hover:bg-on-secondary-container text-on-secondary px-7 py-3 font-label-md text-label-md font-semibold transition-colors"
                  href={ROUTES.shop}
                >
                  <span>{ABOUT_HERO.cta}</span>
                  <MaterialIcon name="east" className="text-[18px]" />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative w-full rounded-2xl overflow-hidden min-h-[420px] bg-surface-container shadow-md">
            <Image
              src={HERO_LIFESTYLE_IMAGE}
              alt="An adult enjoying a healthy, balanced meal at home"
              fill
              priority
              sizes="(min-width: 1024px) 1240px, 100vw"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/25 to-transparent"></div>

            <div className="relative z-10 flex items-end justify-end p-6 md:p-10">
              <figure className="w-full md:max-w-md rounded-xl bg-surface-container-lowest/95 backdrop-blur-md p-6 shadow-xl flex flex-col gap-4">
                <MaterialIcon
                  name="format_quote"
                  className="text-[28px] text-secondary"
                  fill
                />
                <blockquote className="font-title-lg text-title-lg text-on-surface leading-snug">
                  {ABOUT_HERO.quote}
                </blockquote>
                <figcaption className="flex flex-col">
                  <span className="font-title-md text-title-md font-bold text-primary">
                    {ABOUT_HERO.quoteAuthor}
                  </span>
                  <span className="font-caption text-caption text-on-surface-variant">
                    {ABOUT_HERO.quoteRole}
                  </span>
                </figcaption>
              </figure>
            </div>
          </div>

          <div className="w-full rounded-xl bg-surface-container p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {ABOUT_STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                    <MaterialIcon name={stat.icon} className="text-[18px]" />
                    <span>{stat.label}</span>
                  </div>
                  <div className="flex items-baseline gap-1.5">
                    <span
                      className={`font-headline-md text-primary font-normal ${
                        stat.compact
                          ? "text-[22px] md:text-[26px] leading-tight"
                          : "text-headline-md"
                      }`}
                    >
                      {stat.value}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
