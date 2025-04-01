
import React from "react";
import ProjectLayout from "@/components/ProjectLayout";

const FinEdgeBanking = () => {
  return (
    <ProjectLayout
      title="FinEdge Banking"
      description="Futuristic landing page for a digital banking solution with animated data visualizations. The page showcases the innovative financial technology platform that helps users manage their finances with AI-driven insights and recommendations."
      image="https://images.unsplash.com/photo-1563986768609-322da13575f3"
      features={[
        "Particle effects that visualize money movement",
        "Scroll-triggered animations showing financial growth",
        "Glassmorphism UI elements for modern interface",
        "Interactive demo of the banking dashboard",
        "Comparison tool with traditional banking",
        "Real-time currency conversion calculator"
      ]}
      challenge="FinEdge wanted to disrupt the traditional banking sector with their new digital solution but needed to build trust and clearly explain the benefits of their platform to potential customers who might be hesitant to switch from conventional banking."
      solution="We designed a landing page with clear visual storytelling that walked users through the benefits of digital banking. We incorporated animated data visualizations that made complex financial concepts easy to understand and built interactive tools that allowed users to see potential savings."
      results="The landing page achieved an impressive 27% conversion rate with over 3,000 new account signups within the first month. The average time on page increased by 45% compared to their previous website, indicating stronger user engagement."
      technologies={["React.js", "D3.js for Data Visualization", "TailwindCSS", "Lottie Animations", "WebGL Effects", "Next.js"]}
    />
  );
};

export default FinEdgeBanking;
