export const ROUTES = {
  home: "/",
  shop: "/shop",
  categories: "/categories",
  product: (slug: string) => `/products/${slug}`,
  category: (slug: string) => `/categories/${slug}`,
  cart: "/cart",
  checkout: "/checkout",
  confirmation: "/order-confirmation",
  about: "/about",
  contact: "/contact",
  quiz: "/quiz",
  blog: "/blog",
} as const;

export const FREE_SHIPPING_THRESHOLD = 50;

interface CartItemSeed {
  key: string;
  name: string;
  variant: string;
  price: number;
  image: string;
  alt: string;
}

const PRODUCT_IMAGES = {
  vitaminC: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkPJsAnPlOWZdPF8dGj3xFYt1xSmvr8G6SQxnGvI8clciq_bHD_YQkiEVITtahT--1xUXGXVZYoo_8wVc0hk0_g_WwyDcAszsV_cfQbwgUdUp_ejGTQn2aWXYJLGERvA3WZfaV-CuB8MjWXPpNeFZBbKNJygZ4M_Hpix-Oeg83twx-9_SfF_caM1qVEbCT-vaFL5ozmLRDS9hBwXxLuxZV_DS-__pkDXQiLa7iX5Kd3qVya0kk0i-zow",
  collagen:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBvRAtayZycoc3x8F7GyXSNcTrVifXNTA8Ggct1_2Nt92zsLF6DSxXbNLxx7hfIcgrYd3gtLb5vGEe8GRKkAjGxjwmY8er3acBK2vLjrM-Yx_Yv78vsHceRi1Qy7dN0IiO0Xc9ecz6GizLF8EwLmCKd5fSZaNze79du-lQRnMlDQ85lTOdHAC_20wr_ecqzc7Jkefi6IQrBBuUjPc0TRVfETpnP6SkCx4Fa1Tm0aUBBucl2MARBCJr0mw",
  sleep: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnETWRYa4Q-CSJ7apKaK6-SAnqLvnYi46EbPMAmPjV1OprNxaY0QT6ylAqS016UMxB0_iljEJ3qDgG91hv1PEF3E9Wah-QxzpzvUHJnN3n-OSA_tYb3v0jhERv2zPFyrJvaQ6y_fruapQDrosT_NuVMsFiyfCzFLslxNCDYtzBkLzyMdwYi6_7LR-E1XrnhyKJXvNg0jga77i3vqCNzlwB9Dl3cXlfH8Ms_RmKHBNgdvnGx_nQRMOEjg",
} as const;

const SEED_CART_ITEM_1 = {
  name: "Daily Wellness C + D3",
  variant: "Monthly Subscription (15% off)",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuClh8jDfSoq83DL8vBC7lxyH5PpNHxBuKdzEMl7Onscwj919MP-RO3kAAUyh2a6-UAZSJt34BNxW2ZTfwAnOiVlguSG1Qv_LmQ2OYqIuuHxDHttNVfdEb-J2RmQkmnglrvJcKEi_7m8uR6Mfh_T5ZxjM_t4wNkrQpjJBvh_WVJ654YQt5sKaE30bBXY7ObPs_pVAGaZy3Za-E9fcTcX5y6NZSoto1yvxAbyWch-Lxu5Xc4_PNMjIZBSig",
  alt: "Vitamin C supplement bottle miniature icon",
};

const SEED_CART_ITEM_2 = {
  name: "Renew Collagen Peptides",
  variant: "Monthly Subscription (15% off)",
  image:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD1uPGfKQ5_vw4bQi7pEW2lL80TRMo3r5JYfp6en4BLli2wMp2BbbKqYd76H2XOOwhb_7OeyPpyr3CfA2SfSEpFXzq_VCZfr9bQyR88aDwsYqCcTmjvOcehYHZ1LLJZMfrjBIRFuHKjpOK0M_qjAF-ZWzpWXFuUBzbMDNt-sRxnvhQhG4ZRBdsuK-AusnJf91KYsY172x208Bzv70g1J3bMUnFON9xaP-01xYON8sDilkipyFpj-RE8fg",
  alt: "Collagen Peptides supplement bottle miniature icon",
};

/** Sample cart contents shown on first load (matches the home.html reference). */
export const SEED_CART: CartItemSeed[] = [
  { key: "daily-wellness-c-d3", price: 28.9, ...SEED_CART_ITEM_1 },
  { key: "renew-collagen-peptides", price: 35.7, ...SEED_CART_ITEM_2 },
];

export interface ProductCard {
  slug: string;
  name: string;
  badge: string;
  badgeClass: string;
  rating: number;
  reviews: number;
  description: string;
  price: number;
  subscribePrice: number;
  image: string;
  alt: string;
}

/** Featured best sellers. Will be replaced by the NeonDB Product table later. */
export const FEATURED_PRODUCTS: ProductCard[] = [
  {
    slug: "daily-wellness-vitamin-c-d3",
    name: "PROTEIOS",
    badge: "PROTEIOS",
    badgeClass: "bg-secondary-container text-on-secondary-fixed",
    rating: 4.9,
    reviews: 1420,
    description:
      "Balanced macro & micronutrients to support daily strength, energy, and vitality.",
    price: 34,
    subscribePrice: 28.9,
    image: PRODUCT_IMAGES.vitaminC,
    alt: "Dark amber glass supplement bottle labeled Daily Wellness Vitamin C and D3 Complex",
  },
  {
    slug: "renew-collagen-peptides",
    name: "ADA-glu",
    badge: "ADA-glu",
    badgeClass: "bg-primary text-on-primary",
    rating: 4.8,
    reviews: 980,
    description:
      "Slow-release carbohydrate blend formulated to support blood sugar management.",
    price: 42,
    subscribePrice: 35.7,
    image: PRODUCT_IMAGES.collagen,
    alt: "Matte beige supplement bottle labeled Renew Collagen Peptides and Hyaluronic Acid",
  },
  {
    slug: "deep-sleep-neuro-calm",
    name: "SUBSET",
    badge: "SUBSET",
    badgeClass: "bg-tertiary-container text-on-tertiary",
    rating: 5.0,
    reviews: 2150,
    description:
      "High-quality protein to support strength, recovery, and everyday healing. ",
    price: 38,
    subscribePrice: 32.3,
    image: PRODUCT_IMAGES.sleep,
    alt: "Minimalist dark violet supplement apothecary bottle labeled Deep Sleep Neuro-Calm Complex",
  },
];

export interface GoalCard {
  icon: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  slug: string;
  cardClass: string;
  iconClass: string;
  labelClass: string;
  titleClass: string;
  bodyClass: string;
  ctaClass: string;
}

/** Shop-by-goal cards (map onto Category / categories/[slug] once DB is wired). */
export const GOAL_CATEGORIES: GoalCard[] = [
  {
    icon: "bolt",
    label: "Protein Supplement",
    title: "Protein Support (MUSCLE & RECOVERY)",
    description: "High-quality protein to support strength, healing, and recovery",
    cta: "Shop Energy",
    slug: "energy",
    cardClass: "bg-amber-50",
    iconClass: "bg-amber-200/60 text-amber-900",
    labelClass: "text-amber-800",
    titleClass: "text-amber-950",
    bodyClass: "text-amber-800/80",
    ctaClass: "text-amber-900",
  },
  {
    icon: "bedtime",
    label: "Coming Soon",
    title: "EXPANDING OUR RANGE",
    description: "Tailored nutrition support launching soon",
    cta: "Shop Sleep",
    slug: "sleep",
    cardClass: "bg-indigo-50",
    iconClass: "bg-indigo-200/60 text-indigo-900",
    labelClass: "text-indigo-800",
    titleClass: "text-indigo-950",
    bodyClass: "text-indigo-800/80",
    ctaClass: "text-indigo-900",
  },
  {
    icon: "shield",
    label: "Complete Adult Nutrition",
    title: "Complete Nutrition",
    description: "Balanced macro & micronutrients for daily strength and vitality",
    cta: "Shop Immunity",
    slug: "immunity",
    cardClass: "bg-rose-50",
    iconClass: "bg-rose-200/60 text-rose-900",
    labelClass: "text-rose-800",
    titleClass: "text-rose-950",
    bodyClass: "text-rose-800/80",
    ctaClass: "text-rose-900",
  },
  {
    icon: "nutrition",
    label: "Diabetic-Specific Nutrition",
    title: "Diabetic Care Nutrition",
    description: "Slow-release carb blend formulated for blood sugar management",
    cta: "Shop Gut Health",
    slug: "digestive",
    cardClass: "bg-orange-50",
    iconClass: "bg-orange-200/60 text-orange-900",
    labelClass: "text-orange-800",
    titleClass: "text-orange-950",
    bodyClass: "text-orange-800/80",
    ctaClass: "text-orange-900",
  },
  // {
  //   icon: "water_drop",
  //   label: "DERMAL ELASTICITY",
  //   title: "Glow & Radiance",
  //   description: "Marine Collagen Peptides & Hyaluronic Acid",
  //   cta: "Shop Beauty",
  //   slug: "beauty",
  //   cardClass: "bg-emerald-50",
  //   iconClass: "bg-emerald-200/60 text-emerald-900",
  //   labelClass: "text-emerald-800",
  //   titleClass: "text-emerald-950",
  //   bodyClass: "text-emerald-800/80",
  //   ctaClass: "text-emerald-900",
  // },
  // {
  //   icon: "all_inclusive",
  //   label: "COMPLETE BASELINE",
  //   title: "Daily Essentials",
  //   description: "Multi-Nutrient Foundation + Algal Omega-3",
  //   cta: "Shop Essentials",
  //   slug: "daily-essentials",
  //   cardClass: "bg-green-50",
  //   iconClass: "bg-green-200/60 text-green-900",
  //   labelClass: "text-green-800",
  //   titleClass: "text-green-950",
  //   bodyClass: "text-green-800/80",
  //   ctaClass: "text-green-900",
  // },
];

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