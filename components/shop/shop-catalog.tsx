import ProductCard from "@/components/shop/product-card";
import { SHOP_PRODUCTS } from "@/lib/shop";

export default function ShopCatalog() {
  return (
    <section className="w-full pb-20">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SHOP_PRODUCTS.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-surface-container">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Showing all {SHOP_PRODUCTS.length} formulations
          </span>
        </div>
      </div>
    </section>
  );
}
