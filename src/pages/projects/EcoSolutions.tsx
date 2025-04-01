
import React from "react";
import ProjectLayout from "@/components/ProjectLayout";

const EcoSolutions = () => {
  return (
    <ProjectLayout
      title="Eco Solutions"
      description="Engaging landing page for a sustainable products company with interactive impact calculators. The page helps visitors understand the environmental benefits of choosing eco-friendly products through visual storytelling and interactive elements."
      image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
      features={[
        "Interactive environmental impact calculators",
        "Parallax scrolling with nature elements",
        "Eco-friendly product animations",
        "Before/after environmental comparisons",
        "Carbon footprint visualization tool",
        "Sustainability pledge counter"
      ]}
      challenge="Eco Solutions needed to convert environmental awareness into product purchases by clearly demonstrating the positive impact of their products. They needed to make abstract environmental benefits tangible and meaningful to potential customers."
      solution="We created an emotionally engaging landing page with interactive tools that personalized the environmental impact of choosing sustainable products. We developed calculators that showed visitors exactly how their purchase decisions could reduce plastic waste, carbon emissions, and water usage."
      results="The impact calculators were shared widely on social media, bringing in 35% of new traffic. The landing page achieved a 28% conversion rate for first-time visitors, and the average order value increased by 22% compared to their previous website."
      technologies={["React.js", "SVG Animations", "D3.js", "Intersection Observer", "Green Web Hosting", "Sustainable Web Design Principles"]}
    />
  );
};

export default EcoSolutions;
