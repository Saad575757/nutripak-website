import { randomBytes } from "node:crypto";

import { Pool, type PoolClient, type QueryResult, type QueryResultRow } from "pg";

/**
 * Shared PostgreSQL pool for the Nutripak admin database (the same Neon
 * instance the dashboard uses). The pool is cached on `globalThis` so Next.js
 * dev hot-reloads do not leak connections.
 */
const globalForDb = globalThis as typeof globalThis & {
  __nutripakPool?: Pool;
};

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

function getPool(): Pool {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error("DATABASE_URL is not configured.");
  }

  if (!globalForDb.__nutripakPool) {
    globalForDb.__nutripakPool = new Pool({
      connectionString,
      // Neon requires TLS; the pooler certificate is validated at the network
      // level, so we do not ship a CA bundle here.
      ssl: { rejectUnauthorized: false },
      max: 3,
      idleTimeoutMillis: 10_000,
      connectionTimeoutMillis: 10_000,
    });
  }

  return globalForDb.__nutripakPool;
}

export async function query<T extends QueryResultRow = QueryResultRow>(
  text: string,
  params: unknown[] = [],
): Promise<QueryResult<T>> {
  return getPool().query<T>(text, params);
}

export async function withTransaction<T>(
  run: (client: PoolClient) => Promise<T>,
): Promise<T> {
  const client = await getPool().connect();
  try {
    await client.query("BEGIN");
    const result = await run(client);
    await client.query("COMMIT");
    return result;
  } catch (error) {
    await client.query("ROLLBACK").catch(() => undefined);
    throw error;
  } finally {
    client.release();
  }
}

const ID_ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyz";

/** CUID-shaped id so storefront rows look like the dashboard's Prisma rows. */
export function newId(): string {
  const bytes = randomBytes(16);
  let suffix = "";
  for (let index = 0; index < bytes.length; index++) {
    suffix += ID_ALPHABET[bytes[index] % ID_ALPHABET.length];
  }
  return `c${Date.now().toString(36)}${suffix}`;
}
