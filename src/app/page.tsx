import AboutUsSection from "@/components/homepage/AboutUsSection";
import HeroSection from "@/components/homepage/HeroSection";
import KeyFeaturesSection from "@/components/homepage/KeyFeaturesSection";
import ProductSection from "@/components/ProductSection";
import TestimonialSection from "@/components/homepage/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      {/* <ProductSection /> */}
      <KeyFeaturesSection />
      <TestimonialSection />
    </>
  );
}
