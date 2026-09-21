import MaterialIcon from "@/components/material-icon";

export default function IntroBanner() {
  return (
    <section className="w-full bg-primary text-on-primary py-3.5 px-margin-mobile md:px-margin shadow-inner">
      <div className="max-w-[1320px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-secondary-container text-on-secondary-fixed">
            <MaterialIcon name="verified_user" className="text-[16px]" />
          </span>
          <p className="font-body-sm text-body-sm tracking-wide">
            <span className="font-bold text-secondary-fixed">
              Better nutrition. Built around you.
            </span>
            <span className="text-on-primary/80 hidden md:inline ml-2">
              — Science-backed daily formulas crafted for tangible wellness
              results.
            </span>
          </p>
        </div>
        <a
          className="inline-flex items-center gap-1.5 font-label-sm text-label-sm uppercase tracking-wider text-secondary-fixed hover:text-white transition-colors"
          href="#featured-products"
        >
          <span>Explore Routine</span>
          <MaterialIcon name="arrow_downward" className="text-[16px]" />
        </a>
      </div>
    </section>
  );
}