import { NextResponse } from "next/server";

import { isDatabaseConfigured, query } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface MediaRow {
  data: Buffer;
  mimeType: string;
}

/**
 * Serves images uploaded through the Nutripak dashboard.
 *
 * The dashboard stores product/category images as bytes in the shared `Media`
 * table and references them with root-relative paths (e.g. `/api/media/<id>`).
 * Mirroring the route here lets those relative URLs resolve on the storefront's
 * own origin, so `next/image` can render them without any cross-origin config.
 */
export async function GET(
  _request: Request,
  context: { params: Promise<{ id: string }> },
) {
  const { id } = await context.params;

  if (!isDatabaseConfigured()) {
    return NextResponse.json({ error: "Image not found." }, { status: 404 });
  }

  try {
    const result = await query<MediaRow>(
      `SELECT data, "mimeType" FROM "Media" WHERE id = $1 LIMIT 1`,
      [id],
    );
    const media = result.rows[0];
    if (!media) {
      return NextResponse.json({ error: "Image not found." }, { status: 404 });
    }

    const body = new Uint8Array(media.data);

    return new Response(body, {
      headers: {
        "Content-Type": media.mimeType,
        "Content-Length": String(body.byteLength),
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (error) {
    console.error("Media could not be served:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
