"use client";

import Image from "next/image";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { useCart } from "@/components/cart/cart-context";
import { formatPkr } from "@/lib/shop";
import { FREE_SHIPPING_THRESHOLD, ROUTES } from "@/lib/site";

export default function CartDrawer() {
  const {
    items,
    subtotal,
    isOpen,
    closeCart,
    removeItem,
    increment,
    decrement,
  } = useCart();

  const freeShippingUnlocked = subtotal >= FREE_SHIPPING_THRESHOLD;
  const progressPct = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <>
      <div
        className={`fixed inset-y-0 right-0 w-full max-w-md bg-surface-container-lowest shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isOpen}
        aria-label="Shopping cart"
        role="dialog"
      >
        <div className="p-6 bg-surface-container flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MaterialIcon name="shopping_bag" className="text-primary text-[22px]" />
            <h3 className="font-title-lg text-title-lg text-primary font-bold">
              Your Wellness Bag ({items.length})
            </h3>
          </div>
          <button
            className="w-8 h-8 rounded-full bg-surface hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant transition-colors"
            onClick={closeCart}
            type="button"
            aria-label="Close cart"
          >
            <MaterialIcon name="close" className="text-[20px]" />
          </button>
        </div>

        <div className="p-4 bg-secondary-container/20">
          {freeShippingUnlocked ? (
            <>
              <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm mb-1.5 font-bold">
                <span>You unlocked FREE standard shipping!</span>
                <span>{Math.round(progressPct)}%</span>
              </div>
              <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                <div className="bg-secondary h-full rounded-full" style={{ width: `${progressPct}%` }} />
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-between text-secondary font-label-sm text-label-sm mb-1.5 font-bold">
                <span>You are {formatPkr(remaining)} away from FREE shipping</span>
                <span>{Math.round(progressPct)}%</span>
              </div>
              <div className="w-full bg-surface-container rounded-full h-2 overflow-hidden">
                <div className="bg-secondary h-full rounded-full" style={{ width: `${progressPct}%` }} />
              </div>
            </>
          )}
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center">
            <MaterialIcon name="shopping_bag" className="text-outline text-[40px]" />
            <p className="font-body-md text-body-md text-on-surface-variant">
              Your wellness bag is empty.
            </p>
            <Link
              href={ROUTES.shop}
              onClick={closeCart}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed px-6 py-3 font-label-md text-label-md uppercase tracking-wider shadow-sm transition-all"
            >
              <span>Start Shopping</span>
              <MaterialIcon name="arrow_forward" className="text-[16px]" />
            </Link>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 divide-y divide-surface-container">
            {items.map((item, index) => (
              <div
                key={item.key}
                className={`flex items-center gap-4 ${index === 0 ? "" : "pt-4"}`}
              >
                <div className="w-16 h-16 rounded-xl bg-surface-container-low p-2 shrink-0 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={64}
                    height={64}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="font-title-md text-title-md text-primary">
                    {item.name}
                  </h4>
                  <span className="font-body-sm text-body-sm text-secondary block">
                    {item.variant}
                  </span>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="inline-flex items-center rounded-full bg-surface-container font-label-sm text-label-sm">
                      <button
                        className="w-6 h-6 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"
                        onClick={() => decrement(item.key)}
                        type="button"
                        aria-label={`Decrease quantity of ${item.name}`}
                      >
                        <MaterialIcon name="remove" className="text-[14px]" />
                      </button>
                      <span className="w-5 text-center font-bold text-primary">
                        {item.quantity}
                      </span>
                      <button
                        className="w-6 h-6 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"
                        onClick={() => increment(item.key)}
                        type="button"
                        aria-label={`Increase quantity of ${item.name}`}
                      >
                        <MaterialIcon name="add" className="text-[14px]" />
                      </button>
                    </div>
                    <span className="font-title-md text-title-md font-bold text-primary">
                      {formatPkr(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
                <button
                  className="text-on-surface-variant hover:text-error p-1 transition-colors"
                  onClick={() => removeItem(item.key)}
                  type="button"
                  aria-label={`Remove ${item.name}`}
                >
                  <MaterialIcon name="delete" className="text-[18px]" />
                </button>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="p-6 bg-surface-container-low flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-body-md text-body-md text-on-surface-variant">
                Subtotal
              </span>
              <span className="font-title-lg text-title-lg font-bold text-primary">
                {formatPkr(subtotal)}
              </span>
            </div>
            <Link
              href={ROUTES.checkout}
              className="w-full py-4 rounded-full bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md font-bold uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center"
            >
              Proceed to Checkout
            </Link>
            <span className="font-caption text-caption text-center text-on-surface-variant">
              Cash on delivery. Delivery is free over PKR 5,000.
            </span>
          </div>
        )}
      </div>

      <div
        className={`fixed inset-0 bg-primary/40 backdrop-blur-sm z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden="true"
      />
    </>
  );
}