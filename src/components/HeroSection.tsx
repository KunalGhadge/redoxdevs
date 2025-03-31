
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We Build Websites That <span className="text-redox">Convert</span>
            </h1>
            <p className="text-lg md:text-xl text-navy-light mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              REDOX Devs helps businesses transform their online presence with stunning, high-performance websites that turn visitors into customers.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
              <Button
                onClick={scrollToContact}
                className="bg-redox hover:bg-redox-dark text-white px-6 py-6 text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-navy-light text-navy-dark hover:text-redox hover:border-redox px-6 py-6 text-lg"
                onClick={() => {
                  const workSection = document.getElementById("work");
                  if (workSection) {
                    workSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                See Our Work
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
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-redox/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-redox/20 rounded-full blur-2xl"></div>
              <div className="bg-gradient-to-br from-redox/5 to-navy-dark/5 rounded-2xl border border-gray-100 p-2">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Web developer working on website"
                  className="rounded-xl shadow-lg w-full object-cover"
                  style={{ aspectRatio: "4/3" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white/70 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
