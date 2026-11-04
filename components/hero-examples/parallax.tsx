"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  className?: string;
  /** Maximum travel (in pixels) for the inner `parallax-layer`. */
  strength?: number;
}

/**
 * Tracks pointer movement over its own box and exposes the offset through
 * CSS variables. Wrap the moving artwork in `.parallax-layer`.
 */
export default function Parallax({
  children,
  className = "",
  strength = 14,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;

    const handleMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        node.style.setProperty("--px", `${(x * strength).toFixed(2)}px`);
        node.style.setProperty("--py", `${(y * strength).toFixed(2)}px`);
      });
    };

    const reset = () => {
      cancelAnimationFrame(frame);
      node.style.setProperty("--px", "0px");
      node.style.setProperty("--py", "0px");
    };

    node.addEventListener("pointermove", handleMove);
    node.addEventListener("pointerleave", reset);

    return () => {
      cancelAnimationFrame(frame);
      node.removeEventListener("pointermove", handleMove);
      node.removeEventListener("pointerleave", reset);
    };
  }, [strength]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
