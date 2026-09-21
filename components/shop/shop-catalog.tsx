import MaterialIcon from "@/components/material-icon";
import { SHOP_PRODUCTS } from "@/lib/shop";
import { ROUTES } from "@/lib/site";
import ProductCard from "@/components/shop/product-card";

export default function ShopCatalog() {
  const firstGrid = SHOP_PRODUCTS.slice(0, 6);
  const secondGrid = SHOP_PRODUCTS.slice(6);

  return (
    <section className="w-full pb-20">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {firstGrid.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="my-16 rounded-xl overflow-hidden bg-primary-container text-on-primary relative shadow-md">
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none hidden md:block">
            <svg
              className="w-full h-full text-secondary-fixed"
              viewBox="0 0 400 400"
            >
              <circle
                cx="200"
                cy="200"
                fill="none"
                r="160"
                stroke="currentColor"
                strokeDasharray="8 6"
                strokeWidth="1.5"
              ></circle>
              <circle
                cx="200"
                cy="200"
                fill="none"
                r="110"
                stroke="currentColor"
                strokeWidth="1"
              ></circle>
              <circle
                cx="200"
                cy="200"
                fill="none"
                r="60"
                stroke="currentColor"
                strokeWidth="2"
              ></circle>
            </svg>
          </div>
          <div className="p-8 md:p-12 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <span className="px-3 py-1 rounded-full bg-secondary-container text-on-secondary-fixed text-xs font-label-sm uppercase font-bold tracking-wider inline-block mb-3">
                Personalized Cellular Guidance
              </span>
              <h2 className="font-headline-md text-headline-md text-on-primary font-normal leading-tight mb-3">
                Unsure which formulation matches your bloodwork or biomarker
                profile?
              </h2>
              <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                Take our 2-minute clinical algorithm assessment developed by
                Oxford and Stanford cellular nutritionists to personalize your
                daily AM/PM sachet routine.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">
                <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary-fixed">
                  <MaterialIcon
                    name="verified"
                    className="text-[18px] text-secondary-fixed"
                  />
                  Stanford &amp; Oxford Clinical Review
                </div>
                <span className="text-on-primary-container hidden sm:inline">
                  •
                </span>
                <div className="flex items-center gap-2 font-label-sm text-label-sm text-primary-fixed">
                  <MaterialIcon
                    name="biotech"
                    className="text-[18px] text-secondary-fixed"
                  />
                  ISO 17025 Third-Party Tested
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <a
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-secondary-container text-on-secondary-fixed hover:bg-secondary-fixed font-label-md text-label-md font-bold tracking-wide transition-all shadow-sm text-center"
                href={ROUTES.quiz}
              >
                Take the Formulation Quiz
              </a>
              <button
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 text-on-primary font-label-md text-label-md font-medium transition-colors text-center"
                type="button"
              >
                View Sample Routine
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {secondGrid.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-surface-container">
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            Showing 1 - 9 of 14 formulations
          </span>
          <div className="flex items-center gap-2">
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container text-outline-variant cursor-not-allowed"
              disabled
              type="button"
            >
              <MaterialIcon name="chevron_left" className="text-[20px]" />
            </button>
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-on-primary font-label-md text-label-md font-bold"
              type="button"
            >
              1
            </button>
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md"
              type="button"
            >
              2
            </button>
            <button
              className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-container text-on-surface hover:bg-surface-container-high transition-colors"
              type="button"
            >
              <MaterialIcon name="chevron_right" className="text-[20px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}