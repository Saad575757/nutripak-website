import { NextResponse } from "next/server";

import { createSession, isValidEmail, verifyPassword } from "@/lib/auth";
import { query } from "@/lib/db";

export const runtime = "nodejs";

interface LoginPayload {
  email?: unknown;
  password?: unknown;
}

export async function POST(request: Request) {
  let payload: LoginPayload;
  try {
    payload = (await request.json()) as LoginPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const email = String(payload.email ?? "").trim().toLowerCase();
  const password = String(payload.password ?? "");

  if (!email || !password) {
    return NextResponse.json(
      { error: "Enter your email and password." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: "Enter a valid email address." },
      { status: 400 },
    );
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { error: "Sign-in is unavailable right now." },
      { status: 503 },
    );
  }

  let row: { id: string; name: string; passwordHash: string; status: string };
  try {
    const result = await query<{
      id: string;
      name: string;
      passwordHash: string;
      status: string;
    }>(
      `SELECT id, name, "passwordHash", status
       FROM "Customer" WHERE email = $1 LIMIT 1`,
      [email],
    );
    row = result.rows[0];
  } catch (error) {
    console.error("Login lookup failed:", error);
    return NextResponse.json(
      { error: "Sign-in is unavailable right now." },
      { status: 503 },
    );
  }

  if (
    !row ||
    !(await verifyPassword(password, row.passwordHash))
  ) {
    return NextResponse.json(
      { error: "Incorrect email or password." },
      { status: 401 },
    );
  }

  if (row.status !== "ACTIVE") {
    return NextResponse.json(
      { error: "This account has been disabled." },
      { status: 403 },
    );
  }

  try {
    await createSession(row.id);
  } catch (error) {
    console.error("Session creation failed:", error);
    return NextResponse.json(
      { error: "We could not start your session. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true, name: row.name, email });
}