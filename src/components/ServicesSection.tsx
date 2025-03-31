
import { Globe, Code, BrushIcon, LineChart, Rocket, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: <Globe className="h-10 w-10 text-redox" />,
    title: "Web Design",
    description:
      "Beautiful, responsive websites that represent your brand and engage your visitors with intuitive user experiences.",
  },
  {
    icon: <Code className="h-10 w-10 text-redox" />,
    title: "Web Development",
    description:
      "Custom-coded websites and web applications with clean, efficient code that loads lightning-fast.",
  },
  {
    icon: <BrushIcon className="h-10 w-10 text-redox" />,
    title: "UI/UX Design",
    description:
      "User-centric design that guides visitors through a delightful journey, improving conversion rates and satisfaction.",
  },
  {
    icon: <LineChart className="h-10 w-10 text-redox" />,
    title: "SEO Optimization",
    description:
      "Strategic optimization to improve search engine rankings and drive more organic traffic to your website.",
  },
  {
    icon: <Rocket className="h-10 w-10 text-redox" />,
    title: "Performance Optimization",
    description:
      "Speed up your site's loading times and enhance overall performance for better user experience and SEO.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-redox" />,
    title: "Maintenance & Support",
    description:
      "Ongoing maintenance, security updates, and technical support to keep your website running smoothly.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
          Our <span className="text-redox">Services</span>
        </h2>
        <p className="text-lg text-navy-light">
          We offer comprehensive web solutions tailored to your business needs and goals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card 
            key={index} 
            className="border-gray-100 hover:border-redox/30 hover:shadow-md transition-all duration-300"
          >
            <CardContent className="pt-6">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-navy-dark mb-2">
                {service.title}
              </h3>
              <p className="text-navy-light">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
