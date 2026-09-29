import MaterialIcon from "@/components/material-icon";
import { REVIEWS } from "@/lib/site";

export default function ReviewsSection() {
  return (
    <section className="w-full bg-surface-container-low py-16 md:py-24 px-margin-mobile md:px-margin">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-12">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-2">
            VERIFIED EXPERIENCES
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary">
            Nourishing around 10,000 patients and counting….
          </h2>
        </div>
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