import MaterialIcon from "@/components/material-icon";
import Stars from "@/components/product/stars";
import type { PdpRecord } from "@/lib/pdps";

export default function ReviewsSection({ pdp }: { pdp: PdpRecord }) {
  return (
    <section
      className="max-w-[1320px] w-full mx-auto px-margin-mobile md:px-margin py-16"
      id="reviews-section"
    >
      <div className="flex flex-col gap-8">
        <div className="p-8 rounded-2xl bg-surface-container-low flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex flex-col items-center sm:items-start">
              <span className="font-display-hero text-display-hero text-primary font-normal leading-none">
                {pdp.reviewAverage}
              </span>
              <Stars count={5} className="mt-2 text-[20px]" />
              <span className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Based on {pdp.reviewCount.toLocaleString()} Verified Customers
              </span>
            </div>
            <div className="hidden sm:block w-px h-20 bg-outline-variant/40"></div>
            <div className="flex flex-col gap-1.5 w-64">
              {pdp.ratingBars.map((bar) => (
                <div key={bar.star} className="flex items-center gap-2 font-caption text-caption text-on-surface">
                  <span>{bar.star}</span>
                  <div className="flex-1 h-2 bg-surface-container rounded-full overflow-hidden">
                    <div className={`h-full bg-secondary ${bar.width} rounded-full`}></div>
                  </div>
                  <span className="text-on-surface-variant">{bar.percent}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <button
              className="px-6 py-3 rounded-full bg-primary text-on-primary font-label-md text-label-md font-semibold hover:bg-primary-container transition-colors shadow-sm"
              type="button"
            >
              Write a Review
            </button>
            <div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm font-bold">
              <MaterialIcon name="verified" className="text-[18px]" />
              {pdp.recommendPct} of users recommend this
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pdp.testimonials.map((review) => (
            <div
              key={review.title}
              className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Stars count={5} className="text-[16px]" />
                  <span className="font-caption text-caption text-outline">{review.date}</span>
                </div>
                <h4 className="font-title-md text-title-md text-primary font-bold">
                  {review.title}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {review.body}
                </p>
              </div>
              <div className="pt-3 flex items-center justify-between">
                <div>
                  <span className="font-label-sm text-label-sm font-bold text-primary block">
                    {review.name}
                  </span>
                  <span className="font-caption text-[11px] text-secondary flex items-center gap-1 font-semibold">
                    <MaterialIcon name="check_circle" className="text-[14px]" />
                    {review.meta}
                  </span>
                </div>
                <span className="font-caption text-[11px] text-outline">{review.variant}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}