
import React from "react";
import ProjectLayout from "@/components/ProjectLayout";

const SwiftLearnEducation = () => {
  return (
    <ProjectLayout
      title="SwiftLearn Education"
      description="Conversion-optimized landing page for an online learning platform with gamified elements. The page highlights the platform's unique approach to making education engaging and effective for students of all ages."
      image="https://images.unsplash.com/photo-1501504905252-473c47e087f8"
      features={[
        "Interactive course demos with real content",
        "Student testimonial video carousels",
        "Strategic CTAs throughout user journey",
        "Animated learning statistics",
        "Course finder tool",
        "Gamified pricing section"
      ]}
      challenge="SwiftLearn needed to differentiate their platform in the competitive online education market by showcasing their innovative gamified learning approach while appealing to both parents and students across different age groups."
      solution="We designed a dynamic landing page that incorporated actual learning experiences and gamified elements to give visitors a taste of the platform. We strategically placed CTAs at key decision points and created segment-specific content sections to address the needs of different user groups."
      results="The new landing page increased trial signups by 47% and reduced the cost per acquisition by 33%. The average session duration increased from 1:20 to 3:45 minutes, indicating much stronger engagement with the content."
      technologies={["React.js", "Canvas Animations", "Video.js", "Intersection Observer API", "Tailwind CSS", "HubSpot Integration"]}
    />
  );
};

export default SwiftLearnEducation;
