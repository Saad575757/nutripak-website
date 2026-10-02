import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { AVAILABLE_GOALS } from "@/lib/goals";
import { ROUTES } from "@/lib/site";

export default function CategoriesHero() {
  return (
    <section className="w-full bg-primary text-on-primary">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin py-16 md:py-24 flex flex-col gap-8">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-label-sm text-label-sm text-on-primary/70"
        >
          <Link className="hover:text-secondary-container" href={ROUTES.home}>
            Home
          </Link>
          <span className="text-on-primary/40">/</span>
          <span className="text-secondary-container font-semibold">Goals</span>
        </nav>

        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-secondary-container font-bold">
            Shop by goal
          </span>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary font-normal leading-tight">
            Find the nutrition that fits your goal.
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/80 leading-relaxed">
            Every Nutripak formula is built around a specific need. Pick a goal
            below and we will show you what we recommend for it.
          </p>
        </div>

        <ul className="flex flex-wrap gap-3 pt-2">
          {AVAILABLE_GOALS.map((goal) => (
            <li key={goal.slug}>
              <a
                className="inline-flex items-center gap-2 rounded-full border border-on-primary/25 px-5 py-2.5 font-label-sm text-label-sm text-on-primary hover:border-secondary-container hover:text-secondary-container transition-colors"
                href={`#${goal.slug}`}
              >
                <MaterialIcon name={goal.icon} className="text-[18px]" />
                <span>{goal.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}