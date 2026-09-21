import Image from "next/image";

import { LOCATIONS } from "@/lib/contact";

export default function GlobalLocations() {
  return (
    <section className="w-full bg-surface-container-low py-16">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-1">
              Global Presence &amp; Facilities
            </span>
            <h2 className="font-headline-md text-headline-md text-primary font-normal">
              Where research translates into clinical grade wellness.
            </h2>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Visits by appointment for registered practitioner partners,
            institutional fellows, and research collaborators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LOCATIONS.map((location) => (
            <div
              key={location.city}
              className="rounded-xl overflow-hidden bg-surface-container-lowest shadow-md flex flex-col group"
            >
              <div className="h-48 relative overflow-hidden bg-surface-container">
                <Image
                  src={location.image}
                  alt={location.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-label-sm text-label-sm font-bold shadow-sm">
                  {location.badge}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-title-lg text-title-lg text-primary font-bold">
                    {location.city}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    {location.description}
                  </p>
                </div>
                <div className="mt-4 pt-4 flex items-center justify-between font-caption text-caption text-on-surface-variant">
                  <span>{location.address}</span>
                  <span className="font-bold text-secondary">{location.timezone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}