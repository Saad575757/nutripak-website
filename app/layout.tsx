import type { Metadata } from "next";
import { Inter, Lobster_Two } from "next/font/google";

import AiAssistant from "@/components/ai-assistant";
import AnnouncementBar from "@/components/announcement-bar";
import ReferralTracker from "@/components/analytics/referral-tracker";
import { CartProvider } from "@/components/cart/cart-context";
import CartDrawer from "@/components/cart/cart-drawer";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";
import { getCatalogProducts } from "@/lib/catalog";
import { toCartSeed } from "@/lib/site";

import "./globals.css";

/** Keep the seeded cart in step with dashboard pricing. */
export const revalidate = 30;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const lobsterTwo = Lobster_Two({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-lobster",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Nutripak — Better nutrition. Built around you.",
    template: "%s | Nutripak",
  },
  description:
    "Science-backed daily supplements crafted for tangible wellness results. Browse our clinically formulated routines, delivered to your doorstep.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = await getCatalogProducts();

  return (
    <html lang="en" className={`${lobsterTwo.variable} ${inter.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- Material Symbols is not available via next/font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
        />
      </head>
      <body className="bg-background font-body-md text-on-surface antialiased">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <CartProvider seed={toCartSeed(products)}>
          <ReferralTracker />
          <div className="fixed top-0 left-0 w-full z-50">
            <AnnouncementBar />
            <SiteHeader />
          </div>
          <main id="main-content" className="w-full pt-28 bg-surface">
            {children}
          </main>
          <SiteFooter />
          <CartDrawer />
          <AiAssistant />
        </CartProvider>
      </body>
    </html>
  );
}