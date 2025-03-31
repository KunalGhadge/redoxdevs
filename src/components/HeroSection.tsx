
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6 overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className={`absolute -top-20 -right-20 w-64 h-64 bg-redox/10 rounded-full blur-3xl transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute top-40 left-10 w-24 h-24 bg-redox/10 rounded-full blur-xl transition-opacity duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-navy-light/5 rounded-full blur-3xl transition-opacity duration-1000 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We Build <span className="text-redox relative">
                Front-End
                <span className="absolute -bottom-2 left-0 right-0 h-[0.15rem] bg-redox transform scale-x-0 transition-transform duration-700 delay-1000" style={{ transformOrigin: 'left', animation: isLoaded ? 'expand 0.7s ease-in-out 1s forwards' : 'none' }}></span>
              </span> That <span className="text-redox">Converts</span>
            </h1>
            <p className="text-lg md:text-xl text-navy-light mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              REDOX Devs specializes in creating stunning, high-performance landing pages and websites that turn visitors into loyal customers.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
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
            </div>
            <div className="mt-12 flex items-center gap-8 animate-fade-in" style={{ animationDelay: "0.7s" }}>
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-redox-light flex items-center justify-center text-redox text-sm font-bold">KP</div>
                <div className="w-10 h-10 rounded-full bg-redox-light flex items-center justify-center text-redox text-sm font-bold">JD</div>
                <div className="w-10 h-10 rounded-full bg-redox-light flex items-center justify-center text-redox text-sm font-bold">ML</div>
              </div>
              <div>
                <p className="text-navy-dark font-medium">Trusted by 100+ businesses</p>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className={`absolute -top-6 -left-6 w-24 h-24 bg-redox/20 rounded-full blur-2xl ${isLoaded ? 'animate-pulse' : ''}`}></div>
              <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-redox/20 rounded-full blur-2xl ${isLoaded ? 'animate-pulse' : ''}`} style={{ animationDelay: "1.5s" }}></div>
              <div className="bg-gradient-to-br from-redox/5 to-navy-dark/5 rounded-2xl border border-gray-100 p-2 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/30 to-redox/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Web developer working on website"
                    className="rounded-xl shadow-lg w-full object-cover transform hover:scale-105 transition-transform duration-700"
                    style={{ aspectRatio: "4/3" }}
                  />
                  
                  {/* Animated code snippets */}
                  <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-lg p-3 shadow-lg transform translate-y-4 opacity-0 transition-all duration-700 delay-1000 ${isLoaded ? 'translate-y-0 opacity-100' : ''}`}>
                    <div className="flex items-center gap-1 mb-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    </div>
                    <div className="text-xs font-mono text-navy-dark">
                      <div><span className="text-purple-600">const</span> <span className="text-blue-600">convert</span> = <span className="text-redox">true</span>;</div>
                      <div><span className="text-purple-600">function</span> <span className="text-blue-600">buildUI</span>() &#123; ... &#125;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/70 to-transparent"></div>

      <style>{`
        @keyframes expand {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
