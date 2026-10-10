import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";

import LogoutButton from "@/components/auth/logout-button";
import MaterialIcon from "@/components/material-icon";
import { getCurrentCustomer } from "@/lib/auth";
import { isDatabaseConfigured, query } from "@/lib/db";
import { formatPkr } from "@/lib/shop";
import { ROUTES } from "@/lib/site";

export const metadata: Metadata = {
  title: "My account | Nutripak",
  description: "Your Nutripak account and order details.",
};

export const dynamic = "force-dynamic";

const ORDER_STATUS_LABEL: Record<string, string> = {
  PENDING: "Pending",
  CONFIRMED: "Confirmed",
  PROCESSING: "Processing",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  CANCELLED: "Cancelled",
};

const ORDER_STATUS_CLASS: Record<string, string> = {
  PENDING: "bg-surface-variant text-on-surface",
  CONFIRMED: "bg-secondary-container text-on-secondary-fixed",
  PROCESSING: "bg-primary-container text-primary",
  SHIPPED: "bg-secondary/20 text-secondary",
  DELIVERED: "bg-primary text-on-primary",
  CANCELLED: "bg-error-container text-on-error-container",
};

const PAYMENT_METHOD_LABEL: Record<string, string> = {
  COD: "Cash on Delivery",
};

interface OrderRow {
  id: string;
  orderNumber: string;
  total: string | number;
  status: string;
  paymentMethod: string;
  createdAt: Date;
}

async function getOrderHistory(customerId: string): Promise<OrderRow[]> {
  try {
    const result = await query<OrderRow>(
      `SELECT id, "orderNumber", total, status, "paymentMethod", "createdAt"
       FROM "Order"
       WHERE "customerId" = $1
       ORDER BY "createdAt" DESC`,
      [customerId],
    );
    return result.rows;
  } catch (error) {
    console.error("Order history could not be loaded:", error);
    return [];
  }
}

export default async function AccountPage() {
  const customer = await getCurrentCustomer();
  if (!customer) {
    redirect(isDatabaseConfigured() ? ROUTES.login : ROUTES.home);
  }

  const orders = await getOrderHistory(customer.id);

  const initials = customer.name
    .split(/\s+/)
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <section className="w-full py-12 md:py-20 px-margin-mobile md:px-margin">
      <div className="max-w-[1320px] mx-auto">
        <nav className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant mb-6 flex-wrap">
          <Link className="hover:text-primary transition-colors" href={ROUTES.home}>
            Home
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">My account</span>
        </nav>

        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal mb-10">
          My account
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-surface-container-lowest p-8 md:p-10 shadow-md flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-primary text-on-primary font-title-lg font-bold">
                  {initials}
                </span>
                <div>
                  <h2 className="font-title-lg text-title-lg text-primary">
                    {customer.name}
                  </h2>
                  <p className="font-caption text-caption text-on-surface-variant">
                    {customer.email}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-surface-container p-4">
                  <dt className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
                    Email
                  </dt>
                  <dd className="font-body-md text-body-md text-primary mt-1 break-all">
                    {customer.email}
                  </dd>
                </div>
                <div className="rounded-xl bg-surface-container p-4">
                  <dt className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
                    Phone
                  </dt>
                  <dd className="font-body-md text-body-md text-primary mt-1">
                    {customer.phone || "Not added"}
                  </dd>
                </div>
                <div className="rounded-xl bg-surface-container p-4 sm:col-span-2">
                  <dt className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
                    Member since
                  </dt>
                  <dd className="font-body-md text-body-md text-primary mt-1">
                    {new Date(customer.createdAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </dd>
                </div>
              </div>

              <LogoutButton />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-surface-container-lowest p-8 md:p-10 shadow-md flex flex-col gap-6">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <h2 className="font-title-lg text-title-lg text-primary">
                  Order history
                </h2>
                <Link
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary px-4 py-2 font-label-sm text-label-sm font-semibold text-primary hover:bg-primary hover:text-on-primary transition-colors"
                  href={ROUTES.shop}
                >
                  <MaterialIcon name="add_shopping_cart" className="text-[16px]" />
                  <span>Shop more</span>
                </Link>
              </div>

              {orders.length === 0 ? (
                <div className="rounded-2xl bg-surface-container p-8 flex flex-col items-center gap-4 text-center">
                  <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-surface-container-high text-on-surface-variant">
                    <MaterialIcon name="receipt_long" className="text-[28px]" />
                  </span>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-sm">
                    No orders yet. When you check out while signed in, your orders
                    will appear here.
                  </p>
                  <Link
                    className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-container text-on-primary px-6 py-3 font-label-md text-label-md font-bold transition-colors"
                    href={ROUTES.shop}
                  >
                    <span>Start shopping</span>
                    <MaterialIcon name="arrow_forward" className="text-[18px]" />
                  </Link>
                </div>
              ) : (
                <ul className="flex flex-col gap-4">
                  {orders.map((order) => {
                    const statusLabel =
                      ORDER_STATUS_LABEL[order.status] ?? order.status;
                    const statusClass =
                      ORDER_STATUS_CLASS[order.status] ?? "bg-surface-variant text-on-surface";
                    const paymentLabel =
                      PAYMENT_METHOD_LABEL[order.paymentMethod] ??
                      order.paymentMethod;
                    return (
                      <li
                        className="rounded-2xl bg-surface-container p-5 md:p-6 flex flex-col gap-4"
                        key={order.id}
                      >
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                          <div className="flex flex-col gap-1">
                            <span className="font-title-md text-title-md text-primary font-bold">
                              {order.orderNumber}
                            </span>
                            <span className="font-caption text-caption text-on-surface-variant">
                              Placed{" "}
                              {new Date(order.createdAt).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "numeric",
                                  month: "short",
                                  year: "numeric",
                                },
                              )}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span
                              className={`rounded-full px-3 py-1 font-label-sm text-label-sm font-bold ${statusClass}`}
                            >
                              {statusLabel}
                            </span>
                            <span className="rounded-full bg-surface-container-high px-3 py-1 font-label-sm text-label-sm font-bold text-on-surface">
                              {paymentLabel}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between gap-4 pt-4 border-t border-surface-variant">
                          <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
                            Order total
                          </span>
                          <span className="font-title-md text-title-md text-primary font-bold">
                            {formatPkr(Number(order.total))}
                          </span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}