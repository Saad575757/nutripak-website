"use client";

import { useState } from "react";

import MaterialIcon from "@/components/material-icon";
import { useCart } from "@/components/cart/cart-context";
import { formatPkr, type ShopProduct } from "@/lib/shop";

export default function ProductPurchase({ product }: { product: ShopProduct }) {
  const { addItem, openCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleOrderNow = () => {
    addItem({
      key: product.slug,
      name: product.name,
      variant: product.variant,
      price: product.pricePkr,
      image: product.image,
      alt: product.alt,
    });
    openCart();
  };

  const setStep = (next: number) =>
    setQuantity((current) => Math.min(10, Math.max(1, current + next)));

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
          Retail Price
        </span>
        <span className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal">
          {formatPkr(product.pricePkr)}
        </span>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center rounded-full bg-surface-container font-label-md text-label-md">
            <button
              className="w-9 h-9 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"
              onClick={() => setStep(-1)}
              type="button"
              aria-label="Decrease quantity"
            >
              <MaterialIcon name="remove" className="text-[16px]" />
            </button>
            <span className="w-8 text-center font-bold text-primary">
              {quantity}
            </span>
            <button
              className="w-9 h-9 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors"
              onClick={() => setStep(1)}
              type="button"
              aria-label="Increase quantity"
            >
              <MaterialIcon name="add" className="text-[16px]" />
            </button>
          </div>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {product.variant}
          </span>
        </div>

        <button
          className="w-full py-4 rounded-full text-center font-label-md text-label-md font-bold text-on-primary bg-primary hover:bg-primary-container transition-all shadow-sm flex items-center justify-center gap-2"
          type="button"
          onClick={handleOrderNow}
        >
          <MaterialIcon name="add_shopping_cart" className="text-[18px]" />
          <span>Order Now</span>
        </button>

        <p className="font-caption text-caption text-on-surface-variant text-center">
          Cash on delivery available
        </p>
      </div>
    </div>
  );
}
