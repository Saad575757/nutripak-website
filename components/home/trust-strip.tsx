import MaterialIcon from "@/components/material-icon";
import { TRUST_FEATURES } from "@/lib/site";

export default function TrustStrip() {
  return (
    <section className="w-full bg-surface-container-low py-10 px-margin-mobile md:px-margin">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TRUST_FEATURES.map((feature) => (
          <div
            key={feature.title}
            className="flex items-start gap-4 p-5 rounded-2xl bg-surface-container-lowest shadow-sm"
          >
            <div
              className={`w-12 h-12 rounded-xl ${feature.iconClass} flex items-center justify-center text-primary shrink-0`}
            >
              <MaterialIcon name={feature.icon} className="text-[24px]" />
            </div>
            <div>
              <h4 className="font-title-md text-title-md text-primary mb-1">
                {feature.title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}