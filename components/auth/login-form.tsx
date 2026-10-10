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

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;
    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;
      if (!response.ok) {
        throw new Error(data?.error ?? "Could not sign you in.");
      }
      router.push(ROUTES.account);
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setSubmitError(
        error instanceof Error ? error.message : "Could not sign you in.",
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
        <label className={labelClass} htmlFor="login-email">
          Email address
        </label>
        <input
          autoComplete="email"
          className={inputClass}
          id="login-email"
          inputMode="email"
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          type="email"
          value={email}
        />
      </div>

      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          <label className={`${labelClass} mb-0`} htmlFor="login-password">
            Password
          </label>
          <Link
            className="font-caption text-caption text-secondary font-bold hover:underline"
            href={ROUTES.forgotPassword}
          >
            Forgot password?
          </Link>
        </div>
        <input
          autoComplete="current-password"
          className={inputClass}
          id="login-password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="••••••••"
          type="password"
          value={password}
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
        <MaterialIcon name="login" className="text-[18px]" />
        <span>{submitting ? "Signing in…" : "Sign in"}</span>
      </button>

      <p className="font-caption text-caption text-on-surface-variant text-center">
        New to Nutripak?{" "}
        <Link
          className="text-secondary font-bold hover:underline"
          href={ROUTES.signup}
        >
          Create an account
        </Link>
      </p>
    </form>
  );
}