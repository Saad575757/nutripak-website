import MaterialIcon from "@/components/material-icon";
import { ABOUT_HERO } from "@/lib/about";
import { REVIEWS } from "@/lib/site";

export default function ReviewsSection() {
  return (
    <section className="w-full bg-surface-container-low py-16 md:py-24 px-margin-mobile md:px-margin">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-2">
            DOCTOR RECOMMENDATIONS &amp; CUSTOMER REVIEWS
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Nourishing around 10,000 patients and counting….
          </h2>
        </div>

        <figure className="relative overflow-hidden rounded-3xl bg-primary text-on-primary p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-8">
          <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-secondary/20 blur-3xl pointer-events-none" />
          <div className="relative flex items-center gap-4 shrink-0">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-secondary-container text-on-secondary-fixed">
              <MaterialIcon name="stethoscope" className="text-[30px]" />
            </span>
            <div>
              <p className="font-title-md text-title-md font-bold">
                {ABOUT_HERO.quoteAuthor}
              </p>
              <p className="font-caption text-caption text-on-primary/70">
                {ABOUT_HERO.quoteRole}
              </p>
            </div>
          </div>
          <div className="relative flex flex-col gap-3">
            <div className="flex items-center gap-1 text-secondary-fixed">
              {[0, 1, 2, 3, 4].map((index) => (
                <MaterialIcon key={index} name="star" fill className="text-[18px]" />
              ))}
            </div>
            <blockquote className="font-body-lg text-body-lg text-on-primary/85 italic leading-relaxed">
              {ABOUT_HERO.quote}
            </blockquote>
          </div>
        </figure>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.author}
              className="p-8 rounded-3xl bg-surface-container-lowest shadow-sm flex flex-col justify-between"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-1 text-amber-500">
                  {[0, 1, 2, 3, 4].map((index) => (
                    <MaterialIcon key={index} name="star" fill className="text-[18px]" />
                  ))}
                </div>
                <p className="font-body-md text-body-md text-on-surface italic">
                  {review.quote}
                </p>
              </div>
              <div className="pt-6 mt-4 flex items-center justify-between">
                <div>
                  <strong className="font-title-md text-title-md text-primary block">
                    {review.author}
                  </strong>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {review.meta}
                  </span>
                </div>
                <MaterialIcon name="check_circle" className="text-secondary text-[20px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}