
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, IndianRupee, ShieldCheck, Quote, Award } from "lucide-react";
import { motion } from "framer-motion";

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

    const section = document.getElementById("testimonials");
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
    <section id="testimonials" className="section bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-redox/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-navy-light/5 rounded-full blur-3xl animate-pulse" 
             style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto mb-16 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
          Our Clients <span className="text-redox">Love Us</span>
        </h2>
        <p className="text-lg text-navy-light">
          Don't just take our word for it. See what our verified clients from across India have to say about our landing page services.
        </p>
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="mb-12 flex items-center justify-center gap-8 flex-wrap"
        >
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
            <ShieldCheck className="h-5 w-5 text-redox" />
            <span className="text-navy-dark font-medium">100% Verified Reviews</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
            <Award className="h-5 w-5 text-redox" />
            <span className="text-navy-dark font-medium">Award-Winning Agency</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm">
            <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            <span className="text-navy-dark font-medium">4.9/5 Client Rating</span>
          </div>
        </motion.div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <motion.div
                  variants={itemVariants}
                  className="h-full"
                >
                  <Card className="border-gray-100 h-full hover:shadow-md transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <Quote className="h-6 w-6 text-redox/30" />
                      </div>
                      <p className="text-navy-light mb-6 italic">"{testimonial.content}"</p>
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                          />
                          {testimonial.verified && (
                            <div className="absolute -bottom-1 -right-1 bg-redox text-white rounded-full p-0.5">
                              <ShieldCheck className="h-3 w-3" />
                            </div>
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-dark">{testimonial.name}</h4>
                          <div className="flex items-center gap-1">
                            <p className="text-sm text-navy-light">{testimonial.position}</p>
                          </div>
                          <p className="text-xs text-redox flex items-center gap-1 mt-1">
                            <span className="inline-block w-2 h-2 bg-redox rounded-full"></span>
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
          <div className="absolute -top-12 right-0 flex gap-2">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a href="#contact" className="inline-flex items-center gap-2 text-redox hover:text-redox-dark transition-colors">
            <span className="font-medium">Read more client success stories</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
