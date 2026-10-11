import { NextResponse } from "next/server";

import {
  AuthError,
  DatabaseUnavailableError,
  getCurrentCustomer,
  updateCustomerProfile,
} from "@/lib/auth";
import { isDatabaseConfigured } from "@/lib/db";

export const runtime = "nodejs";

interface ProfilePayload {
  name?: unknown;
  phone?: unknown;
}

export async function PUT(request: Request) {
  if (!isDatabaseConfigured()) {
    return NextResponse.json(
      { error: "Profile updates are unavailable right now." },
      { status: 503 },
    );
  }

  const customer = await getCurrentCustomer();
  if (!customer) {
    return NextResponse.json({ error: "Please sign in first." }, { status: 401 });
  }

  let payload: ProfilePayload;
  try {
    payload = (await request.json()) as ProfilePayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(payload.name ?? "").trim();
  const phone = String(payload.phone ?? "").trim();

  try {
    await updateCustomerProfile(customer.id, { name, phone });
  } catch (error) {
    if (error instanceof DatabaseUnavailableError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }
    if (error instanceof AuthError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    console.error("Profile update failed:", error);
    return NextResponse.json(
      { error: "We could not save your profile. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, name, phone });
}
