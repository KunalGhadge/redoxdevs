
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, CheckCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TechNovaLaunch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark/5 to-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="absolute top-0 right-0 -z-10 opacity-70">
            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#FF0066" d="M44.9,-76.2C59.7,-69.8,74.4,-60.5,83.3,-47.1C92.3,-33.7,95.4,-16.8,93.8,-1C92.2,14.8,85.8,29.7,76.8,42.8C67.7,56,56,67.4,42,74.9C28,82.4,11.7,85.9,-3.2,90.7C-18.1,95.6,-31.7,101.8,-43.7,98.9C-55.6,96,-65.9,84,-72.3,70.5C-78.8,57,-81.3,42.2,-85.1,27.8C-88.8,13.5,-93.8,-0.4,-91.7,-13.4C-89.7,-26.4,-80.6,-38.4,-70.1,-49.7C-59.6,-61,-47.7,-71.5,-34.7,-78.8C-21.8,-86.2,-7.7,-90.4,4.8,-87.7C17.3,-85.1,30.1,-82.6,44.9,-76.2Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block py-1 px-3 rounded-full bg-redox/10 text-redox font-medium text-sm mb-4">Introducing TechNova AI</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-navy-dark">
                  Transform Your <span className="text-redox">Workflow</span> With AI
                </h1>
                <p className="text-lg md:text-xl text-navy-light mb-8">
                  TechNova AI helps teams automate repetitive tasks, generate insights, and make smarter decisions in real-time. Boost your productivity by 67% with our intelligent assistant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-redox hover:bg-redox-dark text-white px-8 py-6 text-lg">
                    Get Early Access <ArrowRight className="ml-2" />
                  </Button>
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Watch Demo
                  </Button>
                </div>
                <div className="mt-8 text-navy-light">
                  <p className="flex items-center text-sm"><CheckCircle className="text-green-500 mr-2 h-5 w-5" /> No credit card required</p>
                  <p className="flex items-center text-sm mt-1"><CheckCircle className="text-green-500 mr-2 h-5 w-5" /> 14-day free trial</p>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="TechNova AI Platform" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg border border-gray-100 max-w-xs hidden md:block">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-navy-dark">Task Automation</p>
                      <p className="text-sm text-navy-light">67% boost in productivity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-dark">Powerful AI Features</h2>
              <p className="text-lg text-navy-light">Discover how TechNova's intelligent platform can transform your workflow with our innovative features.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart Automation",
                  description: "Automate repetitive tasks and workflows with our intelligent AI assistant.",
                  icon: "⚙️",
                },
                {
                  title: "Real-time Insights",
                  description: "Get actionable insights and analytics from your data as it comes in.",
                  icon: "📊",
                },
                {
                  title: "Predictive Analysis",
                  description: "Anticipate trends and make proactive decisions with our predictive engine.",
                  icon: "🔮",
                },
                {
                  title: "Seamless Integration",
                  description: "Connect with your favorite tools and platforms for a unified experience.",
                  icon: "🔄",
                },
                {
                  title: "Natural Language Processing",
                  description: "Communicate with your AI assistant using plain everyday language.",
                  icon: "💬",
                },
                {
                  title: "Custom Workflows",
                  description: "Create tailored workflows specific to your team's unique needs.",
                  icon: "📝",
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-navy-dark">{feature.title}</h3>
                  <p className="text-navy-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-dark">Trusted by Innovators</h2>
              <p className="text-lg text-navy-light">See what our customers are saying about TechNova AI.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="text-redox text-4xl">"</div>
                </div>
                <p className="text-lg text-navy-light mb-6">TechNova AI has completely transformed how our team works. We've seen a 70% reduction in time spent on routine tasks, allowing us to focus on strategic initiatives.</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <p className="font-medium text-navy-dark">Sarah Johnson</p>
                    <p className="text-sm text-navy-light">CTO, Acme Inc</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className="text-redox text-4xl">"</div>
                </div>
                <p className="text-lg text-navy-light mb-6">The insights we get from TechNova have been game-changing for our decision making process. It's like having a data scientist on the team 24/7.</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <p className="font-medium text-navy-dark">Michael Chen</p>
                    <p className="text-sm text-navy-light">Product Manager, TechGrowth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-navy-dark to-redox-dark rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
                <p className="text-lg mb-8 text-white/90">Join thousands of teams already using TechNova AI to revolutionize their productivity.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-navy-dark hover:bg-gray-100 px-8 py-6 text-lg">
                    Start Free Trial
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Request Demo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Back to Projects */}
        <div className="container mx-auto px-4 py-12">
          <Link to="/#work">
            <Button variant="outline" className="border-redox text-redox hover:bg-redox/10">
              Back to Projects
            </Button>
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TechNovaLaunch;
