"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import MaterialIcon from "@/components/material-icon";
import { ROUTES } from "@/lib/site";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-surface-container border-0 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary";

const labelClass =
  "block font-label-md text-label-md text-primary font-bold mb-2";

export default function SignupForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    if (password !== confirm) {
      setSubmitError("Passwords do not match.");
      return;
    }

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, phone }),
      });
      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;
      if (!response.ok) {
        throw new Error(data?.error ?? "Could not create your account.");
      }
      router.push(ROUTES.account);
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setSubmitError(
        error instanceof Error ? error.message : "Could not create your account.",
      );
    }
  };

  return (
    <form
      className="flex flex-col gap-5"
      noValidate
      onSubmit={handleSubmit}
    >
      <div>
        <label className={labelClass} htmlFor="signup-name">
          Full name
        </label>
        <input
          autoComplete="name"
          className={inputClass}
          id="signup-name"
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          type="text"
          value={name}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="signup-email">
          Email address
        </label>
        <input
          autoComplete="email"
          className={inputClass}
          id="signup-email"
          inputMode="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          type="email"
          value={email}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="signup-phone">
          Phone <span className="text-outline font-normal">(optional)</span>
        </label>
        <input
          autoComplete="tel"
          className={inputClass}
          id="signup-phone"
          inputMode="tel"
          onChange={(event) => setPhone(event.target.value)}
          placeholder="03XX XXXXXXX"
          type="tel"
          value={phone}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelClass} htmlFor="signup-password">
            Password
          </label>
          <input
            autoComplete="new-password"
            className={inputClass}
            id="signup-password"
            onChange={(event) => setPassword(event.target.value)}
            placeholder="8+ characters"
            type="password"
            value={password}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="signup-confirm">
            Confirm password
          </label>
          <input
            autoComplete="new-password"
            className={inputClass}
            id="signup-confirm"
            onChange={(event) => setConfirm(event.target.value)}
            placeholder="Re-enter password"
            type="password"
            value={confirm}
          />
        </div>
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
        <MaterialIcon name="person_add" className="text-[18px]" />
        <span>{submitting ? "Creating account…" : "Create account"}</span>
      </button>

      <p className="font-caption text-caption text-on-surface-variant text-center">
        Already have an account?{" "}
        <Link
          className="text-secondary font-bold hover:underline"
          href={ROUTES.login}
        >
          Sign in
        </Link>
      </p>
    </form>
  );
}