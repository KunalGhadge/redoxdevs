
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

// Updated portfolio items with proper professional images
const portfolioItems = [
  {
    category: "landing-page",
    title: "TechNova Launch",
    description: "High-converting landing page with interactive animations for a tech startup's product launch.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    features: "Motion effects, 3D elements, SVG animations",
    path: "/project/technova-launch"
  },
  {
    category: "landing-page",
    title: "FinEdge Banking",
    description: "Futuristic landing page for a digital banking solution with animated data visualizations.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    features: "Particle effects, scroll animations, glassmorphism",
    path: "/project/finedge-banking"
  },
  {
    category: "landing-page",
    title: "Pulse Health App",
    description: "Award-winning landing page with interactive features and animated user flows.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    features: "Lottie animations, micro-interactions, theme switching",
    path: "/project/pulse-health-app"
  }
];

const WorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const isMobile = useIsMobile();
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        when: "beforeChildren"
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
    <section 
      id="work" 
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-24 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 md:w-64 md:h-64 bg-redox/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-10 w-48 h-48 md:w-80 md:h-80 bg-navy-light/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16 relative z-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-navy-dark mb-3 md:mb-4">
            Our <span className="text-redox relative inline-block">
              Landing Page
              <span className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-[0.15rem] bg-redox transform origin-left transition-transform duration-700" style={{ animation: isInView ? 'expand 0.7s ease-in-out 1s forwards' : 'none' }}></span>
            </span> Projects
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-navy-light">
            We specialize exclusively in creating stunning, high-performance landing pages that convert visitors into customers.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 relative z-10"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={!isMobile ? { 
                y: -10,
                transition: { duration: 0.3 }
              } : {}}
              className="h-full"
            >
              <Card 
                className="overflow-hidden border-none shadow-lg transition-all duration-500 group h-full relative"
              >
                <div className="relative overflow-hidden" style={{ height: isMobile ? "200px" : "240px" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 to-transparent flex items-end p-4 md:p-6 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                    <p className="text-white font-medium text-sm md:text-base">{item.features}</p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <motion.div
                    className="absolute top-3 right-3 md:top-4 md:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-redox animate-pulse-slow"></div>
                  </motion.div>
                </div>
                <CardContent className="p-4 md:p-6 bg-white">
                  <div className="flex items-center mb-2">
                    <span className="text-xs uppercase tracking-wider text-redox font-semibold">
                      Landing Page
                    </span>
                  </div>
                  <h3 className="text-base md:text-xl font-semibold text-navy-dark mb-1 md:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-navy-light mb-3 md:mb-4">{item.description}</p>
                  <Link to={item.path}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-1.5 md:gap-2 group-hover:border-redox group-hover:text-redox transition-colors relative overflow-hidden text-xs md:text-sm w-full md:w-auto justify-center md:justify-start"
                    >
                      <span className="relative z-10">View Project</span>
                      <ExternalLink className="h-3 w-3 md:h-4 md:w-4 relative z-10" />
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
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-10 md:mt-16 text-center relative z-10"
        >
          <Button 
            className="bg-redox hover:bg-redox-dark text-white relative overflow-hidden group px-4 md:px-6 py-4 md:py-6 text-sm md:text-lg w-full sm:w-auto"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <span className="relative z-10 flex items-center justify-center">Start Your Project</span>
            <span className="absolute inset-0 bg-redox-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </Button>
        </motion.div>
      </div>

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
