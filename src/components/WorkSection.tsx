
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Updated portfolio items - removed incomplete projects
const portfolioItems = [
  {
    category: "landing-page",
    title: "TechNova Launch",
    description: "High-converting landing page with interactive animations for a tech startup's product launch.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    features: "Motion effects, 3D elements, SVG animations",
    path: "/project/technova-launch"
  },
  {
    category: "landing-page",
    title: "FinEdge Banking",
    description: "Futuristic landing page for a digital banking solution with animated data visualizations.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    features: "Particle effects, scroll animations, glassmorphism",
    path: "/project/finedge-banking"
  },
  {
    category: "landing-page",
    title: "Pulse Health App",
    description: "Award-winning landing page with interactive features and animated user flows.",
    image: "https://images.unsplash.com/photo-1581093196277-9f6070dd1dc3",
    features: "Lottie animations, micro-interactions, theme switching",
    path: "/project/pulse-health-app"
  }
];

const WorkSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
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

    const section = document.getElementById("work");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="work" className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-redox/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-navy-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-navy-dark mb-4">
          Our <span className="text-redox relative inline-block">
            Landing Page
            <span className="absolute -bottom-2 left-0 right-0 h-[0.15rem] bg-redox transform origin-left transition-transform duration-700" style={{ animation: isVisible ? 'expand 0.7s ease-in-out 1s forwards' : 'none' }}></span>
          </span> Projects
        </h2>
        <p className="text-lg md:text-xl text-navy-light">
          We specialize exclusively in creating stunning, high-performance landing pages that convert visitors into customers.
        </p>
      </motion.div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10"
      >
        {portfolioItems.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            whileHover={{ 
              y: -10,
              transition: { duration: 0.3 }
            }}
          >
            <Card 
              className="overflow-hidden border-none shadow-lg transition-all duration-500 group h-full relative"
            >
              <div className="relative overflow-hidden" style={{ height: "240px" }}>
                <div className={`absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent flex items-end p-6 transition-opacity duration-500 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-white font-medium">{item.features}</p>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="w-3 h-3 rounded-full bg-redox animate-pulse"></div>
                  </motion.div>
                )}
              </div>
              <CardContent className="p-6 bg-white">
                <div className="flex items-center mb-2">
                  <span className="text-xs uppercase tracking-wider text-redox font-semibold">
                    Landing Page
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-navy-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-navy-light mb-4">{item.description}</p>
                <Link to={item.path}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="gap-2 group-hover:border-redox group-hover:text-redox transition-colors relative overflow-hidden"
                  >
                    <span className="relative z-10">View Project</span>
                    <ExternalLink className="h-4 w-4 relative z-10" />
                    <span className="absolute inset-0 bg-redox/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="mt-16 text-center relative z-10"
      >
        <Button 
          className="bg-redox hover:bg-redox-dark text-white relative overflow-hidden group px-6 py-6 text-lg"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="relative z-10 flex items-center">Start Your Project</span>
          <span className="absolute inset-0 bg-redox-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Button>
      </motion.div>

      <style>{`
        @keyframes expand {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default WorkSection;
