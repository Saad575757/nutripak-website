import {
  createHash,
  randomBytes,
  scrypt as scryptCallback,
  timingSafeEqual,
} from "node:crypto";
import { promisify } from "node:util";

import { cookies } from "next/headers";

import {
  isDatabaseConfigured,
  newId,
  query,
  withTransaction,
} from "@/lib/db";

const scrypt = promisify(scryptCallback);

const SESSION_COOKIE = "np_session";
const SESSION_LIFETIME_DAYS = 30;
const SESSION_LIFETIME_SECONDS = SESSION_LIFETIME_DAYS * 24 * 60 * 60;

const RESET_TOKEN_LIFETIME_MINUTES = 60;

export interface CustomerProfile {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  status: string;
  createdAt: Date;
}

export abstract class AuthError extends Error {}

export class ValidationError extends AuthError {}
export class InvalidCredentialsError extends AuthError {}
export class InvalidResetTokenError extends AuthError {}
export class DatabaseUnavailableError extends AuthError {}

export const isValidEmail = (value: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export function validateSignup(input: {
  name: string;
  email: string;
  password: string;
}): void {
  if (input.name.length < 2) {
    throw new ValidationError("Please enter your full name.");
  }
  if (!isValidEmail(input.email)) {
    throw new ValidationError("Please enter a valid email address.");
  }
  if (input.password.length < 8) {
    throw new ValidationError("Password must be at least 8 characters.");
  }
}

export async function hashPassword(password: string): Promise<string> {
  const salt = randomBytes(16).toString("hex");
  const hash = (await scrypt(password, salt, 64)) as Buffer;
  return `scrypt$${salt}$${hash.toString("hex")}`;
}

export async function verifyPassword(
  password: string,
  stored: string,
): Promise<boolean> {
  const [scheme, salt, hashHex] = stored.split("$");
  if (scheme !== "scrypt" || !salt || !hashHex) return false;
  const expected = Buffer.from(hashHex, "hex");
  const actual = (await scrypt(password, salt, expected.length)) as Buffer;
  return expected.length === actual.length && timingSafeEqual(actual, expected);
}

/**
 * Creates a session row and sets the httpOnly cookie. Only callable from a
 * Route Handler / Server Action (where the cookie store is writable).
 */
export async function createSession(customerId: string): Promise<void> {
  const token = randomBytes(32).toString("base64url");
  await query(
    `INSERT INTO "Session" (id, "customerId", "expiresAt", "createdAt")
     VALUES ($1, $2, now() + $3::interval, now())`,
    [token, customerId, `${SESSION_LIFETIME_DAYS} days`],
  );
  const store = await cookies();
  store.set(SESSION_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_LIFETIME_SECONDS,
  });
}

/** Removes the session row and clears the cookie. Route Handler only. */
export async function destroySession(): Promise<void> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (token && isDatabaseConfigured()) {
    try {
      await query(`DELETE FROM "Session" WHERE id = $1`, [token]);
    } catch (error) {
      console.error("Session could not be deleted:", error);
    }
  }
  store.delete(SESSION_COOKIE);
}

/** Resolves the current customer from the session cookie, if any. */
export async function getCurrentCustomer(): Promise<CustomerProfile | null> {
  const store = await cookies();
  const token = store.get(SESSION_COOKIE)?.value;
  if (!token || !isDatabaseConfigured()) return null;

  try {
    const result = await query<CustomerProfile>(
      `SELECT c.id, c.name, c.email, c.phone, c.status, c."createdAt"
       FROM "Session" s
       JOIN "Customer" c ON c.id = s."customerId"
       WHERE s.id = $1 AND s."expiresAt" > now()
       LIMIT 1`,
      [token],
    );
    return result.rows[0] ?? null;
  } catch (error) {
    console.error("Current customer could not be loaded:", error);
    return null;
  }
}

export interface NewCustomerInput {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

export interface UpdateProfileInput {
  name: string;
  phone?: string;
}

export async function updateCustomerProfile(
  customerId: string,
  input: UpdateProfileInput,
): Promise<void> {
  if (!isDatabaseConfigured()) {
    throw new DatabaseUnavailableError(
      "Profile updates are unavailable right now.",
    );
  }
  if (input.name.length < 2) {
    throw new ValidationError("Please enter your full name.");
  }

  await query(
    `UPDATE "Customer" SET name = $1, phone = $2, "updatedAt" = now()
     WHERE id = $3`,
    [input.name, input.phone?.trim() || null, customerId],
  );
}

export async function createCustomer(input: NewCustomerInput) {
  if (!isDatabaseConfigured()) {
    throw new DatabaseUnavailableError("Account sign-up is unavailable right now.");
  }

  const existing = await query(
    `SELECT id FROM "Customer" WHERE email = $1 LIMIT 1`,
    [input.email],
  );
  if (existing.rows.length > 0) {
    throw new ValidationError(
      "An account with this email already exists. Try logging in instead.",
    );
  }

  const passwordHash = await hashPassword(input.password);
  const id = newId();
  try {
    await query(
      `INSERT INTO "Customer" (id, name, email, phone, "passwordHash", status, "createdAt", "updatedAt")
       VALUES ($1, $2, $3, $4, $5, 'ACTIVE', now(), now())`,
      [
        id,
        input.name,
        input.email,
        input.phone?.trim() || null,
        passwordHash,
      ],
    );
  } catch (error) {
    // Unique index race: another sign-up used the same email meanwhile.
    const code =
      error && typeof error === "object" && "code" in error
        ? (error as { code?: unknown }).code
        : undefined;
    if (code === "23505") {
      throw new ValidationError(
        "An account with this email already exists. Try logging in instead.",
      );
    }
    throw error;
  }
  return id;
}

/** Reset tokens are stored hashed so a database leak cannot be replayed. */
function hashResetToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

/**
 * Creates a single-use password-reset token for an active account.
 * Returns `null` when no matching account exists so callers can respond
 * generically and avoid leaking which emails are registered.
 */
export async function createPasswordResetToken(
  email: string,
): Promise<{ token: string; name: string } | null> {
  if (!isDatabaseConfigured()) {
    throw new DatabaseUnavailableError(
      "Password reset is unavailable right now.",
    );
  }

  const result = await query<{ id: string; name: string }>(
    `SELECT id, name FROM "Customer"
     WHERE email = $1 AND status = 'ACTIVE' LIMIT 1`,
    [email],
  );
  const customer = result.rows[0];
  if (!customer) return null;

  const token = randomBytes(32).toString("base64url");
  const tokenHash = hashResetToken(token);

  await query(
    `DELETE FROM "PasswordResetToken"
     WHERE "customerId" = $1 AND "usedAt" IS NULL`,
    [customer.id],
  );
  await query(
    `INSERT INTO "PasswordResetToken"
       (id, "customerId", "tokenHash", "expiresAt", "createdAt")
     VALUES ($1, $2, $3, now() + $4::interval, now())`,
    [
      newId(),
      customer.id,
      tokenHash,
      `${RESET_TOKEN_LIFETIME_MINUTES} minutes`,
    ],
  );

  return { token, name: customer.name };
}

/**
 * Consumes a reset token and sets a new password. The token is single-use, and
 * every existing session for the account is cleared so a stolen session cannot
 * survive the reset.
 */
export async function resetPasswordWithToken(
  token: string,
  newPassword: string,
): Promise<void> {
  if (!isDatabaseConfigured()) {
    throw new DatabaseUnavailableError(
      "Password reset is unavailable right now.",
    );
  }
  if (newPassword.length < 8) {
    throw new ValidationError("Password must be at least 8 characters.");
  }

  const result = await query<{ customerId: string }>(
    `SELECT "customerId" FROM "PasswordResetToken"
     WHERE "tokenHash" = $1 AND "usedAt" IS NULL AND "expiresAt" > now()
     LIMIT 1`,
    [hashResetToken(token)],
  );
  const record = result.rows[0];
  if (!record) {
    throw new InvalidResetTokenError(
      "This reset link is invalid or has expired. Please request a new one.",
    );
  }

  const passwordHash = await hashPassword(newPassword);

  await withTransaction(async (client) => {
    await client.query(
      `UPDATE "Customer" SET "passwordHash" = $1, "updatedAt" = now()
       WHERE id = $2`,
      [passwordHash, record.customerId],
    );
    await client.query(
      `UPDATE "PasswordResetToken" SET "usedAt" = now()
       WHERE "customerId" = $1 AND "usedAt" IS NULL`,
      [record.customerId],
    );
    await client.query(`DELETE FROM "Session" WHERE "customerId" = $1`, [
      record.customerId,
    ]);
  });
}