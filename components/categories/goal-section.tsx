import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import ProductCard from "@/components/shop/product-card";
import { productsForGoal, type Goal } from "@/lib/goals";
import { ROUTES } from "@/lib/site";

export default function GoalSection({ goal }: { goal: Goal }) {
  const products = productsForGoal(goal);

  return (
    <section
      className="w-full py-14 md:py-20 scroll-mt-32"
      id={goal.slug}
    >
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex items-start gap-4">
            <span
              className={`w-12 h-12 rounded-2xl ${goal.iconClass} flex items-center justify-center shrink-0`}
            >
              <MaterialIcon name={goal.icon} className="text-[26px]" />
            </span>
            <div>
              <span
                className={`font-label-sm text-label-sm uppercase tracking-wider ${goal.labelClass} font-bold block mb-1`}
              >
                {goal.label}
              </span>
              <h2
                className={`font-headline-md text-headline-md-mobile md:text-headline-md ${goal.titleClass} font-normal`}
              >
                {goal.title}
              </h2>
              <p className={`font-body-sm text-body-sm ${goal.bodyClass} mt-1`}>
                {goal.description}
              </p>
            </div>
          </div>

          <Link
            className={`inline-flex items-center gap-1.5 font-label-md text-label-md ${goal.ctaClass} hover:underline shrink-0`}
            href={ROUTES.shop}
          >
            <span>View all products</span>
            <MaterialIcon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl bg-surface-container-low px-6 py-10 text-center font-body-md text-body-md text-on-surface-variant">
            No products in this goal yet.
          </p>
        )}
      </div>
    </section>
  );
}