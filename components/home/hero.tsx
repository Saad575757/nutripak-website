import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import { HERO_IMAGE } from "@/lib/site";

const HERO_PILLS = [
  {
    icon: "spa",
    label: "Bioavailable Chelated Minerals",
    position: "top-6 right-6",
  },
  {
    icon: "science",
    label: "3rd-Party Lab Tested",
    position: "bottom-16 left-6",
  },
  {
    icon: "eco",
    label: "Zero Synthetic Fillers",
    position: "bottom-6 right-6",
  },
];

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-20 px-margin-mobile md:px-margin relative overflow-hidden">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        <div className="lg:col-span-6 flex flex-col items-start gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-container/20 text-secondary font-label-sm text-label-sm">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span>CLINICALLY FORMULATED • 100% CLEAN INGREDIENTS</span>
          </div>
          <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-primary tracking-tight leading-[1.08]">
            Nutrition built <br className="hidden sm:inline" />
            around <span className="italic font-light text-secondary">your goals.</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Discover bioavailable daily supplements designed to make vibrant
            health effortless. Backed by clinical nutritionists and delivered
            directly to your doorstep.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <a
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed px-7 py-4 font-label-md text-label-md uppercase tracking-wider shadow-md transition-all hover:scale-[1.02] active:scale-95 text-center"
              href="#quiz-section"
            >
              <span>Take the 2-Minute Quiz</span>
              <MaterialIcon name="arrow_forward" className="text-[18px]" />
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full bg-surface-container hover:bg-surface-container-high text-primary px-7 py-4 font-label-md text-label-md uppercase tracking-wider transition-all text-center"
              href="#featured-products"
            >
              <span>Shop All Products</span>
            </a>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-4">
            <div className="flex items-center gap-1 text-amber-500">
              {[0, 1, 2, 3, 4].map((index) => (
                <MaterialIcon key={index} name="star" fill className="text-[20px]" />
              ))}
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              <strong className="text-on-surface">4.9/5</strong> from 12,500+
              verified wellness routines. Free shipping &amp; 30-day money-back
              guarantee.
            </p>
          </div>
        </div>

        <div className="lg:col-span-6 relative flex justify-center items-center">
          <div className="absolute -inset-4 bg-gradient-to-tr from-secondary/10 via-primary-fixed/30 to-surface-variant/40 rounded-full blur-3xl -z-10 pointer-events-none"></div>
          <div className="relative w-full max-w-[540px] rounded-3xl overflow-hidden shadow-2xl bg-surface-container-lowest p-2 md:p-3">
            <Image
              src={HERO_IMAGE}
              alt="Two premium Nutripak supplement amber glass and beige matte bottles on an organic light oak wood table"
              width={1080}
              height={1080}
              className="w-full h-auto aspect-square object-cover rounded-2xl"
            />
            {HERO_PILLS.map((pill) => (
              <div
                key={pill.label}
                className={`absolute ${pill.position} hidden sm:flex items-center gap-2 px-4 py-2.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-lg`}
              >
                <MaterialIcon name={pill.icon} className="text-secondary text-[18px]" />
                <span className="font-label-sm text-label-sm text-primary">
                  {pill.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}