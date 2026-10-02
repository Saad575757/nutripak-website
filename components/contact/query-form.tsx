"use client";

import { useState, type FormEvent } from "react";

import MaterialIcon from "@/components/material-icon";
import { CONTACT_SHARED_DETAILS, QUERY_TOPICS } from "@/lib/contact";

export default function QueryForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(QUERY_TOPICS[0]);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const body = [
      `Name: ${name}`,
      `Reply to: ${email}`,
      `Topic: ${topic}`,
      "",
      message,
    ].join("\n");

    const href = `mailto:${CONTACT_SHARED_DETAILS.email}?subject=${encodeURIComponent(
      `Nutripak enquiry — ${topic}`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
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
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary hover:bg-on-secondary-container text-on-secondary px-8 py-3.5 font-label-md text-label-md font-bold transition-colors"
                  type="submit"
                >
                  <span>Send query</span>
                  <MaterialIcon name="send" className="text-[18px]" />
                </button>
                <p className="font-caption text-caption text-on-surface-variant">
                  Submitting opens your email app with the message pre-filled.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
