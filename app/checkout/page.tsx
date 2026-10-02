import type { Metadata } from "next";

import CheckoutForm from "@/components/checkout/checkout-form";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Complete your Nutripak order with cash on delivery across Pakistan.",
};

export default function CheckoutPage() {
  return (
    <div className="flex flex-col w-full">
      <CheckoutForm />
    </div>
  );
}