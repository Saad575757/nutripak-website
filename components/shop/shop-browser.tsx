"use client";

import { useMemo, useState } from "react";

import MaterialIcon from "@/components/material-icon";
import ProductCard from "@/components/shop/product-card";
import ShopHero from "@/components/shop/shop-hero";
import { AVAILABLE_GOALS, filterProductsByGoal } from "@/lib/goals";
import type { ShopProduct } from "@/lib/shop";

export default function ShopBrowser({ products }: { products: ShopProduct[] }) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [sort, setSort] = useState(0);

  const categories = useMemo(
    () => [
      { slug: "all", label: "All Formulations", count: products.length },
      ...AVAILABLE_GOALS.map((goal) => ({
        slug: goal.slug,
        label: goal.title,
        count: filterProductsByGoal(products, goal.slug).length,
      })),
    ],
    [products],
  );

  const visible = useMemo(() => {
    const list = filterProductsByGoal(products, activeCategory);
    const sorted = [...list];
    if (sort === 1) sorted.sort((a, b) => a.pricePkr - b.pricePkr);
    else if (sort === 2) sorted.sort((a, b) => b.pricePkr - a.pricePkr);
    return sorted;
  }, [products, activeCategory, sort]);

  return (
    <>
      <ShopHero
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        sort={sort}
        onSortChange={setSort}
        count={visible.length}
      />

      <section className="w-full pb-20">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
          {visible.length === 0 ? (
            <div className="rounded-2xl bg-surface-container p-12 flex flex-col items-center gap-4 text-center">
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-surface-container-high text-on-surface-variant">
                <MaterialIcon name="search_off" className="text-[28px]" />
              </span>
              <p className="font-body-md text-body-md text-on-surface-variant">
                No formulations match this category yet.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {visible.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          )}

          <div className="mt-12 pt-6 border-t border-surface-container">
            <span className="font-body-sm text-body-sm text-on-surface-variant">
              Showing {visible.length} of {products.length} formulations
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
