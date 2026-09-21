export interface BlogCategory {
  id: string;
  label: string;
}

export const BLOG_CATEGORIES: BlogCategory[] = [
  { id: "all", label: "All Essays" },
  { id: "bioavailability", label: "Bioavailability" },
  { id: "longevity", label: "Longevity" },
  { id: "circadian", label: "Circadian Sleep" },
  { id: "microbiome", label: "Microbiome" },
  { id: "rituals", label: "Daily Rituals" },
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

export interface LeadStory {
  category: string;
  subcategory: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  author: string;
  authorImage: string;
  dateRead: string;
  href: string;
}

export const LEAD_STORY: LeadStory = {
  category: "Bioavailability",
  subcategory: "Lipid Formulation",
  title:
    "Why Most Oral Supplements Never Reach Your Cells: The Lipid Carrier Revolution.",
  excerpt:
    "Standard gelatin capsules disintegrate in harsh gastric hydrochloric acid, destroying delicate peptide chains. We explore how phospholipid bilayer nano-carriers bypass hepatic first-pass metabolism to elevate intracellular delivery by up to 800%.",
  image:
    "https://lh3.googleusercontent.com/aida/AEtjO1UsSpa2NZ_aBWAL4QjVoAxHe7V1gelrIpo7WOMpW_tc9z3FTlbclQiRDVafUYvTcSGL6qMsLmjl8LZbuxlA2wBbb6qMvEv4adi4omY9icqZ1QFVSWJT4EvG514aKDdso_CM9inYCUminr1t59Gg1ecNodP2AuUIhm9PXzz4JRK-bxKDSKJYMjLsSo4wF_5Wnz0Ek_HhzWp0DlM7NtpBxK27F25ZNiuooBMQ8TjR92udJHpwwOt-cG5M2UxJ",
  imageAlt:
    "Golden botanical lipid droplets suspended in pristine laboratory glassware",
  author: "Dr. Elena Vance, Ph.D.",
  authorImage:
    "https://lh3.googleusercontent.com/aida/AEtjO1WulccyL6x9FxDXyi-4nEAtvtejZa-bJcpvAGmVRlgwVXB2zCZcOKj4GybUNwrBLzOCq-x3WsSu1GrCZFk0YFJ_1Encfwyv72QYl_3yKic0RaSgi6UaS9PIEw-OiAWOFQBKP1FwKIW-0J1QL2ZHpkyp4vM4BWgYSi19DncLeD-t8SAz7LHRIIFVGYFctoA_cMeoCmT_LcH1sFMbT-9x4oKDIhG5soqLVN3PjGAKbGxGy22X98rJCGHBoCU",
  dateRead: "Oct 14, 2024 • 8 min read",
  href: "/blog/lipid-carrier-revolution",
};

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "magnesium-gaba-a-binding",
    category: "circadian",
    date: "Nov 02, 2024",
    readTime: "6 min read",
    title:
      "Magnesium Bisglycinate vs. Citrate: Clinical Mechanisms of GABA-A Binding",
    excerpt:
      "Why the chelation with glycine enables blood-brain barrier transport while preserving gentle gastrointestinal transit during slow-wave sleep cycles.",
    author: "By Dr. Julian Thorne",
    visual: "image",
    image: {
      src: "https://lh3.googleusercontent.com/aida/AEtjO1X73VRUxgJosy3PBs2k9wdbmLoRh5VLOZ4EJXMlYFa2EsR_176G_oEPYbRdWxfNhMULIbP_VXE7aNirQcmLyQEoM5ebYWvm1MW5cuvObV8Z7dLvkViMJGgrP6zr1OujQHmP34_GLWGN4Kf7wf74mufVmUEo4kB0yL2wP5_gPJorozCu6C_3fhLC_TXPrwvRU-EhWWy2WsJ7tR1mL6mAJ5y3Bni6oX5QbaKTkbnIOmgcWvOZiDOLG9udDUAn",
      alt: "Young woman starting her morning routine with fresh botanical infusion in sunlit kitchen",
    },
  },
  {
    slug: "nad-salvage-longevity",
    category: "longevity",
    date: "Oct 28, 2024",
    readTime: "9 min read",
    title: "The NAD+ Salvage Pathway: Mitochondrial Longevity in Practice",
    excerpt:
      "Assessing nicotinamide mononucleotide supplementation protocols and the enzymatic activation of Sirtuin-1 deacetylases in aging tissue.",
    author: "By Dr. Marcus H. Weber",
    visual: "image",
    image: {
      src: "https://lh3.googleusercontent.com/aida/AEtjO1Vmju2_oMgXLO47OJ5fOdeY8gMVXozk0TZDiKaMnZVaPaX9RLmKVQDpbGBBzXFNKac_JcFWrQPs1gKg0CcORiUAmDH2Qn6XJTovCM1HGBrpIgGthLcrq-K9z8_W_vwV3f9EHt39s11HGeQzRfIZ1LM4A_vqgz7fQOCuHoDD4cKKy9elLJYOV7MYAj8o2WUUS0NCebWZ-QQHUmSzVtt-4sNh7mkvD57BBPKu704ic2oFyS3qTdC9lHgCySpP",
      alt: "Nutripak supplement bottles displayed elegantly on a natural wooden tray with turmeric and citrus ingredients",
    },
  },
  {
    slug: "spore-probiotics-gastric-transit",
    category: "microbiome",
    date: "Oct 22, 2024",
    readTime: "7 min read",
    title: "Spore-Forming Probiotics: Surviving the Acidic Gastric Transit",
    excerpt:
      "How Bacillus coagulans and subtilis spores utilize a natural endospore shell to reach the distal ileum intact, outperforming fragile dairy cultures.",
    author: "By Dr. Elena Vance",
    visual: "microbiology",
  },
  {
    slug: "fasting-liposomal-absorption",
    category: "bioavailability",
    date: "Oct 17, 2024",
    readTime: "5 min read",
    title: "Morning Fasting & Liposomal Absorption: A Practical Protocol",
    excerpt:
      "Timing fat-soluble vitamins alongside circadian metabolic gates to optimize nutrient assimilation without prematurely breaking autophagic fasting states.",
    author: "By Sarah Lin, MS, CNS",
    visual: "dial",
  },
  {
    slug: "collagen-hyaluronan-dermal",
    category: "rituals",
    date: "Oct 09, 2024",
    readTime: "6 min read",
    title: "The Collagen & Hyaluronan Synergy for Dermal Architecture",
    excerpt:
      "Evaluating molecular weight distributions (2,000 Dalton peptides) in stimulating native dermal fibroblast density and deep dermal hydration.",
    author: "By Dr. Elena Vance",
    visual: "helix",
  },
  {
    slug: "circadian-lighting-melatonin",
    category: "circadian",
    date: "Sep 30, 2024",
    readTime: "4 min read",
    title: "Circadian Lighting and Evening Melatonin Secretion",
    excerpt:
      "How 480nm melanopsin stimulation inhibits pineal gland output, and the clinical micro-adjustments to reset your natural chronotype.",
    author: "By Dr. Julian Thorne",
    visual: "wave",
  },
];

export const CHRONICLE_ISSUE = "Issue No. 42";
export const CHRONICLE_ISSN = "ISSN 2831-9014";
export const CHRONICLE_SHOWING = "Showing 6 articles";

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

const VANCE_AVATAR =
  "https://lh3.googleusercontent.com/aida/AEtjO1WulccyL6x9FxDXyi-4nEAtvtejZa-bJcpvAGmVRlgwVXB2zCZcOKj4GybUNwrBLzOCq-x3WsSu1GrCZFk0YFJ_1Encfwyv72QYl_3yKic0RaSgi6UaS9PIEw-OiAWOFQBKP1FwKIW-0J1QL2ZHpkyp4vM4BWgYSi19DncLeD-t8SAz7LHRIIFVGYFctoA_cMeoCmT_LcH1sFMbT-9x4oKDIhG5soqLVN3PjGAKbGxGy22X98rJCGHBoCU";

export const LEAD_ARTICLE: ArticleDocument = {
  slug: "lipid-carrier-revolution",
  categoryCrumb: "Bioavailability & Longevity",
  categoryLabel: "Bioavailability & Science",
  monograph: "Monograph #CM-084",
  title:
    "Why Most Oral Supplements Never Reach Your Cells: The Lipid Carrier Revolution",
  lead:
    "Traditional synthetic vitamins oxidize before transiting the gastric barrier. We explore how phytosome lipid encapsulation and TRAACS chelation achieve up to 300% greater intracellular uptake.",
  authorName: "Dr. Elena Vance, Ph.D.",
  authorMeta: "CSO, NUTRIPAK BioSciences • Oct 14, 2024 • 8 min read",
  authorAvatar: VANCE_AVATAR,
  hero: {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHmd4HcBXEpWOKiAsotfhpe9xZkm2iWBmLpu8d8rvSrmiJN84vOo9UK9zYxjL2_pVPCBHy8HCKgQk4ggGrYikYX9wpHdZFlbMAOOsyrWVDDNvF0QzX5qWaH8sEDijjjsacNdVQWlppKBTAJqA-QeKGlyUIEptNTIuBNqTbBdIsaUCrPVi-aWb4tVFs7pcJpQvZh16ACJlq3smrc1MKbUPk2q9dQJQBzdwnQB9tVFW6",
    alt: "Liposomal encapsulation microspheres in biological fluid",
  },
  heroCaption:
    "Phospholipid bilayer encapsulation under confocal imaging (1,200x), demonstrating cellular fusion resilience.",
  sections: [
    {
      heading: "The Gastric Hydrochloric Acid Dilemma",
      paragraphs: [
        "For more than seven decades, commercial nutritional supplement manufacturing has relied on dry compression tableting. A dense agglomeration of synthetic ascorbic acid, inorganic mineral salts, and binding starches are compressed at over ten tons of pressure into hard tablets. While cost-effective to manufacture, this delivery format fundamentally ignores basic gastrointestinal physiology.",
        "Upon ingestion, a conventional supplement enters an environment saturated with concentrated hydrochloric acid (pH 1.2 to 2.0) and active proteolytic enzymes like pepsin. Under these harsh acidic and oxidative conditions, unbuffered water-soluble vitamins experience immediate degradation. Ascorbic acid undergoes accelerated hydrolysis, converting into inactive diketogulonic acid before it can ever cross the pyloric sphincter into the duodenum.",
      ],
      takeaway: {
        title: "Key Scientific Takeaway",
        text: "Tablets bound with dicalcium phosphate and starches require high gastric acidity to disintegrate. Paradoxically, the very acid needed to dissolve the tablet breaks down delicate micronutrients like methylated folates, while inducing premature chelate cleavage in mineral salts.",
      },
    },
    {
      heading: "Anatomy of a Phytosome Liposomal Bilayer",
      paragraphs: [
        "Phytosome technology resolves this vulnerability by complexing individual active molecules with non-GMO sunflower phosphatidylcholine. Unlike standard crude emulsions that simply suspend oil in water droplets, a true phytosome bonds the active nutrient directly to the polar head of the phospholipid at a molecular level.",
        "Because human enterocytes (intestinal wall cells) are themselves composed of a phospholipid bilayer, the phytosome microspheres bypass standard competitive transcellular channels. Instead, they merge directly with the gut mucosa via endocytosis, releasing their intact payload directly into mesenteric lymph circulation.",
      ],
      figure: {
        src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvfL1ENjss28sPE9cRLsMcPOmzcb8xcI-WbETnEo3Ntet4dbdOw0bFgvZsXz15VrMyjYdrDc_zHBJG3dqtkE1gdpKkj5xUfcaeG7Eacahy-p-ldV8xw3d4-jbudcxJYDgkMGE1reI0crotC0hLvwi-FCNVf7Q299kX-JhnuvEPIVI03jpfwUpR884IufyCX-yaHvZWEkJji6h2n8fVGD_PpGu3ClG4gCYrHSe7F-aChTLPaToV5Jll_Q",
        alt: "Botanical lipid extraction in laboratory",
        caption:
          "Fig 2.0 — Controlled phytosome lipid encapsulation and solvent-free bioactive isolation.",
      },
      quote: {
        text: "Nutritional science has spent decades increasing milligrams on labels while ignoring the microscopic gatekeepers of human physiology. It doesn’t matter what you swallow; it only matters what crosses your cellular membrane.",
        cite: "Dr. Elena Vance, Ph.D. • Chief Scientific Officer",
      },
    },
    {
      heading: "Chelation & The TRAACS Mechanism",
      paragraphs: [
        "While vitamins benefit from phospholipid encapsulation, trace minerals face a completely different biological bottleneck: competitive antagonism. When elemental minerals such as zinc, magnesium, and iron are ingested together in inorganic forms (oxides, sulfates, or carbonates), they complete for identical DMT1 receptors in the duodenum.",
        "By bonding the mineral atom to two neutral glycine amino acids through the patented Real Amino Acid Chelate System (TRAACS), the mineral is absorbed intact via peptide PEPT1 pathways, entirely sidestepping competition, ionization, and gastric irritation.",
      ],
    },
    {
      heading: "Routine Integration Protocols",
      paragraphs: [
        "Understanding chronobiology and digestive phases allows you to leverage phytosome delivery for maximum systemic benefit:",
      ],
      list: [
        {
          strong: "Morning Fasting:",
          text: " Because liposomal layers do not depend on bile salt emulsification, liposomal Vitamin C + D3 can be consumed alongside filtered water before breakfast without inducing nausea.",
        },
        {
          strong: "Pre-Sleep Magnesium:",
          text: " Take TRAACS Magnesium Bisglycinate 45 minutes prior to sleep. The two glycine ligands exert gentle agonism on central inhibitory GABA-A receptors, reinforcing circadian calming signals.",
        },
      ],
    },
  ],
  bio: {
    name: "Dr. Elena Vance, Ph.D.",
    text: "Dr. Vance holds a Ph.D. in Molecular Biophysics from Stanford University. Over the past decade, she has authored 18 peer-reviewed publications on nutraceutical bioavailability and oversees clinical formulations at NUTRIPAK BioSciences.",
  },
};

export const RELATED_ARTICLES: RelatedArticle[] = [
  {
    meta: "6 Min Read • Neurology",
    title: "Magnesium Bisglycinate vs. Citrate: GABA-A Pathways",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4Js6hzOeyGpAhepkaEUlQCgvYiRqtYmVcSZQnTSpaAYJDGYmDSdki7EcKVf6vNcquia2pCm5qtE_8mcv4A36bxrvGaWBSRjBCvvijFOhNd8npDxuqiDRVl0ptmaowRpjiXZDZaIRsEJ6MieJR9K4ZjkWv10nj_wzqQ7VcpwAMfOj4M-O0ZRFIIHIiPJxo4myy4Wa-l6iA72ZSBf2Fyo13JxYQwd76RASNNpZZFK--",
    alt: "Magnesium bisglycinate laboratory study",
    href: "/blog/magnesium-gaba-a-binding",
  },
  {
    meta: "7 Min Read • Microbiome",
    title: "Spore Probiotics: Surviving 1.5 pH Hydrochloric Acid",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFzfhNSikaBdH2hj_nKvmZuIfcTNHmf4o1ZnpAiduTRqIFaYyABBi4T4E31bDjmJjZ5i2vwCNtsih9WfwOK5pc-7fXavyDl-MGs6GTG_dPCdN6-5sWk-FlkWK7oRb5gBPJTC9YMh0QlbJBtHydf0f615r3Py57UfzICILxr2XJl1RtFasd_baEYTuKpnCht7poe-0e5qWE3tE3F1EfT44lxWw5MaPXa4EyJeddSXky",
    alt: "Probiotics spore microorganisms",
    href: "/blog/spore-probiotics-gastric-transit",
  },
  {
    meta: "9 Min Read • Longevity",
    title: "The NAD+ Salvage Pathway: NMN and Sirtuin 1",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBliaOnud4D8PBI0l3O-wbXZ1kilWv4UidEACukehWf--d7M6VbsrFEOy_Nex5qa32C_XRv5foxKqJjqn7ckMfdzyNrzu7SSelHBs68hSrIEzf9JAkVmuCvUiBCtbbJmd__ERiIQQbmi7J_pByFYuuI0elj7dG8MPHhqqRql9MiIjgUNcdU0Bcy58plamqhOx9lhFFcPxdV65Ag7Fl8rwWvmvilDMrA70HaDiYBgxYZ",
    alt: "NAD+ and botanical resveratrol extracts",
    href: "/blog/nad-salvage-longevity",
  },
];

export function getArticleBySlug(slug: string): ArticleDocument | null {
  if (slug === LEAD_ARTICLE.slug) return LEAD_ARTICLE;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);
  if (!article) return null;
  const displayName = article.author.replace(/^By\s+/, "");
  return {
    slug: article.slug,
    categoryCrumb: CATEGORY_LABELS.get(article.category) ?? article.category,
    categoryLabel: CATEGORY_LABELS.get(article.category) ?? article.category,
    monograph: "Monograph #NP-084",
    title: article.title,
    lead: article.excerpt,
    authorName: displayName,
    authorMeta: `${article.date} • ${article.readTime}`,
    authorAvatar: displayName.includes("Elena Vance") ? VANCE_AVATAR : undefined,
    hero: article.image
      ? { src: article.image.src, alt: article.image.alt }
      : { visual: article.visual },
    sections: [],
    bio: {
      name: displayName,
      text: article.author,
    },
  };
}