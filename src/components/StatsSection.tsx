
import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useIsMobile } from "@/hooks/use-mobile";

const stats = [
  {
    value: 100,
    symbol: "+",
    label: "Clients Served",
    description: "Businesses across India"
  },
  {
    value: 35,
    symbol: "%",
    label: "Avg. Conversion Increase",
    description: "For our landing pages"
  },
  {
    value: 500,
    symbol: "+",
    label: "Projects Completed",
    description: "Since our founding"
  },
  {
    value: 99,
    symbol: "%",
    label: "Client Satisfaction",
    description: "Based on feedback"
  }
];

const StatsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isMobile = useIsMobile();
  
  // Optimized animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
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
    <section 
      ref={sectionRef} 
      id="stats" 
      className="py-12 md:py-16 bg-gradient-to-r from-navy-dark to-redox-dark text-white relative overflow-hidden"
    >
      {/* Background elements optimized for mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMxLjIgMCAyLjEuOSAyLjEgMi4xdjE5LjhjMCAxLjItLjkgMi4xLTIuMSAyLjFIMjRjLTEuMiAwLTIuMS0uOS0yLjEtMi4xVjIwLjFjMC0xLjIuOS0yLjEgMi4xLTIuMWgxMnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-5 [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_80%)]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className={`grid grid-cols-1 ${isMobile ? 'sm:grid-cols-2' : 'sm:grid-cols-2 md:grid-cols-4'} gap-6 md:gap-8`}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10"
            >
              <div className="flex justify-center items-baseline">
                <span className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  {isInView ? (
                    <CountUp 
                      end={stat.value} 
                      duration={2} 
                      separator="," 
                      useEasing={true}
                      enableScrollSpy={true}
                      scrollSpyDelay={200}
                      scrollSpyOnce={true}
                    />
                  ) : (
                    "0"
                  )}
                </span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-redox ml-1">{stat.symbol}</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mt-2 mb-1">{stat.label}</h3>
              <p className="text-sm md:text-base text-white/70">{stat.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
