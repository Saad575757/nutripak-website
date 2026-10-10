import type { Metadata } from "next";

import CheckoutForm from "@/components/checkout/checkout-form";

export const metadata: Metadata = {
  title: "Checkout",
  description:
    "Complete your Nutripak order with Cash on Delivery across Pakistan. No advance payment, and free delivery over Rs. 10,000.",
};

export default function CheckoutPage() {
  return (
    <div className="flex flex-col w-full">
      <CheckoutForm />
    </div>
  );
}