"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

import MaterialIcon from "@/components/material-icon";
import { useCart } from "@/components/cart/cart-context";
import {
  DELIVERY_FEE,
  EMPTY_CHECKOUT,
  PAYMENT_METHOD,
  deliveryFeeFor,
  orderReference,
  totalFor,
  validateCheckout,
  type CheckoutDetails,
  type CheckoutField,
} from "@/lib/checkout";
import { CONTACT_SHARED_DETAILS, OFFICES } from "@/lib/contact";
import { formatPkr } from "@/lib/shop";
import { FREE_SHIPPING_THRESHOLD, ROUTES } from "@/lib/site";

const CHECKOUT_FORM_ID = "checkout-form";

const inputClass =
  "w-full px-4 py-3 rounded-lg bg-surface-container border-0 font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none focus:ring-2 focus:ring-secondary";

const labelClass =
  "block font-label-md text-label-md text-primary font-bold mb-2";

export default function CheckoutForm() {
  const { items, subtotal, clearCart } = useCart();
  const [details, setDetails] = useState<CheckoutDetails>(EMPTY_CHECKOUT);
  const [errors, setErrors] = useState<Partial<Record<CheckoutField, string>>>(
    {}
  );
  const [reference, setReference] = useState<string | null>(null);

  const delivery = deliveryFeeFor(subtotal);
  const total = totalFor(subtotal);
  const remainingForFreeShipping = FREE_SHIPPING_THRESHOLD - subtotal;

  const update = (field: keyof CheckoutDetails) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setDetails((current) => ({ ...current, [field]: event.target.value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = validateCheckout(details);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // TODO: POST the order to your backend here. Nothing is transmitted yet.
    setReference(orderReference());
    clearCart();
  };

  if (reference) {
    return (
      <section className="w-full py-16 md:py-24">
        <div className="max-w-[760px] mx-auto px-margin-mobile md:px-margin">
          <div className="rounded-2xl bg-surface-container-lowest p-8 md:p-12 shadow-md flex flex-col gap-6 text-center items-center">
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container text-on-secondary-fixed">
              <MaterialIcon name="check_circle" className="text-[32px]" />
            </span>
            <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal">
              Order placed
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Thank you, {details.fullName.split(" ")[0]}. We will call you on{" "}
              <span className="text-primary font-semibold">{details.phone}</span>{" "}
              to confirm your delivery. Please have {PAYMENT_METHOD.toLowerCase()}{" "}
              ready.
            </p>

            <dl className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="rounded-xl bg-surface-container-low p-4">
                <dt className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
                  Order reference
                </dt>
                <dd className="font-title-md text-title-md text-primary font-bold mt-1">
                  {reference}
                </dd>
              </div>
              <div className="rounded-xl bg-surface-container-low p-4">
                <dt className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
                  Order total
                </dt>
                <dd className="font-title-md text-title-md text-primary font-bold mt-1">
                  {formatPkr(total)}
                </dd>
              </div>
              <div className="rounded-xl bg-surface-container-low p-4 sm:col-span-2">
                <dt className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
                  Delivering to
                </dt>
                <dd className="font-body-md text-body-md text-on-surface mt-1">
                  {details.address}, {details.city}
                  {details.postalCode ? ` ${details.postalCode}` : ""}
                </dd>
              </div>
            </dl>

            <p className="font-caption text-caption text-on-surface-variant">
              Questions about this order? Call us on{" "}
              <a
                className="text-secondary font-semibold hover:underline"
                href={OFFICES[0].phoneHref}
              >
                {OFFICES[0].phone}
              </a>{" "}
              or email{" "}
              <a
                className="text-secondary font-semibold hover:underline"
                href={CONTACT_SHARED_DETAILS.emailHref}
              >
                {CONTACT_SHARED_DETAILS.email}
              </a>
              .
            </p>

            <Link
              className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-container text-on-primary px-8 py-3.5 font-label-md text-label-md font-bold transition-colors"
              href={ROUTES.shop}
            >
              <span>Continue shopping</span>
              <MaterialIcon name="arrow_forward" className="text-[18px]" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="w-full py-24 md:py-32">
        <div className="max-w-[640px] mx-auto px-margin-mobile md:px-margin flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-surface-container text-on-surface-variant">
            <MaterialIcon name="shopping_bag" className="text-[32px]" />
          </span>
          <h1 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal">
            Your bag is empty
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Add a product before checking out.
          </p>
          <Link
            className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-container text-on-primary px-8 py-3.5 font-label-md text-label-md font-bold transition-colors"
            href={ROUTES.shop}
          >
            <span>Browse the shop</span>
            <MaterialIcon name="arrow_forward" className="text-[18px]" />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 md:py-20">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <nav className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant mb-6 flex-wrap">
          <Link className="hover:text-primary transition-colors" href={ROUTES.home}>
            Home
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">Checkout</span>
        </nav>

        <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal mb-10">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <form
            className="lg:col-span-7 flex flex-col gap-8"
            id={CHECKOUT_FORM_ID}
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="rounded-2xl bg-surface-container-lowest p-6 md:p-8 shadow-sm flex flex-col gap-5">
              <h2 className="font-title-lg text-title-lg text-primary">
                Contact details
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field
                  error={errors.fullName}
                  id="checkout-name"
                  label="Full name"
                >
                  <input
                    autoComplete="name"
                    className={inputClass}
                    id="checkout-name"
                    name="fullName"
                    onChange={update("fullName")}
                    placeholder="Full name"
                    type="text"
                    value={details.fullName}
                  />
                </Field>

                <Field error={errors.phone} id="checkout-phone" label="Phone number">
                  <input
                    autoComplete="tel"
                    className={inputClass}
                    id="checkout-phone"
                    inputMode="tel"
                    name="phone"
                    onChange={update("phone")}
                    placeholder="03XX XXXXXXX"
                    type="tel"
                    value={details.phone}
                  />
                </Field>
              </div>

              <Field
                error={errors.email}
                hint="Optional — we only use this for order updates."
                id="checkout-email"
                label="Email address"
              >
                <input
                  autoComplete="email"
                  className={inputClass}
                  id="checkout-email"
                  name="email"
                  onChange={update("email")}
                  placeholder="you@example.com"
                  type="email"
                  value={details.email}
                />
              </Field>
            </div>

            <div className="rounded-2xl bg-surface-container-lowest p-6 md:p-8 shadow-sm flex flex-col gap-5">
              <h2 className="font-title-lg text-title-lg text-primary">
                Delivery address
              </h2>

              <Field
                error={errors.address}
                id="checkout-address"
                label="Delivery address"
              >
                <textarea
                  autoComplete="street-address"
                  className={`${inputClass} min-h-[96px] resize-y`}
                  id="checkout-address"
                  name="address"
                  onChange={update("address")}
                  placeholder="House / flat, street, area"
                  value={details.address}
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field error={errors.city} id="checkout-city" label="City">
                  <input
                    autoComplete="address-level2"
                    className={inputClass}
                    id="checkout-city"
                    name="city"
                    onChange={update("city")}
                    placeholder="Karachi"
                    type="text"
                    value={details.city}
                  />
                </Field>

                <Field
                  hint="Optional"
                  id="checkout-postal"
                  label="Postal code"
                >
                  <input
                    autoComplete="postal-code"
                    className={inputClass}
                    id="checkout-postal"
                    inputMode="numeric"
                    name="postalCode"
                    onChange={update("postalCode")}
                    placeholder="75500"
                    type="text"
                    value={details.postalCode}
                  />
                </Field>
              </div>

              <Field
                hint="Optional"
                id="checkout-notes"
                label="Delivery notes"
              >
                <textarea
                  className={`${inputClass} min-h-[80px] resize-y`}
                  id="checkout-notes"
                  name="notes"
                  onChange={update("notes")}
                  placeholder="Landmark, best time to call, directions…"
                  value={details.notes}
                />
              </Field>
            </div>

            <div className="rounded-2xl bg-surface-container-lowest p-6 md:p-8 shadow-sm flex flex-col gap-4">
              <h2 className="font-title-lg text-title-lg text-primary">
                Payment
              </h2>
              <div className="flex items-center gap-3 rounded-xl bg-surface-container-low p-4">
                <MaterialIcon
                  name="payments"
                  className="text-[22px] text-secondary"
                />
                <div className="flex flex-col">
                  <span className="font-body-md text-body-md text-primary font-semibold">
                    {PAYMENT_METHOD}
                  </span>
                  <span className="font-caption text-caption text-on-surface-variant">
                    Pay the courier when your order arrives.
                  </span>
                </div>
              </div>
            </div>
          </form>

          <aside className="lg:col-span-5 lg:sticky lg:top-40">
            <div className="rounded-2xl bg-surface-container-lowest p-6 md:p-8 shadow-md flex flex-col gap-5">
              <h2 className="font-title-lg text-title-lg text-primary">
                Order summary
              </h2>

              <ul className="flex flex-col divide-y divide-surface-container">
                {items.map((item) => (
                  <li className="flex items-center gap-4 py-4" key={item.key}>
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-surface-container shrink-0">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        sizes="64px"
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="font-body-md text-body-md text-primary font-semibold truncate">
                        {item.name}
                      </span>
                      <span className="font-caption text-caption text-on-surface-variant">
                        {item.variant} · Qty {item.quantity}
                      </span>
                    </div>
                    <span className="font-body-md text-body-md text-primary font-semibold">
                      {formatPkr(item.price * item.quantity)}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-2 pt-4 border-t border-surface-container font-body-md text-body-md">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span>Subtotal</span>
                  <span>{formatPkr(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span>Delivery</span>
                  <span>
                    {delivery === 0 ? "Free" : formatPkr(delivery)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-primary font-bold text-title-lg pt-3 mt-1 border-t border-surface-container">
                  <span>Total</span>
                  <span>{formatPkr(total)}</span>
                </div>
              </div>

              {remainingForFreeShipping > 0 && (
                <p className="font-caption text-caption text-on-surface-variant">
                  Add {formatPkr(remainingForFreeShipping)} more for free delivery
                  (currently {formatPkr(DELIVERY_FEE)}).
                </p>
              )}

              <button
                className="w-full py-4 rounded-full bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2"
                type="submit"
                form={CHECKOUT_FORM_ID}
              >
                <MaterialIcon name="lock" className="text-[18px]" />
                <span>Place order · {formatPkr(total)}</span>
              </button>

              <p className="font-caption text-caption text-on-surface-variant text-center">
                By placing this order you agree to be contacted to confirm delivery.
                These products are not a substitute for medical treatment.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function Field({
  children,
  error,
  hint,
  id,
  label,
}: {
  children: React.ReactNode;
  error?: string;
  hint?: string;
  id: string;
  label: string;
}) {
  return (
    <div>
      <label className={labelClass} htmlFor={id}>
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1.5 font-caption text-caption text-error">{error}</p>
      ) : hint ? (
        <p className="mt-1.5 font-caption text-caption text-on-surface-variant">
          {hint}
        </p>
      ) : null}
    </div>
  );
}