"use client";

import { useEffect } from "react";

import {
  REFERRAL_STORAGE_KEY,
  parseReferral,
} from "@/lib/analytics";

/**
 * Captures UTM / referral parameters on first visit so checkout can attribute
 * the eventual order. Renders nothing.
 */
export default function ReferralTracker() {
  useEffect(() => {
    const referral = parseReferral(window.location.search);
    if (!referral) return;

    try {
      if (!window.localStorage.getItem(REFERRAL_STORAGE_KEY)) {
        window.localStorage.setItem(
          REFERRAL_STORAGE_KEY,
          JSON.stringify(referral),
        );
      }
      window.sessionStorage.setItem(
        REFERRAL_STORAGE_KEY,
        JSON.stringify(referral),
      );
    } catch {
      // Storage unavailable (private mode) — attribution is best-effort.
    }
  }, []);

  return null;
}
