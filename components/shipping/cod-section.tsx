import MaterialIcon from "@/components/material-icon";
import { CONTACT_CHANNELS } from "@/lib/contact";
import {
  COD_INTRO,
  COD_NOTES,
  COD_STEPS,
  DELIVERY_FAQ_PROMPT,
  PAYMENT_METHOD,
} from "@/lib/shipping";

export default function CodSection() {
  return (
    <section
      className="w-full py-16 md:py-24 px-margin-mobile md:px-margin"
      id="cash-on-delivery"
    >
      <div className="max-w-[1320px] mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-4 max-w-3xl">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.28em] text-secondary font-bold">
            {PAYMENT_METHOD}
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-tight">
            Pay when it arrives at your door.
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {COD_INTRO}
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="font-label-md text-label-md uppercase tracking-widest text-outline font-bold">
            How it works
          </h3>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COD_STEPS.map((step) => (
              <li
                key={step.number}
                className="flex flex-col gap-3 p-6 rounded-2xl bg-surface-container-lowest shadow-sm h-full"
              >
                <span className="font-headline-sm text-headline-sm-mobile md:text-headline-sm text-secondary font-normal">
                  {step.number}
                </span>
                <span className="font-title-md text-title-md text-primary font-semibold">
                  {step.title}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {step.description}
                </span>
              </li>
            ))}
          </ol>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="font-label-md text-label-md uppercase tracking-widest text-outline font-bold">
            Good to know
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
            {COD_NOTES.map((note) => (
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

        <div className="flex flex-col md:flex-row md:items-center gap-6 p-6 md:p-8 rounded-2xl bg-surface-container-low">
          <div className="flex flex-col gap-2 flex-1">
            <h3 className="font-title-lg text-title-lg text-primary">
              Still have a question?
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {DELIVERY_FAQ_PROMPT}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {CONTACT_CHANNELS.map((channel) => (
              <a
                key={channel.label}
                className="inline-flex items-center gap-2 rounded-full bg-primary hover:bg-primary-container text-on-primary px-6 py-3 font-label-md text-label-md font-bold transition-colors"
                href={channel.href}
              >
                <MaterialIcon name={channel.icon} className="text-[18px]" />
                <span>
                  {channel.label}: {channel.value}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}