import { FREE_SHIPPING_THRESHOLD } from "@/lib/site";

/** Flat delivery fee in PKR, applied below the free-shipping threshold. */
export const DELIVERY_FEE = 250;

/** The only payment method currently offered. */
export const PAYMENT_METHOD = "Cash on delivery";

export const CHECKOUT_FIELDS = {
  fullName: "Full name",
  phone: "Phone number",
  email: "Email address",
  address: "Delivery address",
  city: "City",
  postalCode: "Postal code",
  notes: "Delivery notes",
} as const;

export type CheckoutField = keyof typeof CHECKOUT_FIELDS;

export interface CheckoutDetails {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  notes: string;
}

export const EMPTY_CHECKOUT: CheckoutDetails = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  postalCode: "",
  notes: "",
};

/** Delivery is free at or above the threshold, otherwise a flat fee applies. */
export function deliveryFeeFor(subtotal: number): number {
  if (subtotal <= 0) return 0;
  return subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : DELIVERY_FEE;
}

export function totalFor(subtotal: number): number {
  return subtotal + deliveryFeeFor(subtotal);
}

/**
 * Loose check that keeps obvious typos out without rejecting the many valid
 * ways a Pakistani number can be written (+92, 0092, 03xx, spaces, dashes).
 */
export function isValidPhone(value: string): boolean {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function validateCheckout(
  details: CheckoutDetails
): Partial<Record<CheckoutField, string>> {
  const errors: Partial<Record<CheckoutField, string>> = {};

  if (!details.fullName.trim()) errors.fullName = "Please enter your name";
  if (!details.phone.trim()) errors.phone = "Please enter a phone number";
  else if (!isValidPhone(details.phone))
    errors.phone = "That phone number doesn’t look right";
  if (details.email.trim() && !isValidEmail(details.email))
    errors.email = "Please check this email address";
  if (!details.address.trim()) errors.address = "Please enter your address";
  if (!details.city.trim()) errors.city = "Please enter your city";

  return errors;
}

/** Short human-readable reference, e.g. NP-7QK4M2. */
export function orderReference(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";
  for (let index = 0; index < 6; index++) {
    suffix += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
  return `NP-${suffix}`;
}