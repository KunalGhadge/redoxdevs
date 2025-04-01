
import React from "react";
import ProjectLayout from "@/components/ProjectLayout";

const PulseHealthApp = () => {
  return (
    <ProjectLayout
      title="Pulse Health App"
      description="Award-winning landing page with interactive features and animated user flows for a health and wellness application. The page effectively communicates how the app helps users track and improve their health metrics through personalized coaching."
      image="https://images.unsplash.com/photo-1581093196277-9f6070dd1dc3"
      features={[
        "Lottie animations showing app functionality",
        "Micro-interactions providing seamless navigation",
        "Theme switching between light and dark modes",
        "Interactive app demo without downloading",
        "Animated health metrics charts",
        "Virtual coach introduction sequence"
      ]}
      challenge="Pulse Health needed to stand out in the crowded health app market by clearly demonstrating the unique value proposition of their AI health coach feature while making complex health tracking concepts accessible to everyday users."
      solution="We designed an immersive landing page experience that guides visitors through the user journey with animated sequences showing how the app works in real-life scenarios. We created an interactive demo that allowed potential users to experience the app's core features without downloading it."
      results="The landing page won a health tech industry design award and achieved a 35% higher conversion rate than the previous website. App downloads increased by 60% in the three months following the landing page launch."
      technologies={["React Native Web", "Lottie", "Framer Motion", "Chart.js", "TailwindCSS", "TypeScript"]}
    />
  );
};

export default PulseHealthApp;
