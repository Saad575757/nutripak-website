import { NextResponse } from "next/server";

import {
  DatabaseUnavailableError,
  createPasswordResetToken,
  isValidEmail,
} from "@/lib/auth";
import { renderBrandedEmail } from "@/lib/email-template";
import { sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

interface ForgotPasswordPayload {
  email?: unknown;
}

/** Same response whether or not the email is registered (no enumeration). */
const GENERIC_MESSAGE =
  "If an account exists for that email, we've sent password reset instructions.";

/** Builds the public origin so reset links point back at this deployment. */
function siteOrigin(request: Request): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) return configured.replace(/\/$/, "");

  const host =
    request.headers.get("x-forwarded-host") ?? request.headers.get("host");
  if (host) {
    const isLocal = host.startsWith("localhost") || host.startsWith("127.");
    const proto =
      request.headers.get("x-forwarded-proto") ?? (isLocal ? "http" : "https");
    return `${proto}://${host}`;
  }

  return new URL(request.url).origin;
}

export async function POST(request: Request) {
  let payload: ForgotPasswordPayload;
  try {
    payload = (await request.json()) as ForgotPasswordPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = String(payload.email ?? "").trim().toLowerCase();
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  try {
    const reset = await createPasswordResetToken(email);
    if (reset) {
      const link = `${siteOrigin(request)}/reset-password?token=${reset.token}`;
      await sendMail({
        to: email,
        subject: "Reset your Nutripak password",
        text: [
          `Hi ${reset.name},`,
          "",
          "We received a request to reset your Nutripak password. Open the link below within the next 60 minutes to choose a new password:",
          "",
          link,
          "",
          "If you didn't request this, you can safely ignore this email — your current password still works.",
        ].join("\n"),
        html: renderBrandedEmail({
          preheader: "Reset your Nutripak password",
          heading: "Reset your password",
          intro: `Hi ${reset.name}, we received a request to reset your Nutripak password. This link is valid for the next 60 minutes.`,
          sections: [
            {
              title: "Choose a new password",
              paragraphs: [
                "Open the link below to set a new password:",
                link,
                "If you didn't request this, you can safely ignore this email — your current password still works.",
              ],
            },
          ],
          footerNote:
            "For your security, never share this link with anyone.",
        }),
      });
    }
  } catch (error) {
    if (error instanceof DatabaseUnavailableError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }
    // Never surface delivery/account details to the caller.
    console.error("Password reset request failed:", error);
  }

  return NextResponse.json({ ok: true, message: GENERIC_MESSAGE });
}
