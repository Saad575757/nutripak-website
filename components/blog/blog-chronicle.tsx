"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

import MaterialIcon from "@/components/material-icon";
import { BlogArticle, BLOG_ARTICLES, BLOG_CATEGORIES, CATEGORY_LABELS, CHRONICLE_SHOWING, LEAD_STORY } from "@/lib/blog";
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

function LeadStory() {
  return (
    <section className="w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-16">
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-[480px] bg-surface-container overflow-hidden">
            <Image
              src={LEAD_STORY.image}
              alt={LEAD_STORY.imageAlt}
              fill
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-surface-container-lowest/90 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">
                Lead Investigation
              </span>
            </div>
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 text-caption font-caption text-secondary uppercase tracking-widest mb-3">
                <span>{LEAD_STORY.category}</span>
                <span>•</span>
                <span>{LEAD_STORY.subcategory}</span>
              </div>
              <a className="group block" href={LEAD_STORY.href}>
                <h2 className="font-headline-md text-headline-md text-primary leading-tight group-hover:text-secondary transition-colors mb-4">
                  {LEAD_STORY.title}
                </h2>
              </a>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed line-clamp-3 mb-6">
                {LEAD_STORY.excerpt}
              </p>
            </div>
            <div>
              <div className="flex items-center justify-between pt-6 mt-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={LEAD_STORY.authorImage}
                    alt={LEAD_STORY.author}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover bg-surface-container shadow-xs"
                  />
                  <div>
                    <p className="font-title-md text-title-md text-primary leading-none mb-1">
                      {LEAD_STORY.author}
                    </p>
                    <p className="font-caption text-caption text-outline">{LEAD_STORY.dateRead}</p>
                  </div>
                </div>
                <a
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-secondary font-semibold group transition-colors"
                  href={LEAD_STORY.href}
                >
                  <span>Read Article</span>
                  <MaterialIcon
                    name="arrow_forward"
                    className="text-[18px] group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pagination() {
  const pageClasses = (active?: boolean) =>
    `w-10 h-10 rounded-full flex items-center justify-center font-bold ${
      active ? "bg-primary text-on-primary shadow-xs" : "text-on-surface hover:bg-surface-container transition-colors"
    }`;

  return (
    <section className="w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-20">
      <div className="flex items-center justify-center gap-2 text-label-md font-label-md">
        <button
          aria-label="Previous page"
          className="w-10 h-10 rounded-full flex items-center justify-center text-outline cursor-not-allowed"
          disabled
          type="button"
        >
          <MaterialIcon name="chevron_left" className="text-[18px]" />
        </button>
        <button className={pageClasses(true)} type="button">
          1
        </button>
        <button className={pageClasses()} type="button">
          2
        </button>
        <button className={pageClasses()} type="button">
          3
        </button>
        <span className="px-2 text-outline">...</span>
        <button className={pageClasses()} type="button">
          8
        </button>
        <button
          aria-label="Next page"
          className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
          type="button"
        >
          <MaterialIcon name="chevron_right" className="text-[18px]" />
        </button>
      </div>
    </section>
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
              placeholder="Search by topic, gene, or compound..."
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
          </div>
        </div>
      </section>
      <LeadStory />
      <div className="w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <h3 className="font-title-lg text-title-lg text-primary tracking-tight">
            Recent Clinical Notes &amp; Papers
          </h3>
        </div>
        <span className="font-caption text-caption text-outline">{CHRONICLE_SHOWING}</span>
      </div>
      <section className="w-full max-w-[1320px] mx-auto px-margin-mobile md:px-margin mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="chronicle-grid">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <Pagination />
    </>
  );
}