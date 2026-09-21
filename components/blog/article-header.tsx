import Image from "next/image";

import ArticleActions from "@/components/blog/article-actions";
import { ROUTES } from "@/lib/site";
import type { ArticleDocument } from "@/lib/blog";

function AuthorAvatar({ doc }: { doc: ArticleDocument }) {
  if (doc.authorAvatar) {
    return (
      <Image
        src={doc.authorAvatar}
        alt={doc.authorName}
        width={48}
        height={48}
        className="w-12 h-12 rounded-full object-cover shadow-sm bg-surface-container"
      />
    );
  }
  const initials = doc.authorName
    .replace(/[^A-Za-z ]/g, "")
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md font-bold shadow-sm">
      {initials}
    </div>
  );
}

export default function ArticleHeader({ doc }: { doc: ArticleDocument }) {
  return (
    <>
      <div className="flex items-center justify-between pb-8 text-on-surface-variant font-caption text-caption">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2">
          <a className="hover:text-primary transition-colors" href={ROUTES.home}>
            Home
          </a>
          <span>/</span>
          <a className="hover:text-primary transition-colors" href={ROUTES.blog}>
            Science Lab
          </a>
          <span>/</span>
          <span className="text-secondary font-medium">{doc.categoryCrumb}</span>
        </nav>
        <span className="hidden sm:inline-block font-label-sm text-label-sm text-on-surface-variant">
          {doc.monograph}
        </span>
      </div>
      <header className="pb-12 text-center md:text-left">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 rounded-full bg-surface-container-high text-secondary font-label-sm text-label-sm font-semibold tracking-wider uppercase mb-6">
            {doc.categoryLabel}
          </div>
          <h1 className="font-headline-lg text-headline-lg text-primary font-normal tracking-tight leading-tight mb-6">
            {doc.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl mb-8">
            {doc.lead}
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-6 bg-surface-container-low px-5 py-4 rounded-xl">
          <AuthorAvatar doc={doc} />
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-title-md text-title-md text-primary font-semibold">
                {doc.authorName}
              </span>
              <span
                className="material-symbols-outlined text-secondary text-[16px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified
              </span>
            </div>
            <span className="font-caption text-caption text-on-surface-variant">
              {doc.authorMeta}
            </span>
          </div>
          <ArticleActions />
        </div>
      </header>
    </>
  );
}