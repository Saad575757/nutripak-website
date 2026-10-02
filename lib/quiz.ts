import { getGoal } from "@/lib/goals";
import { SHOP_PRODUCTS, type ShopProduct } from "@/lib/shop";

export type ProductSlug = "proteios" | "ada-glu" | "subset";

export interface QuizOption {
  label: string;
  description: string;
  /** Points added per product. */
  weights: Partial<Record<ProductSlug, number>>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  helper?: string;
  options: QuizOption[];
}

/**
 * Every question maps answers onto the products we actually sell, so the
 * result is a real recommendation rather than a decorative score.
 */
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: "priority",
    question: "What would you most like support with?",
    helper: "Pick the one that matters most to you right now.",
    options: [
      {
        label: "Everyday complete nutrition",
        description: "Covering more of what my diet misses",
        weights: { subset: 3 },
      },
      {
        label: "Blood sugar management",
        description: "As part of a diabetes dietary plan",
        weights: { "ada-glu": 3 },
      },
      {
        label: "Protein for muscle and recovery",
        description: "Strength, healing, or rebuilding",
        weights: { proteios: 3 },
      },
    ],
  },
  {
    id: "day",
    question: "How would you describe a typical day?",
    options: [
      {
        label: "I often skip or rush meals",
        description: "Irregular eating, little planning",
        weights: { subset: 2 },
      },
      {
        label: "I keep an eye on my carbohydrates",
        description: "Watching sugar spikes through the day",
        weights: { "ada-glu": 2 },
      },
      {
        label: "I exercise, or I'm recovering",
        description: "Training, healing, or a protein shortfall",
        weights: { proteios: 2 },
      },
      {
        label: "A bit of everything",
        description: "No single stand-out",
        weights: { subset: 1, "ada-glu": 1, proteios: 1 },
      },
    ],
  },
  {
    id: "priority-2",
    question: "What matters most when you choose a supplement?",
    options: [
      {
        label: "Many nutrients in one product",
        description: "Fewer bottles to manage",
        weights: { subset: 2 },
      },
      {
        label: "A formula built around blood sugar",
        description: "Designed for a specific dietary need",
        weights: { "ada-glu": 2 },
      },
      {
        label: "Protein quality and absorption",
        description: "Whey quality, peptide richness",
        weights: { proteios: 2 },
      },
      {
        label: "Value for money",
        description: "Price matters most",
        weights: { subset: 1, "ada-glu": 1, proteios: 1 },
      },
    ],
  },
];

export interface Recommendation {
  slug: ProductSlug;
  reason: string;
  goalSlug: string;
}

export const RECOMMENDATIONS: Record<ProductSlug, Recommendation> = {
  subset: {
    slug: "subset",
    reason:
      "SUBSET brings 26 essential macro- and micronutrients together in one formula, which suits filling the gaps an irregular diet leaves behind.",
    goalSlug: "complete-nutrition",
  },
  "ada-glu": {
    slug: "ada-glu",
    reason:
      "ADA-glu pairs a slow-release carbohydrate with fibre, protein and monounsaturated fats, built to fit into a diabetes dietary plan.",
    goalSlug: "diabetic-care",
  },
  proteios: {
    slug: "proteios",
    reason:
      "PROTEIOS is an unflavoured whey protein and peptide blend for anyone raising their protein intake, including during recovery.",
    goalSlug: "protein-support",
  },
};

export interface QuizResult {
  product: ShopProduct;
  reason: string;
  goalSlug: string;
  goalTitle: string;
}

/** Tallies the chosen options and returns the highest-scoring product. */
export function scoreQuiz(answers: Record<string, string>): QuizResult | null {
  const totals: Record<ProductSlug, number> = {
    proteios: 0,
    "ada-glu": 0,
    subset: 0,
  };

  for (const question of QUIZ_QUESTIONS) {
    const chosen = question.options.find(
      (option) => option.label === answers[question.id]
    );
    if (!chosen) continue;
    for (const [slug, points] of Object.entries(chosen.weights)) {
      totals[slug as ProductSlug] += points ?? 0;
    }
  }

  // Scanned in catalogue order, so ties resolve predictably.
  const scored = SHOP_PRODUCTS.map((product) => ({
    product,
    total: totals[product.slug as ProductSlug] ?? 0,
  })).filter((entry) => entry.total > 0);

  const winner = scored.reduce(
    (best, entry) => (entry.total > best.total ? entry : best),
    scored[0]
  );
  if (!winner) return null;

  const { product } = winner;
  const recommendation = RECOMMENDATIONS[product.slug as ProductSlug];
  return {
    product,
    reason: recommendation.reason,
    goalSlug: recommendation.goalSlug,
    goalTitle: getGoal(recommendation.goalSlug)?.title ?? "",
  };
}