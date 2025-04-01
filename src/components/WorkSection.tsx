
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

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
  },
  {
    category: "landing-page",
    title: "Vedic Ayurveda",
    description: "Premium landing page for an Indian Ayurvedic wellness product line with cultural motifs.",
    image: "https://images.unsplash.com/photo-1611074818835-ccd98ea069f8",
    features: "Scroll storytelling, custom animations, cultural design elements",
    path: "/project/vedic-ayurveda"
  },
  {
    category: "landing-page",
    title: "SwiftLearn Education",
    description: "Conversion-optimized landing page for an online learning platform with gamified elements.",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
    features: "Interactive demos, testimonial carousels, CTAs",
    path: "/project/swiftlearn-education"
  },
  {
    category: "landing-page",
    title: "Eco Solutions",
    description: "Engaging landing page for a sustainable products company with interactive impact calculators.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
    features: "Interactive calculators, parallax scrolling, eco animations",
    path: "/project/eco-solutions"
  },
];

const WorkSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = portfolioItems;

  return (
    <section id="work" className="section bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-64 h-64 bg-redox/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-navy-light/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="text-center max-w-3xl mx-auto mb-12 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
          Our <span className="text-redox">Landing Page</span> Projects
        </h2>
        <p className="text-lg text-navy-light">
          We specialize exclusively in creating stunning, high-performance landing pages that convert visitors into customers.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {filteredItems.map((item, index) => (
          <Card 
            key={index} 
            className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-500 group"
          >
            <div className="relative overflow-hidden" style={{ height: "240px" }}>
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <p className="text-white text-sm font-medium">{item.features}</p>
              </div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
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
                <Button variant="outline" size="sm" className="gap-2 group-hover:border-redox group-hover:text-redox transition-colors">
                  View Project <ExternalLink className="h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center relative z-10">
        <Button 
          className="bg-redox hover:bg-redox-dark text-white relative overflow-hidden group"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <span className="relative z-10">Start Your Project</span>
          <span className="absolute inset-0 bg-redox-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </Button>
      </div>
    </section>
  );
};

export default WorkSection;
