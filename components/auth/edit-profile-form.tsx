"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

import MaterialIcon from "@/components/material-icon";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-surface-container border-0 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary";

const labelClass =
  "block font-label-md text-label-md text-primary font-bold mb-2";

interface EditProfileFormProps {
  initialName: string;
  initialPhone: string | null;
}

export default function EditProfileForm({
  initialName,
  initialPhone,
}: EditProfileFormProps) {
  const router = useRouter();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(initialName);
  const [phone, setPhone] = useState(initialPhone ?? "");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState(false);

  const startEditing = () => {
    setName(initialName);
    setPhone(initialPhone ?? "");
    setError("");
    setSaved(false);
    setEditing(true);
  };

  const cancelEditing = () => {
    setEditing(false);
    setError("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/auth/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone }),
      });
      const data = (await response.json().catch(() => null)) as
        | { error?: string }
        | null;
      if (!response.ok) {
        throw new Error(data?.error ?? "Could not save your profile.");
      }
      setEditing(false);
      setSaved(true);
      router.refresh();
    } catch (submitError) {
      setError(
        submitError instanceof Error
          ? submitError.message
          : "Could not save your profile.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  if (!editing) {
    return (
      <div className="flex flex-col gap-3">
        <button
          className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 font-label-md text-label-md font-semibold text-primary hover:bg-primary hover:text-on-primary transition-colors"
          onClick={startEditing}
          type="button"
        >
          <MaterialIcon name="edit" className="text-[18px]" />
          <span>Edit profile</span>
        </button>
        {saved ? (
          <p className="rounded-xl bg-secondary-container/30 px-4 py-2 font-caption text-caption text-on-secondary-container text-center">
            Profile updated.
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-5" noValidate onSubmit={handleSubmit}>
      <div>
        <label className={labelClass} htmlFor="profile-name">
          Full name
        </label>
        <input
          autoComplete="name"
          className={inputClass}
          id="profile-name"
          onChange={(event) => setName(event.target.value)}
          placeholder="Your name"
          type="text"
          value={name}
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="profile-phone">
          Phone <span className="text-outline font-normal">(optional)</span>
        </label>
        <input
          autoComplete="tel"
          className={inputClass}
          id="profile-phone"
          inputMode="tel"
          onChange={(event) => setPhone(event.target.value)}
          placeholder="03XX XXXXXXX"
          type="tel"
          value={phone}
        />
      </div>

      {error ? (
        <p className="rounded-xl bg-error-container/40 px-4 py-3 font-caption text-caption text-on-error-container text-center">
          {error}
        </p>
      ) : null}

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-bold transition-all disabled:opacity-60 disabled:cursor-not-allowed"
          disabled={submitting}
          type="submit"
        >
          <MaterialIcon name="save" className="text-[18px]" />
          <span>{submitting ? "Saving…" : "Save changes"}</span>
        </button>
        <button
          className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-full border border-outline-variant text-on-surface-variant hover:bg-surface-container font-label-md text-label-md font-semibold transition-colors disabled:opacity-60"
          disabled={submitting}
          onClick={cancelEditing}
          type="button"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
