import { NextResponse } from "next/server";

import {
  AuthError,
  DatabaseUnavailableError,
  createCustomer,
  createSession,
  validateSignup,
} from "@/lib/auth";

export const runtime = "nodejs";

interface SignupPayload {
  name?: unknown;
  email?: unknown;
  password?: unknown;
  phone?: unknown;
}

export async function POST(request: Request) {
  let payload: SignupPayload;
  try {
    payload = (await request.json()) as SignupPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = String(payload.name ?? "").trim();
  const email = String(payload.email ?? "").trim().toLowerCase();
  const password = String(payload.password ?? "");
  const phone = String(payload.phone ?? "").trim();

  try {
    validateSignup({ name, email, password });
    const customerId = await createCustomer({ name, email, password, phone });
    await createSession(customerId);
  } catch (error) {
    if (error instanceof DatabaseUnavailableError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }
    if (error instanceof AuthError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    console.error("Sign-up failed:", error);
    return NextResponse.json(
      { error: "We could not create your account. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, name, email });
}