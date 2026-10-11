"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import MaterialIcon from "@/components/material-icon";
import AuthStatus from "@/components/auth/auth-status";
import { useCart } from "@/components/cart/cart-context";
import { WHATSAPP_HREF } from "@/lib/contact";
import { ROUTES } from "@/lib/site";

interface NavLink {
  label: string;
  href: string;
  badge?: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Shop", href: ROUTES.shop },
  { label: "Goals", href: ROUTES.categories },
  { label: "Best Sellers", href: `${ROUTES.shop}#best-sellers` },
  { label: "Blog", href: ROUTES.blog, badge: "NEW" },
  // { label: "Build Routine", href: ROUTES.quiz, badge: "NEW" },
  { label: "Learn", href: ROUTES.about },
  { label: "About", href: ROUTES.about },
];

export default function SiteHeader() {
  const { count, openCart } = useCart();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === ROUTES.shop) {
      return pathname === ROUTES.shop || pathname === ROUTES.home;
    }
    return pathname === href || pathname.startsWith(href);
  };

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
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
          {/* <button
            aria-label="Search"
            className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
            type="button"
          >
            <MaterialIcon name="search" className="text-[20px]" />
          </button> */}
          <div className="hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm cursor-pointer hover:bg-surface-container-high transition-colors">
            <MaterialIcon name="payments" className="text-[16px] text-secondary" />
            <span>PKR</span>
          </div>
          <AuthStatus />
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
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden lg:inline-flex items-center justify-center gap-1.5 rounded-full bg-secondary-container text-on-secondary-fixed hover:bg-secondary-fixed font-label-md text-label-md px-5 py-2.5 transition-all shadow-sm font-semibold ml-2"
          >
            <MaterialIcon name="chat" className="text-[18px]" />
            <span>Chat on WhatsApp</span>
          </a>
          <button
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            className="xl:hidden w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors"
            type="button"
            onClick={() => setMenuOpen(true)}
          >
            <MaterialIcon name="menu" className="text-[22px]" />
          </button>
        </div>
      </div>
      </header>

      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-label="Site navigation"
        aria-hidden={!menuOpen}
        className={`fixed inset-y-0 left-0 w-full max-w-xs bg-primary shadow-2xl z-50 xl:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 bg-primary-container flex items-center justify-between">
          <span className="font-headline-sm text-headline-sm text-on-primary tracking-tight font-bold">
            NUTRIPAK
          </span>
          <button
            className="w-8 h-8 rounded-full bg-on-primary/10 hover:bg-on-primary/20 flex items-center justify-center text-on-primary transition-colors"
            onClick={() => setMenuOpen(false)}
            type="button"
            aria-label="Close navigation menu"
          >
            <MaterialIcon name="close" className="text-[20px]" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`flex items-center gap-2 px-4 py-3 rounded-xl font-label-md text-label-md transition-colors ${
                isActive(link.href)
                  ? "bg-secondary-container text-on-secondary-fixed font-bold"
                  : "text-on-primary/70 hover:bg-on-primary/10 hover:text-on-primary"
              }`}
            >
              <span>{link.label}</span>
              {link.badge ? (
                <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-fixed text-[10px] font-bold tracking-wider uppercase">
                  {link.badge}
                </span>
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-on-primary/10">
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noreferrer noopener"
            className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-secondary-container text-on-secondary-fixed hover:bg-secondary-fixed font-label-md text-label-md px-5 py-3 transition-all shadow-sm font-semibold"
          >
            <MaterialIcon name="chat" className="text-[18px]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-primary/40 backdrop-blur-sm z-40 transition-opacity xl:hidden ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}