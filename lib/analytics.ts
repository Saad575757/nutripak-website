/**
 * Lightweight first-touch attribution.
 *
 * Social posts, campaigns, and partner links can tag their destination with
 * UTM parameters. We keep the first referral seen in the browser and attach it
 * to the order so the admin inbox can see where a conversion came from — no
 * third-party script required.
 */

export const REFERRAL_STORAGE_KEY = "nutripak.referral.v1";

export interface ReferralSource {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
  term?: string;
  ref?: string;
  landingPage?: string;
  capturedAt?: string;
}

const REFERRAL_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "ref",
] as const;

const LABELS: Record<string, string> = {
  source: "Source",
  medium: "Medium",
  campaign: "Campaign",
  content: "Content",
  term: "Term",
  ref: "Referrer",
  landingPage: "Landing page",
  capturedAt: "Captured",
};

/** Reads referral parameters from a URL query string (e.g. `window.location.search`). */
export function parseReferral(search: string): ReferralSource | null {
  const params = new URLSearchParams(search);
  const referral: ReferralSource = {};

  for (const key of REFERRAL_PARAMS) {
    const value = params.get(key)?.trim();
    if (!value) continue;
    const field = key.replace("utm_", "") as keyof ReferralSource;
    referral[field] = value.slice(0, 120);
  }

  if (!referral.source && !referral.ref) return null;

  referral.capturedAt = new Date().toISOString();
  return referral;
}

/** First-touch referral stored on the visitor's device, if any. */
export function readStoredReferral(): string {
  if (typeof window === "undefined") return "";

  try {
    const raw =
      window.localStorage.getItem(REFERRAL_STORAGE_KEY) ??
      window.sessionStorage.getItem(REFERRAL_STORAGE_KEY);
    if (!raw) return "";

    const parsed = JSON.parse(raw) as ReferralSource;
    return formatReferral(parsed);
  } catch {
    return "";
  }
}

/** Human-readable single line, suitable for an email row or order note. */
export function formatReferral(referral: ReferralSource): string {
  return Object.entries(referral)
    .filter(([, value]) => Boolean(value))
    .map(([key, value]) => `${LABELS[key] ?? key}: ${value}`)
    .join(" · ");
}
