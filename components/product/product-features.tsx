import MaterialIcon from "@/components/material-icon";
import type { ShopProduct } from "@/lib/shop";

export default function ProductFeatures({
  product,
}: {
  product: ShopProduct;
}) {
  return (
    <section className="w-full py-16 md:py-20 bg-surface-container-low">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col gap-8">
          <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal">
            Key Features
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.keyFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 rounded-xl bg-surface-container-lowest p-5 shadow-sm"
              >
                <MaterialIcon
                  name="check_circle"
                  className="text-[20px] text-secondary mt-0.5 shrink-0"
                />
                <span className="font-body-md text-body-md text-on-surface leading-relaxed">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
