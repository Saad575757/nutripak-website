import type { Metadata } from "next";

import CategoriesHero from "@/components/categories/categories-hero";
import GoalSection from "@/components/categories/goal-section";
import { AVAILABLE_GOALS } from "@/lib/goals";

export const metadata: Metadata = {
  title: "Shop by Goal",
  description:
    "Browse Nutripak nutrition by goal — complete nutrition, diabetic care, and protein support for muscle and recovery.",
};

export default function CategoriesPage() {
  return (
    <div className="flex flex-col w-full">
      <CategoriesHero />
      {AVAILABLE_GOALS.map((goal) => (
        <GoalSection goal={goal} key={goal.slug} />
      ))}
    </div>
  );
}