import MaterialIcon from "@/components/material-icon";
import {
  getProductReviews,
  getReviewSummary,
  type ProductReview,
} from "@/lib/reviews";

function Stars({ rating, className = "" }: { rating: number; className?: string }) {
  return (
    <div
      className={`flex items-center gap-0.5 text-amber-500 ${className}`}
      aria-label={`Rated ${rating} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((star) => (
        <MaterialIcon
          key={star}
          name="star"
          fill={star <= rating}
          className={`text-[18px] ${star <= rating ? "" : "text-outline-variant"}`}
        />
      ))}
    </div>
  );
}

function RatingSummary({
  summary,
}: {
  summary: ReturnType<typeof getReviewSummary>;
}) {
  const recommended = summary.total
    ? Math.round(
        (summary.distribution
          .filter((row) => row.stars >= 4)
          .reduce((sum, row) => sum + row.count, 0) /
          summary.total) *
          100,
      )
    : 0;

  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="flex items-center gap-5 rounded-2xl border border-surface-container bg-surface-container-lowest p-6 shadow-sm">
        <div className="flex h-24 w-24 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary text-on-primary">
          <span className="font-headline-md text-headline-md leading-none">
            {summary.average.toFixed(1)}
          </span>
          <span className="mt-1 font-caption text-[10px] font-semibold uppercase tracking-widest text-on-primary/70">
            out of 5
          </span>
        </div>
        <div>
          <Stars rating={Math.round(summary.average)} className="gap-1" />
          <p className="mt-2 font-body-md text-body-md font-semibold text-primary">
            {summary.total} verified {summary.total === 1 ? "review" : "reviews"}
          </p>
          <p className="mt-1 inline-flex items-center gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
            <MaterialIcon name="thumb_up" fill className="text-[16px] text-secondary" />
            {recommended}% would recommend
          </p>
        </div>
      </div>

      <div className="rounded-2xl border border-surface-container bg-surface-container-lowest p-6 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="font-title-md text-title-md font-bold text-primary">
            Rating breakdown
          </h3>
          <span className="font-caption text-caption text-outline">
            {summary.total} total
          </span>
        </div>
        <div className="flex flex-col gap-2.5">
          {summary.distribution.map((row) => (
            <div key={row.stars} className="flex items-center gap-3">
              <span className="flex w-9 items-center gap-0.5 font-caption text-caption text-on-surface-variant">
                {row.stars}
                <MaterialIcon name="star" fill className="text-[12px] text-amber-500" />
              </span>
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-surface-container">
                <div
                  className="h-full rounded-full bg-amber-400"
                  style={{ width: `${row.percent}%` }}
                />
              </div>
              <span className="w-5 text-right font-caption text-caption font-semibold text-primary">
                {row.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function initials(name: string) {
  return name
    .replace(/\./g, "")
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function ReviewCard({ review }: { review: ProductReview }) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl bg-surface-container-lowest p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-fixed font-label-md text-label-md font-bold text-primary">
            {initials(review.author)}
          </span>
          <div>
            <strong className="block font-body-md text-body-md font-semibold text-primary">
              {review.author}
            </strong>
            <span className="font-caption text-caption text-on-surface-variant">
              {review.location}
            </span>
          </div>
        </div>
        {review.verified ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-secondary-container px-2.5 py-1 font-caption text-[10px] font-bold uppercase tracking-wider text-on-secondary-fixed">
            <MaterialIcon name="verified" fill className="text-[14px]" />
            Verified
          </span>
        ) : null}
      </div>

      <Stars rating={review.rating} />

      <div className="flex flex-col gap-2">
        <h3 className="font-title-md text-title-md font-bold text-primary">
          {review.title}
        </h3>
        <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
          {review.body}
        </p>
      </div>

      <div className="mt-auto flex items-center justify-between border-t border-surface-container pt-4 font-caption text-caption text-outline">
        <span>{review.date}</span>
        <span className="inline-flex items-center gap-1">
          <MaterialIcon name="check_circle" className="text-[14px] text-secondary" />
          Verified purchase
        </span>
      </div>
    </article>
  );
}

export default function ProductReviews({
  slug,
  productName,
}: {
  slug: string;
  productName: string;
}) {
  const reviews = getProductReviews(slug);
  if (reviews.length === 0) return null;

  const summary = getReviewSummary(reviews);

  return (
    <section id="reviews" className="w-full bg-surface-container-low py-16 md:py-24">
      <div className="mx-auto flex max-w-[1320px] flex-col gap-10 px-margin-mobile md:px-margin">
        <div className="max-w-2xl">
          <span className="mb-2 block font-label-sm text-label-sm font-bold uppercase tracking-widest text-secondary">
            Verified Customer Feedback
          </span>
          <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md font-normal text-primary">
            Reviews for {productName}
          </h2>
          <p className="mt-3 font-body-md text-body-md leading-relaxed text-on-surface-variant">
            Real-world experiences from customers using {productName} as part of
            their daily routine.
          </p>
        </div>

        <RatingSummary summary={summary} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
