import type { Metadata } from "next";

import BlogMasthead from "@/components/blog/blog-masthead";
import BlogChronicle from "@/components/blog/blog-chronicle";
import NewsletterCallout from "@/components/blog/newsletter-callout";

export const metadata: Metadata = {
  title: "The Nutripak Chronicle — Notes on Cellular Vitality & Longevity",
  description:
    "Thoughtful explorations of clinical biochemistry, circadian rhythm, and modern nutritional science written by our practitioners and research clinicians.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <BlogMasthead />
      <BlogChronicle />
      <NewsletterCallout />
    </div>
  );
}