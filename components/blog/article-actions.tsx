"use client";

import { useState } from "react";

export default function ArticleActions() {
  const [bookmarked, setBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareArticle = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      /* clipboard unavailable — ignore */
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const iconClass =
    "w-9 h-9 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors";

  return (
    <div className="ml-auto hidden md:flex items-center gap-2">
      <button
        className={iconClass}
        title={bookmarked ? "Remove bookmark" : "Bookmark"}
        type="button"
        onClick={() => setBookmarked((value) => !value)}
      >
        <span
          className="material-symbols-outlined text-[18px]"
          style={{ fontVariationSettings: `'FILL' ${bookmarked ? 1 : 0}` }}
        >
          bookmark
        </span>
      </button>
      <button
        className={iconClass}
        title="Share"
        type="button"
        onClick={shareArticle}
      >
        <span className="material-symbols-outlined text-[18px]">
          {copied ? "link" : "share"}
        </span>
      </button>
    </div>
  );
}