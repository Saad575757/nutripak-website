"use client";

import { useState } from "react";
import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import type { PdpRecord } from "@/lib/pdps";

const TRUST_POINTS = [
  { icon: "spa", title: "Zero Synthetics", caption: "No binders or fillers" },
  { icon: "shield", title: "Amber UV Glass", caption: "Protects bio-potency" },
  { icon: "local_shipping", title: "Carbon Neutral", caption: "100% offset delivery" },
];

export default function PdpGallery({ pdp }: { pdp: PdpRecord }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="lg:col-span-7 flex flex-col gap-4 lg:sticky lg:top-28">
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-container-low shadow-sm group">
        <Image
          src={pdp.gallery[activeIndex].src}
          alt={pdp.gallery[activeIndex].alt}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2 pointer-events-none">
          <span className="backdrop-blur-md bg-surface-container-lowest/90 text-primary px-3 py-1.5 rounded-full font-label-sm text-label-sm shadow-sm flex items-center gap-1.5 font-bold">
            <MaterialIcon name="biotech" className="text-secondary text-[16px]" />
            {pdp.formsBadge}
          </span>
          <span className="backdrop-blur-md bg-primary/90 text-on-primary px-3 py-1.5 rounded-full font-label-sm text-[11px] uppercase tracking-wider font-semibold shadow-sm w-fit">
            {pdp.formsBadgeSub}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 pointer-events-auto">
          <button
            aria-label="Zoom image"
            className="w-10 h-10 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-md text-on-surface flex items-center justify-center hover:bg-surface-container transition-all"
            type="button"
          >
            <MaterialIcon name="zoom_in" className="text-[20px]" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {pdp.gallery.map((image, index) => {
          const active = activeIndex === index;
          return (
            <button
              key={`${image.src}-${index}`}
              className={`aspect-square rounded-xl overflow-hidden bg-surface-container p-0.5 shadow-sm hover:opacity-100 transition-all focus:outline-none ${
                active ? "opacity-100 ring-2 ring-primary" : "opacity-70"
              }`}
              type="button"
              onClick={() => setActiveIndex(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 13vw, 25vw"
                className="w-full h-full object-cover rounded-lg"
              />
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-3 gap-2 pt-3">
        {TRUST_POINTS.map((point) => (
          <div
            key={point.title}
            className="flex items-center gap-2 p-3 rounded-xl bg-surface-container-low/60 text-on-surface"
          >
            <MaterialIcon name={point.icon} className="text-secondary text-[20px]" />
            <div className="flex flex-col">
              <span className="font-label-sm text-[12px] font-bold leading-tight">
                {point.title}
              </span>
              <span className="font-caption text-[10px] text-on-surface-variant">
                {point.caption}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}