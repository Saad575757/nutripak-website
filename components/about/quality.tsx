import MaterialIcon from "@/components/material-icon";
import { ABOUT_QUALITY } from "@/lib/about";

export default function QualitySection() {
  return (
    <section className="w-full py-16 md:py-24 bg-primary text-on-primary relative overflow-hidden" id="quality">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-secondary/15 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 -mb-20 w-80 h-80 rounded-full bg-secondary-container/10 blur-3xl pointer-events-none"></div>
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg font-normal leading-tight">
              {ABOUT_QUALITY.heading}
            </h2>
            <p className="font-body-lg text-body-lg text-on-primary-container leading-relaxed">
              {ABOUT_QUALITY.body}
            </p>
          </div>

          <div className="lg:col-span-6">
            <ul className="flex flex-col gap-4">
              {ABOUT_QUALITY.certifications.map((cert) => (
                <li
                  key={cert.title}
                  className="flex items-start gap-4 rounded-xl bg-surface-container-lowest text-on-surface p-5 shadow-xl"
                >
                  <div className="w-11 h-11 shrink-0 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-fixed">
                    <MaterialIcon name={cert.icon} className="text-[22px]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-title-md text-title-md text-primary font-bold">
                      {cert.title}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {cert.note}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
