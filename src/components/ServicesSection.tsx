
import { useState, useRef } from "react";
import { Globe, Code, BrushIcon, LineChart, Rocket, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const services = [
  {
    icon: <BrushIcon className="h-8 w-8 md:h-10 md:w-10 text-redox" />,
    title: "Landing Page Design",
    description:
      "High-converting landing pages with stunning visuals, micro-interactions, and clear user journeys to maximize conversion rates.",
  },
  {
    icon: <Code className="h-8 w-8 md:h-10 md:w-10 text-redox" />,
    title: "Front-End Development",
    description:
      "Custom-coded front-end experiences with clean, efficient code that loads lightning-fast and delights your users.",
  },
  {
    icon: <Globe className="h-8 w-8 md:h-10 md:w-10 text-redox" />,
    title: "Responsive Web Design",
    description:
      "Websites that look and function flawlessly on any device, providing a consistent brand experience across all screens.",
  },
  {
    icon: <LineChart className="h-8 w-8 md:h-10 md:w-10 text-redox" />,
    title: "UI Animation",
    description:
      "Eye-catching motion effects and micro-interactions that guide users, highlight important elements, and enhance engagement.",
  },
  {
    icon: <Rocket className="h-8 w-8 md:h-10 md:w-10 text-redox" />,
    title: "Performance Optimization",
    description:
      "Speed up your site's loading times with advanced front-end optimizations for better user experience and SEO.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 md:h-10 md:w-10 text-redox" />,
    title: "Maintenance & Updates",
    description:
      "Ongoing maintenance, feature updates, and technical support to keep your front-end codebase modern and optimized.",
  },
];

const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isMobile = useIsMobile();
  
  // Animation variants for better performance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  return (
    <section id="services" ref={sectionRef} className="py-12 md:py-16 lg:py-24 px-4 md:px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background animation elements - simplified for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-40 h-40 md:w-72 md:h-72 bg-navy-light/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 md:w-96 md:h-96 bg-redox/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDuration: '10s', animationDelay: '1s' }}></div>
        
        {/* Grid pattern - conditional for better performance */}
        {!isMobile && (
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-10"></div>
        )}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-10 md:mb-16 relative z-10"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-dark mb-3 md:mb-4">
          Our <span className="text-redox">Expertise</span>
        </h2>
        <p className="text-base md:text-lg text-navy-light">
          We specialize in creating beautiful front-end experiences that captivate your audience and drive conversions.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={!isMobile ? { y: -8, transition: { duration: 0.3 } } : {}}
          >
            <Card 
              className="border-gray-100 hover:border-redox/30 hover:shadow-md transition-all duration-500 backdrop-blur-sm relative overflow-hidden h-full"
            >
              <CardContent className="pt-6 pb-5 px-4 md:px-6 relative z-10 h-full flex flex-col">
                <div className="mb-3 md:mb-4">
                  <div className="relative inline-flex">
                    {service.icon}
                    <span 
                      className={`absolute -inset-2 bg-redox/5 rounded-full blur-lg transform scale-0 transition-transform duration-500 ${hoveredIndex === index ? 'scale-100' : ''}`}
                    ></span>
                  </div>
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-navy-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-navy-light">{service.description}</p>
              </CardContent>
              
              {/* Background decorative elements */}
              <div 
                className={`absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-redox/5 rounded-full blur-xl -translate-y-1/2 translate-x-1/2 transition-opacity duration-700 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}
              ></div>
              <div 
                className={`absolute bottom-0 left-0 w-12 h-12 md:w-16 md:h-16 bg-navy-light/5 rounded-full blur-lg transition-transform duration-700 ${hoveredIndex === index ? 'scale-100' : 'scale-0'}`}
              ></div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ServicesSection;
