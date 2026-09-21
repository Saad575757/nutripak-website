import MaterialIcon from "@/components/material-icon";
import { PLEDGE_ITEMS } from "@/lib/shop";

export default function QualityStrip() {
  return (
    <section className="w-full bg-surface-container-low py-16">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-2">
            THE BIOPHARMACEUTICAL PLEDGE
          </span>
          <h3 className="font-headline-md text-headline-md text-primary font-normal">
            Why Nutripak absorbs differently.
          </h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PLEDGE_ITEMS.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-xl bg-surface-container-lowest shadow-sm flex flex-col items-start gap-4"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${item.iconClass}`}
              >
                <MaterialIcon name={item.icon} className="text-[24px]" />
              </div>
              <h4 className="font-title-lg text-title-lg text-primary font-semibold">
                {item.title}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}