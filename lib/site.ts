import { SHOP_PRODUCTS } from "@/lib/shop";

export const ROUTES = {
  home: "/",
  shop: "/shop",
  categories: "/categories",
  product: (slug: string) => `/products/${slug}`,
  cart: "/cart",
  checkout: "/checkout",
  confirmation: "/order-confirmation",
  about: "/about",
  contact: "/contact",
  /** Goals are sections on one page rather than separate routes for now. */
  goalAnchor: (slug: string) => `/categories#${slug}`,
  quiz: "/quiz",
  blog: "/blog",
} as const;

/** Free standard shipping in PKR. */
export const FREE_SHIPPING_THRESHOLD = 5000;

interface CartItemSeed {
  key: string;
  name: string;
  variant: string;
  price: number;
  image: string;
  alt: string;
}

/** Sample cart contents shown on first load — the real product range. */
export const SEED_CART: CartItemSeed[] = SHOP_PRODUCTS.map((product) => ({
  key: product.slug,
  name: product.name,
  variant: product.variant,
  price: product.pricePkr,
  image: product.image,
  alt: product.alt,
}));

export interface ProductCard {
  slug: string;
  name: string;
  description: string;
  pricePkr: number;
  variant: string;
  image: string;
  alt: string;
}

/** Homepage product rail. Mirrors SHOP_PRODUCTS. */
export const FEATURED_PRODUCTS: ProductCard[] = SHOP_PRODUCTS.map((product) => ({
  slug: product.slug,
  name: product.name,
  description: product.tagline,
  pricePkr: product.pricePkr,
  variant: product.variant,
  image: product.image,
  alt: product.alt,
}));


export interface Review {
  quote: string;
  author: string;
  meta: string;
}

export const REVIEWS: Review[] = [
  {
    quote:
      "“After 3 weeks of the Energy + Sleep pack, the 3 PM brain fog completely vanished. Game changer for long clinical shifts!”",
    author: "Sarah M.",
    meta: "Verified Subscriber • 6 Mos",
  },
  {
    quote:
      "“The quiz recommended exactly what my bloodwork said I was deficient in. Superior bioavailability and no upset stomach.”",
    author: "Dr. David K.",
    meta: "Verified Subscriber • 1 Yr",
  },
  {
    quote:
      "“Subscriptions are completely seamless, and the frosted glass bottles look gorgeous on my kitchen counter. Love Nutripak.”",
    author: "Maya L.",
    meta: "Verified Subscriber • 4 Mos",
  },
];

export interface TrustFeature {
  icon: string;
  iconClass: string;
  title: string;
  description: string;
}

export const TRUST_FEATURES: TrustFeature[] = [
  {
    icon: "verified",
    iconClass: "bg-primary-container/10 text-primary",
    title: "Expert-Formulated",
    description:
      "Developed following established clinical nutrition guidelines.",
  },
  {
    icon: "biotech",
    iconClass: "bg-secondary-container/30 text-secondary",
    title: "Quality Ingredients",
    description:
      "Carefully selected ingredients for effective absorption and everyday nutrition.",
  },
  {
    icon: "recycling",
    iconClass: "bg-primary-fixed text-primary",
    title: "Trusted Packaging",
    description:
      "Sealed for freshness and quality, so every serving is as reliable as the last.",
  },
  {
    icon: "calendar_today",
    iconClass: "bg-surface-variant text-primary",
    title: "Easy Daily Use",
    description:
      "Simple, convenient serving sizes designed to fit easily into your daily routine.",
  },
];

export const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCsTjhMAMTAacZy8mJR2ser5JZDFlYXPhR0kq1S6_s_irPRya4QUjUbwq-U_Opy2xxD6kVks3BmFNtMns5zLWjVj-ccjHhRHC53yA_p34G75-2bkcl18IgB0iYjhhZ0eKBrI6I3EE7rCDBHvISYmX3fpyv9qqS0wsnkHFYRyUr8a9cBS2gDArM3xgdKtxztnjGEDFRCynucrNjqGzhh05Y2jYB0eAjEqKGwku_txFJrrypB9Ohi7fCQ7Q";

export const EDITORIAL_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCj3tzgtaEeOzBHiiqTjHJUqjvuYlKkPMp0Oxz2OylY5-t1iNSbSdJBsRd49PrnTGwoTEB1g03vgz1GazaUNrvPO_ApeMoGehH9XRE3XVs7N9Ljhpofa2fHho8ou0AHsVTJDh6uwRYLGudjqzSv-zdoQ02ApmL3fz8xSn77hu9XLHXyaGDM0MU9CR_TMwZBW_X9lGW3q-ARCFNmJABq_U8ODU3T84aXhalJaN5WQIQJSmsXd3Z70n2Ewg";

export const EXPERT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDd-uf9EzeIM-hA5wUVniBF0QNantty1Mc9VdDz7sMZDeL0PgxYJ1ZwtqEq13ZwIs5mCAYRlEWaDM22oqMdIEmwsArAo0MiUMRxfqxwG7oWLD2buPkmcqKTICKXdmGcqIIpC2tGcj_yE7GjbjbLWyJJFZVRru9rxd7MGG21iWL8yZZWCk1iMtxmmsaVtFhPuUJwovnOiiPeW4DCXAgt5qjVM2G4sKCmDG_PBNzfaOqlLrsi6d1kTMgw";

export const LOGO_IMAGE =
  "https://lh3.googleusercontent.com/aida/AEtjO1VqJWu9HDErVbLcmrMRTxH0eeNjwoIDcYsxjA-9CdxFdyhuonx7RqZwg1EEBXpxHV4EVUoBpXh9tD6qFZ8mB5kwsQeryGaVEXyqf-huzoEypeaESxwDOvbnPeBQ4cU9PvmUYJcYFkS0l7p_3PT8RX26zSTkrThae6zmWG8nT-PSbW7AG-rWR4Dm_HpEGQP37FdbjKLGq-QMfHsXw-SlYJaBeYacflzzJwQhUYcv1hhgqnYCr-NXckfDRIZd";
