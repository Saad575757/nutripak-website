import Link from "next/link";
import type { ReactNode } from "react";

import MaterialIcon from "@/components/material-icon";

type PillTone = "light" | "cream" | "lime" | "teal";

const PILL_TONES: Record<PillTone, string> = {
  light: "bg-white/10 text-white ring-1 ring-white/20",
  cream: "bg-primary/5 text-primary ring-1 ring-primary/10",
  lime: "bg-secondary-container/20 text-secondary ring-1 ring-secondary/10",
  teal: "bg-primary text-on-primary ring-1 ring-primary/20",
};

export function Pill({
  children,
  tone = "cream",
  dot = true,
  className = "",
}: {
  children: ReactNode;
  tone?: PillTone;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-label-sm text-label-sm uppercase tracking-wider ${PILL_TONES[tone]} ${className}`}
    >
      {dot ? (
        <span className="h-1.5 w-1.5 rounded-full bg-current animate-hero-pulse" />
      ) : null}
      {children}
    </span>
  );
}

type CtaTone = "lime" | "teal" | "light" | "outline";

const CTA_TONES: Record<CtaTone, string> = {
  lime: "bg-secondary-container text-on-secondary-fixed hover:bg-secondary-fixed shadow-[0_14px_34px_-16px_rgba(174,210,84,0.9)]",
  teal: "bg-primary text-on-primary hover:bg-primary-container shadow-[0_14px_34px_-18px_rgba(0,105,92,0.8)]",
  light:
    "bg-surface-container-lowest text-primary hover:bg-surface-container-low shadow-lg",
  outline:
    "border border-outline-variant text-current hover:bg-surface-container/60 backdrop-blur-sm",
};

export function Cta({
  href,
  children,
  icon = "arrow_forward",
  tone = "lime",
  className = "",
}: {
  href: string;
  children: ReactNode;
  icon?: string;
  tone?: CtaTone;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-label-md text-label-md uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 ${CTA_TONES[tone]} ${className}`}
    >
      <span>{children}</span>
      <MaterialIcon
        name={icon}
        className="text-[18px] transition-transform duration-300 group-hover:translate-x-0.5"
      />
    </Link>
  );
}

export function Rating({
  label = "4.9/5 from 12,500+ routines",
  tone = "dark",
}: {
  label?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <div className="flex items-center gap-0.5 text-amber-400">
        {[0, 1, 2, 3, 4].map((star) => (
          <MaterialIcon
            key={star}
            name="star"
            fill
            className="text-[18px]"
          />
        ))}
      </div>
      <span
        className={`font-body-sm text-body-sm ${
          tone === "light" ? "text-white/70" : "text-on-surface-variant"
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export function CircleStamp({
  id,
  text,
  icon = "verified",
  className = "",
}: {
  /** Unique SVG path id — one per stamp on the page. */
  id: string;
  text: string;
  icon?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100" className="h-full w-full animate-hero-spin">
        <defs>
          <path
            id={id}
            d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
          />
        </defs>
        <text fill="currentColor" fontSize="8.2" letterSpacing="1.7">
          <textPath href={`#${id}`}>{text}</textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">
        <MaterialIcon name={icon} fill className="text-[20px]" />
      </span>
    </div>
  );
}

export function Feature({
  icon,
  title,
  description,
  tone = "dark",
}: {
  icon: string;
  title: string;
  description: string;
  tone?: "dark" | "light";
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          tone === "light"
            ? "bg-white/10 text-secondary-container"
            : "bg-primary/10 text-primary"
        }`}
      >
        <MaterialIcon name={icon} className="text-[20px]" />
      </span>
      <div>
        <p
          className={`font-title-md text-title-md ${
            tone === "light" ? "text-white" : "text-primary"
          }`}
        >
          {title}
        </p>
        <p
          className={`font-body-sm text-body-sm ${
            tone === "light" ? "text-white/60" : "text-on-surface-variant"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
