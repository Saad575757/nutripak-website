import Image from "next/image";

import { ROUTES } from "@/lib/site";
import { RELATED_ARTICLES } from "@/lib/blog";

export default function FurtherReading() {
  return (
    <div className="mt-20 pt-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-bold block mb-1">
            FURTHER READING
          </span>
          <h3 className="font-headline-md text-headline-md text-primary font-normal">
            Related Articles
          </h3>
        </div>
        <a
          className="font-label-md text-label-md text-secondary font-bold hover:underline flex items-center gap-1"
          href={ROUTES.blog}
        >
          View All Articles
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {RELATED_ARTICLES.map((article) => (
          <a
            key={article.title}
            className="group flex flex-col rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-md transition-all"
            href={article.href}
          >
            <div className="w-full h-44 overflow-hidden relative bg-surface-container">
              <Image
                src={article.image}
                alt={article.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col flex-1 justify-between gap-3">
              <div className="space-y-1">
                <span className="font-caption text-caption text-on-surface-variant">
                  {article.meta}
                </span>
                <h4 className="font-title-md text-title-md text-primary font-semibold group-hover:text-secondary transition-colors leading-snug">
                  {article.title}
                </h4>
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-bold flex items-center gap-1">
                Read Article
                <span className="material-symbols-outlined text-[14px]">chevron_right</span>
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}