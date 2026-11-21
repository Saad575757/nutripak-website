"use client";

import Image from "next/image";

import { HERO_SLIDES } from "@/lib/site";

export default function HeroBackgroundSlider({ active }: { active: number }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {HERO_SLIDES.map((slide, index) => (
        <Image
          key={slide.src}
          src={slide.src}
          alt=""
          fill
          priority={index === 0}
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-[1200ms] ease-in-out ${
            index === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
