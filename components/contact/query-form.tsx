"use client";

import { useState, type FormEvent } from "react";

import MaterialIcon from "@/components/material-icon";
import { CONTACT_SHARED_DETAILS, QUERY_TOPICS } from "@/lib/contact";

export default function QueryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(QUERY_TOPICS[0]);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, topic, message }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Something went wrong.");
      }

      setStatus("sent");
      setName("");
      setEmail("");
      setTopic(QUERY_TOPICS[0]);
      setMessage("");
    } catch (submitError) {
      setStatus("error");
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Something went wrong.",
      );
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-surface-container border-0 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary";

  const labelClass =
    "block font-label-md text-label-md text-primary font-bold mb-2";

  return (
    <section className="w-full py-16 md:py-24" id="query">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal leading-tight">
              Send us a query
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Fill in the form and we will get back to you on the email you
              provide. Prefer to write directly? Use{" "}
              <a
                className="text-secondary font-semibold hover:underline"
                href={CONTACT_SHARED_DETAILS.emailHref}
              >
                {CONTACT_SHARED_DETAILS.email}
              </a>
              .
            </p>
            <a
              className="mt-2 inline-flex items-center justify-center gap-2 self-start rounded-full bg-secondary hover:bg-on-secondary-container text-on-secondary px-6 py-3 font-label-md text-label-md font-bold transition-colors"
              href={CONTACT_SHARED_DETAILS.whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
            >
              <MaterialIcon name="chat" className="text-[18px]" />
              <span>Chat on WhatsApp — {CONTACT_SHARED_DETAILS.phone}</span>
            </a>
          </div>

          <div className="lg:col-span-7 rounded-2xl bg-surface-container-lowest p-8 md:p-10 shadow-md">
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass} htmlFor="query-name">
                    Your name
                  </label>
                  <input
                    className={inputClass}
                    id="query-name"
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Full name"
                    required
                    type="text"
                    value={name}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="query-email">
                    Email address
                  </label>
                  <input
                    className={inputClass}
                    id="query-email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="you@example.com"
                    required
                    type="email"
                    value={email}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="query-topic">
                  What is your query about?
                </label>
                <select
                  className={`${inputClass} cursor-pointer`}
                  id="query-topic"
                  name="topic"
                  onChange={(event) => setTopic(event.target.value)}
                  value={topic}
                >
                  {QUERY_TOPICS.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={labelClass} htmlFor="query-message">
                  Message
                </label>
                <textarea
                  className={`${inputClass} min-h-[140px] resize-y`}
                  id="query-message"
                  name="message"
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell us how we can help."
                  required
                  value={message}
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary hover:bg-on-secondary-container text-on-secondary px-8 py-3.5 font-label-md text-label-md font-bold transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  type="submit"
                  disabled={status === "sending"}
                >
                  <span>{status === "sending" ? "Sending…" : "Send query"}</span>
                  <MaterialIcon name="send" className="text-[18px]" />
                </button>
                <p className="font-caption text-caption text-on-surface-variant">
                  We&apos;ll reply to the email you provide.
                </p>
              </div>

              {status === "sent" ? (
                <p className="flex items-center gap-2 rounded-xl bg-secondary-container/40 px-4 py-3 font-body-sm text-body-sm text-on-secondary-fixed">
                  <MaterialIcon name="check_circle" className="text-[18px]" />
                  <span>Thank you — your query has been sent. We&apos;ll be in touch soon.</span>
                </p>
              ) : null}

              {status === "error" ? (
                <p className="rounded-xl bg-error-container/40 px-4 py-3 font-body-sm text-body-sm text-on-error-container">
                  {error}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
