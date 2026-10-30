import type { Metadata } from "next";
import {
  Grand_Hotel,
  Inter,
  Kaushan_Script,
  Lobster,
  Lobster_Two,
  Merienda,
  Pacifico,
  Playfair_Display,
  Yellowtail,
} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const lobsterTwoRegular = Lobster_Two({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const lobsterTwo = Lobster_Two({
  weight: "700",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
});

const merienda = Merienda({
  weight: "800",
  subsets: ["latin"],
  display: "swap",
});

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const yellowtail = Yellowtail({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const grandHotel = Grand_Hotel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const kaushan = Kaushan_Script({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Logo font preview",
  robots: { index: false, follow: false },
};

const logoFonts = [
  {
    name: "Lobster Two Regular",
    note: "Lighter cut of Lobster - applied to site headings",
    className: lobsterTwoRegular.className,
  },
  {
    name: "Lobster",
    note: "Original close match - bolder, connected lettering",
    className: lobster.className,
  },
  {
    name: "Lobster Two Bold Italic",
    note: "Close - smooth, decorative italic text",
    className: lobsterTwo.className,
  },
  {
    name: "Merienda ExtraBold",
    note: "Good alternative - rounded, handwritten brand name",
    className: merienda.className,
  },
  {
    name: "Pacifico",
    note: "Good alternative - friendly, rounded lettering",
    className: pacifico.className,
  },
];

const otherScripts = [
  { name: "Yellowtail", note: "Sign-painter script", className: yellowtail.className },
  { name: "Grand Hotel", note: "Retro script", className: grandHotel.className },
  { name: "Kaushan Script", note: "Brush script", className: kaushan.className },
];

export default function FontPreviewPage() {
  return (
    <div className="mx-auto w-full max-w-[1100px] px-6 py-16">
      <div className="mb-12 max-w-3xl">
        <p className="font-label-sm text-primary uppercase tracking-[0.16em]">
          Font test
        </p>
        <h1 className={`${playfair.className} mt-4 text-[48px] leading-[1.1] text-on-surface`}>
          NutriPak font options
        </h1>
        <p className={`${inter.className} mt-4 text-[16px] leading-7 text-on-surface-variant`}>
          SignPainter HouseScript is a paid House Industries font and cannot be
          bundled without a licence. Lobster Two Regular is now applied to the
          display and section headings for a lighter, more refined look.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {logoFonts.map((font) => (
          <div
            key={font.name}
            className="rounded-2xl border border-outline-variant bg-white p-8"
          >
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className={`${inter.className} text-[14px] font-semibold text-on-surface`}>
                {font.name}
              </span>
              <span className={`${inter.className} text-[13px] text-on-surface-variant`}>
                {font.note}
              </span>
            </div>

            <div className="flex flex-col">
              <span className={`${font.className} text-[52px] leading-[1.05] text-primary`}>
                NutriPak
              </span>
              <span className="mt-1 flex items-center gap-2">
                <span className="h-px w-6 bg-secondary-container" />
                <span className={`${inter.className} text-[9px] font-bold uppercase tracking-[0.32em] text-secondary`}>
                  Complete Nutrition
                </span>
              </span>
            </div>

            <div className="mt-6 grid gap-5 border-t border-outline-variant pt-6 md:grid-cols-2">
              <div>
                <p className={`${font.className} text-[30px] leading-[1.2] text-on-surface`}>
                  Better nutrition. Built around you.
                </p>
                <p className={`${inter.className} mt-2 text-[14px] leading-6 text-on-surface-variant`}>
                  Science-backed daily supplements crafted for tangible wellness
                  results.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                <button className={`${inter.className} rounded-full bg-primary px-6 py-3 text-[14px] font-semibold text-white`}>
                  Shop nutrition
                </button>
                <button className={`${inter.className} rounded-full border border-primary px-6 py-3 text-[14px] font-semibold text-primary`}>
                  Find your formula
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-outline-variant bg-surface-container-low p-8">
        <p className={`${inter.className} text-[13px] font-semibold uppercase tracking-[0.14em] text-primary`}>
          Other script options
        </p>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {otherScripts.map((font) => (
            <div key={font.name} className="rounded-xl bg-white p-5">
              <p className={`${font.className} text-[32px] leading-[1.1] text-primary`}>
                NutriPak
              </p>
              <p className={`${inter.className} mt-2 text-[12px] text-on-surface-variant`}>
                {font.name} - {font.note}
              </p>
            </div>
          ))}
        </div>
      </div>

      <p className={`${inter.className} mt-10 text-[13px] text-on-surface-variant`}>
        Have the licensed SignPainter HouseScript web font? Drop the
        <span className="font-semibold text-on-surface"> .woff2 </span>
        file in{" "}
        <code className="rounded bg-surface-container px-1.5 py-0.5">public/fonts/</code>{" "}
        and it can be wired in directly.
      </p>
    </div>
  );
}
