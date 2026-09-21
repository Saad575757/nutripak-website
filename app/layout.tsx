import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";

import AiAssistant from "@/components/ai-assistant";
import AnnouncementBar from "@/components/announcement-bar";
import { CartProvider } from "@/components/cart/cart-context";
import CartDrawer from "@/components/cart/cart-drawer";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${newsreader.variable} ${jakarta.variable}`}>
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
        <CartProvider>
          <div className="fixed top-0 left-0 w-full z-50">
            <AnnouncementBar />
            <SiteHeader />
          </div>
          <main className="w-full pt-28 bg-surface">{children}</main>
          <SiteFooter />
          <CartDrawer />
          <AiAssistant />
        </CartProvider>
      </body>
    </html>
  );
}