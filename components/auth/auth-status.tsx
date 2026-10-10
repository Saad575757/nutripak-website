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

export default function AuthStatus() {
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
        className="w-9 h-9 rounded-full bg-surface-container animate-pulse"
      />
    );
  }

  if (customer) {
    const initials = customer.name
      .split(/\s+/)
      .map((part) => part[0])
      .filter(Boolean)
      .slice(0, 2)
      .join("")
      .toUpperCase();
    const firstName = customer.name.split(/\s+/)[0];

    return (
      <Link
        className="flex items-center gap-2 ml-1"
        href={ROUTES.account}
        title="My account"
      >
        <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-label-md font-bold">
          {initials}
        </span>
        <span className="hidden lg:flex flex-col leading-tight text-left">
          <span className="font-label-sm text-label-sm text-primary font-bold">
            Hi, {firstName}
          </span>
          <span className="font-caption text-caption text-on-surface-variant">
            My account
          </span>
        </span>
      </Link>
    );
  }

  return (
    <Link
      aria-label="Sign in"
      className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors ml-1"
      href={ROUTES.login}
      title="Sign in to your account"
    >
      <MaterialIcon name="person_outline" className="text-[20px]" />
    </Link>
  );
}