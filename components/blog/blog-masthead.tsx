import { ROUTES } from "@/lib/site";
import { CHRONICLE_ISSN, CHRONICLE_ISSUE } from "@/lib/blog";

export default function BlogMasthead() {
  return (
    <section className="w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin pt-6 pb-4">
      <div className="flex items-center justify-between text-caption font-caption text-on-surface-variant uppercase tracking-widest pb-6">
        <div className="flex items-center gap-2">
          <a className="hover:text-primary transition-colors" href={ROUTES.home}>
            Home
          </a>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold">The Nutripak Chronicle</span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-outline">
          <span>{CHRONICLE_ISSUE}</span>
          <span>•</span>
          <span>{CHRONICLE_ISSN}</span>
        </div>
      </div>
      <div className="max-w-3xl">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-fixed text-label-sm font-label-sm uppercase tracking-wider mb-4">
          Editorial &amp; Wellness Archive
        </span>
        <h1 className="font-headline-lg text-headline-lg text-primary leading-none tracking-tight mb-4">
          Notes on Cellular Vitality &amp; Longevity.
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
          Thoughtful explorations of clinical biochemistry, circadian rhythm, and
          modern nutritional science written by our practitioners and research
          clinicians.
        </p>
      </div>
    </section>
  );
}