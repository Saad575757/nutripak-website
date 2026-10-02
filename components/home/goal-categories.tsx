import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { GOALS } from "@/lib/goals";
import { ROUTES } from "@/lib/site";

export default function GoalCategories() {
  return (
    <section className="w-full py-16 md:py-24 px-margin-mobile md:px-margin">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-2">
              OUR NUTRITION RANGE
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              Complete nutrition, tailored to your needs.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Whether you need complete daily nutrition, blood sugar–conscious
            support, or a protein boost for recovery — we have a range designed
            for you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {GOALS.map((goal) =>
            goal.available ? (
              <Link
                key={goal.slug}
                href={ROUTES.goalAnchor(goal.slug)}
                className={`p-8 rounded-3xl ${goal.cardClass} flex flex-col justify-between h-[280px] transition-all hover:-translate-y-1.5 hover:shadow-xl group cursor-pointer`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl ${goal.iconClass} flex items-center justify-center mb-6`}
                  >
                    <MaterialIcon name={goal.icon} className="text-[26px]" />
                  </div>
                  <span
                    className={`font-label-sm text-label-sm uppercase tracking-wider ${goal.labelClass} font-bold block mb-1`}
                  >
                    {goal.label}
                  </span>
                  <h3
                    className={`font-headline-md text-headline-md ${goal.titleClass} font-normal`}
                  >
                    {goal.title}
                  </h3>
                  <p className={`font-body-sm text-body-sm ${goal.bodyClass} mt-1`}>
                    {goal.description}
                  </p>
                </div>
                <div
                  className={`inline-flex items-center gap-1.5 font-label-md text-label-md ${goal.ctaClass} group-hover:gap-2.5 transition-all`}
                >
                  <span>View goal</span>
                  <MaterialIcon name="arrow_forward" className="text-[18px]" />
                </div>
              </Link>
            ) : (
              <div
                key={goal.slug}
                aria-disabled="true"
                className={`p-8 rounded-3xl ${goal.cardClass} flex flex-col justify-between h-[280px] opacity-70 cursor-default`}
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl ${goal.iconClass} flex items-center justify-center mb-6`}
                  >
                    <MaterialIcon name={goal.icon} className="text-[26px]" />
                  </div>
                  <span
                    className={`font-label-sm text-label-sm uppercase tracking-wider ${goal.labelClass} font-bold block mb-1`}
                  >
                    {goal.label}
                  </span>
                  <h3
                    className={`font-headline-md text-headline-md ${goal.titleClass} font-normal`}
                  >
                    {goal.title}
                  </h3>
                  <p className={`font-body-sm text-body-sm ${goal.bodyClass} mt-1`}>
                    {goal.description}
                  </p>
                </div>
                <div
                  className={`inline-flex items-center gap-1.5 font-label-md text-label-md ${goal.ctaClass}`}
                >
                  <span>Not available yet</span>
                </div>
              </div>
            )
          )}
        </div>

        <div className="flex justify-center pt-2">
          <Link
            className="inline-flex items-center gap-2 rounded-full border border-primary px-8 py-3.5 font-label-md text-label-md font-bold text-primary hover:bg-primary hover:text-on-primary transition-colors"
            href={ROUTES.categories}
          >
            <span>See all goals</span>
            <MaterialIcon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </div>
    </section>
  );
}