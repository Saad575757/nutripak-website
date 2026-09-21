import Image from "next/image";

import type { ArticleDocument } from "@/lib/blog";

export default function ArticleBody({
  doc,
}: {
  doc: ArticleDocument;
}) {
  if (doc.sections.length === 0) return null;

  return (
    <div className="space-y-12">
      {doc.sections.map((section, sectionIndex) => (
        <section key={section.heading} className="space-y-4">
          <h2 className="font-headline-md text-headline-md text-primary font-normal">
            {section.heading}
          </h2>
          {section.paragraphs.map((paragraph, paragraphIndex) => (
            <p
              key={paragraph}
              className={
                sectionIndex === 0 && paragraphIndex === 0
                  ? "font-body-lg text-body-lg text-on-surface leading-relaxed"
                  : "font-body-md text-body-md text-on-surface-variant leading-relaxed"
              }
            >
              {paragraph}
            </p>
          ))}

          {section.takeaway && (
            <div className="p-8 rounded-xl bg-surface-container-low border-0 shadow-sm flex flex-col sm:flex-row items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-secondary-container text-on-secondary-fixed flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">lightbulb</span>
              </div>
              <div className="space-y-2">
                <h4 className="font-title-md text-title-md text-primary font-bold">
                  {section.takeaway.title}
                </h4>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {section.takeaway.text}
                </p>
              </div>
            </div>
          )}

          {section.figure && (
            <figure className="my-8 rounded-2xl overflow-hidden shadow-sm border border-emerald-950/10">
              <Image
                src={section.figure.src}
                alt={section.figure.alt}
                width={1200}
                height={700}
                className="w-full h-auto object-cover max-h-[440px]"
              />
              <figcaption className="p-3 text-xs text-stone-500 italic bg-stone-50 text-center">
                {section.figure.caption}
              </figcaption>
            </figure>
          )}

          {section.quote && (
            <div className="my-12 py-10 px-8 md:px-12 rounded-xl bg-surface-container-lowest shadow-sm text-center relative overflow-hidden">
              <span className="material-symbols-outlined text-secondary-fixed text-4xl block mb-4 mx-auto">
                format_quote
              </span>
              <blockquote className="font-headline-md text-headline-md font-normal leading-snug tracking-tight text-primary max-w-xl mx-auto mb-6">
                {section.quote.text}
              </blockquote>
              <cite className="font-label-sm text-label-sm text-secondary font-bold uppercase tracking-wider not-italic block">
                {section.quote.cite}
              </cite>
            </div>
          )}

          {section.list && (
            <ul className="space-y-3 font-body-md text-body-md text-on-surface-variant pl-2">
              {section.list.map((item) => (
                <li key={item.strong} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-secondary mt-2.5 shrink-0" />
                  <span>
                    <strong className="text-primary font-semibold">{item.strong}</strong>
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}