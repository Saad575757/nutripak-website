import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { QUIZ_QUESTIONS } from "@/lib/quiz";
import { ROUTES } from "@/lib/site";

export default function QuizTeaser() {
  return (
    <section
      className="w-full bg-primary text-on-primary py-16 md:py-24 px-margin-mobile md:px-margin relative overflow-hidden"
      id="quiz-section"
    >
      <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-[1320px] mx-auto relative z-10 flex flex-col items-start gap-6">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold">
          FIND YOUR FORMULA
        </span>
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-normal leading-tight max-w-3xl">
          Not sure where to begin? Answer {QUIZ_QUESTIONS.length} quick
          questions and we will point you to the right formula.
        </h2>
        <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl">
          Tell us what you need support with and how you eat day to day. It takes
          about a minute, and there is nothing to buy.
        </p>
        <Link
          className="mt-2 inline-flex items-center gap-3 rounded-full bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed px-8 py-4 font-label-md text-label-md font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105"
          href={ROUTES.quiz}
        >
          <span>Take the quiz</span>
          <MaterialIcon name="psychology" className="text-[18px]" />
        </Link>
      </div>
    </section>
  );
}