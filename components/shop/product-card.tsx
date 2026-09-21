"use client";

import Image from "next/image";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import { useCart } from "@/components/cart/cart-context";
import { ROUTES } from "@/lib/site";
import type { ShopProduct } from "@/lib/shop";

export default function ProductCard({ product }: { product: ShopProduct }) {
  const { addItem, openCart } = useCart();

  const handleQuickAdd = () => {
    addItem({
      key: product.slug,
      name: product.name,
      variant: product.variant,
      price: product.price,
      image: product.image,
      alt: product.alt,
    });
    openCart();
  };

  return (
    <div className="group flex flex-col bg-surface-container-lowest rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative aspect-square w-full rounded-lg bg-surface-container-low overflow-hidden flex items-center justify-center mb-5">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          <span
            className={`px-2.5 py-1 rounded-full text-[11px] font-label-sm uppercase font-bold tracking-wider shadow-sm ${product.badgeClass}`}
          >
            {product.badge}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-on-surface text-[10px] font-label-sm font-semibold">
            {product.subBadge}
          </span>
        </div>
        <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center text-primary hover:text-secondary cursor-pointer transition-colors shadow-sm">
          <MaterialIcon name="favorite_border" className="text-[18px]" />
        </span>
      </div>

      <div className="flex items-center justify-between mb-2">
        <span
          className={`px-2.5 py-1 rounded-full text-[11px] font-label-sm uppercase font-bold tracking-wider ${product.tagClass}`}
        >
          {product.tag}
        </span>
        <div className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface">
          <MaterialIcon name="star" fill className="text-amber-500 text-[16px]" />
          <span className="font-bold">{product.rating}</span>
          <span className="text-on-surface-variant font-normal">
            ({product.reviews})
          </span>
        </div>
      </div>

      <Link
        className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mb-1.5 leading-snug"
        href={ROUTES.product(product.slug)}
      >
        {product.name}
      </Link>
      <p className="font-body-sm text-body-sm text-on-surface-variant mb-4 line-clamp-2">
        {product.description}
      </p>

      <div className="mt-auto pt-4 border-t border-surface-container flex flex-col gap-3">
        <div className="flex items-baseline justify-between">
          <div>
            <span className="text-xs text-on-surface-variant uppercase font-label-sm tracking-wide block">
              Subscribe &amp; Save 15%
            </span>
            <span className="font-title-lg text-title-lg text-primary font-bold">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-on-surface-variant line-through ml-1.5">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>
          <span className="text-xs text-secondary font-bold bg-secondary-fixed/20 px-2 py-1 rounded-full">
            Save ${(product.originalPrice - product.price).toFixed(2)}
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2 pt-1">
          <Link
            className="w-full py-2.5 rounded-full text-center font-label-md text-label-md font-semibold text-primary bg-surface-container hover:bg-surface-container-high transition-colors"
            href={ROUTES.product(product.slug)}
          >
            View Lab Data
          </Link>
          <button
            className="w-full py-2.5 rounded-full text-center font-label-md text-label-md font-semibold text-on-primary bg-primary hover:bg-primary-container transition-all shadow-sm flex items-center justify-center gap-1.5"
            type="button"
            onClick={handleQuickAdd}
          >
            <MaterialIcon name="add_shopping_cart" className="text-[18px]" />
            <span>Quick Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}