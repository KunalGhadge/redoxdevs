
import { Suspense, lazy, useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";

// Lazy load components that are lower in the page with better fallback components
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
const FAQSection = lazy(() => import("@/components/FAQSection"));

// Better section loading fallback
const SectionFallback = ({ height = "h-40", title = "" }: { height?: string, title?: string }) => (
  <div className={`${height} px-4 flex flex-col items-center justify-center`}>
    <Skeleton className="w-1/2 h-8 mb-6 mx-auto" />
    <Skeleton className="w-3/4 h-4 mb-2 mx-auto" />
    <Skeleton className="w-2/3 h-4 mb-2 mx-auto" />
    {title && <p className="text-sm text-gray-400 mt-4">Loading {title}...</p>}
  </div>
);

const Index = () => {
  // Preload key assets on page load
  useEffect(() => {
    // Preload essential images
    const preloadImages = [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
    ];
    
    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        
        <Suspense fallback={<SectionFallback title="Client Logos" height="h-32" />}>
          <ClientLogosSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback title="Services" height="h-48" />}>
          <ServicesSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="h-32" />}>
          <TrustBadgesSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback title="Our Work" height="h-64" />}>
          <WorkSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback title="Stats" height="h-48" />}>
          <StatsSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback title="Budget Calculator" height="h-64" />}>
          <BudgetCalculatorSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback title="Our Process" height="h-56" />}>
          <ProcessSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback height="h-48" />}>
          <GuaranteesSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback title="FAQ" height="h-56" />}>
          <FAQSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback title="Testimonials" height="h-56" />}>
          <TestimonialsSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback title="About Us" height="h-48" />}>
          <AboutSection />
        </Suspense>
        
        <Suspense fallback={<SectionFallback title="Contact" height="h-56" />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
