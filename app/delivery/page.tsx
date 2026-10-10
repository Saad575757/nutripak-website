import type { Metadata } from "next";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import CodSection from "@/components/shipping/cod-section";
import FreeDeliverySection from "@/components/shipping/free-delivery-section";
import { ROUTES } from "@/lib/site";
import { DELIVERY_WINDOW_DAYS, FREE_SHIPPING_THRESHOLD } from "@/lib/shipping";

export const metadata: Metadata = {
  title: "Delivery & Payment",
  description: `How Cash on Delivery works at Nutripak, and how to get free delivery on orders over Rs. ${FREE_SHIPPING_THRESHOLD.toLocaleString("en-PK")}.`,
};

export default function DeliveryPage() {
  return (
    <div className="flex flex-col w-full">
      <section className="w-full bg-primary text-on-primary">
        <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin py-14 md:py-20 flex flex-col gap-6">
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 font-label-sm text-label-sm text-on-primary/70"
          >
            <Link className="hover:text-secondary-container" href={ROUTES.home}>
              Home
            </Link>
            <span className="text-on-primary/40">/</span>
            <span className="text-secondary-container font-semibold">
              Delivery &amp; Payment
            </span>
          </nav>

          <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-secondary-container font-bold">
            Delivery &amp; payment
          </span>
          <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-primary font-normal leading-tight">
            Pay when it arrives. Free delivery over Rs.{" "}
            {FREE_SHIPPING_THRESHOLD.toLocaleString("en-PK")}.
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/80 leading-relaxed max-w-2xl">
            No advance payment, no card details, and no surprises at the door.
            Here is exactly how Cash on Delivery works, when delivery charges are
            waived, and what to expect when your rider arrives.
          </p>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-secondary-container">
            <span className="inline-flex items-center gap-2 font-label-sm text-label-sm">
              <MaterialIcon name="payments" className="text-[20px]" />
              Cash on Delivery on every order
            </span>
            <span className="inline-flex items-center gap-2 font-label-sm text-label-sm">
              <MaterialIcon name="local_shipping" className="text-[20px]" />
              Delivered in {DELIVERY_WINDOW_DAYS} business days
            </span>
          </div>
        </div>
      </section>

      <FreeDeliverySection />
      <CodSection />
    </div>
  );
}