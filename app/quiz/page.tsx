import type { Metadata } from "next";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import Quiz from "@/components/quiz/quiz";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Find Your Formula",
  description:
    "Answer three quick questions and we'll point you to the Nutripak formula that matches your goals.",
};

export default function QuizPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary text-on-primary">
        <div className="max-w-[900px] mx-auto px-margin-mobile md:px-margin py-14 md:py-20 flex flex-col gap-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-label-sm text-label-sm text-on-primary/70"
          >
            <Link className="hover:text-secondary-container" href={ROUTES.home}>
              Home
            </Link>
            <span className="text-on-primary/40">/</span>
            <span className="text-secondary-container font-semibold">Quiz</span>
          </nav>

          <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-secondary-container font-bold">
            Find your formula
          </span>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary font-normal leading-tight">
            Three questions. One clear recommendation.
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/80 leading-relaxed max-w-2xl">
            Tell us what you need support with and how you live day to day. We
            will match you to the formula that fits — no subscriptions, no
            guesswork.
          </p>
          <div className="flex items-center gap-2 text-secondary-container">
            <MaterialIcon name="timer" className="text-[20px]" />
            <span className="font-label-sm text-label-sm">
              About a minute to complete
            </span>
          </div>
        </div>
      </section>

      <Quiz />
    </div>
  );
}