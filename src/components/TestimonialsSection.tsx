
import { useState, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShieldCheck, Quote, Award } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const testimonials = [
  {
    name: "Vikram Mehta",
    position: "CEO, TechVantage Solutions, Mumbai",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    content:
      "REDOX Devs created an outstanding landing page for our SaaS product launch that exceeded our expectations. The conversion rates have been 40% higher than our previous site. Their understanding of the Indian market helped us connect with our target audience.",
    rating: 5,
    location: "Mumbai, India",
    verified: true
  },
  {
    name: "Ananya Sharma",
    position: "Marketing Director, Wellness Ayurveda",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content:
      "Our Ayurvedic product line needed a landing page that balanced modern design with our traditional values. REDOX Devs delivered perfectly, creating a page that respects our heritage while driving impressive sales. Best investment we've made!",
    rating: 5,
    location: "Delhi, India",
    verified: true
  },
  {
    name: "Raj Patel",
    position: "Founder, EduReach Academy",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    content:
      "As an education startup in Bangalore, we needed a landing page that could appeal to both students and parents. The team at REDOX understood our unique requirements and delivered a solution that has significantly improved our enrollment rates.",
    rating: 5,
    location: "Bangalore, India",
    verified: true
  },
  {
    name: "Priya Malhotra",
    position: "Director, Glamour Fashion House",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    content:
      "The landing page REDOX Devs created for our festive collection launch was stunning! It perfectly captured the essence of our brand while making the shopping experience seamless. Our conversion rate doubled within the first week!",
    rating: 5,
    location: "Jaipur, India",
    verified: true
  },
];

const TestimonialsSection = () => {
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
        delayChildren: 0.2,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="testimonials" 
      ref={sectionRef}
      className="py-12 md:py-16 bg-gray-50 relative overflow-hidden"
    >
      {/* Background elements - simplified for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-40 h-40 md:w-64 md:h-64 bg-redox/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 md:w-80 md:h-80 bg-navy-light/5 rounded-full blur-3xl animate-pulse-slow" 
             style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-10 md:mb-16"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-navy-dark mb-3 md:mb-4">
            Our Clients <span className="text-redox">Love Us</span>
          </h2>
          <p className="text-base md:text-lg text-navy-light">
            Don't just take our word for it. See what our verified clients from across India have to say about our landing page services.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-8 md:mb-12 flex items-center justify-center gap-4 md:gap-8 flex-wrap"
        >
          <motion.div 
            variants={badgeVariants}
            className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm"
          >
            <ShieldCheck className="h-4 w-4 md:h-5 md:w-5 text-redox" />
            <span className="text-sm md:text-base text-navy-dark font-medium">100% Verified Reviews</span>
          </motion.div>
          
          <motion.div 
            variants={badgeVariants}
            className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm"
          >
            <Award className="h-4 w-4 md:h-5 md:w-5 text-redox" />
            <span className="text-sm md:text-base text-navy-dark font-medium">Award-Winning Agency</span>
          </motion.div>
          
          <motion.div 
            variants={badgeVariants}
            className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm"
          >
            <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-yellow-400" />
            <span className="text-sm md:text-base text-navy-dark font-medium">4.9/5 Client Rating</span>
          </motion.div>
        </motion.div>
        
        <div className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className={`pl-4 ${isMobile ? 'basis-full' : 'md:basis-1/2'}`}>
                  <motion.div
                    variants={itemVariants}
                    className="h-full"
                  >
                    <Card className="border-gray-100 h-full hover:shadow-md transition-all duration-300">
                      <CardContent className="p-4 md:p-6">
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <Quote className="h-5 w-5 md:h-6 md:w-6 text-redox/30" />
                        </div>
                        <p className="text-sm md:text-base text-navy-light mb-4 md:mb-6 italic">"{testimonial.content}"</p>
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-white shadow-sm"
                            />
                            {testimonial.verified && (
                              <div className="absolute -bottom-1 -right-1 bg-redox text-white rounded-full p-0.5">
                                <ShieldCheck className="h-2.5 w-2.5 md:h-3 md:w-3" />
                              </div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-navy-dark text-sm md:text-base">{testimonial.name}</h4>
                            <div className="flex items-center gap-1">
                              <p className="text-xs md:text-sm text-navy-light">{testimonial.position}</p>
                            </div>
                            <p className="text-xs text-redox flex items-center gap-1 mt-0.5 md:mt-1">
                              <span className="inline-block w-1.5 h-1.5 bg-redox rounded-full"></span>
                              {testimonial.location}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute -top-10 right-0 md:-top-12 flex gap-2">
              <CarouselPrevious className="relative static h-8 w-8 md:h-10 md:w-10" />
              <CarouselNext className="relative static h-8 w-8 md:h-10 md:w-10" />
            </div>
          </Carousel>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-8 md:mt-12 text-center"
        >
          <a href="#contact" className="inline-flex items-center gap-1.5 text-redox hover:text-redox-dark transition-colors">
            <span className="text-sm md:text-base font-medium">Read more client success stories</span>
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="md:w-14 md:h-14">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
