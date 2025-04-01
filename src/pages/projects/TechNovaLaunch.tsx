
import React from "react";
import ProjectLayout from "@/components/ProjectLayout";

const TechNovaLaunch = () => {
  return (
    <ProjectLayout
      title="TechNova Launch"
      description="High-converting landing page with interactive animations for a tech startup's product launch. The page was designed to showcase the innovative features of their new AI-powered productivity tool while capturing leads and generating pre-launch interest."
      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      features={[
        "Motion effects that highlight product features",
        "3D elements that users can interact with",
        "SVG animations that explain complex concepts",
        "Lead capture form with multi-step process",
        "Performance optimized for fast loading",
        "Mobile-first responsive design"
      ]}
      challenge="TechNova needed a landing page that would effectively communicate their complex AI product in an intuitive way while generating excitement for their upcoming launch. They needed to build a waitlist of interested users and collect valuable market feedback before the full product release."
      solution="We created an interactive landing page that brought their product to life through strategic animations and visual storytelling. We implemented a multi-step sign-up process that not only captured leads but also collected valuable information about user needs and expectations."
      results="The landing page generated over 5,000 waitlist signups in the first week, with a conversion rate of 32% - significantly higher than industry averages. The insights gathered from the sign-up process helped the client refine their product features before launch."
      technologies={["React.js", "GSAP Animations", "Three.js", "Framer Motion", "Firebase", "Tailwind CSS"]}
    />
  );
};

export default TechNovaLaunch;
