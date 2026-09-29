import MaterialIcon from "@/components/material-icon";
import { ABOUT_PURPOSE, ABOUT_WHO_WE_ARE } from "@/lib/about";

export default function StorySections() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-5 rounded-2xl bg-surface-container-lowest p-8 md:p-10 shadow-sm flex flex-col gap-5">
            <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary">
              <MaterialIcon name="volunteer_activism" className="text-[26px]" />
            </div>
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal leading-tight">
              {ABOUT_PURPOSE.heading}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {ABOUT_PURPOSE.body}
            </p>
          </div>

          <div className="lg:col-span-7 rounded-2xl bg-primary text-on-primary p-8 md:p-10 shadow-sm flex flex-col gap-5 relative overflow-hidden">
            <div className="absolute -top-16 -right-10 w-64 h-64 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
            <div className="relative z-10 flex flex-col gap-5">
              <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-secondary-fixed">
                <MaterialIcon name="groups" className="text-[26px]" />
              </div>
              <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md font-normal leading-tight">
                {ABOUT_WHO_WE_ARE.heading}
              </h2>
              <div className="flex flex-col gap-4">
                {ABOUT_WHO_WE_ARE.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="font-body-md text-body-md text-on-primary-container leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
