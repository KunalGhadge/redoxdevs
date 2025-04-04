
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import StatsSection from "@/components/StatsSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import GuaranteesSection from "@/components/GuaranteesSection";
import BudgetCalculatorSection from "@/components/BudgetCalculatorSection";
import ToolsSection from "@/components/ToolsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ClientLogosSection />
        <ServicesSection />
        <TrustBadgesSection />
        <WorkSection />
        <StatsSection />
        <BudgetCalculatorSection />
        <ProcessSection />
        <ToolsSection />
        <GuaranteesSection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
