import MaterialIcon from "@/components/material-icon";
import { ROUTES } from "@/lib/site";
import type { PdpRecord } from "@/lib/pdps";

export default function PdpHeader({ pdp, name }: { pdp: PdpRecord; name: string }) {
  return (
    <section className="max-w-[1320px] w-full mx-auto px-margin-mobile md:px-margin pt-4 pb-2">
      <div className="flex flex-wrap items-center justify-between gap-3 text-on-surface-variant font-label-sm text-label-sm">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2">
          <a className="hover:text-primary transition-colors" href={ROUTES.home}>
            Home
          </a>
          <span className="text-outline-variant">/</span>
          <a className="hover:text-primary transition-colors" href={ROUTES.shop}>
            Shop
          </a>
          <span className="text-outline-variant">/</span>
          <a className="hover:text-primary transition-colors" href={ROUTES.shop}>
            Immunity &amp; Foundation
          </a>
          <span className="text-outline-variant">/</span>
          <span className="text-primary font-semibold truncate max-w-[200px] sm:max-w-none">
            {name}
          </span>
        </nav>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/60 text-on-secondary-fixed font-label-sm text-[11px] font-bold uppercase tracking-wider">
            <MaterialIcon name="star" className="text-[14px]" />
            {pdp.topPill}
          </span>
          <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px] font-semibold">
            <MaterialIcon name="verified_user" className="text-[14px] text-secondary" />
            {pdp.topPillSecondary}
          </span>
        </div>
      </div>
    </section>
  );
}