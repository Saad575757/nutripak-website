import { EMAIL, PHONE, WHATSAPP_HREF } from "@/lib/contact";
import { ROUTES } from "@/lib/site";

/**
 * Scripted content and routing for the Nutripak storefront assistant.
 *
 * The conversation is driven by quick-reply buttons (see ChatQuickReply), but
 * a typed message is also resolved to a node through keyword rules so the
 * assistant still answers when the customer simply writes a question.
 */

export interface ChatQuickReply {
  label: string;
  /** Opens another node in the conversation. */
  next?: string;
  /** Navigates to an in-app page or an external channel (WhatsApp, email). */
  href?: string;
}

export interface ChatNode {
  id: string;
  message: string;
  quickReplies?: ChatQuickReply[];
}

const START_ID = "root";

const order = (slug: string): ChatQuickReply => ({
  label: "Order",
  href: ROUTES.product(slug),
});

const team: ChatQuickReply = {
  label: "Talk to our team",
  next: "handoff",
};

/** Quick replies shown under every product answer. */
const productReplies = (slug: string, menuId: string): ChatQuickReply[] => [
  { label: "More questions", next: menuId },
  order(slug),
  team,
];

const generalReplies: ChatQuickReply[] = [
  { label: "More topics", next: "ordering" },
  team,
];

export const CHAT_NODES: ChatNode[] = [
  {
    id: "root",
    message:
      "Assalam o Alaikum! I'm the Nutripak assistant. How can I help you today?",
    quickReplies: [
      { label: "Help me choose a product", next: "choose" },
      { label: "SUBSET", next: "subset_intro" },
      { label: "ADA-glu", next: "adaglu_intro" },
      { label: "PROTEIOS", next: "proteios_intro" },
      { label: "Ordering and delivery", next: "ordering" },
      team,
    ],
  },
  {
    id: "choose",
    message: "Happy to help. Who is the product for?",
    quickReplies: [
      { label: "Everyday nutrition for an adult", next: "subset_intro" },
      { label: "Someone with diabetes", next: "adaglu_intro" },
      { label: "More protein, for muscle or activity", next: "proteios_intro" },
    ],
  },

  // SUBSET
  {
    id: "subset_intro",
    message:
      "SUBSET is a complete, balanced supplement for people who need extra nutrition in their daily diet, as advised by a doctor or dietitian.",
    quickReplies: [
      { label: "How to prepare", next: "subset_prepare" },
      { label: "Is it safe for diabetics?", next: "subset_diabetes" },
      order("subset"),
      { label: "More questions", next: "subset_menu" },
    ],
  },
  {
    id: "subset_menu",
    message: "These are the questions people ask most about SUBSET. Pick one:",
    quickReplies: [
      { label: "What is SUBSET?", next: "subset_what" },
      { label: "How do I prepare it?", next: "subset_prepare" },
      { label: "Calories and protein?", next: "subset_calories" },
      { label: "Carbohydrates and fat?", next: "subset_carbs" },
      { label: "Does it have fiber?", next: "subset_fiber" },
      { label: "Vitamins and minerals?", next: "subset_vitamins" },
      { label: "Is it a meal replacement?", next: "subset_meal" },
      { label: "Is it suitable for diabetes?", next: "subset_diabetes" },
      { label: "How does it compare with everyday foods?", next: "subset_compare" },
      order("subset"),
      team,
    ],
  },
  {
    id: "subset_what",
    message:
      "A complete, balanced nutritional supplement for daily health needs. You can take it in addition to your regular diet, or in the quantity your doctor or dietitian advises.",
    quickReplies: productReplies("subset", "subset_menu"),
  },
  {
    id: "subset_prepare",
    message:
      "One serving is 54 g powder (5 level scoops) mixed in 190 ml water, which makes one 230 ml glass.",
    quickReplies: productReplies("subset", "subset_menu"),
  },
  {
    id: "subset_calories",
    message:
      "One serving gives 235.9 kcal and 8.8 g protein, from whey protein isolate and soy protein isolate.",
    quickReplies: productReplies("subset", "subset_menu"),
  },
  {
    id: "subset_carbs",
    message:
      "34.8 g carbohydrate per serving, from maltodextrin with some sucrose. 6.8 g fat per serving, from MUFAs and vegetable fats.",
    quickReplies: productReplies("subset", "subset_menu"),
  },
  {
    id: "subset_fiber",
    message:
      "Yes. It contains FOS (fructo-oligosaccharides), a prebiotic that supports gut health.",
    quickReplies: productReplies("subset", "subset_menu"),
  },
  {
    id: "subset_vitamins",
    message:
      "Yes. It includes vitamins A, D, E, C and B-complex, folic acid, calcium, potassium, magnesium, iron and zinc. One 230 ml glass gives about 168 mg calcium and 380 mg potassium.",
    quickReplies: productReplies("subset", "subset_menu"),
  },
  {
    id: "subset_meal",
    message:
      "No, it is a supplement. Use it in addition to your diet, or as your doctor or dietitian advises.",
    quickReplies: productReplies("subset", "subset_menu"),
  },
  {
    id: "subset_diabetes",
    message:
      "SUBSET contains maltodextrin and sucrose, so it is not designed for diabetes management. For diabetes, please look at ADA-glu.",
    quickReplies: [
      { label: "Tell me about ADA-glu", next: "adaglu_intro" },
      order("subset"),
      team,
    ],
  },
  {
    id: "subset_compare",
    message:
      "Per 230 ml glass (USDA data), it has about 6x the calcium of an egg, 3.2x the protein of a cup of rice and 2x the potassium of an apple.",
    quickReplies: productReplies("subset", "subset_menu"),
  },

  // ADA-glu
  {
    id: "adaglu_intro",
    message:
      "ADA-glu is designed for people with diabetes, as part of a dietary plan set by their doctor or dietitian.",
    quickReplies: [
      { label: "How to prepare", next: "adaglu_prepare" },
      { label: "Sugar substitute", next: "adaglu_sugar" },
      order("ada-glu"),
      { label: "More questions", next: "adaglu_menu" },
    ],
  },
  {
    id: "adaglu_menu",
    message: "These are the questions people ask most about ADA-glu. Pick one:",
    quickReplies: [
      { label: "What is ADA-glu?", next: "adaglu_what" },
      { label: "How do I prepare it?", next: "adaglu_prepare" },
      { label: "Who can use it?", next: "adaglu_who" },
      { label: "Is it safe for diabetics?", next: "adaglu_safe" },
      { label: "What is in it?", next: "adaglu_contents" },
      { label: "Protein and fiber?", next: "adaglu_protein" },
      { label: "What type of fat?", next: "adaglu_fat" },
      { label: "Does it contain sugar substitutes?", next: "adaglu_sugar" },
      { label: "Is it a meal replacement?", next: "adaglu_meal" },
      order("ada-glu"),
      team,
    ],
  },
  {
    id: "adaglu_what",
    message:
      "A nutritional supplement for diabetes management, to be used as part of a plan set by your doctor or dietitian.",
    quickReplies: productReplies("ada-glu", "adaglu_menu"),
  },
  {
    id: "adaglu_prepare",
    message:
      "One serving is 54 g powder (5 level scoops) mixed in 190 ml water, which makes one 230 ml glass.",
    quickReplies: productReplies("ada-glu", "adaglu_menu"),
  },
  {
    id: "adaglu_who",
    message:
      "Adults with diabetes, under a dietary plan from their doctor or dietitian. For Type 1, Type 2 or gestational diabetes, use only under close medical supervision and glucose monitoring.",
    quickReplies: productReplies("ada-glu", "adaglu_menu"),
  },
  {
    id: "adaglu_safe",
    message:
      "It is made for adults with diabetes. Please use it as part of a plan agreed with your doctor, who can advise how it fits your diet and medication.",
    quickReplies: productReplies("ada-glu", "adaglu_menu"),
  },
  {
    id: "adaglu_contents",
    message:
      "Its carbohydrate is balanced with FOS fiber, whey and soy protein, and MUFAs, which together help support a steadier glucose response as part of a diabetes dietary plan.",
    quickReplies: productReplies("ada-glu", "adaglu_menu"),
  },
  {
    id: "adaglu_protein",
    message:
      "Protein is 19.61% per 100 g, from whey and soy protein isolate. Fiber is 2 g per 100 g (FOS), which is a prebiotic and helps slow carbohydrate absorption.",
    quickReplies: productReplies("ada-glu", "adaglu_menu"),
  },
  {
    id: "adaglu_fat",
    message: "MUFAs (monounsaturated fats), which support heart health.",
    quickReplies: productReplies("ada-glu", "adaglu_menu"),
  },
  {
    id: "adaglu_sugar",
    message:
      "Yes, aspartame (71.82 mg per serving). People with phenylketonuria (PKU) should avoid it.",
    quickReplies: productReplies("ada-glu", "adaglu_menu"),
  },
  {
    id: "adaglu_meal",
    message:
      "It is a supplement. In controlled amounts, as your doctor or dietitian advises, it can partly replace a meal.",
    quickReplies: productReplies("ada-glu", "adaglu_menu"),
  },

  // PROTEIOS
  {
    id: "proteios_intro",
    message:
      "PROTEIOS is a premium whey protein blend for active people and anyone wanting to raise their protein intake.",
    quickReplies: [
      { label: "How to prepare", next: "proteios_prepare" },
      { label: "Why unflavored?", next: "proteios_unflavored" },
      order("proteios"),
      { label: "More questions", next: "proteios_menu" },
    ],
  },
  {
    id: "proteios_menu",
    message: "These are the questions people ask most about PROTEIOS. Pick one:",
    quickReplies: [
      { label: "What is PROTEIOS?", next: "proteios_what" },
      { label: "How does it help?", next: "proteios_help" },
      { label: "How do I prepare it?", next: "proteios_prepare" },
      { label: "Why is it unflavored?", next: "proteios_unflavored" },
      { label: "Who can use it?", next: "proteios_who" },
      order("proteios"),
      team,
    ],
  },
  {
    id: "proteios_what",
    message: "A premium whey protein blend.",
    quickReplies: productReplies("proteios", "proteios_menu"),
  },
  {
    id: "proteios_help",
    message:
      "It supports muscle protein synthesis and lean body mass, and supports athletic performance.",
    quickReplies: productReplies("proteios", "proteios_menu"),
  },
  {
    id: "proteios_prepare",
    message:
      "One serving is 10 g powder (1 level scoop) mixed in 100 ml water to make one glass.",
    quickReplies: productReplies("proteios", "proteios_menu"),
  },
  {
    id: "proteios_unflavored",
    message: "So it blends into your regular diet without changing the taste.",
    quickReplies: productReplies("proteios", "proteios_menu"),
  },
  {
    id: "proteios_who",
    message:
      "Active people and anyone wanting to raise their protein intake. Patients should use it under medical guidance.",
    quickReplies: productReplies("proteios", "proteios_menu"),
  },

  // General and ordering
  {
    id: "ordering",
    message:
      "These are common questions about ordering and delivery. Pick one:",
    quickReplies: [
      { label: "Can I take more than one product together?", next: "general_together" },
      { label: "Are these medicines?", next: "general_medicines" },
      { label: "Do you offer cash on delivery?", next: "general_cod" },
      { label: "How long does delivery take?", next: "general_delivery" },
      { label: "Is delivery free?", next: "general_free" },
      team,
    ],
  },
  {
    id: "general_together",
    message:
      "Many people do, but your doctor or dietitian is the best person to advice on this, especially for diabetes or kidney conditions.",
    quickReplies: generalReplies,
  },
  {
    id: "general_medicines",
    message:
      "No. They are nutritional supplements and not a substitute for medical treatment.",
    quickReplies: generalReplies,
  },
  {
    id: "general_cod",
    message:
      "Yes, across Pakistan. Pay the courier when your order arrives.",
    quickReplies: generalReplies,
  },
  {
    id: "general_delivery",
    message:
      "Usually 2-5 business days. Our team will call or message you within a few hours to confirm your order before it is packed.",
    quickReplies: generalReplies,
  },
  {
    id: "general_free",
    message: "Yes, on orders over PKR 7,500.",
    quickReplies: generalReplies,
  },

  // Handoff and fallbacks
  {
    id: "handoff",
    message: `Our team will be glad to help. Reach us on WhatsApp ${PHONE} or at ${EMAIL}, and we'll reply within 24 hours.`,
    quickReplies: [
      { label: "WhatsApp", href: WHATSAPP_HREF },
      { label: "Email", href: `mailto:${EMAIL}` },
      { label: "Back to start", next: START_ID },
    ],
  },
  {
    id: "safety",
    message:
      "That's a question for your doctor or dietitian, since the right choice depends on your health. I'm happy to share what's in the product, or connect you with our team.",
    quickReplies: [
      { label: "What's in the product?", next: "choose" },
      team,
      { label: "Back to start", next: START_ID },
    ],
  },
  {
    id: "emergency",
    message: "Please contact your doctor or the nearest hospital right away.",
    quickReplies: [team],
  },
  {
    id: "fallback",
    message:
      "Sorry, I didn't quite get that. You can pick a topic below, or send us your question.",
    quickReplies: [
      { label: "Help me choose a product", next: "choose" },
      { label: "Ordering and delivery", next: "ordering" },
      team,
    ],
  },
];

const NODE_INDEX = new Map(CHAT_NODES.map((node) => [node.id, node]));

export function getChatNode(id: string): ChatNode | undefined {
  return NODE_INDEX.get(id);
}

/** Node shown when a typed message cannot be matched. */
export const CHAT_FALLBACK_ID = "fallback";

type ProductKey = "subset" | "ada-glu" | "proteios";

const PRODUCT_MATCHERS: { product: ProductKey; pattern: RegExp }[] = [
  { product: "subset", pattern: /\bsubset\b/ },
  { product: "ada-glu", pattern: /\b(ada[\s-]?glu|ada\s?glucose)\b/ },
  { product: "proteios", pattern: /\bproteios\b/ },
];

const PRODUCT_INTRO: Record<ProductKey, string> = {
  subset: "subset_intro",
  "ada-glu": "adaglu_intro",
  proteios: "proteios_intro",
};

const PRODUCT_MENU: Record<ProductKey, string> = {
  subset: "subset_menu",
  "ada-glu": "adaglu_menu",
  proteios: "proteios_menu",
};

/** Topic -> node, per product. */
const PRODUCT_TOPICS: Record<ProductKey, Record<string, string>> = {
  subset: {
    what: "subset_what",
    prepare: "subset_prepare",
    calories: "subset_calories",
    protein: "subset_calories",
    carbs: "subset_carbs",
    fat: "subset_carbs",
    fiber: "subset_fiber",
    vitamins: "subset_vitamins",
    meal: "subset_meal",
    diabetes: "subset_diabetes",
    safe: "subset_diabetes",
    compare: "subset_compare",
    who: "subset_intro",
  },
  "ada-glu": {
    what: "adaglu_what",
    prepare: "adaglu_prepare",
    who: "adaglu_who",
    safe: "adaglu_safe",
    diabetes: "adaglu_safe",
    contents: "adaglu_contents",
    protein: "adaglu_protein",
    fiber: "adaglu_protein",
    fat: "adaglu_fat",
    sugar: "adaglu_sugar",
    meal: "adaglu_meal",
    calories: "adaglu_protein",
  },
  proteios: {
    what: "proteios_what",
    help: "proteios_help",
    protein: "proteios_help",
    prepare: "proteios_prepare",
    unflavored: "proteios_unflavored",
    who: "proteios_who",
  },
};

/** Topics that only make sense once a product is named. */
const PRODUCT_ONLY_TOPICS = new Set([
  "what",
  "prepare",
  "calories",
  "protein",
  "carbs",
  "fat",
  "fiber",
  "vitamins",
  "meal",
  "diabetes",
  "safe",
  "compare",
  "who",
  "contents",
  "sugar",
  "unflavored",
  "help",
]);

const GENERAL_TOPICS: Record<string, string> = {
  order: "ordering",
  together: "general_together",
  medicines: "general_medicines",
  cod: "general_cod",
  delivery: "general_delivery",
  free: "general_free",
};

/** Topic rules, most specific first. */
const TOPIC_RULES: { topic: string; keywords: string[] }[] = [
  { topic: "together", keywords: ["together", "more than one product", "combine", "combining"] },
  { topic: "medicines", keywords: ["medicine", "medication", "treatment", "drug"] },
  { topic: "cod", keywords: ["cash on delivery", "cod", "pay on delivery", "payment method"] },
  { topic: "free", keywords: ["free delivery", "delivery free", "free shipping", "shipping free", "delivery charge", "delivery cost", "free"] },
  { topic: "delivery", keywords: ["delivery", "deliver", "shipping", "how long", "when will", "business days"] },
  { topic: "order", keywords: ["order", "buy", "purchase", "price", "cost"] },
  { topic: "diabetes", keywords: ["diabet", "sugar patient"] },
  { topic: "sugar", keywords: ["sugar substitute", "aspartame", "sweetener", "artificial sugar"] },
  { topic: "meal", keywords: ["meal replacement", "replace a meal", "replace my meal", "replace meals"] },
  { topic: "fiber", keywords: ["fiber", "fibre", "fos", "prebiotic", "gut"] },
  { topic: "calories", keywords: ["calorie", "kcal", "energy"] },
  { topic: "carbs", keywords: ["carbohydrate", "carb", "maltodextrin"] },
  { topic: "fat", keywords: ["mufa", "monounsaturated", "fat"] },
  { topic: "vitamins", keywords: ["vitamin", "mineral", "calcium", "potassium", "iron", "zinc"] },
  { topic: "compare", keywords: ["compare", "everyday food", "vs food", "better than", "more than"] },
  { topic: "unflavored", keywords: ["unflavored", "unflavoured", "flavour", "flavor", "taste"] },
  { topic: "protein", keywords: ["protein"] },
  { topic: "who", keywords: ["who can use", "who should use", "who is it for", "suitable for", "can i use"] },
  { topic: "safe", keywords: ["is it safe", "safe to take", "safe for me"] },
  { topic: "contents", keywords: ["what is in it", "ingredients", "contents", "composition", "made of"] },
  { topic: "help", keywords: ["how does it help", "benefits", "benefit"] },
  { topic: "what", keywords: ["what is", "tell me about", "about"] },
];

const CHOOSE_KEYWORDS = [
  "help me choose",
  "recommend",
  "which product",
  "which one",
  "what should i take",
  "suggest",
];

/** Handled before keyword topics: situations needing medical guidance. */
const EMERGENCY_KEYWORDS = [
  "emergency",
  "unconscious",
  "passed out",
  "collapsed",
  "collapse",
  "severe",
  "urgent",
  "hypoglyc",
  "hyperglyc",
  "very low blood sugar",
  "very high blood sugar",
];

const SAFETY_KEYWORDS = [
  "pregnan",
  "expecting",
  "breastfeed",
  "breast-feed",
  "breast feed",
  "my child",
  "for a child",
  "for children",
  "my baby",
  "infant",
  "toddler",
  "kidney",
  "renal",
  "liver",
  "hepatic",
  "heart disease",
  "cardiac",
  "pku",
  "phenylketonuria",
  "insulin",
  "change my medicine",
  "change medicine",
  "stop my medicine",
  "stop medicine",
  "low blood sugar",
  "high blood sugar",
  "blood sugar dropped",
  "how much should i take",
  "how much do i take",
  "how much should i have",
  "dosage",
  "dose",
];

function includesAny(text: string, keywords: string[]): boolean {
  return keywords.some((keyword) => text.includes(keyword));
}

function detectProduct(text: string): ProductKey | null {
  const match = PRODUCT_MATCHERS.find(({ pattern }) => pattern.test(text));
  return match ? match.product : null;
}

function detectTopic(text: string): string | null {
  const match = TOPIC_RULES.find(({ keywords }) => includesAny(text, keywords));
  return match ? match.topic : null;
}

/**
 * Resolves a free-text message to the id of the node that should answer it.
 * Returns {@link CHAT_FALLBACK_ID} when nothing matches.
 */
export function resolveIntent(input: string): string {
  const text = input.toLowerCase();

  if (includesAny(text, EMERGENCY_KEYWORDS)) return "emergency";
  if (includesAny(text, SAFETY_KEYWORDS)) return "safety";

  const product = detectProduct(text);
  const topic = detectTopic(text);

  if (topic === "order") {
    return product ? PRODUCT_INTRO[product] : "ordering";
  }

  if (product) {
    const node = topic ? PRODUCT_TOPICS[product][topic] : undefined;
    return node ?? PRODUCT_MENU[product];
  }

  if (topic && GENERAL_TOPICS[topic]) return GENERAL_TOPICS[topic];
  if (topic && PRODUCT_ONLY_TOPICS.has(topic)) return "choose";
  if (includesAny(text, CHOOSE_KEYWORDS)) return "choose";

  return CHAT_FALLBACK_ID;
}
