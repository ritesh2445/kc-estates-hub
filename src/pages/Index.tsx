import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedProperties } from "@/components/home/FeaturedProperties";
import { CTASection } from "@/components/home/CTASection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>KC Associates - Find Your Dream Property | Real Estate</title>
        <meta 
          name="description" 
          content="Discover premium properties with VR tours, transparent pricing, and expert guidance. Browse residential, commercial, and luxury properties in Mumbai and beyond." 
        />
        <meta property="og:title" content="KC Associates - Find Your Dream Property" />
        <meta property="og:description" content="Discover premium properties with VR tours, transparent pricing, and expert guidance." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Layout>
        <HeroSection />
        <CategorySection />
        <FeaturedProperties />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Index;
