import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

/**
 * Generates the two public PDF downloads without any extra dependencies.
 * Re-run with: node scripts/generate-pdfs.mjs
 */

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "downloads");
mkdirSync(outDir, { recursive: true });

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN = 56;
const MAX_WIDTH = 84;

const STYLES = {
  h1: { font: "F2", size: 22, leading: 28, gapAfter: 8 },
  h2: { font: "F2", size: 13, leading: 18, gapAfter: 4 },
  body: { font: "F1", size: 10.5, leading: 15, gapAfter: 4 },
  bullet: { font: "F1", size: 10.5, leading: 15, gapAfter: 2, prefix: "- " },
  meta: { font: "F1", size: 9, leading: 13, gapAfter: 2 },
};

function ascii(value) {
  return value
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u00ae/g, "(R)")
    .replace(/[^\x20-\x7e]/g, "");
}

function escapeText(value) {
  return ascii(value)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrapText(text, max = MAX_WIDTH) {
  const words = ascii(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";
  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > max && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }
  if (current) lines.push(current);
  return lines.length ? lines : [""];
}

function layout(blocks) {
  const pages = [];
  let page = [];
  let y = PAGE_HEIGHT - MARGIN;

  const pushPage = () => {
    if (page.length) pages.push(page);
    page = [];
    y = PAGE_HEIGHT - MARGIN;
  };

  for (const block of blocks) {
    const style = STYLES[block.style ?? "body"];
    const lines = wrapText(
      `${style.prefix ?? ""}${block.text}`,
      block.maxWidth ?? MAX_WIDTH,
    );

    if (y - lines.length * style.leading < MARGIN) pushPage();

    for (const line of lines) {
      page.push({ text: line, font: style.font, size: style.size, y });
      y -= style.leading;
    }
    y -= style.gapAfter;
  }

  if (page.length) pages.push(page);
  return pages;
}

function contentStream(lines) {
  return lines
    .map(
      (line) =>
        `BT /${line.font} ${line.size} Tf 1 0 0 1 ${MARGIN} ${line.y.toFixed(
          2,
        )} Tm (${escapeText(line.text)}) Tj ET`,
    )
    .join("\n");
}

function buildPdf(blocks) {
  const pages = layout(blocks);
  const objects = [];

  objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
  objects[3] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
  objects[4] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";

  const kids = [];
  pages.forEach((lines, index) => {
    const pageId = 5 + index * 2;
    const contentId = pageId + 1;
    kids.push(`${pageId} 0 R`);

    const stream = contentStream(lines);
    objects[contentId] = `<< /Length ${Buffer.byteLength(
      stream,
      "latin1",
    )} >>\nstream\n${stream}\nendstream`;
    objects[
      pageId
    ] = `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_WIDTH} ${PAGE_HEIGHT}] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents ${contentId} 0 R >>`;
  });

  objects[2] = `<< /Type /Pages /Kids [${kids.join(
    " ",
  )}] /Count ${pages.length} >>`;

  let pdf = "%PDF-1.4\n";
  const offsets = [];
  for (let id = 1; id < objects.length; id += 1) {
    if (!objects[id]) continue;
    offsets[id] = Buffer.byteLength(pdf, "latin1");
    pdf += `${id} 0 obj\n${objects[id]}\nendobj\n`;
  }

  const xrefOffset = Buffer.byteLength(pdf, "latin1");
  pdf += `xref\n0 ${objects.length}\n0000000000 65535 f \n`;
  for (let id = 1; id < objects.length; id += 1) {
    pdf += `${String(offsets[id] ?? 0).padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer\n<< /Size ${objects.length} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  return Buffer.from(pdf, "latin1");
}

const productGuide = [
  { text: "NutriPak Product Guide", style: "h1" },
  { text: "Adult nutrition, built around you.  |  nutripak.net", style: "meta" },
  { text: "About NutriPak", style: "h2" },
  {
    text: "NutriPak is a subsidiary of Alfalah Health Care, created to make adult nutrition that people can genuinely rely on. Every formula is developed with medical and nutrition specialists for a specific need, and manufactured to internationally recognised quality standards.",
    style: "body",
  },
  { text: "SUBSET - Complete Balanced Nutrition Supplement", style: "h2" },
  {
    text: "Balanced macro and micronutrients for daily strength, energy, and vitality. A complete supplement for everyday nutritional gaps.",
    style: "body",
  },
  {
    text: "26 essential macro- and micronutrients in one formula.",
    style: "bullet",
  },
  {
    text: "Quality protein from whey and soy protein isolate (8.8 g per serving).",
    style: "bullet",
  },
  {
    text: "FOS fibre and monounsaturated fats, plus a multivitamin and mineral blend.",
    style: "bullet",
  },
  {
    text: "One serving is 54 g powder (5 level scoops) mixed with water to make one 230 ml glass.",
    style: "meta",
  },
  { text: "Retail price: PKR 5,500", style: "meta" },
  {
    text: "ADA-glu - Specialized Nutrition for Diabetic Management",
    style: "h2",
  },
  {
    text: "A carefully controlled mix of macronutrients that supports blood sugar, heart health, and weight management as part of a diabetes dietary plan.",
    style: "body",
  },
  { text: "Low glycemic index carbohydrate source.", style: "bullet" },
  {
    text: "Contains monounsaturated fatty acids (MUFAs) and dietary fibre (FOS).",
    style: "bullet",
  },
  {
    text: "Natural protein from whey and soy protein isolate, with essential vitamins and minerals.",
    style: "bullet",
  },
  {
    text: "Use only under medical supervision for Type 1, Type 2, and gestational diabetes. Contains aspartame.",
    style: "meta",
  },
  { text: "Retail price: PKR 3,800", style: "meta" },
  { text: "PROTEIOS - High-Quality Protein Supplement", style: "h2" },
  {
    text: "A premium whey protein blend based on quality whey protein and whey peptides, designed for recovery, strength, and higher daily protein needs.",
    style: "body",
  },
  {
    text: "Peptide rich for rapid absorption and efficient nutrient delivery.",
    style: "bullet",
  },
  {
    text: "Supports muscle protein synthesis (MPS), recovery, and athletic performance.",
    style: "bullet",
  },
  {
    text: "Unflavoured, so it mixes easily into everyday meals without changing taste.",
    style: "bullet",
  },
  { text: "Retail price: PKR 2,800", style: "meta" },
  { text: "Choosing the right formula", style: "h2" },
  {
    text: "SUBSET: everyday balanced nutrition for adults who need extra nutrition in their daily diet.",
    style: "bullet",
  },
  {
    text: "ADA-glu: support for people managing diabetes, as part of a plan set by their doctor or dietitian.",
    style: "bullet",
  },
  {
    text: "PROTEIOS: extra protein for recovery, illness or injury, or higher protein requirements.",
    style: "bullet",
  },
  { text: "Important information", style: "h2" },
  {
    text: "These products are not a substitute for medical treatment. Please consult your doctor before use, especially if you have an existing health condition, are pregnant or breastfeeding, or are taking medication.",
    style: "body",
  },
  {
    text: "For product support: nutripak.np@gmail.com  |  0313-3346732",
    style: "meta",
  },
];

const factSheets = [
  { text: "NutriPak Nutrition Fact Sheets", style: "h1" },
  {
    text: "Per-serving reference for SUBSET, ADA-glu, and PROTEIOS.  |  nutripak.net",
    style: "meta",
  },
  { text: "How to read this sheet", style: "h2" },
  {
    text: "Values are taken from the product information supplied for NutriPak. Always check the physical pack label for the most current nutrition panel, batch details, and allergen statement.",
    style: "body",
  },
  { text: "SUBSET (per 230 ml glass / 54 g powder)", style: "h2" },
  { text: "Energy: 235.9 kcal (436.87 kcal per 100 g)", style: "bullet" },
  { text: "Carbohydrate: 34.8 g (64.49 g per 100 g)", style: "bullet" },
  { text: "Protein: 8.8 g (16.31 g per 100 g)", style: "bullet" },
  { text: "Fat: 6.8 g (12.63 g per 100 g)", style: "bullet" },
  { text: "Calcium: about 168 mg per 230 ml glass", style: "bullet" },
  { text: "Potassium: about 380 mg per 230 ml glass", style: "bullet" },
  {
    text: "Micronutrients: vitamins A, D, E, C and B-complex, folic acid, calcium, potassium, magnesium, iron, and zinc.",
    style: "bullet",
  },
  {
    text: "Fiber source: FOS (fructo-oligosaccharides), a prebiotic fibre.",
    style: "bullet",
  },
  {
    text: "Note: SUBSET contains maltodextrin and sucrose and is not designed for diabetes management.",
    style: "meta",
  },
  { text: "ADA-glu", style: "h2" },
  {
    text: "A slow-release carbohydrate blend with protein, MUFAs, fibre, vitamins, and minerals, formulated for diabetes dietary management.",
    style: "body",
  },
  { text: "Protein: 19.61 g per 100 g (whey and soy protein isolate)", style: "bullet" },
  { text: "Dietary fibre: 2 g per 100 g (FOS)", style: "bullet" },
  { text: "Fat source: monounsaturated fatty acids (MUFAs)", style: "bullet" },
  { text: "Carbohydrate source: low glycemic index maltodextrin", style: "bullet" },
  { text: "Aspartame: 71.82 mg per serving", style: "bullet" },
  {
    text: "Important: contains aspartame. People with phenylketonuria (PKU) should avoid aspartame. Use under medical supervision and glucose monitoring.",
    style: "meta",
  },
  { text: "PROTEIOS", style: "h2" },
  {
    text: "A premium unflavoured whey protein blend with whey peptides. It is designed for strength, recovery, and higher protein needs.",
    style: "body",
  },
  {
    text: "Per-serving nutrition values for PROTEIOS will be added once the final approved panel is supplied. Check the physical pack label in the meantime.",
    style: "meta",
  },
  { text: "Allergens and usage", style: "h2" },
  {
    text: "Products may contain milk and soy. If you have a food allergy, check the pack label before use. Do not use as a sole source of nutrition unless advised by a healthcare professional.",
    style: "body",
  },
  {
    text: "These products are not a substitute for medical treatment. Please consult your doctor before use.",
    style: "body",
  },
  {
    text: "For product support: nutripak.np@gmail.com  |  0313-3346732",
    style: "meta",
  },
];

writeFileSync(
  join(outDir, "nutripak-product-guide.pdf"),
  buildPdf(productGuide),
);
writeFileSync(
  join(outDir, "nutrition-fact-sheets.pdf"),
  buildPdf(factSheets),
);

console.log("Generated PDFs in public/downloads");
