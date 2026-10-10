import { FREE_SHIPPING_THRESHOLD } from "@/lib/shipping";
import { formatPkr } from "@/lib/shop";
import MaterialIcon from "@/components/material-icon";
import {
  DELIVERY_TIERS,
  FREE_DELIVERY_INTRO,
  FREE_DELIVERY_NOTES,
} from "@/lib/shipping";

export default function FreeDeliverySection() {
  return (
    <section
      className="w-full bg-surface-container-low py-16 md:py-24 px-margin-mobile md:px-margin"
      id="free-delivery"
    >
      <div className="max-w-[1320px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-secondary font-bold">
            Free delivery
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-tight">
            Free delivery, once your cart clears{" "}
            {formatPkr(FREE_SHIPPING_THRESHOLD)} or above.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {FREE_DELIVERY_INTRO}
          </p>
        </div>

        <div className="flex flex-col gap-3 p-8 rounded-2xl bg-surface-container-lowest shadow-sm items-start">
          <span className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-none">
            {formatPkr(FREE_SHIPPING_THRESHOLD)}
          </span>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Is all it takes to unlock free delivery on your order.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="font-label-md text-label-md uppercase tracking-widest text-outline font-bold">
            How the two compare
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {DELIVERY_TIERS.map((tier) => (
              <div
                key={tier.label}
                className={`flex flex-col gap-3 p-6 rounded-2xl h-full ${
                  tier.highlighted
                    ? "bg-primary text-on-primary shadow-md"
                    : "bg-surface-container-lowest shadow-sm"
                }`}
              >
                <span
                  className={`font-title-md text-title-md font-semibold ${
                    tier.highlighted ? "text-secondary-container" : "text-primary"
                  }`}
                >
                  {tier.label}
                </span>
                <span
                  className={`font-body-md text-body-md leading-relaxed ${
                    tier.highlighted
                      ? "text-on-primary/85"
                      : "text-on-surface-variant"
                  }`}
                >
                  {tier.description}
                </span>
                {tier.highlighted ? (
                  <span className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-secondary-container">
                    <MaterialIcon name="check_circle" className="text-[18px]" />
                    <span>Applied for you</span>
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="font-label-md text-label-md uppercase tracking-widest text-outline font-bold">
            Good to know
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {FREE_DELIVERY_NOTES.map((note) => (
              <li key={note.title} className="flex items-start gap-3">
                <MaterialIcon
                  name="check_circle"
                  className="text-[20px] text-secondary shrink-0 mt-0.5"
                />
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  <span className="text-primary font-semibold">
                    {note.title}.{" "}
                  </span>
                  {note.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}