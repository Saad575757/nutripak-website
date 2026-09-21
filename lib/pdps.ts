import { SHOP_PRODUCTS, type ShopProduct } from "./shop";

export interface PdpFormat {
  id: string;
  label: string;
  caption: string;
}

export interface FactRow {
  name: string;
  detail: string;
  amount: string;
  dv: string;
  dvClass: string;
}

export interface MechanismStep {
  label: string;
  text: string;
}

export interface HowToItem {
  icon: string;
  title: string;
  text: string;
}

export interface TimelineStep {
  badge: string;
  title: string;
  text: string;
}

export interface RatingBar {
  star: string;
  width: string;
  percent: string;
}

export interface Testimonial {
  date: string;
  title: string;
  body: string;
  name: string;
  meta: string;
  variant: string;
}

export interface PdpFaq {
  question: string;
  answer: string;
}

export interface BenefitItem {
  lead: string;
  rest?: string;
}

export interface PdpPairing {
  slug: string;
  badge: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface PdpRecord {
  slug: string;
  itemNumber: string;
  rating: string;
  reviewCount: number;
  topPill: string;
  topPillSecondary: string;
  formsBadge: string;
  formsBadgeSub: string;
  subtitle: string;
  benefits: BenefitItem[];
  formats: PdpFormat[];
  subscribePrice: number;
  onetimePrice: number;
  gallery: { src: string; alt: string }[];
  formulatorImage: string;
  formulatorQuote: string;
  formulatorCopy: string;
  formulatorName: string;
  formulatorRole: string;
  formulatorChips: string[];
  servingSize: string;
  servings: string;
  facts: FactRow[];
  otherIngredients: string;
  freeFrom: string;
  mechanismIntro: string;
  mechanismSteps: MechanismStep[];
  howTo: HowToItem[];
  clinicalCopy: string;
  clinicalChips: string[];
  suitedForIntro: string;
  suitedFor: { lead: string; rest: string }[];
  timeline: TimelineStep[];
  reviewAverage: string;
  ratingBars: RatingBar[];
  recommendPct: string;
  testimonials: Testimonial[];
  faqs: PdpFaq[];
  pairings: PdpPairing[];
}

const AIDA = "https://lh3.googleusercontent.com/aida/";
const AIDA_PUBLIC = "https://lh3.googleusercontent.com/aida-public/";

export const VITAMIN_C_D3_PDP: PdpRecord = {
  slug: "vitamin-c-d3",
  itemNumber: "Item #NP-04",
  rating: "5.0",
  reviewCount: 1420,
  topPill: "Bestseller • Clinical Foundation",
  topPillSecondary: "Third-Party Certified Bioavailable",
  formsBadge: "Pure Chelated Active Matrix",
  formsBadgeSub: "Batch #NP-2024-C92 • 99.8% Purity",
  subtitle:
    "Clinically formulated with lipid-encapsulated Quali®-C, plant-derived D3, and organic citrus bioflavonoids for 3x superior cellular absorption.",
  benefits: [
    {
      lead: "1,000mg Liposomal Vitamin C",
      rest: " for prolonged plasma retention and immune white blood cell support",
    },
    {
      lead: "5,000 IU Vegan Lichen D3 + K2 (MK-7)",
      rest: " working synergistically for calcium partition and arterial balance",
    },
    {
      lead: "Bioactive Quercetin Phytosome",
      rest: " enhancing cell permeability and histamine modulation",
    },
    { lead: "Buffered non-acidic matrix", rest: " — 100% gentle on stomach, even when taken fasted" },
  ],
  formats: [
    {
      id: "capsules",
      label: "Bioactive Capsules",
      caption: "60 count (30 servings)",
    },
    {
      id: "liquid",
      label: "Liposomal Liquid",
      caption: "450ml Citrus Nectar",
    },
  ],
  subscribePrice: 28.9,
  onetimePrice: 34,
  gallery: [
    {
      src:
        AIDA +
        "AEtjO1Vmju2_oMgXLO47OJ5fOdeY8gMVXozk0TZDiKaMnZVaPaX9RLmKVQDpbGBBzXFNKac_JcFWrQPs1gKg0CcORiUAmDH2Qn6XJTovCM1HGBrpIgGthLcrq-K9z8_W_vwV3f9EHt39s11HGeQzRfIZ1LM4A_vqgz7fQOCuHoDD4cKKy9elLJYOV7MYAj8o2WUUS0NCebWZ-QQHUmSzVtt-4sNh7mkvD57BBPKu704ic2oFyS3qTdC9lHgCySpP",
      alt: "Bottle front angle with clean apothecary label",
    },
    {
      src:
        AIDA_PUBLIC +
        "AB6AXuDo5I1FHAhQ2Fl_Av7On6Ll9Ma7UETt2g4GiJMXtN_fPTDb_L4zSfhn84PCjMu2Ikk8KIQotaoSV0JTYELuQTL6YtEy7aSyCfd_1-BeAjNiSXjmFZZ-TNh4e5E0QNbT-xjCy3UMW51eWL_A2THmacSL8hxiI3dXYpcOsLcGrNuWgCQ6L7dKdDnJQ-Xo_uqrVacjntaFw0i31BQGLB_HIhNij0TmH2L31Weva0oSQlituY7VNe45sMYPng",
      alt: "Close up macro shot of two golden bioactive liposomal capsules resting on fresh organic citrus slice with soft studio lighting and green herbal accents",
    },
    {
      src:
        AIDA_PUBLIC +
        "AB6AXuDquVCOTg2QOA8hAt2M7v_m1fWw5RqEN0TF5NeEUgwbfefExjfUzijdpgRmk5pptwZuSh8SdDJjvcJ26SUs8gkKMLQkr-N1MOw7_ubkcJxwQmMST0AqDt2sOpTaT7jHCh417cYBtEbSzki3I69S2v39lPVCLMS4inpuuekk4zxsYWw30vahe8E9ZGJJSTkp0S9yx5mOid-nFgllYcS3YmmdJYU5xSf6ICBQCjJxcWL1b73KUH0kkbg7xA",
      alt: "Minimalist eco refill daily sachet pouch next to the amber glass jar on an elegant warm travertine counter in a sunlit kitchen",
    },
    {
      src:
        AIDA_PUBLIC +
        "AB6AXuA_6XKQfrGU4bgPbLH-9dAyLMpkr3xyxjqav49QUN0sFWo9ymM8Eb5H6JAtxlh2bGs-UAfuSDXjhQi-zjaFz51V9-4ae_6Fea6MHAuYOzs9oVqTTuHmzOzLq3x9HZmm8kL7zyKH11n86zaxdKK9Gpxp-ge_589GXXi3PIhttVrOADbUJfmdi7SNJd10lunCp9pTLQ8K0Sky4w4UBcdo7U0pC_HT9xNUrKtRd_6nrCifU9JQDM6OLoIm9g",
      alt: "Morning wellness routine aesthetic with a glass of crisp water morning sunlight fresh eucalyptus branch and the amber supplement bottle",
    },
  ],
  formulatorImage:
    AIDA +
    "AEtjO1WulccyL6x9FxDXyi-4nEAtvtejZa-bJcpvAGmVRlgwVXB2zCZcOKj4GybUNwrBLzOCq-x3WsSu1GrCZFk0YFJ_1Encfwyv72QYl_3yKic0RaSgi6UaS9PIEw-OiAWOFQBKP1FwKIW-0J1QL2ZHpkyp4vM4BWgYSi19DncLeD-t8SAz7LHRIIFVGYFctoA_cMeoCmT_LcH1sFMbT-9x4oKDIhG5soqLVN3PjGAKbGxGy22X98rJCGHBoCU",
  formulatorQuote:
    "Most commercial Vitamin C oxidizes before reaching cellular receptors. Nutripak's chelated lipid matrix preserves potency down to the cellular membrane.",
  formulatorCopy:
    "Standard ascorbic acid is water-soluble and rapidly excreted through renal filtration within 120 minutes. By encapsulating pure Quali®-C inside sunflower-derived phosphatidylcholine liposomes alongside organic citrus bioflavonoids, we prevent acidic breakdown in the gastric tract and achieve over 300% greater cellular bioavailability.",
  formulatorName: "Elena Vance, Ph.D.",
  formulatorRole:
    "Nutritional Biochemistry, Stanford Fellow • Lead Scientist at NUTRIPAK",
  formulatorChips: ["Batch Verified", "Peer-Reviewed Ratio"],
  servingSize: "Serving Size: 2 Bioactive Capsules",
  servings: "Servings Per Container: 30",
  facts: [
    {
      name: "Vitamin C",
      detail: " (as Quali®-C Ascorbic Acid & Ascorbyl Palmitate)",
      amount: "1,000 mg",
      dv: "1,111%",
      dvClass: "text-secondary",
    },
    {
      name: "Vitamin D3",
      detail: " (from Wild-Crafted Plant Lichen • 5,000 IU)",
      amount: "125 mcg",
      dv: "625%",
      dvClass: "text-secondary",
    },
    {
      name: "Vitamin K2",
      detail: " (as Menaquinone-7 / MK-7 from fermented chickpea)",
      amount: "100 mcg",
      dv: "83%",
      dvClass: "text-on-surface-variant",
    },
    {
      name: "Organic Citrus Bioflavonoid Complex",
      detail: " (Hesperidin & Naringin)",
      amount: "200 mg",
      dv: "*",
      dvClass: "text-outline",
    },
    {
      name: "Quercetin Phytosome",
      detail: " (Sophora japonica extract with sunflower lecithin)",
      amount: "150 mg",
      dv: "*",
      dvClass: "text-outline",
    },
  ],
  otherIngredients:
    "Vegetable cellulose (hypromellose capsule), organic bamboo shoot extract (natural flow agent).",
  freeFrom:
    "Gluten, dairy, soy, corn, synthetic binders, stearates, titanium dioxide, artificial preservatives, or artificial dyes.",
  mechanismIntro:
    "Our formulation solves the classic barrier of water-soluble nutrient decay. Standard ascorbic acid binds poorly with gut epithelial cells and triggers digestive distress at higher doses. Nutripak wraps bioactive Quali-C within lipid micelles that mirror the cellular membrane.",
  mechanismSteps: [
    {
      label: "1. Gastric Passage",
      text: "Lipid layer protects Vitamin C through pH 1.5 gastric juices.",
    },
    {
      label: "2. Lymph Uptake",
      text: "Direct chylomicron uptake bypasses restrictive liver degradation.",
    },
    {
      label: "3. Leukocyte Infusion",
      text: "Deep intracellular saturation within immune defending monocytes.",
    },
  ],
  howTo: [
    {
      icon: "wb_sunny",
      title: "Optimal Morning Cadence",
      text: "Take 2 capsules once daily, ideally alongside your morning meal containing clean healthy fats (avocado, olive oil, eggs, or nut butter) to maximize lipophilic D3 & K2 absorption.",
    },
    {
      icon: "flight_takeoff",
      title: "Intense Travel / Stress Protocol",
      text: "During heavy airline transit or seasonal shifts, dosage may safely be doubled to 4 capsules daily for 3–5 consecutive days.",
    },
  ],
  clinicalCopy:
    "Every individual production run undergoes double-blind analytical assay by Eurofins Scientific Laboratories to ensure zero microbial contamination, heavy metals (Lead <0.01 ppm, Mercury <0.005 ppm), and confirmed potency:",
  clinicalChips: [
    "Certificate of Analysis: #NP-2024-C92",
    "ISO 17025 Accredited",
    "cGMP Certified Facility",
  ],
  suitedForIntro:
    "Designed for individuals seeking resilient vitality without gastrointestinal discomfort:",
  suitedFor: [
    {
      lead: "Urban professionals",
      rest: " encountering elevated daily stress, poor sleep, or frequent air travel.",
    },
    {
      lead: "Indoor & office workers",
      rest: " lacking consistent daily solar UVB synthesis for adequate Vitamin D balance.",
    },
    {
      lead: "Athletes & active individuals",
      rest: " demanding faster oxidative recovery and mucosal immunity support.",
    },
    {
      lead: "Collagen optimizers",
      rest: " wanting essential co-factors for skin firming and dermal elasticity.",
    },
  ],
  timeline: [
    {
      badge: "7:00 AM – 9:00 AM",
      title: "Morning Cellular Infusion",
      text: "Taken with morning hydration. The liposomal matrix seamlessly transits the stomach, releasing active ascorbate into blood plasma within 45 minutes without acidic rebound.",
    },
    {
      badge: "All-Day Defense",
      title: "Intracellular Shielding",
      text: "Bioflavonoid carriers maintain high circulating antioxidant levels for up to 18 hours, neutralizing reactive oxidative species and supporting clear mental focus.",
    },
    {
      badge: "Day 14 & Beyond",
      title: "Cumulative Radiance",
      text: "Endogenous collagen synthesis accelerates. Immune resilience solidifies against environmental toxins, and natural skin hydration displays a luminous barrier reset.",
    },
  ],
  reviewAverage: "4.9",
  ratingBars: [
    { star: "5★", width: "w-[92%]", percent: "92%" },
    { star: "4★", width: "w-[6%]", percent: "6%" },
    { star: "3★", width: "w-[1.5%]", percent: "1.5%" },
  ],
  recommendPct: "98%",
  testimonials: [
    {
      date: "3 days ago",
      title: "“Zero stomach acidity. Truly game changing.”",
      body: "I have chronic acid reflux and standard vitamin C tablets were unbearable on my stomach. This complex is extraordinarily gentle. I take it before coffee with zero issues, and haven't caught a seasonal bug all winter.",
      name: "Marcus T.",
      meta: "Verified Buyer • 8 mo subscriber",
      variant: "Capsules",
    },
    {
      date: "1 week ago",
      title: "“D3 and C together is pure genius.”",
      body: "Having the high potency 5000 IU plant D3 alongside Quali-C and K2 in two clean capsules eliminated three separate pill bottles from my medicine cabinet. My serum bloodwork after 3 months is optimal.",
      name: "Dr. Sarah K.",
      meta: "Verified Buyer • 4 mo subscriber",
      variant: "Capsules",
    },
    {
      date: "2 weeks ago",
      title: "“Skin tone brightness is real.”",
      body: "I bought this mainly for immunity before international flights, but within three weeks my aesthetician asked what I had changed in my skincare routine. The citrus bioflavonoid phytosome makes a visible difference.",
      name: "Amara D.",
      meta: "Verified Buyer • 1 yr subscriber",
      variant: "Capsules",
    },
  ],
  faqs: [
    {
      question: "Can I take this on an empty stomach?",
      answer:
        "Yes! Because our formula uses lipid-encapsulated Quali®-C alongside non-acidic ascorbyl palmitate, it is completely buffered. Unlike harsh standard ascorbic acid pills, it will not trigger gastric acidity or nausea if taken fasted. However, taking it with a meal containing healthy fats aids the absorption of the fat-soluble vitamins D3 and K2.",
    },
    {
      question: "Is the Vitamin D3 completely vegan?",
      answer:
        "100% yes. Most conventional commercial Vitamin D3 supplements are sourced from irradiated lanolin (sheep's wool grease). Nutripak exclusively uses wild-crafted, certified organic lichen sustainably harvested in northern climates, delivering identical bio-identical cholecalciferol without any animal derivatives.",
    },
    {
      question: "How does the subscription work?",
      answer:
        "Subscribers receive 15% off every order plus permanent free carbon-neutral shipping. You can pause, reschedule, change your delivery frequency, or cancel at any moment with one click directly inside your Nutripak dashboard or via SMS. We also send an automated email reminder 3 days prior to any recurring charge.",
    },
  ],
  pairings: [
    {
      slug: "deep-sleep-magnesium",
      badge: "PM Restoration Routine",
      name: "Deep Sleep & Neuro-Calm",
      description:
        "Chelated Magnesium Bisglycinate, L-Theanine, and Apigenin for slow-wave restorative sleep.",
      price: 38,
      image:
        AIDA_PUBLIC +
        "AB6AXuDV3pmxIMlH8RPTVOh8bMzOxNJDqLKHjLWcWm1DjrhCHNtoIXAb4LprSLC2y4TJ92sAvA7yAHzD-XNrtHW0LiPFAhwfITaqGCHbfcdoW6D41PkvQdVvGZBHez6QF1WkolS6uKgJt5Z8ZyacpL9xHjuHMaJux_sDxiWnqgrfnY15qFpnGuq-aTZZR6yKAeYKFZmOoqHdjh9MVFPL0jPMZzKeFH6egee_IJ_2v4S7r3JPkl_IS5AZhMLC-A",
    },
    {
      slug: "renew-collagen",
      badge: "Dermal Longevity",
      name: "Renew Collagen Peptides",
      description:
        "Grass-fed Type I & III hydrolyzed peptides paired with multi-molecular hyaluronic acid.",
      price: 42,
      image:
        AIDA_PUBLIC +
        "AB6AXuAyjSUxjHLIc7Lm9SihrTNLtDsPEAw8ycMcJjMQv17IsEIi1DB3OL32E_vXHdVD_WYPU_4b5boTukGbJ-zUQpIHp30u87b8SXeBEcXwKKqz-yCJgd1Hb7orPlW02bnuKoM9sTEafZYzKeA3dqDFDAf3ecUTKQADGOQ7hnHKZKrUx3y42y5u7RgQjDQ5TuGOxikG4s1t2U3XfIs_KfX6PXp4Ga4Ccr8HCTB3TylcvZKjAPtgovLy5eg9zA",
    },
  ],
};

export const DEFAULT_PAIRINGS = VITAMIN_C_D3_PDP.pairings;

const GENERIC_FORMS: PdpFormat[] = [
  { id: "capsules", label: "Bioactive Capsules", caption: "Standard clinical dose" },
  { id: "liquid", label: "Liposomal Liquid", caption: "Enhanced uptake format" },
];

const GENERIC_FAQ: PdpFaq[] = [
  {
    question: "Can I take this on an empty stomach?",
    answer:
      "Yes. Our formulas are buffered and gentle on the digestive tract. That said, taking it with a meal containing clean healthy fats supports optimal absorption of fat-soluble actives.",
  },
  {
    question: "How does the subscription work?",
    answer:
      "Subscribers receive 15% off every order plus permanent free carbon-neutral shipping. You can pause, reschedule, change your delivery frequency, or cancel at any moment with one click directly inside your Nutripak dashboard.",
  },
  {
    question: "Are your products third-party tested?",
    answer:
      "Every production run undergoes double-blind analytical assay by ISO 17025 accredited laboratories to confirm potency and ensure zero microbial or heavy-metal contamination. Certificates of Analysis are published for every batch.",
  },
];

export function makeGenericPdp(product: ShopProduct): PdpRecord {
  return {
    slug: product.slug,
    itemNumber: "Item #NP-04",
    rating: product.rating,
    reviewCount: 420,
    topPill: `${product.badge} • Clinical Foundation`,
    topPillSecondary: "Third-Party Certified Bioavailable",
    formsBadge: "Verified Active Matrix",
    formsBadgeSub: "Batch #NP-2025 • 99%+ Purity",
    subtitle: product.description,
benefits: [
    {
      lead: product.name,
      rest: " delivered in a bio-active, highly absorbable matrix",
    },
    {
      lead: "ISO 17025 third-party assayed",
      rest: " potency with published Certificates of Analysis",
    },
    {
      lead: "Buffered non-acidic matrix",
      rest: " — 100% gentle on stomach, even when taken fasted",
    },
  ],
    formats: GENERIC_FORMS,
    subscribePrice: product.price,
    onetimePrice: product.originalPrice,
    gallery: [
      { src: product.image, alt: product.alt },
      { src: product.image, alt: product.alt },
      { src: product.image, alt: product.alt },
      { src: product.image, alt: product.alt },
    ],
    formulatorImage: VITAMIN_C_D3_PDP.formulatorImage,
    formulatorQuote: `Our ${product.name} is engineered so every active reaches circulation in its native bio-identical form — never compressed, oxidized, or synthetically derived.`,
    formulatorCopy:
      "We begin with clean raw ingredients, then pair them with bio-identical carriers that mirror your cellular membrane. The result is dramatically higher absorption without digestive compromise — formulation philosophy is as important as the ingredients themselves.",
    formulatorName: "Elena Vance, Ph.D.",
    formulatorRole:
      "Nutritional Biochemistry, Stanford Fellow • Lead Scientist at NUTRIPAK",
    formulatorChips: ["Batch Verified", "Peer-Reviewed Ratio"],
    servingSize: "Serving Size: 1 Recommended Dose",
    servings: "Servings Per Container: 30",
    facts: [
      {
        name: "Bio-Active Complex",
        detail: " (chelated, enzyme-ready form)",
        amount: product.originalPrice >= 40 ? "500 mg" : "300 mg",
        dv: "*",
        dvClass: "text-outline",
      },
      {
        name: "Proprietary-Ratio No",
        detail: " (100% declared label transparency)",
        amount: "0 mg",
        dv: "*",
        dvClass: "text-outline",
      },
    ],
    otherIngredients:
      "Vegetable cellulose (hypromellose capsule), organic bamboo shoot extract (natural flow agent).",
    freeFrom:
      "Gluten, dairy, soy, corn, synthetic binders, stearates, titanium dioxide, artificial preservatives, or artificial dyes.",
    mechanismIntro:
      "Conventional supplements degrade before meaningful absorption. Nutripak packages actives within bio-identical lipid carriers that protect them through the digestive tract and deliver them directly to the cells that need them.",
    mechanismSteps: [
      {
        label: "1. Gastric Passage",
        text: "Protective carrier layer shields the active through harsh gastric juices.",
      },
      {
        label: "2. Direct Uptake",
        text: "Bypasses restrictive liver metabolism for near-total circulation.",
      },
      {
        label: "3. Cellular Saturation",
        text: "Deep intracellular delivery where the nutrient exerts its effect.",
      },
    ],
    howTo: [
      {
        icon: "wb_sunny",
        title: "Daily Clinical Rhythm",
        text: "Take the recommended serving once daily, ideally alongside a meal containing clean healthy fats to maximize absorption.",
      },
      {
        icon: "flight_takeoff",
        title: "Travel / Stress Protocol",
        text: "During intense travel or seasonal shifts you may safely double your daily serving for up to 5 consecutive days.",
      },
    ],
    clinicalCopy:
      "Every production run undergoes double-blind analytical assay by ISO 17025 accredited laboratories to confirm zero microbial or heavy-metal contamination and full label potency:",
    clinicalChips: [
      "Certificate of Analysis: #NP-2025",
      "ISO 17025 Accredited",
      "cGMP Certified Facility",
    ],
    suitedForIntro:
      "Designed for performance-minded individuals who refuse to compromise on absorption:",
    suitedFor: [
      {
        lead: "Active professionals",
        rest: " seeking consistent daily energy and immune steadiness.",
      },
      {
        lead: "Precision users",
        rest: " who read labels and demand fully declared transparency.",
      },
      {
        lead: "Stomach-sensitive individuals",
        rest: " who react poorly to conventional compressed tablets.",
      },
    ],
    timeline: [
      {
        badge: "Day 1 – 3",
        title: "Initial Delivery",
        text: "Actives enter circulation quickly thanks to the lipid-protected carrier system, with none of the typical digestive burden.",
      },
      {
        badge: "Day 7 – 14",
        title: "Conditioning Window",
        text: "With consistent daily adherence, baseline levels stabilize and the full effect profile begins to unfold.",
      },
      {
        badge: "Day 14 & Beyond",
        title: "Sustained Rhythm",
        text: "Continued use maintains steady-state support so the underlying system never lets your routine down.",
      },
    ],
    reviewAverage: product.rating.split(" ")[0],
    ratingBars: [
      { star: "5★", width: "w-[94%]", percent: "94%" },
      { star: "4★", width: "w-[4%]", percent: "4%" },
      { star: "3★", width: "w-[1%]", percent: "1%" },
    ],
    recommendPct: "97%",
    testimonials: [
      {
        date: "1 week ago",
        title: "“Absorption you can actually feel.”",
        body: "I noticed a real difference within the first week of daily use. Clean formula, no aftertaste, and completely gentle on my stomach.",
        name: "Verified Customer",
        meta: "Verified Buyer • 3 mo subscriber",
        variant: "Capsules",
      },
      {
        date: "2 weeks ago",
        title: "“The label transparency won me over.”",
        body: "Every ingredient fully declared with batch COAs online. This is exactly how supplements should be made.",
        name: "Verified Customer",
        meta: "Verified Buyer",
        variant: "Capsules",
      },
      {
        date: "1 month ago",
        title: "“Part of my daily non-negotiable.”",
        body: "Replaced three separate pills with one clean formula. Consistent quality on every single delivery.",
        name: "Verified Customer",
        meta: "Verified Buyer • 8 mo subscriber",
        variant: "Capsules",
      },
    ],
    faqs: GENERIC_FAQ,
    pairings: DEFAULT_PAIRINGS,
  };
}

const PDP_MAP = new Map<string, PdpRecord>([
  [VITAMIN_C_D3_PDP.slug, VITAMIN_C_D3_PDP],
]);

export function getPdpForSlug(slug: string): PdpRecord | null {
  const product = SHOP_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return null;
  return PDP_MAP.get(slug) ?? makeGenericPdp(product);
}