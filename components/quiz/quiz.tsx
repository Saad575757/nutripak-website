"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import MaterialIcon from "@/components/material-icon";
import { QUIZ_QUESTIONS, scoreQuiz, type QuizResult } from "@/lib/quiz";
import { formatPkr } from "@/lib/shop";
import { ROUTES } from "@/lib/site";

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const total = QUIZ_QUESTIONS.length;
  const question = QUIZ_QUESTIONS[step];
  const chosen = question ? answers[question.id] : undefined;
  const progress = Math.round(((step + (chosen ? 1 : 0)) / total) * 100);

  const select = (label: string) => {
    if (!question) return;
    const nextAnswers = { ...answers, [question.id]: label };

    if (step + 1 < total) {
      setAnswers(nextAnswers);
      setStep(step + 1);
      return;
    }

    setAnswers(nextAnswers);
    setResult(scoreQuiz(nextAnswers));
  };

  const back = () => {
    if (step === 0) return;
    setStep(step - 1);
  };

  const restart = () => {
    setAnswers({});
    setStep(0);
    setResult(null);
  };

  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-[900px] mx-auto px-margin-mobile md:px-margin">
        <div className="rounded-3xl bg-surface-container-lowest p-6 md:p-10 shadow-md flex flex-col gap-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary" />
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
                {result
                  ? "Your result"
                  : `Question ${step + 1} of ${total}`}
              </span>
            </div>
            {!result && (
              <span className="font-caption text-caption text-on-surface-variant">
                About a minute
              </span>
            )}
          </div>

          {result ? (
            <ResultPanel onRestart={restart} result={result} />
          ) : question ? (
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal leading-tight">
                  {question.question}
                </h2>
                {question.helper ? (
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {question.helper}
                  </p>
                ) : null}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {question.options.map((option) => {
                  const isChosen = chosen === option.label;
                  return (
                    <button
                      key={option.label}
                      aria-pressed={isChosen}
                      className={`flex flex-col gap-1 p-5 rounded-2xl text-left transition-all border ${
                        isChosen
                          ? "bg-secondary-container border-secondary-container text-on-secondary-fixed"
                          : "bg-surface-container-low border-transparent hover:border-secondary hover:bg-secondary-container/20"
                      }`}
                      onClick={() => select(option.label)}
                      type="button"
                    >
                      <span className="font-title-md text-title-md text-primary font-semibold">
                        {option.label}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {option.description}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-4">
                <div
                  aria-label={`Progress: question ${step + 1} of ${total}`}
                  aria-valuemax={total}
                  aria-valuemin={1}
                  aria-valuenow={step + 1}
                  className="h-2 w-full rounded-full bg-surface-container overflow-hidden"
                  role="progressbar"
                >
                  <div
                    className="h-full rounded-full bg-secondary transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="inline-flex items-center gap-1.5 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    disabled={step === 0}
                    onClick={back}
                    type="button"
                  >
                    <MaterialIcon name="arrow_back" className="text-[18px]" />
                    <span>Back</span>
                  </button>
                  <span className="font-caption text-caption text-on-surface-variant">
                    Step {step + 1} of {total}
                  </span>
                </div>
              </div>
            </div>
          ) : null}

          <p className="font-caption text-caption text-on-surface-variant leading-relaxed border-t border-surface-container pt-6">
            This quiz is general guidance, not medical advice. These products are
            not a substitute for medical treatment — please speak to your doctor
            before starting any supplement.
          </p>
        </div>
      </div>
    </section>
  );
}

function ResultPanel({
  onRestart,
  result,
}: {
  onRestart: () => void;
  result: QuizResult;
}) {
  const { product } = result;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
          Best match for you
        </span>
        <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal leading-tight">
          {product.name}
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          {result.reason}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-start">
        <div className="relative w-full md:w-64 aspect-square rounded-2xl overflow-hidden bg-surface-container-low shrink-0">
          <Image
            src={product.image}
            alt={product.alt}
            fill
            sizes="256px"
            className="object-contain p-4"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
              Retail price
            </span>
            <span className="font-headline-md text-headline-md-mobile text-primary font-normal">
              {formatPkr(product.pricePkr)}
            </span>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            {product.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary hover:bg-primary-container text-on-primary px-8 py-3.5 font-label-md text-label-md font-bold transition-colors"
              href={ROUTES.product(product.slug)}
            >
              <span>View {product.name}</span>
              <MaterialIcon name="arrow_forward" className="text-[18px]" />
            </Link>
            {result.goalSlug ? (
              <Link
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-8 py-3.5 font-label-md text-label-md font-bold text-primary hover:bg-primary hover:text-on-primary transition-colors"
                href={ROUTES.goalAnchor(result.goalSlug)}
              >
                <span>{result.goalTitle}</span>
                <MaterialIcon name="arrow_forward" className="text-[18px]" />
              </Link>
            ) : null}
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-t border-surface-container pt-6">
        <button
          className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors"
          onClick={onRestart}
          type="button"
        >
          <MaterialIcon name="refresh" className="text-[18px]" />
          <span>Retake the quiz</span>
        </button>
        <Link
          className="font-label-md text-label-md text-secondary font-semibold hover:underline"
          href={ROUTES.shop}
        >
          Or browse all products
        </Link>
      </div>
    </div>
  );
}