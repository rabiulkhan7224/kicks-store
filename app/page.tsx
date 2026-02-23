import { CategorySection } from "@/components/Categorysection";
import HeroSection from "@/components/home/heroSection";
import ProductsSection from "@/components/ProductsSection";
import { ReviewsSection } from "@/components/ReviewsSection";

export default function Home() {
  return (<div className="">
    <HeroSection />
    <ProductsSection />
    <CategorySection/>
    <ReviewsSection />
  </div>
   
  );
}
