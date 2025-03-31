
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Search, Lightbulb, Code, Gauge, Rocket } from "lucide-react";

const steps = [
  {
    icon: <MessageSquare className="h-10 w-10 text-redox" />,
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business, goals, and target audience through in-depth consultations.",
  },
  {
    icon: <Search className="h-10 w-10 text-redox" />,
    number: "02",
    title: "Research",
    description:
      "We analyze your industry, competitors, and market trends to inform our strategic approach.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-redox" />,
    number: "03",
    title: "Planning",
    description:
      "We create a detailed project roadmap with wireframes, prototypes, and technical specifications.",
  },
  {
    icon: <Code className="h-10 w-10 text-redox" />,
    number: "04",
    title: "Development",
    description:
      "Our developers build your website with clean, efficient code following industry best practices.",
  },
  {
    icon: <Gauge className="h-10 w-10 text-redox" />,
    number: "05",
    title: "Testing",
    description:
      "We rigorously test your website for functionality, performance, and compatibility across devices.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-redox" />,
    number: "06",
    title: "Launch",
    description:
      "We deploy your website and provide training and documentation for your team.",
  },
];

const ProcessSection = () => {
  return (
    <section id="process" className="section">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
          Our <span className="text-redox">Process</span>
        </h2>
        <p className="text-lg text-navy-light">
          We follow a systematic approach to ensure your project succeeds from start to finish.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <Card 
            key={index} 
            className="border-gray-100 hover:shadow-md transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-gray-50 p-2 rounded-bl-lg">
              <span className="font-bold text-xl text-navy-light/30">{step.number}</span>
            </div>
            <CardContent className="pt-6">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-navy-dark mb-2">
                {step.title}
              </h3>
              <p className="text-navy-light">{step.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
