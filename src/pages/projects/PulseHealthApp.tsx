
import React from "react";
import ProjectLayout from "@/components/ProjectLayout";

const PulseHealthApp = () => {
  return (
    <ProjectLayout
      title="Pulse Health App"
      description="Award-winning landing page with interactive features and animated user flows for a health monitoring application. The page showcases how the app works through interactive demos and animations."
      image="https://images.unsplash.com/photo-1581093196277-9f6070dd1dc3"
      features={[
        "Interactive app flow demonstrations",
        "Lottie animations showing key features",
        "User journey visualization",
        "Dark/light mode toggle with theme switching",
        "Micro-interactions on scroll and hover",
        "Device mockup carousels showing app interfaces"
      ]}
      challenge="Pulse Health needed a landing page that could effectively demonstrate their app's functionality and ease of use while conveying the medical accuracy and trustworthiness of their health monitoring solution."
      solution="We created an interactive landing page that visually demonstrates the app's workflows through animated sequences and mockups. We incorporated subtle micro-interactions throughout to engage users while maintaining accessibility and focusing on key health benefits."
      results="The landing page won a healthcare design award and increased app downloads by 118% within the first month. The bounce rate decreased from 65% to just 22%, indicating much stronger engagement with the content."
      technologies={["React.js", "Lottie Animations", "Framer Motion", "Theme UI", "React Spring", "GSAP"]}
    />
  );
};

export default PulseHealthApp;
