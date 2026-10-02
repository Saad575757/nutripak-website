import EditorialBanner from "@/components/home/editorial-banner";
import ExpertSection from "@/components/home/expert-section";
import FeaturedProducts from "@/components/home/featured-products";
import GoalCategories from "@/components/home/goal-categories";
import Hero from "@/components/home/hero";
import HomepageIntro from "@/components/home/homepage-intro";
import IntroBanner from "@/components/home/intro-banner";
import MembershipBanner from "@/components/home/membership-banner";
import QuizTeaser from "@/components/quiz/quiz-teaser";
import ReviewsSection from "@/components/home/reviews";
import TrustStrip from "@/components/home/trust-strip";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HomepageIntro />
      <IntroBanner />
      <Hero />
      <TrustStrip />
      <GoalCategories />
      <QuizTeaser />
      <FeaturedProducts />
      {/* <EditorialBanner /> */}
      <ExpertSection />
      <ReviewsSection />
      <MembershipBanner />
    </div>
  );
}