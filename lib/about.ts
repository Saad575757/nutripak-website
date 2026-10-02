export const ABOUT_HERO = {
  label: "About Nutripak • For Adults at Every Stage",
  strip: "Subsidiary of Alfalah Healthcare — Pakistan — Adult Nutrition Division",
  headline: "Thoughtfully crafted nutrition for everyday needs.",
  intro:
    "Nutripak's initial objective was to create adult nutrition solutions that consumers could genuinely rely on. Every formula, whether it's for protein support, diabetic care, or daily balanced nutrition, is created in collaboration with medical professionals and nutrition specialists, so the information on the label is supported by more than just advertising.",
  cta: "Explore Our Products",
  quote:
    "Nutrition is not universal. A person controlling diabetes requires a distinct approach compared to someone recovering strength after an illness — this variation is what motivates the creation of each Nutripak formula.",
  quoteAuthor: "Dr Shabbir",
  quoteRole: "Medical & Clinical Affairs, Nutripak",
} as const;

export interface StatItem {
  icon: string;
  label: string;
  value: string;
  description: string;
  /** Long text values (e.g. certification names) get a smaller display size. */
  compact?: boolean;
}

export const ABOUT_STATS: StatItem[] = [
  {
    icon: "science",
    label: "NUTRIENTS",
    value: "26",
    description: "Essential nutrients in every SUBSET serving",
  },
  {
    icon: "inventory_2",
    label: "FORMULAS",
    value: "3",
    description: "Specialized formulas — SUBSET, ADA-Glu & Proteios",
  },
  {
    icon: "workspace_premium",
    label: "CERTIFIED",
    value: "ISO 9001:22000",
    description: "SZUTEST & International Halal certified",
    compact: true,
  },
  {
    icon: "medical_services",
    label: "DOCTOR REVIEWED",
    value: "5/5",
    description: "Trusted by healthcare professionals",
  },
];

export const ABOUT_ORIGIN = {
  label: "Our Origin & Standard",
  heading: "Built for real needs, never a one-size-fits-all shelf",
  paragraphs: [
    "Nutripak grew out of a simple observation: nutrition isn’t one-size-fits-all. Someone managing diabetes needs something very different from someone recovering strength after an illness, and both are different again from a person who just needs a more balanced diet.",
    "So instead of one general product, we built a focused range — each one developed with doctors and nutrition experts for a specific need.",
  ],
  founders: [
    {
      initials: "EV",
      name: "Dr. Elena Vance, Ph.D.",
      meta: "Stanford Clinical Fellow • Biochemistry",
      tone: "secondary",
    },
    {
      initials: "MS",
      name: "Marcus Sterling",
      meta: "Oxford Formulation Chemist • Bio-Design",
      tone: "primary",
    },
  ],
} as const;

export const ABOUT_PURPOSE = {
  heading: "Our Purpose",
  body: "We think good nutrition is one of the simplest ways to change how someone feels day to day. That’s the thinking behind everything we make — products that support adults through whatever stage they are in, whether that’s managing a health condition, rebuilding strength, or just keeping their diet on track. Nothing leaves our facility without being safe, effective, and grounded in real science.",
} as const;

export const ABOUT_WHO_WE_ARE = {
  heading: "Who We Are",
  paragraphs: [
    "Nutripak grew out of a simple observation: nutrition isn’t one-size-fits-all. Someone managing diabetes needs something very different from someone recovering strength after an illness, and both are different again from a person who just needs a more balanced diet. So instead of one general product, we built a focused range — each one developed with doctors and nutrition experts for a specific need.",
    "Nutripak is a subsidiary of Alfalah Healthcare, and every formula we produce is manufactured to strict, internationally recognized quality standards.",
  ],
} as const;

export const ABOUT_PILLARS_SECTION = {
  heading: "Why Choose Nutripak",
} as const;

export interface Pillar {
  icon: string;
  index: string;
  title: string;
  description: string;
  result: string;
}

export const ABOUT_PILLARS: Pillar[] = [
  {
    icon: "biotech",
    index: "PILLAR 01",
    title: "Built on Research",
    description:
      "Every formula is grounded in clinical study, not guesswork — developed alongside doctors and nutrition experts for a specific health need.",
    result: "Doctor-developed formulas",
  },
  {
    icon: "fact_check",
    index: "PILLAR 02",
    title: "Tested, Batch After Batch",
    description:
      "Every batch carries ISO 9001:22000 and SZUTEST certification, plus International Halal Certification, so what’s on the label is what’s actually inside.",
    result: "ISO, SZUTEST & Halal certified",
  },
  {
    icon: "diversity_3",
    index: "PILLAR 03",
    title: "For Individual at Every Age",
    description:
      "From early adulthood through the senior years, our range covers balanced everyday nutrition, diabetic care, and protein support — three formulas built for three real needs.",
    result: "3 formulas, 3 specific needs",
  },
];

export const ABOUT_TEAM = {
  heading: "Our Team",
  intro:
    "Every formula passes through our Medical & Clinical Affairs, Research & Development, and Quality Assurance teams before it reaches a single shelf.",
} as const;

export interface TeamMember {
  /** Name is pending from the approved doc — role is used as the card headline. */
  role: string;
  focus: string;
  icon: string;
}

export const ABOUT_TEAM_MEMBERS: TeamMember[] = [
  {
    role: "Medical & Clinical Affairs Lead",
    focus: "Diabetes & Chronic Care",
    icon: "medical_services",
  },
  {
    role: "R&D Formulation",
    focus: "Balanced Nutrition",
    icon: "science",
  },
  {
    role: "Quality Assurance Lead",
    focus: "Batch Testing & Certification",
    icon: "verified",
  },
  {
    role: "Nutrition & Dietetics",
    focus: "Protein & Recovery",
    icon: "restaurant",
  },
];

export const ABOUT_QUALITY = {
  heading: "Quality You Can Check",
  body: "Every Nutripak formula is manufactured under internationally recognized quality and safety standards, so what’s on the label is backed by more than marketing.",
  certifications: [
    {
      icon: "workspace_premium",
      title: "ISO 9001:22000 Certified",
      note: "Consistent, audited manufacturing quality",
    },
    {
      icon: "fact_check",
      title: "SZUTEST Organization Certified",
      note: "Independent quality verification",
    },
    {
      icon: "mosque",
      title: "International Halal Certified",
      note: "Every formula, every batch",
    },
  ],
} as const;

export const ABOUT_COMMITMENT = {
  heading: "Our Commitment",
} as const;

export interface CommitmentCard {
  icon: string;
  title: string;
  description: string;
}

export const ABOUT_COMMITMENT_CARDS: CommitmentCard[] = [
  {
    icon: "volunteer_activism",
    title: "For Patients & Adults",
    description:
      "Nutrition that’s grounded in clinical thinking and actually makes a difference in day-to-day life.",
  },
  {
    icon: "stethoscope",
    title: "For Healthcare Professionals",
    description:
      "A nutrition partner doctors and dietitians feel confident putting their name behind.",
  },
  {
    icon: "shield",
    title: "For Quality",
    description:
      "No shortcuts — every product is held to strict safety, testing, and manufacturing standards.",
  },
];

export const ABOUT_OFFER = {
  heading: "What We Offer",
  cta: "Explore Our Products",
} as const;

export interface OfferCard {
  name: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export const ABOUT_OFFER_CARDS: OfferCard[] = [
  {
    name: "SUBSET",
    title: "Complete Balanced Nutrition Supplement",
    description:
      "26 essential macro- and micronutrients in one formula, built to support everyday health and fill in the nutritional gaps a regular diet sometimes leaves behind.",
    icon: "balance",
    href: "/products/subset",
  },
  {
    name: "ADA-Glu",
    title: "Specialized Nutrition for Diabetic Management",
    description:
      "A carefully controlled mix of macronutrients that supports blood sugar, heart health, and weight management, without giving up on taste or nutrition.",
    icon: "water_drop",
    href: "/products/ada-glu",
  },
  {
    name: "Proteios",
    title: "High-Quality Protein Supplement",
    description:
      "Based on quality whey protein and whey peptides, it is designed to help those who are recuperating from illness or injury, have a protein shortage, or simply need more protein than their diet offers.",
    icon: "fitness_center",
    href: "/products/proteios",
  },
];

export const ABOUT_PRINCIPLES = {
  heading: "Our Principles",
  body: "Trust isn’t something we assume — we work for it. That means working closely with healthcare professionals, holding ourselves to strict quality and safety standards, and being upfront about what’s actually in our products and why.",
  cta: "Read More About Quality & Safety",
} as const;

export interface FaqItem {
  question: string;
  answer: string;
}

export const ABOUT_FAQS: FaqItem[] = [
  {
    question: "What is Nutripak?",
    answer:
      "Nutripak is an adult nutrition brand built on three science-backed supplements: SUBSET for everyday balanced nutrition, ADA-Glu for diabetes management, and Proteios for protein support.",
  },
  {
    question: "How do I choose the right product for me?",
    answer:
      "It really comes down to what you need: SUBSET for general balanced nutrition, ADA-Glu if you’re managing diabetes, and Proteios if you need extra protein or are recovering strength. Still not sure? Your doctor can help, or you can use the “Find the Right Product” guide on our homepage.",
  },
  {
    question: "Are Nutripak products safe for daily use?",
    answer:
      "Yes — they’re formulated to be used regularly as part of a balanced diet. That said, it’s always worth checking with a healthcare professional before starting anything new, especially if you have an existing health condition.",
  },
];

export const ABOUT_DOWNLOADS = {
  heading: "Downloads",
  /** TODO: point these at the real PDF assets once they are supplied. */
  items: [
    { label: "Nutripak Product Guide", href: "/downloads#nutripak-product-guide" },
    { label: "Nutrition Fact Sheets", href: "/downloads#nutrition-fact-sheets" },
  ],
} as const;

/**
 * TEMPORARY hero image. Replace with the final approved lifestyle shot
 * (adult/senior enjoying a healthy meal, or a nutritionist reviewing a chart).
 */
export const HERO_LIFESTYLE_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCj3tzgtaEeOzBHiiqTjHJUqjvuYlKkPMp0Oxz2OylY5-t1iNSbSdJBsRd49PrnTGwoTEB1g03vgz1GazaUNrvPO_ApeMoGehH9XRE3XVs7N9Ljhpofa2fHho8ou0AHsVTJDh6uwRYLGudjqzSv-zdoQ02ApmL3fz8xSn77hu9XLHXyaGDM0MU9CR_TMwZBW_X9lGW3q-ARCFNmJABq_U8ODU3T84aXhalJaN5WQIQJSmsXd3Z70n2Ewg";
