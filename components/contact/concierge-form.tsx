"use client";

import { useRef, useState } from "react";

import MaterialIcon from "@/components/material-icon";
import { CLINICAL_CONTEXT_OPTIONS, TOPIC_PILLS } from "@/lib/contact";

const DEFAULT_PLACEHOLDER = "e.g. Taking Daily Essentials alongside Levothyroxine";

function placeholderFor(topic: string): string {
  const found = TOPIC_PILLS.find((pill) => pill.id === topic);
  return found ? found.placeholder : DEFAULT_PLACEHOLDER;
}

export default function ConciergeForm() {
  const [topic, setTopic] = useState("clinical");
  const [subject, setSubject] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const showClinicalContext = topic === "clinical" || topic === "routine";

  const handleTopicSelect = (id: string) => {
    setTopic(id);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="lg:col-span-7">
      <div className="p-6 md:p-10 rounded-xl bg-surface-container-lowest shadow-xl">
        <div className="mb-8">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-1">
            Confidential Triage Form
          </span>
          <h2 className="font-headline-md text-headline-md text-primary font-normal">
            Send a detailed case inquiry.
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-1">
            Select your topic below so we can instantly assign your ticket to
            the relevant clinical researcher or account manager.
          </p>
        </div>

        <form
          className="flex flex-col gap-6"
          id="concierge-inquiry-form"
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <label className="font-label-md text-label-md text-primary font-bold block mb-2.5">
              Inquiry Focus Area
            </label>
            <div className="flex flex-wrap gap-2">
              {TOPIC_PILLS.map((pill) => {
                const active = topic === pill.id;
                return (
                  <button
                    key={pill.id}
                    className={`px-4 py-2 rounded-full font-label-sm text-label-sm font-semibold transition-all ${
                      active
                        ? "bg-primary text-on-primary shadow-sm"
                        : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                    }`}
                    type="button"
                    onClick={() => handleTopicSelect(pill.id)}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="first-name">
                First Name *
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                id="first-name"
                placeholder="Elena"
                required
                type="text"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="last-name">
                Last Name *
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                id="last-name"
                placeholder="Vance"
                required
                type="text"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="email">
                Email Address *
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                id="email"
                placeholder="elena@example.com"
                required
                type="email"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="phone">
                Phone Number (Optional for SMS)
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                id="phone"
                placeholder="+1 (555) 019-2834"
                type="tel"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2 flex flex-col gap-1.5">
              <label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="subject">
                Subject / Inquiry Headline *
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                id="subject"
                placeholder={placeholderFor(topic)}
                required
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="order-id">
                Order # (If applicable)
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
                id="order-id"
                placeholder="NP-89421"
                type="text"
              />
            </div>
          </div>

          <div
            className={`p-5 rounded-xl bg-surface-container-low flex flex-col gap-3 transition-all ${
              showClinicalContext ? "" : "opacity-40 pointer-events-none"
            }`}
            id="clinical-subpanel"
          >
            <div className="flex items-center gap-2 text-primary font-label-md text-label-md font-bold">
              <MaterialIcon name="ecg_heart" className="text-secondary text-[20px]" />
              <span>Clinical Precision Context (Optional)</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              Select any factors currently relevant to your physiology for
              tailored clinician recommendations:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              {CLINICAL_CONTEXT_OPTIONS.map((option) => (
                <label
                  key={option}
                  className="flex items-center gap-2 p-2.5 rounded-lg bg-surface-container-lowest cursor-pointer hover:bg-surface-container transition-colors"
                >
                  <input
                    className="w-4 h-4 rounded text-secondary focus:ring-secondary"
                    type="checkbox"
                  />
                  <span className="font-body-sm text-body-sm text-on-surface">
                    {option}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-label-sm text-label-sm text-on-surface-variant font-medium" htmlFor="message">
              Detailed Message &amp; Background *
            </label>
            <textarea
              className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-secondary transition-all resize-none"
              id="message"
              placeholder="Please share your health goals, sensitivities, or order details so we can tailor our clinician review..."
              required
              rows={5}
            ></textarea>
          </div>

          <div>
            <label className="font-label-sm text-label-sm text-on-surface-variant font-medium block mb-1.5">
              Attach Relevant Lab Reports or Order Photos (Optional)
            </label>
            <div
              className="p-6 rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center cursor-pointer hover:bg-surface-container transition-all group"
              onClick={() => fileInputRef.current?.click()}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") fileInputRef.current?.click();
              }}
            >
              <div className="w-12 h-12 rounded-full bg-surface-container-lowest flex items-center justify-center text-secondary group-hover:scale-110 transition-transform mb-2">
                <MaterialIcon name="cloud_upload" className="text-[24px]" />
              </div>
              <p className="font-label-md text-label-md text-primary font-semibold">
                {fileName
                  ? fileName
                  : "Click to browse or drop documents here"}
              </p>
              <p className="font-caption text-caption text-on-surface-variant mt-1">
                Supports PDF, JPG, PNG up to 15MB. Encrypted end-to-end.
              </p>
              <input
                className="hidden"
                id="file-input"
                type="file"
                ref={fileInputRef}
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) setFileName(file.name);
                }}
              />
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-on-surface-variant font-caption text-caption">
              <MaterialIcon name="shield" className="text-secondary text-[16px]" />
              <span>
                256-bit encrypted health data. We never sell or share your
                personal details.
              </span>
            </div>
            <button
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-bold transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group whitespace-nowrap"
              type="submit"
            >
              <span>Send to Wellness Concierge</span>
              <MaterialIcon
                name="arrow_forward"
                className="text-[18px] group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {submitted ? (
            <div
              className="flex p-4 rounded-xl bg-secondary-container text-on-secondary-fixed font-label-md text-label-md items-center gap-3"
              id="form-success-banner"
            >
              <MaterialIcon name="check_circle" className="text-[24px] text-secondary" />
              <div>
                <strong>Inquiry Dispatched to Clinical Desk.</strong> Check your
                email momentarily for your encrypted triage confirmation code.
              </div>
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}