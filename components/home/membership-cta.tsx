"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import MaterialIcon from "@/components/material-icon";
import { ROUTES } from "@/lib/site";

interface AuthCustomer {
  name: string;
  email: string;
  phone: string | null;
}

export default function MembershipCta() {
  const [customer, setCustomer] = useState<AuthCustomer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/auth/me")
      .then((response) => (response.ok ? response.json() : null))
      .then((data: { customer?: AuthCustomer } | null) => {
        if (cancelled) return;
        setCustomer(data?.customer ?? null);
      })
      .catch(() => {
        if (!cancelled) setCustomer(null);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <span
        aria-hidden
        className="w-48 h-14 rounded-full bg-on-primary/10 animate-pulse"
      />
    );
  }

  const label = customer ? "View My Profile" : "Join Nutripak Club";
  const href = customer ? ROUTES.account : ROUTES.login;

  return (
    <Link
      className="inline-flex items-center gap-2 rounded-full bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md px-8 py-4 font-bold uppercase tracking-wider transition-all"
      href={href}
    >
      {customer ? (
        <MaterialIcon name="person" className="text-[18px]" />
      ) : null}
      <span>{label}</span>
    </Link>
  );
}
