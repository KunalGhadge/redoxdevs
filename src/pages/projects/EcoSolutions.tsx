
import React from "react";
import ProjectLayout from "@/components/ProjectLayout";

const EcoSolutions = () => {
  return (
    <ProjectLayout
      title="Eco Solutions"
      description="Engaging landing page for a sustainable products company with interactive impact calculators. The page visualizes environmental benefits and encourages users to make eco-friendly choices through compelling interactive elements."
      image="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
      features={[
        "Environmental impact calculators",
        "Interactive before/after visualizations",
        "Animated sustainability statistics",
        "Parallax scrolling nature scenes",
        "Product lifecycle animations",
        "Carbon footprint reduction visualizations"
      ]}
      challenge="Eco Solutions needed to effectively communicate the environmental impact of their sustainable products in a way that would resonate emotionally with consumers while providing concrete data about sustainability benefits."
      solution="We designed an interactive landing page that allows users to calculate and visualize the environmental impact of switching to sustainable products. We implemented engaging animations that bring sustainability data to life and create emotional connections with the brand's mission."
      results="The interactive elements increased time on page by 215%, and the impact calculators directly led to a 78% increase in conversions. Customer surveys indicated that the visual approach to environmental data was a key factor in purchase decisions."
      technologies={["React.js", "D3.js Visualizations", "Green Web Hosting", "WebGL Environmental Effects", "Lazy Loading", "SVG Animations"]}
    />
  );
};

export default EcoSolutions;
