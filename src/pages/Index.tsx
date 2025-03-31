
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import ProcessSection from "@/components/ProcessSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ToolsSection from "@/components/ToolsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-github-bg">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <div className="border-t border-github-border bg-github-muted">
          <ServicesSection />
        </div>
        <WorkSection />
        <div className="border-t border-github-border bg-github-muted">
          <ToolsSection />
        </div>
        <ProcessSection />
        <div className="border-t border-github-border bg-github-muted">
          <TestimonialsSection />
        </div>
        <AboutSection />
        <div className="border-t border-github-border bg-github-muted">
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
