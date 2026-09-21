import Image from "next/image";

import type { ArticleDocument } from "@/lib/blog";

export default function AuthorBio({ doc }: { doc: ArticleDocument }) {
  return (
    <div className="mt-16 p-8 rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center sm:items-start gap-6">
      {doc.authorAvatar ? (
        <Image
          src={doc.authorAvatar}
          alt={doc.authorName}
          width={80}
          height={80}
          className="w-20 h-20 rounded-full object-cover shadow-sm shrink-0 bg-surface-container"
        />
      ) : (
        <div className="w-20 h-20 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold shadow-sm shrink-0">
          {doc.authorName
            .replace(/[^A-Za-z ]/g, "")
            .split(" ")
            .filter(Boolean)
            .map((part) => part[0])
            .slice(0, 2)
            .join("")
            .toUpperCase()}
        </div>
      )}
      <div className="space-y-2 text-center sm:text-left">
        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold block">
          Written by
        </span>
        <h3 className="font-title-lg text-title-lg text-primary font-bold">{doc.bio.name}</h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
          {doc.bio.text}
        </p>
      </div>
    </div>
  );
}