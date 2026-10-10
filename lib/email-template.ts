/**
 * Branded HTML email template for form submissions.
 *
 * Uses the same Nutripak palette as the storefront (dark green primary,
 * mint accent) with table-based layout and inline styles so it renders
 * consistently across email clients.
 */

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export interface EmailKeyValue {
  label: string;
  value: string;
}

export interface EmailLineItem {
  name: string;
  meta: string;
  amount: string;
}

export interface EmailSection {
  title: string;
  rows?: EmailKeyValue[];
  items?: EmailLineItem[];
  paragraphs?: string[];
}

export interface BrandedEmailOptions {
  preheader?: string;
  heading: string;
  intro?: string;
  sections?: EmailSection[];
  footerNote?: string;
}

const COLORS = {
  primary: "#00271b",
  secondary: "#006d43",
  accent: "#56fbab",
  surface: "#f2f3ff",
  border: "#e2e7ff",
  body: "#eaedff",
  text: "#131b2e",
  muted: "#717974",
  pageText: "#414944",
};

function renderRows(rows: EmailKeyValue[]): string {
  return rows
    .map(
      (row) => `
        <tr>
          <td style="padding:6px 0;font-size:14px;line-height:20px;color:${COLORS.muted};vertical-align:top;">${escapeHtml(
            row.label,
          )}</td>
          <td style="padding:6px 0;font-size:14px;line-height:20px;color:${
            COLORS.text
          };font-weight:600;text-align:right;vertical-align:top;">${escapeHtml(
            row.value,
          )}</td>
        </tr>`,
    )
    .join("");
}

function renderItems(items: EmailLineItem[]): string {
  return items
    .map(
      (item) => `
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-bottom:1px solid ${
          COLORS.border
        };">
          <tr>
            <td style="padding:12px 0;vertical-align:top;">
              <div style="font-size:14px;font-weight:600;color:${COLORS.text};">${escapeHtml(
                item.name,
              )}</div>
              <div style="font-size:13px;color:${COLORS.muted};margin-top:2px;">${escapeHtml(
                item.meta,
              )}</div>
            </td>
            <td style="padding:12px 0;font-size:14px;font-weight:600;color:${
              COLORS.text
            };text-align:right;white-space:nowrap;vertical-align:top;">${escapeHtml(
              item.amount,
            )}</td>
          </tr>
        </table>`,
    )
    .join("");
}

function renderParagraphs(paragraphs: string[]): string {
  return paragraphs
    .map(
      (paragraph) =>
        `<p style="margin:0 0 10px;font-size:14px;line-height:22px;color:${COLORS.pageText};white-space:pre-wrap;">${escapeHtml(
          paragraph,
        )}</p>`,
    )
    .join("");
}

function renderSection(section: EmailSection): string {
  const body = [
    section.rows ? renderRows(section.rows) : "",
    section.paragraphs ? renderParagraphs(section.paragraphs) : "",
    section.items ? renderItems(section.items) : "",
  ].join("");

  const table = section.rows
    ? `<table role="presentation" width="100%" cellpadding="0" cellspacing="0">${body}</table>`
    : body;

  return `
    <tr>
      <td style="padding-top:24px;">
        <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:1px;color:${
          COLORS.secondary
        };border-bottom:1px solid ${COLORS.border};padding-bottom:8px;margin-bottom:12px;">${escapeHtml(
          section.title,
        )}</div>
        ${table}
      </td>
    </tr>`;
}

export function renderBrandedEmail({
  preheader,
  heading,
  intro,
  sections = [],
  footerNote,
}: BrandedEmailOptions): string {
  const sectionsHtml = sections.map(renderSection).join("");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>${escapeHtml(heading)}</title>
  </head>
  <body style="margin:0;padding:0;background:${COLORS.body};font-family:Arial,Helvetica,sans-serif;">
    ${
      preheader
        ? `<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(
            preheader,
          )}</div>`
        : ""
    }
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${
      COLORS.body
    };">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;">
            <tr>
              <td style="background:${COLORS.primary};padding:28px 32px;">
                <div style="font-size:22px;font-weight:700;color:#ffffff;letter-spacing:3px;">NUTRIPAK</div>
                <div style="font-size:12px;color:#a2d1ba;margin-top:4px;">Nutrition that fits your goal</div>
              </td>
            </tr>
            <tr>
              <td style="height:4px;line-height:4px;font-size:0;background:${
                COLORS.accent
              };">&nbsp;</td>
            </tr>
            <tr>
              <td style="padding:32px 32px 12px;">
                <h1 style="margin:0;font-size:22px;line-height:30px;color:${
                  COLORS.primary
                };">${escapeHtml(heading)}</h1>
                ${
                  intro
                    ? `<p style="margin:12px 0 0;font-size:14px;line-height:22px;color:${COLORS.pageText};">${escapeHtml(
                        intro,
                      )}</p>`
                    : ""
                }
              </td>
            </tr>
            <tr>
              <td style="padding:0 32px 8px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  ${sectionsHtml}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 32px;">
                <div style="border-top:1px solid ${
                  COLORS.border
                };padding-top:16px;font-size:12px;line-height:18px;color:${COLORS.muted};">
                  ${
                    footerNote
                      ? escapeHtml(footerNote) + "<br />"
                      : ""
                  }
                  NUTRIPAK — a subsidiary of Alfalah Health Care, Karachi, Pakistan.
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
