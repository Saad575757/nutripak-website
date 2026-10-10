import nodemailer, { type Transporter } from "nodemailer";

/**
 * SMTP configuration for outbound form submissions.
 *
 * Values come from environment variables so credentials never live in the repo.
 * Defaults match the Hostinger mailbox used by the site (auth: saad@gosoftlabs.com).
 * Set SMTP_PASS in `.env.local` before deploying — without it, sends will fail.
 */
const SMTP_HOST = process.env.SMTP_HOST ?? "smtp.hostinger.com";
const SMTP_PORT = Number(process.env.SMTP_PORT ?? 465);
const SMTP_SECURE = (process.env.SMTP_SECURE ?? "true") !== "false";
const SMTP_USER = process.env.SMTP_USER ?? "saad@gosoftlabs.com";
const SMTP_PASS = process.env.SMTP_PASS ?? "";

/** Verified sender address for all transactional form mail. */
export const MAIL_FROM = process.env.MAIL_FROM ?? SMTP_USER;

/** Inbox(es) that receive every form submission. */
export const MAIL_TO = (
  process.env.MAIL_TO ??
  "nutripak.np@gmail.com,muhammadsaadprofessional@gmail.com"
)
  .split(",")
  .map((address) => address.trim())
  .filter(Boolean);

let transporter: Transporter | null = null;

function getTransporter(): Transporter {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_SECURE,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
  }
  return transporter;
}

export interface MailInput {
  subject: string;
  text: string;
  /** Optional HTML version (a plain-text part is always included). */
  html?: string;
  /** Optional reply-to, usually the address the visitor entered. */
  replyTo?: string;
}

/** Sends a message to every configured recipient. */
export async function sendMail({ subject, text, html, replyTo }: MailInput) {
  if (!SMTP_PASS) {
    throw new Error("SMTP_PASS is not configured");
  }

  await getTransporter().sendMail({
    from: `Nutripak <${MAIL_FROM}>`,
    to: MAIL_TO,
    subject,
    text,
    ...(html ? { html } : {}),
    ...(replyTo ? { replyTo } : {}),
  });
}
