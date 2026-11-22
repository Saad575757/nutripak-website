import { SHOP_PRODUCTS, type ShopProduct } from "@/lib/shop";

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
  delivery: "/delivery",
  /** Goals are sections on one page rather than separate routes for now. */
  goalAnchor: (slug: string) => `/categories#${slug}`,
  quiz: "/quiz",
  blog: "/blog",
  faqs: "/faqs",
  downloads: "/downloads",
  login: "/login",
  signup: "/signup",
  forgotPassword: "/forgot-password",
  resetPassword: "/reset-password",
  account: "/account",
} as const;

export interface CartItemSeed {
  key: string;
  name: string;
  variant: string;
  price: number;
  image: string;
  alt: string;
}

export function toCartSeed(products: ShopProduct[]): CartItemSeed[] {
  return products.map((product) => ({
    key: product.slug,
    name: product.name,
    variant: product.variant,
    price: product.pricePkr,
    image: product.image,
    alt: product.alt,
  }));
}

/** Sample cart contents shown on first load — the real product range. */
export const SEED_CART: CartItemSeed[] = toCartSeed(SHOP_PRODUCTS);

export interface Review {
  quote: string;
  author: string;
  meta: string;
}

export const REVIEWS: Review[] = [
  {
    quote:
      "“SUBSET has replaced my rushed breakfast on busy mornings. One glass keeps me full until lunch, and I no longer skip meals during school runs.”",
    author: "Ayesha R.",
    meta: "Verified Subscriber • 6 Mos",
  },
  {
    quote:
      "“I add PROTEIOS to my oats and daal because it is unflavoured. No bloating, no aftertaste, and my recovery after training feels noticeably better.”",
    author: "Hamza T.",
    meta: "Verified Subscriber • 1 Yr",
  },
  {
    quote:
      "“My father uses ADA-glu with breakfast as part of his diabetes diet plan. His meal timing is more consistent and his readings have been steadier.”",
    author: "Fatima N.",
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

export const HERO_IMAGE = "/home-hero-1.jpeg";

/** Full-bleed backgrounds and campaign copy rotated by the hero slider. */
export const HERO_SLIDES = [
  {
    src: "/1_no_text.jpg",
    mobileSrc: "/hero-mob1.jpeg",
    product: "ADA-glu",
    slug: "ada-glu",
    headline: "STRONGER TOGETHER.",
    accent: "HEALTHIER EVERY DAY.",
    rating: "4.8/5 from 9,600+ routines",
    stats: [
      { label: "Glycemic index", value: "Low" },
      { label: "Protein content", value: "19.61%" },
      { label: "Dietary fiber", value: "2 g" },
    ],
  },
  {
    src: "/2_no_text.jpg",
    mobileSrc: "/hero-mob2.jpeg",
    product: "SUBSET",
    slug: "subset",
    headline: "AGE IS JUST A NUMBER.",
    accent: "STRENGTH IS A LIFESTYLE.",
    rating: "4.9/5 from 18,000+ routines",
    stats: [
      { label: "Key nutrients", value: "26" },
      { label: "Protein / serve", value: "8.8 g" },
      { label: "Energy / serve", value: "236 kcal" },
    ],
  },
  {
    src: "/3_no_text.jpg",
    mobileSrc: "/hero-mob3.jpeg",
    product: "PROTEIOS",
    slug: "proteios",
    headline: "TRAIN HARD.",
    accent: "RECOVER STRONG.",
    rating: "4.9/5 from 12,500+ routines",
    stats: [
      { label: "Natural whey", value: "100%" },
      { label: "Rich blend", value: "Peptide" },
      { label: "Added flavour", value: "0 g" },
    ],
  },
] as const;

export const EDITORIAL_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCj3tzgtaEeOzBHiiqTjHJUqjvuYlKkPMp0Oxz2OylY5-t1iNSbSdJBsRd49PrnTGwoTEB1g03vgz1GazaUNrvPO_ApeMoGehH9XRE3XVs7N9Ljhpofa2fHho8ou0AHsVTJDh6uwRYLGudjqzSv-zdoQ02ApmL3fz8xSn77hu9XLHXyaGDM0MU9CR_TMwZBW_X9lGW3q-ARCFNmJABq_U8ODU3T84aXhalJaN5WQIQJSmsXd3Z70n2Ewg";

export const EXPERT_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBdDd-uf9EzeIM-hA5wUVniBF0QNantty1Mc9VdDz7sMZDeL0PgxYJ1ZwtqEq13ZwIs5mCAYRlEWaDM22oqMdIEmwsArAo0MiUMRxfqxwG7oWLD2buPkmcqKTICKXdmGcqIIpC2tGcj_yE7GjbjbLWyJJFZVRru9rxd7MGG21iWL8yZZWCk1iMtxmmsaVtFhPuUJwovnOiiPeW4DCXAgt5qjVM2G4sKCmDG_PBNzfaOqlLrsi6d1kTMgw";

export const LOGO_IMAGE =
  "https://lh3.googleusercontent.com/aida/AEtjO1VqJWu9HDErVbLcmrMRTxH0eeNjwoIDcYsxjA-9CdxFdyhuonx7RqZwg1EEBXpxHV4EVUoBpXh9tD6qFZ8mB5kwsQeryGaVEXyqf-huzoEypeaESxwDOvbnPeBQ4cU9PvmUYJcYFkS0l7p_3PT8RX26zSTkrThae6zmWG8nT-PSbW7AG-rWR4Dm_HpEGQP37FdbjKLGq-QMfHsXw-SlYJaBeYacflzzJwQhUYcv1hhgqnYCr-NXckfDRIZd";
