
import React from "react";
import ProjectLayout from "@/components/ProjectLayout";

const TechNovaLaunch = () => {
  return (
    <ProjectLayout
      title="TechNova Launch"
      description="High-converting landing page with interactive animations for a tech startup's product launch. The page features immersive 3D elements and motion effects that highlight the product's innovative features."
      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      features={[
        "Interactive 3D product showcase",
        "Motion-triggered animations",
        "SVG path animations for feature highlights",
        "Animated statistics counters",
        "Multi-step product tour",
        "Conversion-focused CTA placements"
      ]}
      challenge="TechNova needed a landing page that would effectively communicate their complex AI-powered product to a non-technical audience while generating pre-launch interest and email signups."
      solution="We created an engaging landing page with interactive elements that simplify complex concepts through animations and visual storytelling. We implemented a strategic conversion funnel with carefully placed CTAs to guide visitors toward signing up."
      results="The landing page achieved a 65% conversion rate for email signups, significantly exceeding industry standards. The average engagement time was 4:35 minutes, with 72% of visitors viewing the entire product showcase."
      technologies={["React.js", "Three.js", "GSAP Animations", "WebGL", "Framer Motion", "Tailwind CSS"]}
    />
  );
};

export default TechNovaLaunch;
