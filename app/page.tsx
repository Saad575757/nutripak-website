import FeaturedProducts from "@/components/home/featured-products";
import GoalCategories from "@/components/home/goal-categories";
import HeroBold from "@/components/hero-examples/hero-bold";
import HomepageIntro from "@/components/home/homepage-intro";
import IntroBanner from "@/components/home/intro-banner";
import MembershipBanner from "@/components/home/membership-banner";
import QuizTeaser from "@/components/quiz/quiz-teaser";
import ReviewsSection from "@/components/home/reviews";
import TrustStrip from "@/components/home/trust-strip";
import { getCatalogProducts } from "@/lib/catalog";

/** Refresh from the dashboard database at most this often. */
export const revalidate = 30;

export default async function HomePage() {
  const products = await getCatalogProducts();

  return (
    <div className="flex flex-col w-full">
      <HomepageIntro />
      <IntroBanner />
      <HeroBold />
      <TrustStrip />
      <GoalCategories />
      <QuizTeaser />
      <FeaturedProducts products={products} />
      {/* <EditorialBanner /> */}
      {/* <ExpertSection /> */}
      <ReviewsSection />
      <MembershipBanner />
    </div>
  );
}