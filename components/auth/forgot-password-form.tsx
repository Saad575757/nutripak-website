"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

import MaterialIcon from "@/components/material-icon";
import { ROUTES } from "@/lib/site";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-surface-container border-0 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary";

const labelClass =
  "block font-label-md text-label-md text-primary font-bold mb-2";

const DEFAULT_MESSAGE =
  "If an account exists for that email, we've sent password reset instructions.";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [sentMessage, setSentMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await response.json().catch(() => null)) as
        | { error?: string; message?: string }
        | null;
      if (!response.ok) {
        throw new Error(data?.error ?? "Could not send reset instructions.");
      }
      setSentMessage(data?.message ?? DEFAULT_MESSAGE);
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Could not send reset instructions.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (sentMessage) {
    return (
      <div className="flex flex-col gap-5">
        <div className="flex items-start gap-3 rounded-xl bg-secondary-container/40 px-4 py-4">
          <MaterialIcon
            name="mark_email_read"
            className="text-[22px] text-secondary shrink-0"
          />
          <p className="font-body-md text-body-md text-on-surface leading-relaxed">
            {sentMessage}
          </p>
        </div>
        <p className="font-caption text-caption text-on-surface-variant text-center">
          Didn&apos;t get it? Check your spam folder, or{" "}
          <button
            className="text-secondary font-bold hover:underline"
            onClick={() => setSentMessage("")}
            type="button"
          >
            try another email
          </button>
          .
        </p>
        <Link
          className="text-secondary font-bold hover:underline font-caption text-caption text-center"
          href={ROUTES.login}
        >
          Back to sign in
        </Link>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5" noValidate onSubmit={handleSubmit}>
      <div>
        <label className={labelClass} htmlFor="forgot-email">
          Email address
        </label>
        <input
          autoComplete="email"
          className={inputClass}
          id="forgot-email"
          inputMode="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          type="email"
          value={email}
        />
      </div>

      {submitError ? (
        <p className="rounded-xl bg-error-container/40 px-4 py-3 font-caption text-caption text-on-error-container text-center">
          {submitError}
        </p>
      ) : null}

      <button
        className="w-full py-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        disabled={submitting}
        type="submit"
      >
        <MaterialIcon name="send" className="text-[18px]" />
        <span>{submitting ? "Sending…" : "Send reset link"}</span>
      </button>

      <p className="font-caption text-caption text-on-surface-variant text-center">
        Remembered it?{" "}
        <Link
          className="text-secondary font-bold hover:underline"
          href={ROUTES.login}
        >
          Back to sign in
        </Link>
      </p>
    </form>
  );
}
