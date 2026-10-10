import { NextResponse } from "next/server";

import { deliveryFeeFor, orderReference, totalFor } from "@/lib/checkout";
import { isDatabaseConfigured, newId, query, withTransaction } from "@/lib/db";
import { renderBrandedEmail } from "@/lib/email-template";
import { sendMail } from "@/lib/mailer";
import { PAYMENT_METHOD } from "@/lib/shipping";
import { formatPkr } from "@/lib/shop";

export const runtime = "nodejs";

interface OrderItemPayload {
  name?: unknown;
  variant?: unknown;
  slug?: unknown;
  price?: unknown;
  quantity?: unknown;
}

interface OrderPayload {
  fullName?: unknown;
  phone?: unknown;
  email?: unknown;
  address?: unknown;
  city?: unknown;
  postalCode?: unknown;
  notes?: unknown;
  items?: OrderItemPayload[];
}

export async function POST(request: Request) {
  let payload: OrderPayload;
  try {
    payload = (await request.json()) as OrderPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const fullName = String(payload.fullName ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const address = String(payload.address ?? "").trim();
  const city = String(payload.city ?? "").trim();
  const postalCode = String(payload.postalCode ?? "").trim();
  const notes = String(payload.notes ?? "").trim();

  const items = (Array.isArray(payload.items) ? payload.items : [])
    .map((item) => ({
      name: String(item.name ?? "").trim(),
      variant: String(item.variant ?? "").trim(),
      slug: String(item.slug ?? "").trim(),
      price: Number(item.price ?? 0),
      quantity: Number(item.quantity ?? 0),
    }))
    .filter((item) => item.name && item.quantity > 0);

  if (!fullName || !phone || !address || !city || items.length === 0) {
    return NextResponse.json(
      { error: "Missing required order details." },
      { status: 400 },
    );
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const delivery = deliveryFeeFor(subtotal);
  const total = totalFor(subtotal);
  const reference = orderReference();

  const lines = [
    `New order: ${reference}`,
    "",
    "Customer",
    `Name: ${fullName}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    "",
    "Delivery",
    `Address: ${address}`,
    `City: ${city}`,
    postalCode ? `Postal code: ${postalCode}` : null,
    notes ? `Notes: ${notes}` : null,
    "",
    "Items",
    ...items.map(
      (item) =>
        `- ${item.name} (${item.variant}) x${item.quantity} — ${formatPkr(
          item.price * item.quantity,
        )}`,
    ),
    "",
    `Subtotal: ${formatPkr(subtotal)}`,
    `Delivery: ${delivery === 0 ? "Free" : formatPkr(delivery)}`,
    `Total: ${formatPkr(total)}`,
    `Payment: ${PAYMENT_METHOD}`,
  ]
    .filter((line): line is string => line !== null)
    .join("\n");

  try {
    await saveOrder({
      reference,
      customerName: fullName,
      customerPhone: phone,
      customerEmail: email,
      address,
      city,
      notes,
      subtotal,
      delivery,
      total,
      items,
    });
  } catch (error) {
    console.error("Order could not be saved to the database:", error);
  }

  try {
    await sendMail({
      subject: `New order ${reference} — ${fullName}`,
      text: lines,
      html: renderBrandedEmail({
        preheader: `New order ${reference} from ${fullName}`,
        heading: "New order received",
        intro: `Order ${reference} was placed on nutripak.net.`,
        sections: [
          {
            title: "Customer",
            rows: [
              { label: "Name", value: fullName },
              { label: "Phone", value: phone },
              ...(email ? [{ label: "Email", value: email }] : []),
            ],
          },
          {
            title: "Delivery",
            rows: [
              { label: "Address", value: address },
              { label: "City", value: city },
              ...(postalCode
                ? [{ label: "Postal code", value: postalCode }]
                : []),
              ...(notes ? [{ label: "Notes", value: notes }] : []),
            ],
          },
          {
            title: "Items",
            items: items.map((item) => ({
              name: item.name,
              meta: `${item.variant} · Qty ${item.quantity}`,
              amount: formatPkr(item.price * item.quantity),
            })),
          },
          {
            title: "Summary",
            rows: [
              { label: "Subtotal", value: formatPkr(subtotal) },
              {
                label: "Delivery",
                value: delivery === 0 ? "Free" : formatPkr(delivery),
              },
              { label: "Total", value: formatPkr(total) },
              { label: "Payment", value: PAYMENT_METHOD },
            ],
          },
        ],
        footerNote: "Confirm this order with the customer before dispatch.",
      }),
      replyTo: email || undefined,
    });
  } catch (error) {
    console.error("Order email failed:", error);
    return NextResponse.json(
      { error: "We could not submit your order. Please try again." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true, reference, total });
}

interface PersistedOrderItem {
  name: string;
  slug: string;
  price: number;
  quantity: number;
}

interface PersistedOrder {
  reference: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  address: string;
  city: string;
  notes: string;
  subtotal: number;
  delivery: number;
  total: number;
  items: PersistedOrderItem[];
}

/**
 * Mirrors the submitted order into the dashboard database. Best-effort: the
 * email notification remains the guarantee that an order was captured, so a
 * database hiccup is logged rather than surfaced to the customer.
 */
async function saveOrder(order: PersistedOrder): Promise<void> {
  if (!isDatabaseConfigured()) return;

  const slugs = Array.from(
    new Set(order.items.map((item) => item.slug).filter(Boolean)),
  );

  const products = slugs.length
    ? await query<{ id: string; slug: string; sku: string }>(
        `SELECT id, slug, sku FROM "Product" WHERE slug = ANY($1::text[])`,
        [slugs],
      )
    : null;

  const bySlug = new Map(
    (products?.rows ?? []).map((row) => [row.slug, row]),
  );

  await withTransaction(async (client) => {
    const orderId = newId();

    await client.query(
      `INSERT INTO "Order"
         (id, "orderNumber", "customerName", "customerPhone", "customerEmail",
          address, city, notes, subtotal, "deliveryCharges", total,
          "paymentMethod", "createdAt", "updatedAt")
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12, now(), now())`,
      [
        orderId,
        order.reference,
        order.customerName,
        order.customerPhone,
        order.customerEmail || null,
        order.address,
        order.city,
        order.notes || null,
        order.subtotal,
        order.delivery,
        order.total,
        "COD",
      ],
    );

    for (const item of order.items) {
      const product = bySlug.get(item.slug);
      await client.query(
        `INSERT INTO "OrderItem"
           (id, "orderId", "productId", "productName", sku, "unitPrice", quantity)
         VALUES ($1,$2,$3,$4,$5,$6,$7)`,
        [
          newId(),
          orderId,
          product?.id ?? null,
          item.name,
          product?.sku ?? item.slug,
          item.price,
          item.quantity,
        ],
      );
    }
  });
}
