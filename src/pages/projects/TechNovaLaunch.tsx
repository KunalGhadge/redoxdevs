
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Sparkles, Layers, Zap, Shield, Code, Globe, LineChart } from "lucide-react";

const TechNovaLaunch = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 text-white">
      {/* Header */}
      <header className="py-6 px-4 md:px-8 bg-blue-900/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-400 rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-blue-900" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent">TechNova</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-blue-100 hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="text-blue-100 hover:text-white transition-colors">Pricing</a>
            <a href="#testimonials" className="text-blue-100 hover:text-white transition-colors">Testimonials</a>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Get Started
            </Button>
          </nav>
          <Button className="md:hidden" variant="ghost">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/>
              <line x1="4" x2="20" y1="6" y2="6"/>
              <line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden" ref={heroRef}>
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 -right-10 w-72 h-72 bg-blue-400 rounded-full opacity-30 blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-indigo-500 rounded-full opacity-30 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll opacity-0">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-800/50 backdrop-blur-md border border-blue-700 text-blue-200 text-sm font-medium mb-6">
                Launching Soon v1.0
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Next Generation <br />
                <span className="bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">SaaS Platform</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-lg">
                TechNova helps startups scale their operations with powerful automation, analytics, and collaboration tools in one seamless platform.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-6 text-lg group transition-all duration-300 transform hover:translate-y-[-2px]">
                  Start Free Trial
                  <ArrowRight className="ml-2 transition-transform duration-300 transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" className="border-blue-400 text-blue-100 hover:bg-blue-800/50 px-6 py-6 text-lg">
                  Book a Demo
                </Button>
              </div>
              
              <div className="mt-10 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-blue-900 bg-gradient-to-br from-blue-400 to-indigo-400"></div>
                  ))}
                </div>
                <p className="ml-4 text-blue-200">
                  <span className="font-bold text-white">500+</span> companies already onboard
                </p>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-400 to-indigo-400 opacity-30 blur-lg"></div>
                <div className="relative bg-blue-900/50 backdrop-blur-xl rounded-lg border border-white/10 p-1 shadow-2xl">
                  <div className="rounded-md bg-blue-950 overflow-hidden">
                    <div className="h-8 bg-blue-900/50 flex items-center px-4">
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      </div>
                    </div>
                    <div className="p-4">
                      <img 
                        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                        alt="TechNova Dashboard" 
                        className="rounded shadow-lg border border-blue-700/50"
                      />
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="bg-blue-900/50 rounded p-3 border border-blue-800">
                          <LineChart className="h-6 w-6 text-blue-400 mb-2" />
                          <p className="text-xs text-blue-200">Monthly Growth</p>
                          <p className="text-xl font-bold text-white">+27.4%</p>
                        </div>
                        <div className="bg-blue-900/50 rounded p-3 border border-blue-800">
                          <Zap className="h-6 w-6 text-blue-400 mb-2" />
                          <p className="text-xs text-blue-200">Active Users</p>
                          <p className="text-xl font-bold text-white">13.8k</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg p-3 shadow-lg animate-float">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg p-3 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                  <Layers className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll opacity-0" style={{ animationDelay: "0.6s" }}>
            {["Trusted by", "Featured in", "Award Winner", "ISO Certified"].map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-blue-800/50 backdrop-blur-sm border border-blue-700">
                  <div className="w-6 h-6 bg-blue-300 rounded-sm"></div>
                </div>
                <p className="text-blue-200">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20 bg-blue-950" ref={featuresRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/50 backdrop-blur-md border border-blue-800 text-blue-200 text-sm font-medium mb-4">
              Powerful Features
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Everything You Need to Scale
            </h2>
            <p className="text-xl text-blue-200">
              TechNova brings all your team's tools together in one seamless platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI-Powered Insights",
                description: "Leverage machine learning algorithms to gain actionable insights and make data-driven decisions.",
                icon: <Sparkles className="h-6 w-6 text-blue-400" />,
                delay: "0s"
              },
              {
                title: "Seamless Integrations",
                description: "Connect with over 200+ tools and apps that your team already uses and loves.",
                icon: <Code className="h-6 w-6 text-blue-400" />,
                delay: "0.2s"
              },
              {
                title: "Global Infrastructure",
                description: "Enterprise-grade security with 99.99% uptime SLA and data centers worldwide.",
                icon: <Globe className="h-6 w-6 text-blue-400" />,
                delay: "0.4s"
              },
              {
                title: "Automation Engine",
                description: "Automate repetitive tasks and workflows to save time and reduce human error.",
                icon: <Zap className="h-6 w-6 text-blue-400" />,
                delay: "0.6s"
              },
              {
                title: "Advanced Security",
                description: "SOC2 compliant with end-to-end encryption and multi-factor authentication.",
                icon: <Shield className="h-6 w-6 text-blue-400" />,
                delay: "0.8s"
              },
              {
                title: "Real-time Analytics",
                description: "Monitor key metrics and performance indicators with customizable dashboards.",
                icon: <LineChart className="h-6 w-6 text-blue-400" />,
                delay: "1s"
              },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-blue-900/20 backdrop-blur-sm border border-blue-800 rounded-xl p-6 hover:bg-blue-800/30 transition-all duration-300 animate-on-scroll opacity-0"
                style={{ animationDelay: feature.delay }}
              >
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg p-3 inline-flex mb-4 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-blue-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-blue-950 to-indigo-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-900/50 backdrop-blur-md border border-blue-800 text-blue-200 text-sm font-medium mb-4">
              Simple Pricing
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Choose Your Plan
            </h2>
            <p className="text-xl text-blue-200">
              No hidden fees. No surprises. Scale as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Starter",
                price: "$29",
                period: "/month",
                description: "Perfect for startups and small teams",
                features: [
                  "Up to 5 team members",
                  "10GB cloud storage",
                  "Basic analytics",
                  "24/7 support",
                  "API access"
                ],
                recommended: false,
                delay: "0s"
              },
              {
                name: "Pro",
                price: "$79",
                period: "/month",
                description: "For growing teams and businesses",
                features: [
                  "Up to 20 team members",
                  "100GB cloud storage",
                  "Advanced analytics",
                  "Priority support",
                  "Advanced integrations",
                  "Custom workflows"
                ],
                recommended: true,
                delay: "0.2s"
              },
              {
                name: "Enterprise",
                price: "$199",
                period: "/month",
                description: "For large organizations and teams",
                features: [
                  "Unlimited team members",
                  "1TB cloud storage",
                  "Enterprise analytics",
                  "Dedicated support",
                  "Advanced security",
                  "Custom integrations",
                  "SLA guarantee"
                ],
                recommended: false,
                delay: "0.4s"
              }
            ].map((plan, index) => (
              <div 
                key={index} 
                className={`rounded-2xl overflow-hidden animate-on-scroll opacity-0 ${
                  plan.recommended 
                    ? "bg-gradient-to-b from-blue-900 to-indigo-800 border-2 border-blue-400 transform scale-105 relative z-10" 
                    : "bg-blue-900/20 backdrop-blur-sm border border-blue-800"
                }`}
                style={{ animationDelay: plan.delay }}
              >
                {plan.recommended && (
                  <div className="bg-blue-500 text-white text-sm font-medium py-1 text-center">
                    Recommended
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-5">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-blue-200 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-blue-200 mb-6">{plan.description}</p>
                  <Button className={`w-full ${
                    plan.recommended 
                      ? "bg-blue-500 hover:bg-blue-600 text-white" 
                      : "bg-blue-800/50 hover:bg-blue-700 text-white"
                  }`}>
                    Get Started
                  </Button>
                </div>
                <div className={`px-8 pb-8 ${plan.recommended ? "text-blue-100" : "text-blue-200"}`}>
                  <p className="font-medium mb-4">What's included:</p>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-400 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-indigo-950">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
            <div className="inline-block px-3 py-1 rounded-full bg-indigo-900/50 backdrop-blur-md border border-indigo-800 text-indigo-200 text-sm font-medium mb-4">
              Testimonials
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              Trusted by Innovators
            </h2>
            <p className="text-xl text-indigo-200">
              See what our customers are saying about TechNova.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "TechNova has completely transformed how our team collaborates. The automation features alone have saved us countless hours every week.",
                name: "Sarah Johnson",
                role: "CTO at GrowthFinder",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                delay: "0s"
              },
              {
                quote: "After implementing TechNova, we saw a 40% increase in team productivity and cut our onboarding time in half. The ROI is incredible.",
                name: "Michael Chen",
                role: "VP of Operations at Nexus",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
                delay: "0.2s"
              },
              {
                quote: "The security features give us peace of mind, while the intuitive interface means minimal training. It's a win-win for our growing company.",
                name: "Emily Rodriguez",
                role: "Founder at LaunchPad",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
                delay: "0.4s"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-indigo-900/20 backdrop-blur-sm border border-indigo-800 rounded-xl p-8 animate-on-scroll opacity-0"
                style={{ animationDelay: testimonial.delay }}
              >
                <div className="mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-indigo-100 mb-8 text-lg italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-indigo-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-indigo-950 to-blue-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-10 md:p-16 relative overflow-hidden animate-on-scroll opacity-0">
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Workflow?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join thousands of forward-thinking teams already using TechNova to scale their operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                  Start Your Free Trial
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Schedule Demo
                </Button>
              </div>
              <p className="mt-6 text-blue-200">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-blue-950 border-t border-blue-900/50 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-blue-300 hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-blue-900/50 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-400 rounded-lg flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-blue-900" />
              </div>
              <span className="text-lg font-bold text-white">TechNova</span>
            </div>
            <div className="text-blue-300 text-sm">
              © {new Date().getFullYear()} TechNova. All rights reserved. Project by <Link to="/" className="text-blue-100 hover:text-white transition-colors">REDOX Devs</Link>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Back to Projects Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <Link to="/#work">
          <Button className="bg-blue-500 hover:bg-blue-600 rounded-full h-14 w-14 flex items-center justify-center shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" y2="12" x2="5"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TechNovaLaunch;
