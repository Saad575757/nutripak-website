import EditorialBanner from "@/components/home/editorial-banner";
import ExpertSection from "@/components/home/expert-section";
import FeaturedProducts from "@/components/home/featured-products";
import GoalCategories from "@/components/home/goal-categories";
import Hero from "@/components/home/hero";
import IntroBanner from "@/components/home/intro-banner";
import MembershipBanner from "@/components/home/membership-banner";
import QuizSection from "@/components/home/quiz-section";
import ReviewsSection from "@/components/home/reviews";
import TrustStrip from "@/components/home/trust-strip";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <IntroBanner />
      <Hero />
      <TrustStrip />
      <GoalCategories />
      {/* <QuizSection /> */}
      <FeaturedProducts />
      {/* <EditorialBanner /> */}
      <ExpertSection />
      <ReviewsSection />
      <MembershipBanner />
    </div>
  );
}