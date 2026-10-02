export interface ProductFaq {
  question: string;
  answer: string;
  /** Optional sub-bullets rendered under the answer. */
  points?: string[];
}

export interface ShopProduct {
  slug: string;
  name: string;
  /** Short line used on cards and in listings. */
  tagline: string;
  /** Longer line used on the product's own page. */
  description: string;
  /** Retail price in Pakistani Rupees. */
  pricePkr: number;
  variant: string;
  image: string;
  alt: string;
  keyFeatures: string[];
  faqs: ProductFaq[];
}

const AIDA = "https://lh3.googleusercontent.com/aida-public/";

/**
 * Product photography is still placeholder art reused from the previous
 * catalogue — swap these URLs for final pack shots before launch.
 */
const PRODUCT_IMAGES = {
  proteios:
    AIDA +
    "AB6AXuBoa3wK5O5u7zPJ03-0CFGwEIGj296608YzRbAtg5jf3wBH6dwKXVN47ZI_YtO1lTNA3pY78tnkL-r5bEQi6amJitEdX5KOVAAVxDld0JhKBv0k-ZUWAx_OnhqqL4EzcUhLL4EoRrBi30F6bgYeSq8tvidWVhu_FaPXECuLlYxkQjbv7pxS6daOp7MRXEukGZ1ookpJHBLrrxmf4oCHf8DlCdnut1M5MR-JdYNvX4XrntiXctcPuCXFqw",
  adaGlu:
    AIDA +
    "AB6AXuBQ62ZNsWF4Yx5hKH1SpvAAffTTLKNA2gO8SPTjQ9d5xryZnC3J8seKidKfvFOZl2d8H9pXJ3x6ZEZP1gl90JHzX5Oh7mUZO950DZ5WFjsYR7or8AyZCm7IsoszVQVND4ZD67I9ffDKG5L22raGB5PJpVWAIMtCiD2DyHnB5ZfNJSZ1QxVOZmEnwZNcDVS9q6evH_ivAr4YQsX4Xm2R9YdS5qfiUnnRHEurjcov1rmR7hkl0NYB-M_SOw",
  subset:
    AIDA +
    "AB6AXuCGKnqYJG_bfofye3jtQ1tbPzOeY0WfH8kgKpLeEg_kK38YePDQUAjW-OXoNuF7sGevLQoOGSYGyDDDW7toBaOpjEuBQpQxPx5CeC1BxKuc_nF9dB-n7gJW1LbZs_r-fsKFVlrlRTeiwGsPtGOt3rP5pJRYo5TdSruTzRzxfhfIhgN8vhgMBwiUHZ7XmPK8aYfKM1AsmADpBpDickOJT5nzhLDh5EqJKvGFi09PYm86ILvSXMZAqycspg",
};

export const SHOP_PRODUCTS: ShopProduct[] = [
  {
    slug: "proteios",
    name: "PROTEIOS",
    tagline:
      "High-quality protein to support strength, recovery, and everyday healing.",
    description:
      "High quality protein to support strength, recovery, and everyday healing.",
    pricePkr: 2800,
    variant: "Whey Protein Blend",
    image: PRODUCT_IMAGES.proteios,
    alt: "White protein powder tub on a clean wooden kitchen counter in soft natural light.",
    keyFeatures: [
      "Premium whey protein blend, 100% natural source of whey protein.",
      "Peptide rich for rapid absorption and efficient nutrient delivery.",
      "Helps enhance lean body mass.",
      "Supports muscle protein synthesis (MPS), recovery and athletic performance.",
      "Provides immunomodulatory and antioxidant benefits.",
      "Unflavored, so it mixes easily into routine meals.",
    ],
    faqs: [
      {
        question: "What is PROTEIOS?",
        answer:
          "A premium whey protein blend that is a 100% natural source of whey protein.",
      },
      {
        question: "How does it help the body?",
        answer:
          "It supports muscle protein synthesis, helps enhance lean body mass, and supports athletic performance.",
      },
      {
        question: "Does it offer any other benefits?",
        answer:
          "Yes. It provides immunomodulatory and antioxidant benefits, and helps nutrient delivery and rapid absorption.",
      },
      {
        question: "Why is it unflavored?",
        answer:
          "So it blends easily into the routine diet without changing the taste.",
      },
      {
        question: "Who can use it?",
        answer:
          "Active individuals and anyone wanting to raise their protein intake. Patients should use it under medical guidance.",
      },
      {
        question: "How much should be taken daily?",
        answer: "Follow your doctor’s or dietitian’s advice.",
      },
    ],
  },
  {
    slug: "ada-glu",
    name: "ADA-glu",
    tagline:
      "Slow release carbohydrate blend formulated to support blood sugar management.",
    description:
      "Slow release carbohydrate blend designed to fit into a dietary plan for diabetes management.",
    pricePkr: 3800,
    variant: "Slow Release Carbohydrate Blend",
    image: PRODUCT_IMAGES.adaGlu,
    alt: "Light beige supplement canister on an oak kitchen counter with sliced citrus and natural greenery.",
    keyFeatures: [
      "Low glycemic index carbohydrate.",
      "Contains monounsaturated fatty acids (MUFAs).",
      "Rich in dietary fibers (FOS).",
      "Natural source of protein (whey and soy protein isolate).",
      "Supports heart health and weight management, with essential vitamins and minerals.",
      "Aids in diabetes management.",
    ],
    faqs: [
      {
        question:
          "What is the carbohydrate source, and is it suitable for diabetes?",
        answer:
          "ADA-glu uses a low glycemic index carbohydrate (maltodextrin). It is balanced with fiber (FOS), protein, and monounsaturated fats (MUFAs), which together help support a steadier glycemic response as part of a diabetes dietary plan.",
      },
      {
        question: "What is the protein source, and how much does it contain?",
        answer:
          "It contains whey and soy protein isolate, with total protein of 19.61% (per 100 g). This quality protein supports muscle maintenance and recovery, which matters for people managing diabetes.",
      },
      {
        question: "What type of fat does it contain?",
        answer:
          "The fat source is MUFAs (monounsaturated fatty acids), which support heart health.",
      },
      {
        question: "What is the fiber source, and what is its role?",
        answer:
          "The fiber source is FOS, with 2 g of dietary fiber per 100 g. It acts as a prebiotic to support gut health, and fiber helps slow carbohydrate absorption.",
      },
      {
        question: "Does it contain vitamins and minerals?",
        answer:
          "Yes, it contains essential vitamins and minerals to support daily nutritional needs.",
      },
      {
        question: "Does it contain sugar substitutes?",
        answer:
          "Yes, aspartame (71.82 mg per serving). People with phenylketonuria (PKU) should avoid aspartame.",
      },
      {
        question: "Is it a meal replacement or a supplement?",
        answer:
          "It is a nutritional supplement. In controlled quantities, as advised by the doctor or dietitian, it can partly replace a meal.",
      },
      {
        question: "Which patients can use it?",
        answer:
          "It is designed for people with diabetes, as part of a dietary plan set by their doctor or dietitian. For Type 1, 2, and gestational diabetes, use only under close medical supervision and glucose monitoring.",
      },
    ],
  },
  {
    slug: "subset",
    name: "SUBSET",
    tagline:
      "Balanced macro & micronutrients to support daily strength, energy, and vitality.",
    description:
      "Balanced macro & micronutrients to support daily strength, energy, and vitality.",
    pricePkr: 5500,
    variant: "Complete Balanced Nutrition Supplement",
    image: PRODUCT_IMAGES.subset,
    alt: "Artisanal glass bottle with a minimalist label surrounded by natural botanical ingredients in clean sunlight.",
    keyFeatures: [
      "Complete and balanced nutritional supplement for daily health needs.",
      "Quality protein: whey and soy protein isolate (8.8 g per serving).",
      "Fiber and healthy fats: FOS fiber and MUFAs.",
      "Multivitamin and mineral blend to support daily nutrition.",
      "Energy: 235.9 kcal per serving (54 g powder, 5 level scoops, makes one 230 ml glass).",
      "Nutrient-dense vs. everyday foods: per 230 ml glass, 6x more calcium than an egg, 5.5x more zinc than a roti, 3.5x more iron than chicken breast (USDA Food Database comparisons).",
    ],
    faqs: [
      {
        question: "What is the carbohydrate source, and how much does it contain?",
        answer:
          "The carbohydrate source is maltodextrin, with some sucrose. It provides quick, easily digested energy, with 34.8 g carbohydrate per serving (64.49% per 100 g).",
      },
      {
        question: "What is the protein source, and how much does it contain?",
        answer:
          "It contains whey protein isolate and soy protein isolate, with 8.8 g protein per serving (16.31% per 100 g). This quality protein supports daily protein needs, muscle maintenance and recovery.",
      },
      {
        question: "What type of fat does it contain?",
        answer:
          "It contains monounsaturated fatty acids (MUFAs) along with vegetable fats, providing 6.8 g fat per serving (12.63% per 100 g).",
      },
      {
        question: "What is the fiber source, and what is its role?",
        answer:
          "The fiber source is FOS (fructo-oligosaccharides). It acts as a prebiotic to support gut health.",
      },
      {
        question: "Does it contain vitamins and minerals?",
        answer:
          "Yes, it contains a multivitamin and mineral blend, including vitamins A, D, E, C and B-complex, folic acid, calcium, potassium, magnesium, iron and zinc. Per 230 ml glass it provides about 168 mg calcium and 380 mg potassium.",
      },
      {
        question: "How much energy does one serving provide?",
        answer: "One serving gives 235.9 kcal (436.87 kcal per 100 g).",
      },
      {
        question: "How is it prepared, and what is one serving?",
        answer:
          "One serving is 54 g powder (5 level scoops) mixed in water to make one 230 ml glass.",
      },
      {
        question: "How does one glass compare with everyday foods?",
        answer: "Per 230 ml glass (USDA Food Database), it has:",
        points: [
          "6x more calcium than an egg",
          "5.5x more zinc than a roti",
          "3.5x more iron than chicken breast",
          "1.5x more iron than meat",
          "3.2x more protein than a cup of rice",
          "2x more potassium than an apple",
          "2.3x more vitamin C than a tomato",
        ],
      },
      {
        question: "Is it a meal replacement or a supplement?",
        answer:
          "It is a nutritional supplement for daily health needs. It can be taken in addition to the regular diet, or in the quantity advised by the doctor or dietitian.",
      },
      {
        question: "Who can use it?",
        answer:
          "It is a complete and balanced supplement for people who need extra nutrition in their daily diet, as advised by a doctor or dietitian.",
      },
      {
        question: "Is it suitable for diabetic patients?",
        answer:
          "SUBSET contains maltodextrin and sucrose, so it is not designed for diabetes management.",
      },
    ],
  },
];

export function getProductForSlug(slug: string): ShopProduct | undefined {
  return SHOP_PRODUCTS.find((product) => product.slug === slug);
}

/** All prices on the site are in Pakistani Rupees. */
export function formatPkr(value: number): string {
  return `PKR ${value.toLocaleString("en-PK", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
}

export interface ShopCategoryPill {
  label: string;
  count: string;
}

export const SHOP_CATEGORY_PILLS: ShopCategoryPill[] = [
  { label: "All Formulations", count: "3" },
  { label: "General Nutrition Supplement", count: "1" },
  { label: "Diabetic Care Supplement", count: "1" },
  { label: "Protein Supplement", count: "1" },
];

export const SORT_OPTIONS = [
  "Sort: Featured",
  "Sort: Price: Low to High",
  "Sort: Price: High to Low",
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
    title: "Quality Ingredients",
    description:
      "Every ingredient is selected for how well it is absorbed and how comfortably it sits in your daily routine.",
    iconClass: "bg-primary-fixed text-on-primary-fixed-variant",
  },
  {
    icon: "verified",
    title: "Third-Party Tested",
    description:
      "Every production lot is independently assayed for potency and purity before it reaches you.",
    iconClass: "bg-secondary-container text-on-secondary-fixed",
  },
  {
    icon: "nutrition",
    title: "Nutrient-Dense Formulas",
    description:
      "Balanced macro and micronutrient profiles designed to fill the gaps a regular diet sometimes leaves behind.",
    iconClass: "bg-tertiary-fixed text-on-tertiary-fixed-variant",
  },
  {
    icon: "recycling",
    title: "Responsible Packaging",
    description:
      "Sealed for freshness and quality, so every serving is as reliable as the last.",
    iconClass: "bg-surface-container-highest text-primary",
  },
];

export const BIOCHEMIST_IMAGE =
  AIDA +
  "AB6AXuAM2ZT_vJr-Og2O9OugHpDfVTdwX_ls4UVq-oNm1p8dW3OWuWMsSkAyIKO3lk4LxCHFqdUJUuhHhJlzQbEl5ZAux8KiO6I5I6m6UFouxL54XX-xyWknNAFes02Wtc7YMYvWbMmVzh4D0aEe5shz9djX_T1UjZlKi1eXwwIEvA6Ijf5E1TV7prMrbPmtlVtE6RC_JCzwiepbdskWmp0klpMdqabZMthjHsDlIdxGWvjt1Ty7c8ZHwbuTqw";
