"use client";

import { getImageProps } from "next/image";

import { HERO_SLIDES } from "@/lib/site";

export default function HeroBackgroundSlider({ active }: { active: number }) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {HERO_SLIDES.map((slide, index) => {
        const desktop = getImageProps({
          src: slide.src,
          alt: "",
          fill: true,
          sizes: "100vw",
          priority: index === 0,
        });
        const mobile = getImageProps({
          src: slide.mobileSrc,
          alt: "",
          fill: true,
          sizes: "100vw",
        });

        return (
          <picture
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
              index === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <source media="(max-width: 767px)" srcSet={mobile.props.srcSet} />
            <img
              {...desktop.props}
              alt=""
              className="object-cover object-center"
            />
          </picture>
        );
      })}
    </div>
  );
}
