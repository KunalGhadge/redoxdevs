
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface ProjectLayoutProps {
  title: string;
  description: string;
  image: string;
  features: string[];
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({
  title,
  description,
  image,
  features,
  challenge,
  solution,
  results,
  technologies,
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="mb-6">
            <Link to="/#work">
              <Button variant="ghost" className="text-redox pl-0 hover:bg-transparent hover:text-redox-dark">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to projects
              </Button>
            </Link>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">{title}</h1>
          <p className="text-lg text-navy-light mb-8">{description}</p>

          <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
            <img src={image} alt={title} className="w-full h-full object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-navy-dark mb-4">The Challenge</h3>
              <p className="text-navy-light">{challenge}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-navy-dark mb-4">Our Solution</h3>
              <p className="text-navy-light">{solution}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="font-semibold text-navy-dark mb-4">The Results</h3>
              <p className="text-navy-light">{results}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-navy-dark mb-4">Key Features</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-redox mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-navy-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-navy-dark mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-navy-dark"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <Link to="/#contact">
              <Button className="bg-redox hover:bg-redox-dark text-white">
                Start a Similar Project
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectLayout;
