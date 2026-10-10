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

interface ResetPasswordFormProps {
  token: string;
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [done, setDone] = useState(false);

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
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;
      if (!response.ok) {
        throw new Error(data?.error ?? "Could not reset your password.");
      }
      setDone(true);
      router.refresh();
    } catch (error) {
      setSubmitting(false);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Could not reset your password.",
      );
    }
  };

  if (!token) {
    return (
      <div className="flex flex-col gap-5 text-center items-center">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-error-container/40 text-on-error-container">
          <MaterialIcon name="link_off" className="text-[28px]" />
        </span>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          This reset link is missing or invalid. Please request a new one.
        </p>
        <Link
          className="w-full py-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
          href={ROUTES.forgotPassword}
        >
          <MaterialIcon name="send" className="text-[18px]" />
          <span>Request a new link</span>
        </Link>
      </div>
    );
  }

  if (done) {
    return (
      <div className="flex flex-col gap-5 text-center items-center">
        <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-secondary-container text-on-secondary-fixed">
          <MaterialIcon name="check_circle" className="text-[28px]" />
        </span>
        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          Your password has been updated. Sign in with your new password to
          continue.
        </p>
        <Link
          className="w-full py-4 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
          href={ROUTES.login}
        >
          <MaterialIcon name="login" className="text-[18px]" />
          <span>Sign in</span>
        </Link>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5" noValidate onSubmit={handleSubmit}>
      <div>
        <label className={labelClass} htmlFor="reset-password">
          New password
        </label>
        <input
          autoComplete="new-password"
          className={inputClass}
          id="reset-password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="8+ characters"
          type="password"
          value={password}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="reset-confirm">
          Confirm new password
        </label>
        <input
          autoComplete="new-password"
          className={inputClass}
          id="reset-confirm"
          onChange={(event) => setConfirm(event.target.value)}
          placeholder="Re-enter password"
          type="password"
          value={confirm}
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
        <MaterialIcon name="lock_reset" className="text-[18px]" />
        <span>{submitting ? "Updating…" : "Update password"}</span>
      </button>

      <p className="font-caption text-caption text-on-surface-variant text-center">
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
