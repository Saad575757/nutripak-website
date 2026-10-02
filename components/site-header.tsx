"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import MaterialIcon from "@/components/material-icon";
import { useCart } from "@/components/cart/cart-context";
import { LOGO_IMAGE, ROUTES } from "@/lib/site";

interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Shop", href: ROUTES.shop },
  { label: "Goals", href: ROUTES.categories },
  { label: "Best Sellers", href: `${ROUTES.shop}#best-sellers` },
  { label: "Build Routine", href: ROUTES.quiz, badge: "NEW" },
  { label: "Learn", href: ROUTES.about },
  { label: "About", href: ROUTES.about },
];

export default function SiteHeader() {
  const { count, openCart } = useCart();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === ROUTES.shop) {
      return pathname === ROUTES.shop || pathname === ROUTES.home;
    }
    return pathname === href || pathname.startsWith(href);
  };

  return (
    <header className="w-full bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-[1320px] mx-auto px-margin-mobile md:px-margin flex items-center justify-between gap-space-md">
        <Link href={ROUTES.home} className="flex items-center gap-3 shrink-0" aria-label="Nutripak home">
          {/* <Image
            src={LOGO_IMAGE}
            alt="NUTRIPAK Official Brand Logo"
            width={160}
            height={32}
            className="h-8 w-auto object-contain"
          /> */}
          <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
            NUTRIPAK
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-space-lg">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative flex items-center">
              <Link
                href={link.href}
                className={`font-label-md text-label-md transition-colors py-2 ${
                  isActive(link.href)
                    ? "text-secondary font-bold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
              {link.badge ? (
                <span className="ml-1.5 px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-[10px] font-bold tracking-wider uppercase">
                  {link.badge}
                </span>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm">
          <button
            aria-label="Search"
            className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
            type="button"
          >
            <MaterialIcon name="search" className="text-[20px]" />
          </button>
          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm cursor-pointer hover:bg-surface-container-high transition-colors">
            <MaterialIcon name="payments" className="text-[16px] text-secondary" />
            <span>PKR</span>
          </div>
          <button
            aria-label="Account"
            className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
            type="button"
          >
            <MaterialIcon name="person_outline" className="text-[20px]" />
          </button>
          <button
            aria-label="Shopping Cart"
            className="relative w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
            type="button"
            onClick={openCart}
          >
            <MaterialIcon name="shopping_bag" className="text-[20px]" />
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-secondary text-on-secondary font-label-sm text-[10px] flex items-center justify-center font-bold">
              {count}
            </span>
          </button>
          <Link
            href={ROUTES.quiz}
            className="hidden lg:inline-flex items-center justify-center rounded-full bg-secondary-container text-on-secondary-fixed hover:bg-secondary-fixed font-label-md text-label-md px-5 py-2.5 transition-all shadow-sm font-semibold ml-2"
          >
            Take the Quiz
          </Link>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1">
            <MaterialIcon name="person" className="text-on-primary text-[18px]" />
          </div>
        </div>
      </div>
    </header>
  );
}