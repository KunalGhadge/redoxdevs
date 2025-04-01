
import React from "react";
import ProjectLayout from "@/components/ProjectLayout";

const FinEdgeBanking = () => {
  return (
    <ProjectLayout
      title="FinEdge Banking"
      description="Futuristic landing page for a digital banking solution with animated data visualizations. The design employs glassmorphism effects and particle animations to create a sense of technological advancement and security."
      image="https://images.unsplash.com/photo-1563986768609-322da13575f3"
      features={[
        "Real-time data visualization dashboard demo",
        "Interactive feature comparisons",
        "Animated particle background effects",
        "Scroll-triggered glassmorphism UI elements",
        "Feature showcase with hover states",
        "Testimonial carousel with client avatars"
      ]}
      challenge="FinEdge needed to establish credibility and trust in their cutting-edge banking platform while showcasing complex financial features in an approachable, visually engaging way."
      solution="We designed a sophisticated landing page that balanced professional trustworthiness with innovative visual elements. We created interactive demonstrations of key banking features and used subtle animations to enhance the user experience without distracting from the content."
      results="The new landing page increased qualified lead generation by 83% and reduced the sales cycle by 27%. User feedback indicated significantly improved understanding of product features compared to the previous website."
      technologies={["React.js", "D3.js", "Particle.js", "Chart.js", "Intersection Observer API", "Tailwind CSS"]}
    />
  );
};

export default FinEdgeBanking;
