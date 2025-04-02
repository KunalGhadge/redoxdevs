
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, 100]);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Text splitting for letter animation
  const titleWords = ["We", "Build", "Front-End", "That", "Converts"];
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden"
      style={{ opacity, y }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute -top-20 -right-20 w-64 h-64 bg-redox/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute top-40 left-10 w-24 h-24 bg-redox/10 rounded-full blur-xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.8 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-navy-light/5 rounded-full blur-3xl"
        ></motion.div>
        
        {/* Grid pattern with enhanced animation */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <motion.h1 
              variants={container}
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark leading-tight mb-6"
            >
              {titleWords.map((word, index) => (
                <motion.span 
                  key={index} 
                  className={`inline-block mr-3 ${word === "Front-End" ? "text-redox relative" : ""}`}
                  variants={child}
                >
                  {word}
                  {word === "Front-End" && (
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 1.8, duration: 0.7, ease: "easeInOut" }}
                      className="absolute -bottom-2 left-0 right-0 h-[0.15rem] bg-redox transform origin-left"
                    ></motion.span>
                  )}
                </motion.span>
              ))}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="text-lg md:text-xl text-navy-light mb-8"
            >
              REDOX Devs specializes in creating stunning, high-performance landing pages and websites that turn visitors into loyal customers.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={scrollToContact}
                className="bg-redox hover:bg-redox-dark text-white px-6 py-6 text-lg relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="absolute inset-0 bg-redox-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Button>
              
              <Button
                variant="outline"
                className="border-navy-light text-navy-dark hover:text-redox hover:border-redox px-6 py-6 text-lg group"
                onClick={() => {
                  const workSection = document.getElementById("work");
                  if (workSection) {
                    workSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                See Our Work
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-redox group-hover:w-full transition-all duration-300"></span>
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="mt-12 flex items-center gap-8"
            >
              <div className="flex -space-x-2">
                {['KP', 'JD', 'ML'].map((initials, i) => (
                  <motion.div 
                    key={initials}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.3 + (i * 0.1) }}
                    className="w-10 h-10 rounded-full bg-redox-light flex items-center justify-center text-redox text-sm font-bold"
                  >
                    {initials}
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
              >
                <p className="text-navy-dark font-medium">Trusted by 100+ businesses</p>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="order-1 md:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="absolute -top-6 -left-6 w-24 h-24 bg-redox/20 rounded-full blur-2xl animate-pulse"
              ></motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: 1, duration: 1.5 }}
                className="absolute -bottom-6 -right-6 w-32 h-32 bg-redox/20 rounded-full blur-2xl animate-pulse"
                style={{ animationDelay: "1.5s" }}
              ></motion.div>
              
              <div className="bg-gradient-to-br from-redox/5 to-navy-dark/5 rounded-2xl border border-gray-100 p-2 backdrop-blur-sm">
                <motion.div 
                  className="relative overflow-hidden rounded-xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/30 to-redox/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <motion.img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Web developer working on website"
                    className="rounded-xl shadow-lg w-full object-cover"
                    style={{ aspectRatio: "4/3" }}
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                  
                  {/* Animated code snippets */}
                  <motion.div 
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-lg p-3 shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isLoaded ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <div className="flex items-center gap-1 mb-2">
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="w-2 h-2 rounded-full bg-red-400"
                      ></motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="w-2 h-2 rounded-full bg-yellow-400"
                      ></motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.2 }}
                        className="w-2 h-2 rounded-full bg-green-400"
                      ></motion.div>
                    </div>
                    <div className="text-xs font-mono text-navy-dark">
                      <TypewriterEffect text="const convert = true;" delay={1.5} />
                      <TypewriterEffect text="function buildUI() { ... }" delay={2.5} />
                    </div>
                  </motion.div>
                  
                  {/* New feature: Floating elements */}
                  <motion.div
                    className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md rounded-lg px-3 py-2 shadow-lg"
                    initial={{ y: 20, opacity: 0 }}
                    animate={isLoaded ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-redox animate-ping opacity-75"></div>
                      <div className="text-xs font-semibold text-navy-dark">Live Preview</div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/70 to-transparent"></div>
    </motion.section>
  );
};

// Custom Typewriter component for code snippets
const TypewriterEffect = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 60);
      
      return () => clearInterval(interval);
    }, delay * 1000);
    
    return () => clearTimeout(timeout);
  }, [text, delay]);
  
  return <div>{displayedText}</div>;
};

export default HeroSection;
