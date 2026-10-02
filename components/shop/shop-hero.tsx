"use client";

import { useState } from "react";

import MaterialIcon from "@/components/material-icon";
import {
  SHOP_CATEGORY_PILLS,
  SHOP_PRODUCTS,
  SORT_OPTIONS,
} from "@/lib/shop";

export default function ShopHero() {
  const [activePill, setActivePill] = useState(0);
  const [sort, setSort] = useState(0);

  return (
    <section className="w-full relative overflow-hidden py-12 lg:py-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-surface-container-low via-surface to-background pointer-events-none"></div>
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-fixed-dim/15 blur-3xl pointer-events-none"></div>
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm uppercase tracking-wider mb-4 shadow-sm">
            <MaterialIcon name="biotech" className="text-[14px]" />
            PHARMACOPIA GRADE SUPPLEMENTATION
          </div>
          <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-normal mb-4">
            Thoughtfully Crafted Nutrition.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mb-8">
            Thoughtfully crafted nutrition for everyday life. Whether you&apos;re managing your heart health, staying active, or simply looking to feel your best, our range is thoughtfully formulated to support your energy, strength, and overall wellbeing at every age and every stage of life.
          </p>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0">
          {SHOP_CATEGORY_PILLS.map((pill, index) => {
            const active = activePill === index;
            return (
              <button
                key={pill.label}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full font-label-md text-label-md transition-all flex items-center gap-2 ${
                  active
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container hover:bg-surface-container-high text-on-surface"
                }`}
                type="button"
                onClick={() => setActivePill(index)}
              >
                <span>{pill.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                    active
                      ? "bg-white/20"
                      : "bg-surface-container-highest text-on-surface-variant"
                  }`}
                >
                  {pill.count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-6 p-4 rounded-xl bg-surface-container-low flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm">
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            Showing{" "}
            <strong className="text-primary font-bold">
              {SHOP_PRODUCTS.length} Formulations
            </strong>
          </span>
          <div className="flex items-center justify-end gap-4">
            <div className="relative inline-block">
              <select
                aria-label="Sort products by"
                className="appearance-none bg-surface-container-lowest text-on-surface font-label-md text-label-md pl-4 pr-9 py-2 rounded-full cursor-pointer shadow-sm hover:bg-surface-bright transition-colors focus:outline-none focus:ring-2 focus:ring-secondary"
                value={sort}
                onChange={(event) => setSort(Number(event.target.value))}
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
              <MaterialIcon
                name="swap_vert"
                className="absolute right-3 top-2.5 text-[18px] pointer-events-none text-on-surface-variant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}