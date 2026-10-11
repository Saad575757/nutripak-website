"use client";

import { useState, type FormEvent } from "react";

export default function NewsletterCallout() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubscribe = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "blog" }),
      });
      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;
      if (!response.ok) {
        throw new Error(data?.error ?? "Could not subscribe right now.");
      }
      setSubmitted(true);
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Could not subscribe right now.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-8">
      <div className="bg-surface-container-low rounded-xl p-8 md:p-12">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold mb-2 block">
            THE BI-WEEKLY PROTOCOL
          </span>
          <h3 className="font-headline-md text-headline-md text-primary leading-tight mb-3">
            Evidence over trends. Delivered gently.
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Join 85,000+ conscious optimizers. We synthesize new clinical trials,
            formulation updates, and biochemical insights into digestible Friday
            morning dispatches.
          </p>
          {submitted ? (
            <p className="text-primary font-label-md text-label-md font-semibold py-3 flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
              Thank you for subscribing to The Nutripak Chronicle.
            </p>
          ) : (
            <form
              className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto"
              noValidate
              onSubmit={handleSubscribe}
            >
              <input
                className="w-full px-5 py-3 rounded-full bg-surface-container-lowest text-body-md font-body-md text-on-surface placeholder:text-outline focus:outline-none shadow-sm"
                placeholder="Enter your personal email"
                required
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              <button
                className="rounded-full bg-primary text-on-primary px-7 py-3 font-label-md text-label-md font-semibold hover:bg-primary-container transition-colors shadow-sm whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
                type="submit"
                disabled={submitting}
              >
                {submitting ? "Subscribing…" : "Subscribe"}
              </button>
            </form>
          )}
          {error ? (
            <p className="font-caption text-caption text-error mt-2">{error}</p>
          ) : null}
          <p className="font-caption text-caption text-outline mt-3">
            Strictly zero spam. Unsubscribe with a single click at any time.
          </p>
        </div>
      </div>
    </section>
  );
}