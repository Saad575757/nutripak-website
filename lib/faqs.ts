export interface FaqItem {
  question: string;
  answer: string;
  /** Optional sub-bullets rendered under the answer. */
  points?: string[];
}

export interface FaqGroup {
  /** Anchor id used by the in-page quick links. */
  slug: string;
  /** Short label shown on the quick-link pill. */
  label: string;
  /** Full section heading. */
  title: string;
  /** Supporting line under the section heading. */
  description: string;
  items: FaqItem[];
}

export const FAQ_GROUPS: FaqGroup[] = [
  {
    slug: "subset",
    label: "SUBSET",
    title: "SUBSET — Nutritional Supplement",
    description:
      "Complete and balanced nutrition for everyday health, muscle maintenance and recovery.",
    items: [
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
          "One serving is 54 g powder (5 level scoops) mixed in 190 ml water to make one 230 ml glass.",
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
  {
    slug: "ada-glu",
    label: "ADA-Glu",
    title: "ADA-Glu — Nutritional Supplement for Diabetes Management",
    description:
      "Slow-release nutrition formulated to support blood sugar management as part of a diabetes dietary plan.",
    items: [
      {
        question: "What is the carbohydrate source, and is it suitable for diabetes?",
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
      {
        question: "How is it prepared, and what is one serving?",
        answer:
          "One serving is 54 g powder (5 level scoops) mixed in 190 ml water to make one 230 ml glass.",
      },
    ],
  },
  {
    slug: "proteios",
    label: "PROTEIOS",
    title: "PROTEIOS — Premium Whey Protein Blend",
    description:
      "High-quality protein to support strength, recovery, and everyday healing.",
    items: [
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
        answer: "Follow your doctor's or dietitian's advice.",
      },
      {
        question: "How is it prepared, and what is one serving?",
        answer:
          "One serving is 10 g powder (1 level scoop) mixed in 100 ml water to make one glass.",
      },
    ],
  },
  {
    slug: "general",
    label: "General",
    title: "General Questions",
    description: "Using Nutripak products safely and alongside medical care.",
    items: [
      {
        question: "Can I take more than one product together?",
        answer:
          "Many people do, but your doctor or dietitian is the best person to advise on this, especially for diabetes or kidney conditions.",
      },
      {
        question: "Is ADA-glu safe for diabetics?",
        answer:
          "It is made for adults with diabetes. Please use it as part of a plan agreed with your doctor, who can advise how it fits your diet and medication.",
      },
    ],
  },
];
