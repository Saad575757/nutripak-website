"use client";

import { useEffect, useState } from "react";

export default function ArticleReadingProgress() {
  const [progress, setProgress] = useState(0.24);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      const ratio = height > 0 ? Math.min(1, scrollTop / height) : 0;
      setProgress(ratio);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-28 left-0 w-full h-1 bg-surface-container z-40">
      <div
        className="h-full bg-secondary transition-all duration-150"
        style={{ width: `${Math.max(0.24, progress) * 100}%` }}
      />
    </div>
  );
}