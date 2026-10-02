"use client";

import Image from "next/image";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { useCart } from "@/components/cart/cart-context";
import { formatPkr, type ShopProduct } from "@/lib/shop";
import { ROUTES } from "@/lib/site";

export default function ProductCard({ product }: { product: ShopProduct }) {
  const { addItem, openCart } = useCart();

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

  return (
    <div className="group flex flex-col bg-surface-container-lowest rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <Link
        className="relative aspect-square w-full rounded-lg bg-surface-container-low overflow-hidden mb-5 block"
        href={ROUTES.product(product.slug)}
      >
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      <Link
        className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mb-1.5 leading-snug"
        href={ROUTES.product(product.slug)}
      >
        {product.name}
      </Link>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
        {product.tagline}
      </p>

      <div className="mt-auto pt-4 border-t border-surface-container flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="text-xs text-on-surface-variant uppercase font-label-sm tracking-wide block">
            Retail Price
          </span>
          <span className="font-title-lg text-title-lg text-primary font-bold">
            {formatPkr(product.pricePkr)}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            className="w-full py-2.5 rounded-full text-center font-label-md text-label-md font-semibold text-primary bg-surface-container hover:bg-surface-container-high transition-colors"
            href={ROUTES.product(product.slug)}
          >
            View Details
          </Link>
          <button
            className="w-full py-2.5 rounded-full text-center font-label-md text-label-md font-semibold text-on-primary bg-primary hover:bg-primary-container transition-all shadow-sm flex items-center justify-center gap-1.5"
            type="button"
            onClick={handleOrderNow}
          >
            <MaterialIcon name="add_shopping_cart" className="text-[18px]" />
            <span>Order Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
