"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import MaterialIcon from "@/components/material-icon";
import { ROUTES } from "@/lib/site";

export default function LogoutButton() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);

  const handleLogout = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      router.push(ROUTES.home);
      router.refresh();
    }
  };

  return (
    <button
      className="inline-flex items-center justify-center gap-2 rounded-full border border-primary px-6 py-3 font-label-md text-label-md font-semibold text-primary hover:bg-primary hover:text-on-primary transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      disabled={submitting}
      onClick={handleLogout}
      type="button"
    >
      <MaterialIcon name="logout" className="text-[18px]" />
      <span>{submitting ? "Signing out…" : "Sign out"}</span>
    </button>
  );
}