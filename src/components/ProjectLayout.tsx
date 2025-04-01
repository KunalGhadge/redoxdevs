
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
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
  technologies
}) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container mx-auto px-4">
            <Link to="/#work" className="inline-block mb-8">
              <Button variant="outline" className="gap-2 text-redox hover:text-redox-dark">
                <ArrowLeft className="h-4 w-4" /> Back to Projects
              </Button>
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-bold text-navy-dark mb-6">{title}</h1>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <div className="rounded-lg overflow-hidden shadow-lg mb-6">
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-auto object-cover" 
                    style={{ maxHeight: "500px" }}
                  />
                </div>
                <p className="text-lg text-navy-light mb-6">{description}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-navy-dark mb-4">Project Features</h3>
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-redox/20 text-redox flex items-center justify-center mr-3 mt-1">
                        <span className="text-xs">✓</span>
                      </div>
                      <span className="text-navy-light">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-xl font-semibold text-navy-dark mt-8 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-white px-3 py-1 rounded-full text-sm text-navy-light border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-navy-dark mb-4">Challenge</h3>
                <p className="text-navy-light">{challenge}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-navy-dark mb-4">Solution</h3>
                <p className="text-navy-light">{solution}</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-semibold text-navy-dark mb-4">Results</h3>
                <p className="text-navy-light">{results}</p>
              </div>
            </div>

            <div className="text-center">
              <Link to="/#contact">
                <Button className="bg-redox hover:bg-redox-dark text-white">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectLayout;
