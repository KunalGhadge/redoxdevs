
import React from "react";
import ProjectLayout from "@/components/ProjectLayout";

const VedicAyurveda = () => {
  return (
    <ProjectLayout
      title="Vedic Ayurveda"
      description="Premium landing page for an Indian Ayurvedic wellness product line with cultural motifs. The design honors traditional Ayurvedic principles while creating a modern shopping experience for health-conscious consumers worldwide."
      image="https://images.unsplash.com/photo-1611074818835-ccd98ea069f8"
      features={[
        "Scroll storytelling about Ayurvedic traditions",
        "Custom animations of herbal ingredients",
        "Cultural design elements and patterns",
        "Product spotlight carousels",
        "Dosha identification quiz",
        "Wellness routine builder"
      ]}
      challenge="Vedic Ayurveda needed to introduce traditional Indian wellness concepts to a global audience while preserving cultural authenticity. They needed to explain complex Ayurvedic concepts in an accessible way while highlighting their premium product line."
      solution="We created an educational and visually rich landing page that blended traditional Indian design elements with modern e-commerce functionality. We developed interactive tools like a dosha quiz that personalized the user experience while educating visitors about Ayurvedic principles."
      results="The landing page helped Vedic Ayurveda increase their international sales by 85% in the first quarter after launch. The dosha quiz became a viral marketing tool with over 15,000 completions, creating a valuable customer database segmented by Ayurvedic body types."
      technologies={["React.js", "GreenSock Animation Platform", "CSS Grid", "Tailwind CSS", "Shopify Integration", "Quiz Logic"]}
    />
  );
};

export default VedicAyurveda;
