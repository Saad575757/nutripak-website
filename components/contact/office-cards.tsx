import MaterialIcon from "@/components/material-icon";
import { OFFICES } from "@/lib/contact";

export default function OfficeCards() {
  return (
    <section className="w-full bg-surface-container-low py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-1">
              Our Offices
            </span>
            <h2 className="font-headline-md text-headline-md-mobile md:text-headline-md text-primary font-normal">
              Both offices are located in Karachi, Pakistan.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            If you are not sure which office to reach, use the Head Office and
            we will point you in the right direction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {OFFICES.map((office) => (
            <div
              key={office.id}
              className="rounded-xl bg-surface-container-lowest p-8 md:p-10 shadow-md flex flex-col gap-6"
            >
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-secondary-container/40 text-secondary font-label-sm text-label-sm font-bold uppercase tracking-wider">
                  {office.label}
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-widest text-outline font-bold">
                  {office.city}
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-title-lg text-title-lg text-primary font-bold">
                  {office.company}
                </h3>
                <address className="not-italic font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {office.address.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </address>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-surface-container">
                <a
                  className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
                  href={office.phoneHref}
                >
                  <MaterialIcon name="phone" className="text-[20px] text-secondary" />
                  <span className="font-body-md text-body-md">
                    Office: {office.phone}
                  </span>
                </a>
                <a
                  className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
                  href={office.websiteHref}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <MaterialIcon
                    name="language"
                    className="text-[20px] text-secondary"
                  />
                  <span className="font-body-md text-body-md">
                    Website: {office.website}
                  </span>
                </a>
                <a
                  className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-colors"
                  href={office.emailHref}
                >
                  <MaterialIcon name="mail" className="text-[20px] text-secondary" />
                  <span className="font-body-md text-body-md">
                    Email: {office.email}
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
