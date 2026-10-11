export interface BlogCategory {
  id: string;
  label: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  { id: "all", label: "All Articles" },
  { id: "pregnancy", label: "Pregnancy Nutrition" },
];

export const CATEGORY_LABELS = new Map(
  BLOG_CATEGORIES.filter((c) => c.id !== "all").map((c) => [c.id, c.label])
);

export type BlogVisual = "image" | "microbiology" | "dial" | "helix" | "wave";

export interface BlogArticle {
  slug: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  visual: BlogVisual;
  image?: { src: string; alt: string };
}

/** Placeholder stock image — swap for final Nutripak photography before launch. */
const PREGNANCY_IMAGE = {
  src: "https://images.pexels.com/photos/6991891/pexels-photo-6991891.jpeg?auto=compress&cs=tinysrgb&w=1200",
  alt: "Pregnant woman taking her daily vitamins and supplements at a table",
};

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "eating-for-two-pregnancy-nutrition",
    category: "pregnancy",
    date: "Oct 08, 2026",
    readTime: "6 min read",
    title: "Eating for Two? A Guide to Healthy Nutrition during Pregnancy",
    excerpt:
      "The phrase “eating for two” often makes pregnant women think they need to double their food intake. Pregnant women actually need only about 300 extra calories per day during the second and third trimesters, not twice as much food. This common myth can lead to unhealthy weight gain and complications during pregnancy.",
    author: "By Nutripak Nutrition Team",
    visual: "image",
    image: PREGNANCY_IMAGE,
  },
];

export const CHRONICLE_ISSUE = "Issue No. 42";
export const CHRONICLE_ISSN = "ISSN 2831-9014";

export interface ArticleSection {
  heading: string;
  paragraphs: string[];
  takeaway?: { title: string; text: string };
  figure?: { src: string; alt: string; caption: string };
  quote?: { text: string; cite: string };
  list?: { strong: string; text: string }[];
}

export interface RelatedArticle {
  meta: string;
  title: string;
  image: string;
  alt: string;
  href: string;
}

export interface ArticleDocument {
  slug: string;
  categoryCrumb: string;
  categoryLabel: string;
  monograph: string;
  title: string;
  lead: string;
  authorName: string;
  authorMeta: string;
  authorAvatar?: string;
  hero: { src: string; alt: string } | { visual: BlogVisual };
  heroCaption?: string;
  sections: ArticleSection[];
  bio: { name: string; text: string };
}

export const ARTICLE_DOCUMENTS: ArticleDocument[] = [
  {
    slug: "eating-for-two-pregnancy-nutrition",
    categoryCrumb: "Pregnancy Nutrition",
    categoryLabel: "Pregnancy Nutrition",
    monograph: "Monograph #NP-090",
    title: "Eating for Two? A Guide to Healthy Nutrition during Pregnancy",
    lead:
      "The phrase “eating for two” often makes pregnant women think they need to double their food intake. Pregnant women actually need only about 300 extra calories per day during the second and third trimesters, not twice as much food. This common myth can lead to unhealthy weight gain and complications during pregnancy.",
    authorName: "Nutripak Nutrition Team",
    authorMeta: "NUTRIPAK Nutrition Desk • Oct 08, 2026 • 6 min read",
    hero: PREGNANCY_IMAGE,
    sections: [
      {
        heading: "Quality Over Quantity",
        paragraphs: [
          "Good nutrition during pregnancy focuses on quality over quantity. The body becomes more efficient at absorbing nutrients, so eating a balanced and nutritious diet during pregnancy helps support both the mom’s and baby’s health. The right foods provide essential vitamins and minerals that growing babies need for proper development.",
        ],
      },
      {
        heading: "What Your Body Truly Needs",
        paragraphs: [
          "Understanding what the body truly needs during pregnancy takes the guesswork out of meal planning. From folic acid for neural tube development to iron for blood production, each nutrient plays a specific role. This guide breaks down the science into simple, practical advice that busy expectant mothers can easily follow.",
        ],
      },
      {
        heading:
          "“Eating for two”: Excessive gestational weight gain and the need to change social norms",
        paragraphs: [
          "The current obesity epidemic has brought the topic of weight into focus, not only in scientific circles but also pervasively through communities across America. The importance of living healthier has not fallen upon deaf ears of the individuals affected, either. The vast majority of adults who are overweight want to lose weight (Jones, 2009). For women, pregnancy has been identified as an important area of study for weight control, given that excessive gestational weight gain (GWG) leads to, among other health complications, retained weight postpartum and increased rates of obesity (Siega-Riz et al., 2009). Given this evidence, the Institute of Medicine's (IOM) 2009 recommendations for GWG support smaller amounts of GWG for women who are overweight and obese prior to pregnancy (IOM (Institute of Medicine) & NRC (National Research Council), 2009).",
        ],
      },
    ],
    bio: {
      name: "Nutripak Nutrition Team",
      text: "Written and reviewed by the Nutripak clinical nutrition team, translating established nutrition science into practical, everyday guidance for mothers and families.",
    },
  },
];

export const RELATED_ARTICLES: RelatedArticle[] = [];

export function getArticleBySlug(slug: string): ArticleDocument | null {
  return ARTICLE_DOCUMENTS.find((article) => article.slug === slug) ?? null;
}
