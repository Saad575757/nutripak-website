"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import MaterialIcon from "@/components/material-icon";
import { useCart } from "@/components/cart/cart-context";
import { formatPkr } from "@/lib/shop";
import { FEATURED_PRODUCTS, ROUTES, type ProductCard } from "@/lib/site";

const FILTERS = [
  { label: "All Products", active: true },
  { label: "Complete Nutrition", active: false },
  { label: "Diabetic Care", active: false },
  { label: "Protein Support", active: false },
];

function ProductCardView({ product }: { product: ProductCard }) {
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
    <div className="group flex flex-col justify-between bg-surface-container-lowest rounded-3xl p-5 shadow-sm hover:shadow-xl transition-all">
      <div className="flex flex-col gap-4">
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-surface-container-low p-4 flex items-center justify-center">
          <Image
            src={product.image}
            alt={product.alt}
            width={800}
            height={800}
            className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div>
          <Link href={ROUTES.product(product.slug)}>
            <h3 className="font-title-lg text-title-lg text-primary mb-1 transition-colors group-hover:text-secondary">
              {product.name}
            </h3>
          </Link>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            {product.description}
          </p>
        </div>
      </div>
      <div className="pt-6 mt-4 flex flex-col gap-3">
        <div className="flex flex-col">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
            Retail Price
          </span>
          <span className="font-title-lg text-title-lg text-primary font-bold">
            {formatPkr(product.pricePkr)}
          </span>
        </div>
        <button
          className="w-full py-3.5 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md font-semibold transition-all flex items-center justify-center gap-2"
          onClick={handleOrderNow}
          type="button"
        >
          <MaterialIcon name="add_shopping_cart" className="text-[18px]" />
          <span>Order Now</span>
        </button>
      </div>
    </div>
  );
}

export default function FeaturedProducts() {
  const [activeFilter, setActiveFilter] = useState(0);

  return (
    <section className="w-full py-16 md:py-24 px-margin-mobile md:px-margin" id="featured-products">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-2">
              CLINICALLY PROVEN
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
              OUR BESTSELLERS
            </h2>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {FILTERS.map((filter, index) => (
              <button
                key={filter.label}
                className={`px-5 py-2.5 rounded-full font-label-sm text-label-sm whitespace-nowrap transition-colors ${
                  activeFilter === index
                    ? "bg-primary text-on-primary"
                    : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                }`}
                onClick={() => setActiveFilter(index)}
                type="button"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCardView key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}