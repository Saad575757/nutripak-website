import { NextResponse } from "next/server";

import { isDatabaseConfigured, newId, query } from "@/lib/db";
import { renderBrandedEmail } from "@/lib/email-template";
import { sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

interface NewsletterPayload {
  email?: unknown;
  source?: unknown;
}

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let payload: NewsletterPayload;
  try {
    payload = (await request.json()) as NewsletterPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = String(payload.email ?? "").trim().toLowerCase();
  const source = String(payload.source ?? "website").trim() || "website";

  if (!isEmail(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  let captured = false;

  if (isDatabaseConfigured()) {
    try {
      await saveSubscriber({ email, source });
      captured = true;
    } catch (error) {
      console.error("Newsletter subscriber could not be saved:", error);
    }
  }

  try {
    await sendMail({
      subject: `New newsletter subscriber — ${email}`,
      text: [
        "A new visitor subscribed to the Nutripak newsletter.",
        "",
        `Email: ${email}`,
        `Source: ${source}`,
      ].join("\n"),
      html: renderBrandedEmail({
        preheader: `New newsletter subscriber — ${email}`,
        heading: "New newsletter subscriber",
        intro: "A visitor subscribed to the Nutripak newsletter on nutripak.net.",
        sections: [
          {
            title: "Subscriber",
            rows: [
              { label: "Email", value: email },
              { label: "Source", value: source },
            ],
          },
        ],
        footerNote: "Add this address to your mailing list.",
      }),
      replyTo: email,
    });
    captured = true;
  } catch (error) {
    console.error("Newsletter notification email failed:", error);
  }

  if (!captured) {
    return NextResponse.json(
      { error: "We could not subscribe you right now. Please try again later." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}

/**
 * Stores a subscriber with an idempotent upsert so repeated sign-ups never
 * error. Re-subscribing reactivates an address that had unsubscribed.
 */
async function saveSubscriber(subscriber: {
  email: string;
  source: string;
}): Promise<void> {
  await query(
    `INSERT INTO "NewsletterSubscriber"
       (id, email, source, status, "createdAt", "updatedAt")
     VALUES ($1, $2, $3, 'SUBSCRIBED', now(), now())
     ON CONFLICT (email) DO UPDATE SET
       source = EXCLUDED.source,
       status = 'SUBSCRIBED',
       "updatedAt" = now()`,
    [newId(), subscriber.email, subscriber.source],
  );
}
