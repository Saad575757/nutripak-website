import { NextResponse } from "next/server";

import { isDatabaseConfigured, newId, query } from "@/lib/db";
import { renderBrandedEmail } from "@/lib/email-template";
import { sendMail } from "@/lib/mailer";

export const runtime = "nodejs";

interface QueryPayload {
  name?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
}

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: Request) {
  let payload: QueryPayload;
  try {
    payload = (await request.json()) as QueryPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const topic = String(payload.topic ?? "General enquiry").trim();
  const message = String(payload.message ?? "").trim();

  if (!name || !message || !isEmail(email)) {
    return NextResponse.json(
      { error: "Please fill in your name, a valid email, and a message." },
      { status: 400 },
    );
  }

  const text = [
    `Name: ${name}`,
    `Reply to: ${email}`,
    `Topic: ${topic}`,
    "",
    message,
  ].join("\n");

  const html = renderBrandedEmail({
    preheader: `New enquiry from ${name} — ${topic}`,
    heading: "New website enquiry",
    intro: "A visitor submitted the contact form on nutripak.net.",
    sections: [
      {
        title: "Contact",
        rows: [
          { label: "Name", value: name },
          { label: "Email", value: email },
          { label: "Topic", value: topic },
        ],
      },
      {
        title: "Message",
        paragraphs: [message],
      },
    ],
    footerNote: "Reply directly to this email to respond to the customer.",
  });

  try {
    await saveContact({ name, email, topic, message });
  } catch (error) {
    console.error("Contact could not be saved to the database:", error);
  }

  try {
    await sendMail({
      subject: `Nutripak enquiry — ${topic}`,
      text,
      html,
      replyTo: email,
    });
  } catch (error) {
    console.error("Query form email failed:", error);
    return NextResponse.json(
      { error: "We could not send your query. Please try again or email us directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}

/**
 * Mirrors a contact enquiry into the dashboard database. Best-effort: the
 * email notification remains the guarantee that the enquiry was captured.
 */
async function saveContact(contact: {
  name: string;
  email: string;
  topic: string;
  message: string;
}): Promise<void> {
  if (!isDatabaseConfigured()) return;

  await query(
    `INSERT INTO "Contact"
       (id, name, email, topic, message, status, "createdAt", "updatedAt")
     VALUES ($1,$2,$3,$4,$5,'NEW', now(), now())`,
    [newId(), contact.name, contact.email, contact.topic, contact.message],
  );
}
