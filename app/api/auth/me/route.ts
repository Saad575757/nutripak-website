import { NextResponse } from "next/server";

import { getCurrentCustomer } from "@/lib/auth";
import { isDatabaseConfigured } from "@/lib/db";

export const runtime = "nodejs";

export async function GET() {
  if (!isDatabaseConfigured()) {
    return NextResponse.json({ customer: null });
  }

  const customer = await getCurrentCustomer();
  if (!customer) {
    return NextResponse.json({ customer: null }, { status: 401 });
  }

  return NextResponse.json({
    customer: {
      name: customer.name,
      email: customer.email,
      phone: customer.phone,
    },
  });
}