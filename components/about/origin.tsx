import { ABOUT_ORIGIN } from "@/lib/about";

export default function OriginSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-surface-container-low">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col gap-5">
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold">
              {ABOUT_ORIGIN.label}
            </span>
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-tight">
              {ABOUT_ORIGIN.heading}
            </h2>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            {ABOUT_ORIGIN.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 bg-surface-container-lowest p-6 md:p-8 rounded-xl shadow-sm">
          {ABOUT_ORIGIN.founders.map((founder) => (
            <div key={founder.name} className="flex items-center gap-3">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-bold font-title-lg ${
                  founder.tone === "secondary"
                    ? "bg-secondary text-on-secondary"
                    : "bg-primary text-on-primary"
                }`}
              >
                {founder.initials}
              </div>
              <div>
                <p className="font-title-md text-title-md text-primary font-bold">
                  {founder.name}
                </p>
                <p className="font-caption text-caption text-on-surface-variant">
                  {founder.meta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
