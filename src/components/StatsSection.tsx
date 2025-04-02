
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("stats");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="stats" className="py-16 bg-gradient-to-r from-navy-dark to-redox-dark text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <div className="flex justify-center items-baseline">
                <span className="text-5xl md:text-6xl font-bold">
                  {isVisible ? (
                    <CountUp 
                      end={stat.value} 
                      duration={2.5} 
                      separator="," 
                    />
                  ) : (
                    "0"
                  )}
                </span>
                <span className="text-3xl md:text-4xl font-bold text-redox ml-1">{stat.symbol}</span>
              </div>
              <h3 className="text-xl font-semibold mt-2 mb-1">{stat.label}</h3>
              <p className="text-white/70">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
