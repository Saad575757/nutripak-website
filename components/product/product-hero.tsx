import Image from "next/image";
import Link from "next/link";

import MaterialIcon from "@/components/material-icon";
import ProductPurchase from "@/components/product/product-purchase";
import type { ShopProduct } from "@/lib/shop";
import { ROUTES } from "@/lib/site";

export default function ProductHero({ product }: { product: ShopProduct }) {
  return (
    <section className="w-full pt-6 pb-12">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant mb-6 flex-wrap"
        >
          <Link className="hover:text-primary transition-colors" href={ROUTES.home}>
            Home
          </Link>
          <span className="text-outline-variant">/</span>
          <Link className="hover:text-primary transition-colors" href={ROUTES.shop}>
            Shop
          </Link>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          <div className="lg:col-span-7">
            <div className="relative w-full aspect-square rounded-2xl bg-surface-container-low overflow-hidden shadow-md">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                priority
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <h1 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-tight">
                {product.name}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
            </div>

            <ProductPurchase product={product} />

            <div className="flex items-start gap-3 pt-4 border-t border-surface-container">
              <MaterialIcon
                name="verified_user"
                className="text-[20px] text-secondary mt-0.5"
              />
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                These products are not a substitute for medical treatment.
                Please consult your doctor before use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
