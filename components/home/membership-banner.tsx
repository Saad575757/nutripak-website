export default function MembershipBanner() {
  return (
    <section className="w-full py-12 px-margin-mobile md:px-margin">
      <div className="max-w-[1320px] mx-auto rounded-3xl bg-gradient-to-r from-primary via-primary-container to-primary text-on-primary p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="max-w-xl text-center md:text-left">
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary-fixed font-bold block mb-2">
            NUTRIPAK COLLECTIVE
          </span>
          <h3 className="font-headline-md text-headline-md-mobile md:text-headline-md font-normal leading-tight mb-2">
            Make wellness a lasting routine.
          </h3>
          <p className="font-body-md text-body-md text-on-primary/80">
            Save 20% on monthly packs, unlock 1-on-1 registered dietitian
            consultations, and earn rewards points toward future refills.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
          <button
            className="rounded-full bg-secondary-container hover:bg-secondary-fixed text-on-secondary-fixed font-label-md text-label-md px-8 py-4 font-bold uppercase tracking-wider transition-all"
            type="button"
          >
            Join Nutripak Club
          </button>
        </div>
      </div>
    </section>
  );
}