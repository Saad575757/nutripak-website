export interface StatItem {
  icon: string;
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export const ABOUT_STATS: StatItem[] = [
  {
    icon: "biotech",
    label: "BIOAVAILABILITY",
    value: "100%",
    description: "Chelated mineral matrix & lipid carriers",
  },
  {
    icon: "filter_vintage",
    label: "PURITY SPEC",
    value: "0%",
    description: "Synthetic colorants, titanium dioxide, or talc",
  },
  {
    icon: "school",
    label: "CLINICAL BOARD",
    value: "Stanford",
    description: "& Oxford biochemistry advisory fellows",
  },
  {
    icon: "verified_user",
    label: "VERIFIED TRUST",
    value: "4.9",
    suffix: "/ 5.0",
    description: "Across 85,000+ subscriber mornings",
  },
];

export interface Pillar {
  icon: string;
  index: string;
  title: string;
  description: string;
  result: string;
}

export const ABOUT_PILLARS: Pillar[] = [
  {
    icon: "adjust",
    index: "PILLAR 01",
    title: "Intracellular Bioavailability",
    description:
      "We exclusively use amino-acid chelates (such as Albion® TRAACS bisglycinate) and liposomal phytosome carriers. Every nutrient is selected in its native co-enzyme format ready for instantaneous metabolic uptake.",
    result: "3.4x higher cellular absorption",
  },
  {
    icon: "policy",
    index: "PILLAR 02",
    title: "Radical Batch Transparency",
    description:
      "Every single bottle is laser-etched with an individual production lot identifier. Customers can review ISO 17025 accredited third-party lab assays verifying heavy metals, microbes, allergens, and active potency.",
    result: "100% public Certificates of Analysis",
  },
  {
    icon: "spa",
    index: "PILLAR 03",
    title: "Botanical Stewardship",
    description:
      "Preserved in UV-filtering amber and Miron violet apothecary glass bottles with precision wooden caps. Our repeat subscriptions ship in 100% FSC-certified backyard-compostable barrier pouches.",
    result: "Zero virgin plastic packaging",
  },
];

export interface Expert {
  name: string;
  role: string;
  badge: string;
  meta: string;
  bio: string;
  focus: string;
  image: string;
  alt: string;
}

const EXPERT_IMAGES = {
  vance:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC3YoexRVv6b4qyx978lbzP3hTInsJkLO6XlFJPYcMs7uscqwNluJVZemzGvSURVjpmmXNdV8rax1Mvocx-5MEMN0wragnUI3zXNgPcQGWURZxOJRatPTBSN13BPT1HVwDcNXWBs55o2lnAe9FeNU0JyPKicw74O-Eut57ccAk-_fUwzJLbd9QR7hqHVlkU2BnL4QQ9OnPWX4F5vNUlTjoqCV41bBhuGGMGRVxjxIrV4Du_LPxArkJGoA",
  thorne:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDSVI2DLi2tZsKbzaV0KeW-bHSCNUQfa9lHAFwXj-tMI3s3udl-QCAcCtNh2KTA2XjXWrrAHf_6U4qlYgZ436nc8MM5X0Ou8he_Q9d2JsQppUj4wXjSnLwRYzs3bUD3zW61j-XP9zgD9-HvgEJR19pLLGfN4PR7NWPVBb4TNt0VrSKXAjVYZmIC1cAb3sM7xKgbID3trzmJuDMJ-F6TC0gM307v8F_F0toSm7WOkuu2o86zNehDg51p3A",
  lin: "https://lh3.googleusercontent.com/aida-public/AB6AXuALOR6-UOau_TlxrJ42onQ53He-eld6CMA8govgZoCByNTM8cbJa1q47vwysekeue_UY1HTwEXwxp_MqoxGYZ6zo9SsIXYePMwzTeYDLetp14pFGbGAa5b_jWme0gZEYKDLblqtRuXM5gAh7h46lGCIsUnDoHR4OHvlSfoD06utllgrqwklxxgRFXP9IosTm2LXJ3nsAt4o-f4Mtp5uQtAU567QB6lefwMoQ_pH92cxf7UMeuHq1jIPiQ",
  mercer:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCH8hwM44D0K6DmpK0My3iol3KowILtZxCU2vmG-kP0cb_Q0nxTyHnn0qwseetOAJ20vCvvakptxuWj7IiwU4NoVYVwqYo9oq2VLFEZ_L6yMl44dZuKa9JE52grhtR4OoVyLUsKap-0gRa_O_F42MnBzGMa_Cujd8fiwS67zez8i9_38o3oUR156mp_hX_xYObl3jH0A2WdolbkJEAoM62Rcr_UdYALTvktg82aDtUvC6cENiO3YiiArw",
};

export const ADVISORY_BOARD: Expert[] = [
  {
    name: "Dr. Elena Vance, Ph.D.",
    role: "Nutritional Biochemistry",
    badge: "Board Lead",
    meta: "Stanford Research Fellow • 24 Peer-Reviewed Publications",
    bio: "Leading researcher in mitochondrial bioenergetics and intestinal liposomal micronutrient absorption kinetics.",
    focus: "Focus: Cellular Energy",
    image: EXPERT_IMAGES.vance,
    alt: "Professional portrait of female biochemist Dr. Elena Vance in a lab coat",
  },
  {
    name: "Dr. Aris Thorne, M.D.",
    role: "Circadian Biology & Sleep",
    badge: "Integrative M.D.",
    meta: "Oxford Health • 18 Yrs Clinical Practice",
    bio: "Pioneer in non-REM deep restorative sleep architecture and natural endocrine modulation via neuro-adaptogens.",
    focus: "Focus: Neuro & Rest",
    image: EXPERT_IMAGES.thorne,
    alt: "Professional portrait of Dr. Aris Thorne in a clinical research office",
  },
  {
    name: "Maya Lin, M.S., R.D.",
    role: "Microbiome & Gastrointestinal Health",
    badge: "Microbiome",
    meta: "UC Berkeley Clinical Nutrition Specialist",
    bio: "Developer of targeted synbiotic fermentation pathways that withstand hydrochloric stomach acid for colon delivery.",
    focus: "Focus: Gut Epithelial Barrier",
    image: EXPERT_IMAGES.lin,
    alt: "Editorial portrait of Maya Lin, clinical dietitian",
  },
  {
    name: "Dr. Julian Mercer, Pharm.D.",
    role: "Bioactive Phytochemicals",
    badge: "Pharmacognosy",
    meta: "Chair of Natural Product Chemistry",
    bio: "Oversees HPLC chemical fingerprinting and supercritical CO2 botanical extraction to guarantee standardize marker percentages.",
    focus: "Focus: Herbal Standardization",
    image: EXPERT_IMAGES.mercer,
    alt: "Portrait of Dr. Julian Mercer examining botanical extract vials",
  },
];

export interface SustainabilityCard {
  icon: string;
  title: string;
  description: string;
  label: string;
  badge: string;
}

export const SUSTAINABILITY_CARDS: SustainabilityCard[] = [
  {
    icon: "science",
    title: "Biophotonic Miron Violet Glass",
    description:
      "Filters the full visible light spectrum while permitting energizing violet and infrared frequencies, naturally elongating raw nutrient bioactive potency without synthetic preservatives.",
    label: "Bioactive Protection",
    badge: "100% Recyclable",
  },
  {
    icon: "compost",
    title: "Backyard-Compostable Refills",
    description:
      "Our repeat monthly subscription sachets decompose completely in home organic compost within 24 weeks, verified non-toxic to soil microbes and waterways.",
    label: "Zero Virgin Plastics",
    badge: "FSC Certified",
  },
  {
    icon: "forest",
    title: "Regenerative Botanical Farms",
    description:
      "100% of our organic ashwagandha, turmeric root, and elderberry are sourced from family-run agroforestry co-ops that restore soil microbiomes and capture groundwater.",
    label: "Fair-Trade Direct",
    badge: "Organic Soil Cert",
  },
  {
    icon: "nest_eco_leaf",
    title: "Carbon-Neutral Fulfillment",
    description:
      "Every package shipped is tracked with real-time carbon auditing, fully balanced through high-durability biochar carbon sequestration in the Pacific Northwest.",
    label: "Net-Zero Footprint",
    badge: "Certified B-Corp",
  },
];

export interface Monograph {
  code: string;
  tag: string;
  title: string;
  description: string;
  journal: string;
}

export const MONOGRAPHS: Monograph[] = [
  {
    code: "MONOGRAPH 01 • 2022",
    tag: "RCT Phase II",
    title: "Liposomal Phospholipid Carrier Dynamics in Gastric Acid Environments",
    description:
      "Demonstrated 4.2x greater serum vitamin retention compared against standard synthetic compressed caplets across 120 healthy human participants over 90 days.",
    journal: "Journal of Clinical Nutrition",
  },
  {
    code: "MONOGRAPH 02 • 2023",
    tag: "Multi-Center",
    title: "Chelated Magnesium Bisglycinate on Non-REM Delta Wave Restoration",
    description:
      "Double-blind polysomnography study tracking sleep architecture improvements and morning cortisol reductions in high-stress professionals.",
    journal: "Oxford Neuropharmacology",
  },
  {
    code: "MONOGRAPH 03 • 2024",
    tag: "Clinical In-Vivo",
    title: "Epithelial Tight Junction Permeability & Targeted Synbiotic Fermentation",
    description:
      "Colon-targeted delivery mechanics showing 98.4% survivability past duodenal bile salts with notable increases in circulating short-chain fatty acids (SCFAs).",
    journal: "Gastrointestinal Science Annals",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const ABOUT_FAQS: FaqItem[] = [
  {
    question: "Where are NUTRIPAK formulations manufactured and tested?",
    answer:
      "All formulations are blended and packaged in cGMP-certified and NSF-registered cleanrooms located in Utah and Northern California. Every botanical raw ingredient undergoes 4-point verification before blending, followed by double-blind testing at ISO-accredited Eurofins laboratories.",
  },
  {
    question:
      "How do I modify, pause, or reschedule my delivery intervals?",
    answer:
      "You maintain 100% control with zero lock-in contracts. Log in to your NUTRIPAK portal to push shipment dates back by 15, 30, or 60 days with a single tap, swap active formulas, or pause indefinitely. Our Care Concierge can also handle schedule changes on your behalf via live chat.",
  },
  {
    question:
      "Can I consult with an advisor regarding nutrient contraindications?",
    answer:
      "Yes. If you take prescription therapeutics or are pregnant/nursing, choose the \"Clinical Consultation\" category above. Our team will generate an ingredient interaction summary sheet that you can share with your primary care physician.",
  },
];

export const LAB_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDNwBs_Qu383DBf4BW2xVs0_2bp2HzGwWBQhVTBVj1v15KahTHj19sBeMNYvCRjZprzw_7X4ovLQCFK9rzrQjKs4alsccs7rzdGLetMteHFGm29TcrZ5yC8z_iT-jGt3binpOdZ_gqyIBlua4nJO_CY8lyPvlPn6JVRZordDbvRwIi7LxbTuMigIU_dpaNnPsNbPIFtBws_R1jt-hrxj7bfrVjfeJACAQepbBbZY4Piyie0EVuPBAm4eQ";