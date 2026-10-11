import type { Metadata } from "next";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { CONTACT_CHANNELS } from "@/lib/contact";
import { FAQ_GROUPS } from "@/lib/faqs";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers to common questions about SUBSET, ADA-Glu and PROTEIOS — ingredients, preparation, servings, and who each Nutripak formula is for.",
};

export default function FaqsPage() {
  return (
    <div className="w-full flex flex-col gap-0">
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
            <span className="text-secondary-container font-semibold">FAQs</span>
          </nav>

          <div className="flex flex-col gap-4 max-w-3xl">
            <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-secondary-container font-bold">
              Help centre
            </span>
            <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary font-normal leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="font-body-lg text-body-lg text-on-primary/80 leading-relaxed">
              Everything you need to know about SUBSET, ADA-Glu and PROTEIOS —
              ingredients, preparation, servings, and who each formula is for.
            </p>
          </div>

          <ul className="flex flex-wrap gap-3 pt-2">
            {FAQ_GROUPS.map((group) => (
              <li key={group.slug}>
                <a
                  className="inline-flex items-center gap-2 rounded-full border border-on-primary/25 px-5 py-2.5 font-label-sm text-label-sm text-on-primary hover:border-secondary-container hover:text-secondary-container transition-colors"
                  href={`#${group.slug}`}
                >
                  <MaterialIcon name="help" className="text-[18px]" />
                  <span>{group.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full py-14 md:py-20">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-16">
          {FAQ_GROUPS.map((group) => (
            <div
              className="flex flex-col gap-6 scroll-mt-32"
              id={group.slug}
              key={group.slug}
            >
              <div className="flex flex-col gap-2">
                <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal">
                  {group.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  {group.description}
                </p>
              </div>

              <div className="max-w-3xl w-full flex flex-col gap-4">
                {group.items.map((faq) => (
                  <details
                    key={faq.question}
                    className="group rounded-xl bg-surface-container-lowest border border-surface-container px-6 py-4"
                  >
                    <summary className="flex cursor-pointer list-none justify-between gap-6 items-start">
                      <h3 className="font-title-md text-title-md text-primary font-bold">
                        {faq.question}
                      </h3>
                      <span className="mt-1 flex items-center justify-center transition-transform group-open:rotate-180">
                        <MaterialIcon
                          name="expand_more"
                          className="text-[24px] text-outline"
                        />
                      </span>
                    </summary>
                    <div className="pt-4 flex flex-col gap-3">
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                        {faq.answer}
                      </p>
                      {faq.points ? (
                        <ul className="flex flex-col gap-2 pl-1">
                          {faq.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2 font-body-sm text-body-sm text-on-surface-variant"
                            >
                              <MaterialIcon
                                name="fiber_manual_record"
                                className="text-[10px] text-secondary mt-1.5 shrink-0"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full pb-16 md:pb-24">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
          <div className="rounded-3xl bg-surface-container-low p-8 md:p-12 flex flex-col gap-6 items-center text-center">
            <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container text-on-secondary-fixed">
              <MaterialIcon name="forum" className="text-[28px]" />
            </span>
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal">
              Still have a question?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Our team is reachable on call, WhatsApp or email — we are happy to
              help you choose the right product or explain any detail.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {CONTACT_CHANNELS.map((channel) => (
                <a
                  key={channel.label}
                  className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 font-label-sm text-label-sm font-semibold text-primary hover:bg-primary hover:text-on-primary transition-colors"
                  href={channel.href}
                  target={channel.label === "WhatsApp" ? "_blank" : undefined}
                  rel={channel.label === "WhatsApp" ? "noreferrer noopener" : undefined}
                >
                  <MaterialIcon name={channel.icon} className="text-[18px]" />
                  <span>
                    {channel.label}: {channel.value}
                  </span>
                </a>
              ))}
            </div>
            <Link
              className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-container text-on-primary px-8 py-3.5 font-label-md text-label-md font-bold transition-colors"
              href={ROUTES.contact}
            >
              <span>Contact us</span>
              <MaterialIcon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
