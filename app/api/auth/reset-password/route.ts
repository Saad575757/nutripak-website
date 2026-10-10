import { NextResponse } from "next/server";

import {
  AuthError,
  DatabaseUnavailableError,
  resetPasswordWithToken,
} from "@/lib/auth";

export const runtime = "nodejs";

interface ResetPasswordPayload {
  token?: unknown;
  password?: unknown;
}

export async function POST(request: Request) {
  let payload: ResetPasswordPayload;
  try {
    payload = (await request.json()) as ResetPasswordPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const token = String(payload.token ?? "").trim();
  const password = String(payload.password ?? "");

  if (!token) {
    return NextResponse.json(
      { error: "This reset link is invalid or has expired." },
      { status: 400 },
    );
  }

  try {
    await resetPasswordWithToken(token, password);
  } catch (error) {
    if (error instanceof DatabaseUnavailableError) {
      return NextResponse.json({ error: error.message }, { status: 503 });
    }
    if (error instanceof AuthError) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    console.error("Password reset failed:", error);
    return NextResponse.json(
      { error: "We could not reset your password. Please try again." },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
