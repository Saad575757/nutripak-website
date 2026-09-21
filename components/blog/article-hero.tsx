import Image from "next/image";

import type { ArticleDocument } from "@/lib/blog";
import { DialVisual, HelixVisual, MicrobiologyVisual, WaveVisual } from "@/components/blog/blog-visuals";

export default function ArticleHero({ doc }: { doc: ArticleDocument }) {
  if ("src" in doc.hero) {
    return (
      <div className="mb-16">
        <div className="w-full h-[360px] md:h-[460px] rounded-xl overflow-hidden shadow-sm bg-surface-container">
          <Image
            src={doc.hero.src}
            alt={doc.hero.alt}
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="w-full h-full object-cover"
          />
        </div>
        {doc.heroCaption && (
          <p className="font-caption text-caption text-on-surface-variant text-center mt-3 italic">
            {doc.heroCaption}
          </p>
        )}
      </div>
    );
  }

  const gradients: Record<string, string> = {
    microbiology: "bg-gradient-to-tr from-surface-container to-surface-container-low",
    dial: "bg-gradient-to-br from-surface-container-low via-surface-container to-surface-variant/40",
    helix: "bg-gradient-to-bl from-surface-container to-surface-variant/50",
    wave: "bg-gradient-to-t from-surface-container to-surface-container-low",
  };

  return (
    <div className="mb-16">
      <div
        className={`w-full h-[360px] md:h-[460px] rounded-xl overflow-hidden shadow-sm bg-surface-container flex items-center justify-center ${gradients[doc.hero.visual]}`}
      >
        <div className="scale-[1.5]">
          {doc.hero.visual === "microbiology" && <MicrobiologyVisual />}
          {doc.hero.visual === "dial" && <DialVisual />}
          {doc.hero.visual === "helix" && <HelixVisual />}
          {doc.hero.visual === "wave" && <WaveVisual />}
        </div>
      </div>
    </div>
  );
}