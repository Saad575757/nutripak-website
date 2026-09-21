import type { Metadata } from "next";
import { notFound } from "next/navigation";

import ArticleReadingProgress from "@/components/blog/article-reading-progress";
import ArticleHeader from "@/components/blog/article-header";
import ArticleHero from "@/components/blog/article-hero";
import ArticleBody from "@/components/blog/article-body";
import AuthorBio from "@/components/blog/author-bio";
import FurtherReading from "@/components/blog/further-reading";
import { BLOG_ARTICLES, LEAD_ARTICLE, getArticleBySlug } from "@/lib/blog";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [LEAD_ARTICLE, ...BLOG_ARTICLES].map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: BlogArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const doc = getArticleBySlug(slug);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.lead,
  };
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const doc = getArticleBySlug(slug);
  if (!doc) notFound();

  return (
    <div className="flex flex-col">
      <ArticleReadingProgress />
      <article className="w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin pt-12 pb-20">
        <ArticleHeader doc={doc} />
        <ArticleHero doc={doc} />
        <div className="max-w-3xl">
          <ArticleBody doc={doc} />
        </div>
        <div className="max-w-3xl">
          <AuthorBio doc={doc} />
        </div>
        <FurtherReading />
      </article>
    </div>
  );
}