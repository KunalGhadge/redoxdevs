
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    category: "e-commerce",
    title: "Urban Threads Clothing",
    description: "A modern e-commerce platform for a fashion retailer with seamless checkout and inventory management.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    category: "corporate",
    title: "Summit Financial Services",
    description: "A professional website for a financial advisory firm with secure client portal and resource library.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
  {
    category: "startup",
    title: "Pulse Health App",
    description: "A landing page for a health tech startup with interactive features and subscription sign-up.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
  {
    category: "e-commerce",
    title: "Gourmet Direct",
    description: "An artisanal food delivery service with custom ordering system and customer accounts.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
  },
  {
    category: "corporate",
    title: "Nexus Law Firm",
    description: "A sophisticated website for a law practice with case studies and attorney profiles.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    category: "startup",
    title: "Eco Travel",
    description: "An eco-tourism booking platform with interactive maps and sustainability metrics.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
  },
];

const WorkSection = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredItems = activeTab === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <section id="work" className="section bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
          Our <span className="text-redox">Work</span>
        </h2>
        <p className="text-lg text-navy-light">
          Check out some of our recent projects across different industries.
        </p>
      </div>

      <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-8">
          <TabsList className="bg-white">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="e-commerce">E-Commerce</TabsTrigger>
            <TabsTrigger value="corporate">Corporate</TabsTrigger>
            <TabsTrigger value="startup">Startup</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg">
                <div className="relative overflow-hidden" style={{ height: "240px" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-navy-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-navy-light mb-4">{item.description}</p>
                  <Button variant="outline" size="sm" className="gap-2">
                    View Project <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 text-center">
        <Button 
          className="bg-redox hover:bg-redox-dark text-white"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Start Your Project
        </Button>
      </div>
    </section>
  );
};

export default WorkSection;
