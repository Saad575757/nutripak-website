import MaterialIcon from "@/components/material-icon";
import { ROUTES } from "@/lib/site";

export default function ShopNotice() {
  return (
    <section className="w-full bg-surface-container-low py-4">
      <div className="max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex flex-wrap items-center justify-between gap-4">
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface-variant"
        >
          <a
            className="hover:text-primary transition-colors flex items-center gap-1"
            href={ROUTES.home}
          >
            <MaterialIcon name="home" className="text-[16px]" />
            <span>Home</span>
          </a>
          <span>/</span>
          <a className="hover:text-primary transition-colors" href={ROUTES.shop}>
            Shop
          </a>
          <span>/</span>
          <span className="text-primary font-bold">All Clinical Formulations</span>
        </nav>
        <div className="flex items-center gap-4 text-xs font-label-sm text-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            Clinical Batch #NP-2025 Release Available
          </span>
          <span className="hidden sm:inline-block text-outline-variant">|</span>
          <span className="hidden sm:flex items-center gap-1 text-primary font-semibold">
            <MaterialIcon name="verified_user" className="text-[16px] text-secondary" />
            Public Third-Party COA Database Live
          </span>
        </div>
      </div>
    </section>
  );
}