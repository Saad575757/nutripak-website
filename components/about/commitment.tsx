import MaterialIcon from "@/components/material-icon";
import { ABOUT_COMMITMENT, ABOUT_COMMITMENT_CARDS } from "@/lib/about";

export default function CommitmentSection() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-col gap-12">
        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary font-normal leading-tight">
          {ABOUT_COMMITMENT.heading}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ABOUT_COMMITMENT_CARDS.map((card) => (
            <div
              key={card.title}
              className="rounded-xl bg-surface-container-lowest p-8 flex flex-col gap-5 border border-surface-container/60 hover:border-surface-container hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <MaterialIcon name={card.icon} className="text-[24px]" />
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                {card.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
