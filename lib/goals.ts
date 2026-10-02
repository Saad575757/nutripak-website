import { SHOP_PRODUCTS, type ShopProduct } from "@/lib/shop";

export interface Goal {
  slug: string;
  label: string;
  title: string;
  description: string;
  icon: string;
  /** Slugs from SHOP_PRODUCTS that belong to this goal. */
  productSlugs: string[];
  /** Goals with no products yet are shown as teasers and are not linked. */
  available: boolean;
  cardClass: string;
  iconClass: string;
  labelClass: string;
  titleClass: string;
  bodyClass: string;
  ctaClass: string;
}

export const GOALS: Goal[] = [
  {
    slug: "complete-nutrition",
    label: "Complete Adult Nutrition",
    title: "Complete Nutrition",
    description:
      "Balanced macro & micronutrients for daily strength and vitality",
    icon: "nutrition",
    productSlugs: ["subset"],
    available: true,
    cardClass: "bg-emerald-50",
    iconClass: "bg-emerald-200/60 text-emerald-900",
    labelClass: "text-emerald-800",
    titleClass: "text-emerald-950",
    bodyClass: "text-emerald-800/80",
    ctaClass: "text-emerald-900",
  },
  {
    slug: "diabetic-care",
    label: "Diabetic-Specific Nutrition",
    title: "Diabetic Care Nutrition",
    description:
      "Slow-release carbohydrate blend formulated for blood sugar management",
    icon: "water_drop",
    productSlugs: ["ada-glu"],
    available: true,
    cardClass: "bg-orange-50",
    iconClass: "bg-orange-200/60 text-orange-900",
    labelClass: "text-orange-800",
    titleClass: "text-orange-950",
    bodyClass: "text-orange-800/80",
    ctaClass: "text-orange-900",
  },
  {
    slug: "protein-support",
    label: "Protein Supplement",
    title: "Protein Support (Muscle & Recovery)",
    description:
      "High-quality protein to support strength, healing, and recovery",
    icon: "bolt",
    productSlugs: ["proteios"],
    available: true,
    cardClass: "bg-amber-50",
    iconClass: "bg-amber-200/60 text-amber-900",
    labelClass: "text-amber-800",
    titleClass: "text-amber-950",
    bodyClass: "text-amber-800/80",
    ctaClass: "text-amber-900",
  },
  {
    slug: "expanding-range",
    label: "Coming Soon",
    title: "Expanding Our Range",
    description: "Tailored nutrition support launching soon",
    icon: "bedtime",
    productSlugs: [],
    available: false,
    cardClass: "bg-indigo-50",
    iconClass: "bg-indigo-200/60 text-indigo-900",
    labelClass: "text-indigo-800",
    titleClass: "text-indigo-950",
    bodyClass: "text-indigo-800/80",
    ctaClass: "text-indigo-900",
  },
];

export const AVAILABLE_GOALS = GOALS.filter((goal) => goal.available);

export function getGoal(slug: string): Goal | undefined {
  return GOALS.find((goal) => goal.slug === slug);
}

export function productsForGoal(goal: Goal): ShopProduct[] {
  return goal.productSlugs
    .map((slug) => SHOP_PRODUCTS.find((product) => product.slug === slug))
    .filter((product): product is ShopProduct => product !== undefined);
}