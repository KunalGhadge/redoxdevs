
import React from "react";
import ProjectLayout from "@/components/ProjectLayout";

const VedicAyurveda = () => {
  return (
    <ProjectLayout
      title="Vedic Ayurveda"
      description="Premium landing page for an Indian Ayurvedic wellness product line with cultural motifs. The design incorporates traditional Indian art elements and subtle animations inspired by nature to reflect the brand's heritage."
      image="https://images.unsplash.com/photo-1611074818835-ccd98ea069f8"
      features={[
        "Cultural storytelling through scroll animations",
        "Ingredient showcase with traditional illustrations",
        "Product benefit visualizations",
        "Parallax effects with nature-inspired elements",
        "Animated testimonial section with before/after results",
        "Product finder quiz with personalized recommendations"
      ]}
      challenge="Vedic Ayurveda needed to showcase their premium herbal products in a way that honored their cultural heritage while appealing to modern wellness consumers in international markets."
      solution="We designed a landing page that blends traditional Indian design elements with contemporary UI patterns. We implemented scroll-based storytelling that educates visitors about Ayurvedic principles while highlighting product benefits through subtle, elegant animations."
      results="The landing page increased e-commerce conversions by 54% and average order value by 32%. International sales grew by 87% in the first quarter after launch, with particularly strong performance in North American and European markets."
      technologies={["React.js", "Canvas Animations", "Scroll Trigger", "Parallax.js", "i18n Internationalization", "WebP Image Optimization"]}
    />
  );
};

export default VedicAyurveda;
