"use client";

import { useState } from "react";

import MaterialIcon from "@/components/material-icon";
import Stars from "@/components/product/stars";
import { useCart } from "@/components/cart/cart-context";
import type { ShopProduct } from "@/lib/shop";
import type { PdpRecord } from "@/lib/pdps";

type Tier = "subscription" | "onetime";

export default function PdpBuybox({
  product,
  pdp,
}: {
  product: ShopProduct;
  pdp: PdpRecord;
}) {
  const { addItem, openCart } = useCart();
  const [format, setFormat] = useState(pdp.formats[0]);
  const [tier, setTier] = useState<Tier>("subscription");
  const [quantity, setQuantity] = useState(1);
  const [flash, setFlash] = useState(false);

  const basePrice = tier === "subscription" ? pdp.subscribePrice : pdp.onetimePrice;
  const total = basePrice * quantity;

  const handleAddToCart = () => {
    addItem({
      key: `${product.slug}-${format.id}`,
      name: product.name,
      variant: `${format.label} • ${tier === "subscription" ? "Subscription" : "One-Time"}`,
      price: basePrice,
      image: product.image,
      alt: product.alt,
    });
    openCart();
    setFlash(true);
    setTimeout(() => setFlash(false), 1800);
  };

  return (
    <div className="lg:col-span-5 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Stars count={5} className="gap-0 text-[18px]" />
            <span className="font-label-md text-label-md font-bold text-on-surface ml-1">
              {pdp.rating}
            </span>
            <a
              className="font-body-sm text-body-sm text-secondary hover:underline ml-1"
              href="#reviews-section"
            >
              ({pdp.reviewCount.toLocaleString()} reviews)
            </a>
          </div>
          <span className="font-caption text-caption uppercase tracking-wider font-bold text-outline">
            {pdp.itemNumber}
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg text-primary leading-tight font-normal">
          {product.name}
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant">{pdp.subtitle}</p>
      </div>

      <div className="p-4 rounded-xl bg-surface-container-low flex flex-col gap-2.5">
        {pdp.benefits.map((benefit) => (
          <div
            key={benefit.lead}
            className="flex items-start gap-2.5 font-body-sm text-body-sm text-on-surface"
          >
            <MaterialIcon name="check_circle" className="text-secondary text-[18px] mt-0.5" />
            <span>
              <strong className="font-semibold text-primary">{benefit.lead}</strong>
              {benefit.rest}
            </span>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-bold">
            Delivery Format
          </label>
          <span className="font-caption text-caption text-secondary font-semibold cursor-pointer hover:underline">
            Compare bio-retention
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {pdp.formats.map((form) => {
            const active = format.id === form.id;
            return (
              <button
                key={form.id}
                className={`p-3 rounded-xl text-left flex flex-col transition-all ${
                  active
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                }`}
                type="button"
                onClick={() => setFormat(form)}
              >
                <span className="font-label-md text-label-md font-bold">
                  {form.label}
                </span>
                <span
                  className={`font-caption text-caption ${
                    active ? "opacity-80" : "text-on-surface-variant"
                  }`}
                >
                  {form.caption}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-1">
        <div
          className={`p-4 rounded-xl transition-all cursor-pointer relative ${
            tier === "subscription"
              ? "bg-surface-container-lowest shadow-md"
              : "bg-surface-container-low opacity-90"
          }`}
          onClick={() => setTier("subscription")}
        >
          <div className="absolute -top-3 right-4 bg-secondary text-on-secondary px-2.5 py-0.5 rounded-full font-label-sm text-[10px] font-bold tracking-wider uppercase shadow-sm">
            SAVE 15% • RECOMMENDED
          </div>
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              className="mt-1 accent-primary w-4 h-4 cursor-pointer"
              checked={tier === "subscription"}
              name="purchase_tier"
              type="radio"
              value="subscription"
              onChange={() => setTier("subscription")}
            />
            <div className="flex-1 flex flex-col gap-1">
              <div className="flex items-baseline justify-between">
                <span className="font-title-md text-title-md text-primary font-bold">
                  Subscribe &amp; Save
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="font-title-lg text-title-lg text-primary font-extrabold">
                    ${pdp.subscribePrice.toFixed(2)}
                  </span>
                  <span className="font-body-sm text-body-sm line-through text-outline">
                    ${pdp.onetimePrice.toFixed(2)}
                  </span>
                </div>
              </div>
              <p className="font-caption text-caption text-secondary font-semibold">
                Free shipping always • Zero risk, cancel or swap anytime
              </p>
              <div className="mt-2 pt-2 flex flex-col gap-1.5">
                <div className="flex items-center justify-between text-[12px] font-label-sm text-on-surface-variant">
                  <span>Delivered every:</span>
                  <span className="text-secondary font-semibold">
                    Includes free glass storage refill jar
                  </span>
                </div>
                <select className="w-full bg-surface-container-low text-on-surface font-body-sm text-body-sm px-3 py-2 rounded-lg focus:outline-none focus:bg-surface-container cursor-pointer font-medium">
                  <option defaultValue="30">
                    Every 30 Days (Most Common — 1 Person Routine)
                  </option>
                  <option value="60">Every 60 Days (2 Bottles — Save Extra $2)</option>
                  <option value="90">Every 90 Days (Quarterly Supply)</option>
                </select>
              </div>
            </div>
          </label>
        </div>

        <div
          className={`p-4 rounded-xl transition-all cursor-pointer ${
            tier === "onetime"
              ? "bg-surface-container-lowest shadow-md opacity-100"
              : "bg-surface-container-low opacity-90 hover:opacity-100"
          }`}
          onClick={() => setTier("onetime")}
        >
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              className="accent-primary w-4 h-4 cursor-pointer"
              checked={tier === "onetime"}
              name="purchase_tier"
              type="radio"
              value="onetime"
              onChange={() => setTier("onetime")}
            />
            <div className="flex-1 flex items-center justify-between">
              <div className="flex flex-col">
                <span className="font-title-md text-title-md text-on-surface font-bold">
                  One-Time Purchase
                </span>
                <span className="font-caption text-caption text-on-surface-variant">
                  Single delivery of 1 bottle
                </span>
              </div>
              <span className="font-title-lg text-title-lg text-on-surface font-bold">
                ${pdp.onetimePrice.toFixed(2)}
              </span>
            </div>
          </label>
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-2">
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-full bg-surface-container p-1 shadow-inner">
            <button
              aria-label="Decrease quantity"
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors font-bold text-lg"
              type="button"
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            >
              &minus;
            </button>
            <span className="w-10 text-center font-label-md text-label-md font-bold text-primary">
              {quantity}
            </span>
            <button
              aria-label="Increase quantity"
              className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container-highest transition-colors font-bold text-lg"
              type="button"
              onClick={() => setQuantity((q) => q + 1)}
            >
              +
            </button>
          </div>
          <button
            className={`flex-1 h-12 rounded-full ${
              flash
                ? "bg-primary-container text-on-secondary-fixed"
                : "bg-primary text-on-primary hover:bg-primary-container"
            } font-label-md text-label-md font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-[0.99]`}
            id="add-to-cart-btn"
            type="button"
            onClick={handleAddToCart}
          >
            {flash ? (
              <>
                <MaterialIcon name="check_circle" className="text-[20px] text-secondary-fixed" />
                <span>Added to Your Routine!</span>
              </>
            ) : (
              <>
                <MaterialIcon name="shopping_bag" className="text-[20px]" />
                <span>Add to Bag • ${total.toFixed(2)}</span>
              </>
            )}
          </button>
        </div>
        <button
          className="w-full h-11 rounded-full bg-on-surface text-surface hover:opacity-90 font-label-md text-label-md font-semibold flex items-center justify-center gap-2 shadow-sm transition-opacity"
          type="button"
        >
          <span className="font-bold text-sm tracking-tight">Buy with</span>
          <MaterialIcon name="phone_iphone" className="text-[18px]" />
          <span className="font-bold text-sm">Apple Pay</span>
        </button>
      </div>

      <div className="flex items-center justify-around py-3 px-2 rounded-xl bg-surface-container-low/80 text-on-surface-variant font-caption text-caption text-center">
        <div className="flex flex-col items-center gap-1">
          <MaterialIcon name="sync" className="text-secondary text-[18px]" />
          <span>30-Day Happiness Guarantee</span>
        </div>
        <div className="w-px h-6 bg-outline-variant/40"></div>
        <div className="flex flex-col items-center gap-1">
          <MaterialIcon name="verified" className="text-secondary text-[18px]" />
          <span>Physician Formulated</span>
        </div>
        <div className="w-px h-6 bg-outline-variant/40"></div>
        <div className="flex flex-col items-center gap-1">
          <MaterialIcon name="nest_eco_leaf" className="text-secondary text-[18px]" />
          <span>100% Vegan &amp; Non-GMO</span>
        </div>
      </div>
    </div>
  );
}