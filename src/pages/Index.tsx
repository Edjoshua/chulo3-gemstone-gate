import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import GamesShowcase from "@/components/home/GamesShowcase";
import FeaturesSection from "@/components/home/FeaturesSection";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <GamesShowcase />
      <FeaturesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
