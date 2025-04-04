
import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

// Lazy load components that are lower in the page
const ClientLogosSection = lazy(() => import("@/components/ClientLogosSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const TrustBadgesSection = lazy(() => import("@/components/TrustBadgesSection"));
const WorkSection = lazy(() => import("@/components/WorkSection"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const BudgetCalculatorSection = lazy(() => import("@/components/BudgetCalculatorSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const GuaranteesSection = lazy(() => import("@/components/GuaranteesSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <Suspense fallback={<div className="h-20 bg-gray-100 animate-pulse" />}>
          <ClientLogosSection />
          <ServicesSection />
          <TrustBadgesSection />
          <WorkSection />
          <StatsSection />
          <BudgetCalculatorSection />
          <ProcessSection />
          <GuaranteesSection />
          <TestimonialsSection />
          <AboutSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
