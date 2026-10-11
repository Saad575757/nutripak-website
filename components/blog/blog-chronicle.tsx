"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import { BlogArticle, BLOG_ARTICLES, BLOG_CATEGORIES, CATEGORY_LABELS } from "@/lib/blog";
import { DialVisual, HelixVisual, MicrobiologyVisual, WaveVisual } from "@/components/blog/blog-visuals";

function ArticleVisual({ article }: { article: BlogArticle }) {
  const common = "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500";

  if (article.visual === "image" && article.image) {
    return (
      <Image
        src={article.image.src}
        alt={article.image.alt}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        className={common}
      />
    );
  }

  const gradients: Record<string, string> = {
    microbiology: "from-surface-container to-surface-container-low opacity-80",
    dial: "from-surface-container-low via-surface-container to-surface-variant/40",
    helix: "from-surface-container to-surface-variant/50",
    wave: "from-surface-container to-surface-container-low",
  };

  return (
    <>
      <div className={`absolute inset-0 bg-gradient-to-tr ${gradients[article.visual]}`} />
      {article.visual === "microbiology" && <MicrobiologyVisual />}
      {article.visual === "dial" && <DialVisual />}
      {article.visual === "helix" && <HelixVisual />}
      {article.visual === "wave" && <WaveVisual />}
    </>
  );
}

function ArticleCard({ article }: { article: BlogArticle }) {
  const categoryLabel = CATEGORY_LABELS.get(article.category) ?? article.category;

  return (
    <article className="article-item flex flex-col bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group">
      <a className="block relative aspect-[16/10] bg-surface-container overflow-hidden" href={`/blog/${article.slug}`}>
        <ArticleVisual article={article} />
        <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-caption font-caption uppercase tracking-wider text-secondary font-semibold z-20">
          {categoryLabel}
        </span>
      </a>
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 font-caption text-caption text-outline mb-2">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <a className="block" href={`/blog/${article.slug}`}>
            <h4 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors mb-3 leading-snug">
              {article.title}
            </h4>
          </a>
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
            {article.excerpt}
          </p>
        </div>
        <div className="pt-6 mt-4 flex items-center justify-between">
          <span className="font-caption text-caption text-outline">{article.author}</span>
          <span className="material-symbols-outlined text-[18px] text-primary group-hover:translate-x-1 group-hover:text-secondary transition-all">
            east
          </span>
        </div>
      </div>
    </article>
  );
}

export default function BlogChronicle() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filteredArticles = useMemo(() => {
    const search = query.toLowerCase().trim();
    return BLOG_ARTICLES.filter((article) => {
      const matchesCategory = activeCategory === "all" || article.category === activeCategory;
      if (!matchesCategory) return false;
      if (search === "") return true;
      return (
        `${article.title} ${article.excerpt} ${article.author}`.toLowerCase().includes(search)
      );
    });
  }, [activeCategory, query]);

  return (
    <>
      <section className="w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin pt-4 pb-12">
        <div className="mt-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <nav aria-label="Article categories" className="flex items-center gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-label-md font-label-md">
            {BLOG_CATEGORIES.map((category) => {
              const active = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  className={`px-4 py-2 rounded-full transition-all whitespace-nowrap shadow-sm ${
                    active
                      ? "bg-primary text-on-primary"
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container hover:text-primary"
                  }`}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.label}
                </button>
              );
            })}
          </nav>
          <div className="relative w-full md:w-72">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[18px]">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 rounded-full bg-surface-container-lowest text-body-sm font-body-sm text-on-surface placeholder:text-outline shadow-sm focus:outline-none"
              placeholder="Search articles..."
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </section>
      <div className="w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <h3 className="font-title-lg text-title-lg text-primary tracking-tight">
            Latest Articles
          </h3>
        </div>
        <span className="font-caption text-caption text-outline">
          Showing {filteredArticles.length}{" "}
          {filteredArticles.length === 1 ? "article" : "articles"}
        </span>
      </div>
      <section className="w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-20">
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="chronicle-grid">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <p className="rounded-2xl bg-surface-container-low px-6 py-12 text-center font-body-md text-body-md text-on-surface-variant">
            No articles match your search yet.
          </p>
        )}
      </section>
    </>
  );
}