export interface ShopProduct {
  slug: string;
  name: string;
  badge: string;
  badgeClass: string;
  subBadge: string;
  tag: string;
  tagClass: string;
  rating: string;
  reviews: string;
  description: string;
  price: number;
  originalPrice: number;
  image: string;
  alt: string;
  variant: string;
}

const AIDA = "https://lh3.googleusercontent.com/aida-public/";

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    slug: "vitamin-c-d3",
    name: "Daily Wellness Vitamin C + D3 Complex",
    badge: "Bestseller",
    badgeClass: "bg-secondary-container text-on-secondary-fixed",
    subBadge: "Batch #NP-2024",
    tag: "Immune & Cellular",
    tagClass: "bg-primary-fixed text-on-primary-fixed-variant",
    rating: "4.9",
    reviews: "1,842",
    description:
      "Liposomal ascorbic acid bound with organic coconut MCT lipids and fermented lichen cholecalciferol for 8x mucosal uptake.",
    price: 28.9,
    originalPrice: 34,
    variant: "60 Bioactive Capsules",
    image:
      AIDA +
      "AB6AXuCcB-9fyucXNWokTBvtAR2YlwZxtGKUeSBFIT-A1nXGt5fb1elQgO6gdOk7UTJJECRUyW_qs51X5zy0Xa2CvjeoaxwoEXaO9sz7F60mkPlKexEWJO_fjGYLGE9Zsm-0IBhy1IfB0z4XN7FZL5Al3wjtsULg1JpyaxfBgLgH8RTXZfKeyd5G9Li6FvLMb7ibKCt7rSX2yCBASdZwmawfs8sXaSq0d0f_OPOPS2cjzddZKm7E1zkmrYBgYw",
    alt: "Minimalist amber apothecary glass jar and off-white supplement bottle of Nutripak Daily Wellness Vitamin C and D3 complex placed on oak surface with soft morning kitchen light and botanical eucalyptus branch.",
  },
  {
    slug: "renew-collagen",
    name: "Renew Collagen Peptides & Hyaluronic Matrix",
    badge: "Top Rated",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed",
    subBadge: "99.8% Bioavailability",
    tag: "Dermal Longevity",
    tagClass: "bg-surface-variant text-tertiary",
    rating: "5.0",
    reviews: "980",
    description:
      "Micro-hydrolyzed Type I & III pasture-raised collagen combined with low-molecular 120mg sodium hyaluronate.",
    price: 39.1,
    originalPrice: 46,
    variant: "450g Marine Collagen Powder",
    image:
      AIDA +
      "AB6AXuBoa3wK5O5u7zPJ03-0CFGwEIGj296608YzRbAtg5jf3wBH6dwKXVN47ZI_YtO1lTNA3pY78tnkL-r5bEQi6amJitEdX5KOVAAVxDld0JhKBv0k-ZUWAx_OnhqqL4EzcUhLL4EoRrBi30F6bgYeSq8tvidWVhu_FaPXECuLlYxkQjbv7pxS6daOp7MRXEukGZ1ookpJHBLrrxmf4oCHf8DlCdnut1M5MR-JdYNvX4XrntiXctcPuCXFqw",
    alt: "Elegantly styled bone-white cylindrical jar of Nutripak Renew Collagen Peptides and Hyaluronic Acid placed on a clean wooden shelf in sun-drenched Scandinavian bathroom interior.",
  },
  {
    slug: "deep-sleep-magnesium",
    name: "Deep Sleep & Neuro-Calm (Magnesium Glycinate)",
    badge: "Sleep Science",
    badgeClass: "bg-tertiary text-on-tertiary",
    subBadge: "Clinical Strength",
    tag: "Circadian Rest",
    tagClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
    rating: "4.9",
    reviews: "2,110",
    description:
      "Fully chelated bisglycinate coupled with fermented L-Theanine and tart cherry phytonutrients. Non-drowsy morning formula.",
    price: 30.6,
    originalPrice: 36,
    variant: "90 Clinical Capsules",
    image:
      AIDA +
      "AB6AXuDfsKTGPdOHBk2pGOugiW2_XG_cAIRipiKLyta1awKys5ftSAN22vMHRwYG_708NKibbYMchh0Dnffy8wC_zRY2EryfjJno0Fe9KvGHKDrBSbFu-kNyrCax3zIVviWjsH6_JtQ7i6omEG9d7jesGtH0A3PbT4umdIB4zuW6kvhiaC68XRX1yXfrPXEx05U6ya9kcxHeACcLjcJHTmhhVzx-PA-72Vbe0ZHAAP18u45X4dTmqvohbedi4A",
    alt: "Deep dark violet glass supplement jar of Nutripak Neuro-Calm Sleep Magnesium on modern limestone surface with dried lavender and serene twilight mood.",
  },
  {
    slug: "nad-booster",
    name: "Cellular NAD+ Booster & Resveratrol",
    badge: "Longevity Hub",
    badgeClass: "bg-primary text-on-primary",
    subBadge: "Micronized",
    tag: "Mitochondrial Power",
    tagClass: "bg-primary-fixed text-on-primary-fixed-variant",
    rating: "4.8",
    reviews: "630",
    description:
      "Pharmaceutical-grade Nicotinamide Mononucleotide with trans-resveratrol and quercetin phytosome for mitochondrial repair.",
    price: 54.4,
    originalPrice: 64,
    variant: "30 Liposomal Sachets",
    image:
      AIDA +
      "AB6AXuCwYZb5EbRybxIpwC547XD5zR0rVEs4C0_mBAIaNfdXlTCA71WBT3ifsSRPcqQ9CX5rzdoF94nUiNSooCtUP2u-nlpSwUfyR-TtjTPCplSNd0j_-JIlKyYjiMGHfIY53NmIsu9gf8ellHK9F4vHyyc41GGjz7apFD4B0oXCo8pWx28h3Ao7gr6Sx7vuE642keFIJLVGAqWHDieDY494m4P2mFvrf2679P1avSHWgaKYUl-m1MeRj0RFGA",
    alt: "High-end amber glass supplement dropper and capsule bottle for Nutripak Cellular NAD+ Booster resting near polished granite laboratory glassware.",
  },
  {
    slug: "synbiotic-50b",
    name: "Synbiotic 50B Spore Probiotic + Prebiotic",
    badge: "Stomach Acid Resistant",
    badgeClass: "bg-secondary-fixed text-on-secondary-fixed",
    subBadge: "Room Temp Stable",
    tag: "Gut Microbiome",
    tagClass: "bg-secondary-container text-on-secondary-fixed",
    rating: "4.9",
    reviews: "1,290",
    description:
      "Soil-based spore strains that survive 100% of digestive stomach acid, matched with Jerusalem artichoke organic inulin.",
    price: 32.3,
    originalPrice: 38,
    variant: "60 Delayed-Release Capsules",
    image:
      AIDA +
      "AB6AXuA7uvE4cL79IQwtXt6Vqk2d8rRZg6j28o6wunleLHyprxvyTX4EMKFEqXf6jUOCpeC1VDO0y7Grn1s5FWLRWoEKiOMboUmGGYsBP4npZ1VldUIcUM3KoxjE51GRM2VSgZDGOR-sN8lucUJfkOb1lPWfj9x_-qt0oLvNwyhTxrbhUo1gxc_KTc3G4r6O-9tbG0Xb_mRWTrKojIKKwAl31j_srItLPiCACviRfCi3n3oYsQ_s6t49D5e5qQ",
    alt: "Amber glass pill bottle for Nutripak Synbiotic 50B Spore Probiotic next to fresh organic green botanical herbs and pure clean water beaker.",
  },
  {
    slug: "omega-3-dha",
    name: "Omega-3 Algal DHA + Astaxanthin",
    badge: "Zero Heavy Metals",
    badgeClass: "bg-surface-tint text-on-primary",
    subBadge: "100% Plant Sourced",
    tag: "Neuro & Heart",
    tagClass: "bg-primary-fixed-dim text-on-primary-fixed-variant",
    rating: "4.9",
    reviews: "890",
    description:
      "Directly harvested ocean algae rich in clean DHA/EPA, reinforced with Icelandic haematococcus microalgae astaxanthin.",
    price: 33.15,
    originalPrice: 39,
    variant: "60 Lipid-Stable Softgels",
    image:
      AIDA +
      "AB6AXuAuSCHLDBzF2HUgoyN2KbUYImQdLrUOeQMIBJHz3yJtt7_xHRpTviueAzg9AqetPj4o70QMa4_5FS5RuSWcsYzvVW2txvFHgPpbaV2vUmVlND_quGgakHwna_o4QcqasA7qbYIFbudZqSBZKcNTNe-QtL0BiRmbThz15mh5vmHLzNmqMHwEeEBRNkuYq3ADbsxMJ10BU-BCoMCeEwiYzf2vPMuIwEjtk8PXJ53E8HwDB7E1DyI29YCkSA",
    alt: "Glossy dark amber capsules in glass bottle of Nutripak Vegan Omega-3 Algal DHA with deep clean sea greens and pure clinical lighting.",
  },
  {
    slug: "adrenal-ksm66",
    name: "Adrenal Balance & Organic KSM-66",
    badge: "Adaptogen",
    badgeClass: "bg-primary-fixed text-on-primary-fixed-variant",
    subBadge: "KSM-66 Full Spectrum",
    tag: "Cortisol Modulation",
    tagClass: "bg-surface-container text-on-surface-variant",
    rating: "4.8",
    reviews: "720",
    description:
      "Root-only extraction standardized to 5% withanolides paired with organic Rhodiola rosea to regulate sympathetic stress spikes.",
    price: 27.2,
    originalPrice: 32,
    variant: "90 Root-Only Capsules",
    image:
      AIDA +
      "AB6AXuBF48WkPnn-KPx_XV1gnvra7L9ldHLMnJwlktBhVrTGpXkweEpernj9OhykuqaOoVv6ohI6mPc4IVv4_5Qkfx35Ld17_SJO_bA2xkwzjgH4gCY821A6LSEscV9nVG5j-3ugwOQ-j_gwhtucX0byASdTrXhG26dq2n6Dyzzpe9ZdioyyTeJzN829gs_WZEC3cs_i6JLfnz-w35yxE8A2ZwBe6E6tONdvqJDgZPUJlj_Fb_Nbbo2je151yA",
    alt: "Modern frosted amber glass container of Nutripak Adrenal Balance KSM-66 Ashwagandha with raw whole botanical roots and pure clean linen cloth.",
  },
  {
    slug: "glucovital-berberine",
    name: "Metabolic Glucovital Berberine Phytosome",
    badge: "AMPK Activator",
    badgeClass: "bg-secondary-container text-on-secondary-fixed",
    subBadge: "Phytosome Bound",
    tag: "Metabolic Health",
    tagClass: "bg-primary-fixed text-on-primary-fixed-variant",
    rating: "4.9",
    reviews: "1,040",
    description:
      "Phospholipid-complexed Berberis aristata providing 10x greater intestinal absorption for postprandial glucose stability.",
    price: 35.7,
    originalPrice: 42,
    variant: "90 Phytosome Capsules",
    image:
      AIDA +
      "AB6AXuBQ62ZNsWF4Yx5hKH1SpvAAffTTLKNA2gO8SPTjQ9d5xryZnC3J8seKidKfvFOZl2d8H9pXJ3x6ZEZP1gl90JHzX5Oh7mUZO950DZ5WFjsYR7or8AyZCm7IsoszVQVND4ZD67I9ffDKG5L22raGB5PJpVWAIMtCiD2DyHnB5ZfNJSZ1QxVOZmEnwZNcDVS9q6evH_ivAr4YQsX4Xm2R9YdS5qfiUnnRHEurjcov1rmR7hkl0NYB-M_SOw",
    alt: "Sophisticated light beige supplement cylinder of Nutripak Metabolic Glucovital Berberine on an oak kitchen counter with sliced lemons and natural greenery.",
  },
  {
    slug: "bio-active-multi",
    name: "Bio-Active Multi Core Foundation",
    badge: "Foundational",
    badgeClass: "bg-primary-fixed text-on-primary-fixed-variant",
    subBadge: "Methylated B-Complex",
    tag: "Daily Essentials",
    tagClass: "bg-secondary-container text-on-secondary-fixed",
    rating: "5.0",
    reviews: "1,540",
    description:
      "24 essential micronutrients in bio-identical forms: methylfolate, methylcobalamin, and chelated trace minerals.",
    price: 30.6,
    originalPrice: 36,
    variant: "60 Tablets",
    image:
      AIDA +
      "AB6AXuCGKnqYJG_bfofye3jtQ1tbPzOeY0WfH8kgKpLeEg_kK38YePDQUAjW-OXoNuF7sGevLQoOGSYGyDDDW7toBaOpjEuBQpQxPx5CeC1BxKuc_nF9dB-n7gJW1LbZs_r-fsKFVlrlRTeiwGsPtGOt3rP5pJRYo5TdSruTzRzxfhfIhgN8vhgMBwiUHZ7XmPK8aYfKM1AsmADpBpDickOJT5nzhLDh5EqJKvGFi09PYm86ILvSXMZAqycspg",
    alt: "Artisanal glass pill bottle with minimalist clean label of Nutripak Bio-Active Multi Core Foundation surrounded by natural botanical ingredients and clean sunlight.",
  },
];

export interface ShopCategoryPill {
  label: string;
  count: string;
}

export const SHOP_CATEGORY_PILLS: ShopCategoryPill[] = [
  { label: "All Formulations", count: "14" },
  { label: "Daily Essentials", count: "4" },
  { label: "Deep Rest & Sleep", count: "2" },
  { label: "Cellular Energy", count: "3" },
  { label: "Immune & Defense", count: "2" },
  { label: "Digestive & Gut Health", count: "3" },
];

export const DELIVERY_FORMS = [
  "Delivery Form: All",
  "Bioactive Capsules",
  "Liposomal Liquid",
  "Bio-fermented Powder",
];

export const DIET_TAGS = ["Vegan", "Non-GMO", "Soy-Free", "ISO 17025 Certified"];

export const SORT_OPTIONS = [
  "Sort: Clinician Recommended",
  "Sort: Most Popular",
  "Sort: Price: Low to High",
  "Sort: Highest Bioavailability Score",
];

export interface PledgeItem {
  icon: string;
  title: string;
  description: string;
  iconClass: string;
}

export const PLEDGE_ITEMS: PledgeItem[] = [
  {
    icon: "science",
    title: "100% Chelated Forms",
    description:
      "Every mineral is pre-bound to bio-identical amino acids, avoiding digestive competition and preventing common GI irritation.",
    iconClass: "bg-primary-fixed text-on-primary-fixed-variant",
  },
  {
    icon: "verified",
    title: "Third-Party ISO Tested",
    description:
      "Every production lot undergoes rigorous liquid chromatography and mass spectrometry. Full Certificates of Analysis (COAs) are published online.",
    iconClass: "bg-secondary-container text-on-secondary-fixed",
  },
  {
    icon: "light_mode",
    title: "Miron UV-Glass Defense",
    description:
      "Biophotonic violet glassware filters the complete spectrum of visible light while admitting rejuvenating infrared and UVA frequencies.",
    iconClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  },
  {
    icon: "recycling",
    title: "Carbon-Neutral Refills",
    description:
      "Subscribe once for the biophotonic glass keepsake, followed by zero-plastic 100% backyard compostable bio-pouch refills.",
    iconClass: "bg-surface-container-highest text-primary",
  },
];

export const BIOCHEMIST_IMAGE =
  AIDA +
  "AB6AXuAM2ZT_vJr-Og2O9OugHpDfVTdwX_ls4UVq-oNm1p8dW3OWuWMsSkAyIKO3lk4LxCHFqdUJUuhHhJlzQbEl5ZAux8KiO6I5I6m6UFouxL54XX-xyWknNAFes02Wtc7YMYvWbMmVzh4D0aEe5shz9djX_T1UjZlKi1eXwwIEvA6Ijf5E1TV7prMrbPmtlVtE6RC_JCzwiepbdskWmp0klpMdqabZMthjHsDlIdxGWvjt1Ty7c8ZHwbuTqw";