
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, CheckCircle, Menu, X, ChevronRight, ExternalLink, Star } from "lucide-react";

const TechNovaLaunch = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-white">
      {/* TechNova-specific Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "py-5"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="#" className="flex items-center">
              <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
                TechNova<span className="text-indigo-600">AI</span>
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-8">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                Features
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                Pricing
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-indigo-600 font-medium transition-colors">
                FAQ
              </button>
            </nav>
            
            <div className="hidden md:flex items-center gap-4">
              <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                Sign In
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Start Free Trial
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="block md:hidden text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-lg animate-fade-in-down">
              <div className="flex flex-col p-4 space-y-4">
                <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-indigo-600 font-medium py-2">
                  Features
                </button>
                <button onClick={() => scrollToSection('pricing')} className="text-gray-700 hover:text-indigo-600 font-medium py-2">
                  Pricing
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-indigo-600 font-medium py-2">
                  Testimonials
                </button>
                <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-indigo-600 font-medium py-2">
                  FAQ
                </button>
                <hr />
                <Button variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 w-full">
                  Sign In
                </Button>
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white w-full">
                  Start Free Trial
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
          <div className="absolute top-0 right-0 -z-10 opacity-70">
            <svg width="400" height="400" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4F46E5" d="M44.9,-76.2C59.7,-69.8,74.4,-60.5,83.3,-47.1C92.3,-33.7,95.4,-16.8,93.8,-1C92.2,14.8,85.8,29.7,76.8,42.8C67.7,56,56,67.4,42,74.9C28,82.4,11.7,85.9,-3.2,90.7C-18.1,95.6,-31.7,101.8,-43.7,98.9C-55.6,96,-65.9,84,-72.3,70.5C-78.8,57,-81.3,42.2,-85.1,27.8C-88.8,13.5,-93.8,-0.4,-91.7,-13.4C-89.7,-26.4,-80.6,-38.4,-70.1,-49.7C-59.6,-61,-47.7,-71.5,-34.7,-78.8C-21.8,-86.2,-7.7,-90.4,4.8,-87.7C17.3,-85.1,30.1,-82.6,44.9,-76.2Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 lg:order-1 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm mb-4">Introducing TechNova AI</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                  Transform Your <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">Workflow</span> With AI
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8">
                  TechNova AI helps teams automate repetitive tasks, generate insights, and make smarter decisions in real-time. Boost your productivity by 67% with our intelligent assistant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-indigo-200 transition-transform hover:scale-105">
                    Get Early Access <ArrowRight className="ml-2" />
                  </Button>
                  <Button variant="outline" className="border-2 border-indigo-200 hover:border-indigo-300 text-gray-700 px-8 py-6 text-lg rounded-xl transition-all hover:bg-gray-50">
                    Watch Demo
                  </Button>
                </div>
                <div className="mt-8 text-gray-600">
                  <p className="flex items-center text-sm"><CheckCircle className="text-green-500 mr-2 h-5 w-5" /> No credit card required</p>
                  <p className="flex items-center text-sm mt-1"><CheckCircle className="text-green-500 mr-2 h-5 w-5" /> 14-day free trial</p>
                </div>
              </div>
              <div className="order-1 lg:order-2 relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-transform hover:scale-[1.02] duration-500">
                  <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                    alt="TechNova AI Platform" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white rounded-lg p-4 shadow-lg border border-gray-100 max-w-xs hidden md:block animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Task Automation</p>
                      <p className="text-sm text-gray-600">67% boost in productivity</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg border border-gray-100 max-w-xs hidden md:block animate-fade-in-up" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-indigo-100 p-2 rounded-full">
                      <Star className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">AI Assistant</p>
                      <p className="text-sm text-gray-600">Smart recommendations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Logos Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <p className="text-center text-gray-500 mb-8">Trusted by innovative teams at</p>
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
              {["Microsoft", "Google", "Adobe", "Slack", "Spotify", "Airbnb"].map((company) => (
                <div key={company} className="text-gray-400 text-xl font-bold">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Powerful AI Features</h2>
              <p className="text-lg text-gray-600">Discover how TechNova's intelligent platform can transform your workflow with our innovative features.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Smart Automation",
                  description: "Automate repetitive tasks and workflows with our intelligent AI assistant.",
                  icon: "⚙️",
                  delay: 0.2,
                },
                {
                  title: "Real-time Insights",
                  description: "Get actionable insights and analytics from your data as it comes in.",
                  icon: "📊",
                  delay: 0.4,
                },
                {
                  title: "Predictive Analysis",
                  description: "Anticipate trends and make proactive decisions with our predictive engine.",
                  icon: "🔮",
                  delay: 0.6,
                },
                {
                  title: "Seamless Integration",
                  description: "Connect with your favorite tools and platforms for a unified experience.",
                  icon: "🔄",
                  delay: 0.8,
                },
                {
                  title: "Natural Language Processing",
                  description: "Communicate with your AI assistant using plain everyday language.",
                  icon: "💬",
                  delay: 1.0,
                },
                {
                  title: "Custom Workflows",
                  description: "Create tailored workflows specific to your team's unique needs.",
                  icon: "📝",
                  delay: 1.2,
                },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up" 
                  style={{ animationDelay: `${feature.delay}s` }}
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 md:py-24 bg-indigo-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm mb-4">Seamless Experience</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">How TechNova AI Works</h2>
              <p className="text-lg text-gray-600">A simple three-step process to transform your workflow</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Connect Your Tools",
                  description: "Easily integrate with your existing tools and platforms with our one-click connectors.",
                  delay: 0.2
                },
                {
                  step: "2",
                  title: "Train Your Assistant",
                  description: "Customize your AI assistant to understand your business processes and terminology.",
                  delay: 0.4
                },
                {
                  step: "3",
                  title: "Automate & Optimize",
                  description: "Let the AI identify optimization opportunities and automate repetitive tasks.",
                  delay: 0.6
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="relative bg-white rounded-xl p-8 shadow-lg border border-gray-100 animate-fade-in-up"
                  style={{ animationDelay: `${item.delay}s` }}
                >
                  <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 pt-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <div className="mt-6">
                    <a href="#" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition-colors">
                      Learn more <ChevronRight className="h-4 w-4 ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section id="testimonials" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Trusted by Innovators</h2>
              <p className="text-lg text-gray-600">See what our customers are saying about TechNova AI.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center mb-6">
                  <div className="text-indigo-600 text-4xl">"</div>
                </div>
                <p className="text-lg text-gray-600 mb-6">TechNova AI has completely transformed how our team works. We've seen a 70% reduction in time spent on routine tasks, allowing us to focus on strategic initiatives that drive growth.</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full mr-4"></div>
                  <div>
                    <p className="font-medium text-gray-900">Sarah Johnson</p>
                    <p className="text-sm text-gray-500">CTO, Acme Inc</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center mb-6">
                  <div className="text-indigo-600 text-4xl">"</div>
                </div>
                <p className="text-lg text-gray-600 mb-6">The insights we get from TechNova have been game-changing for our decision making process. It's like having a data scientist on the team 24/7, constantly analyzing patterns and offering recommendations.</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full mr-4"></div>
                  <div>
                    <p className="font-medium text-gray-900">Michael Chen</p>
                    <p className="text-sm text-gray-500">Product Manager, TechGrowth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm mb-4">Simple Pricing</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Choose Your Plan</h2>
              <p className="text-lg text-gray-600">Start free and scale as your needs grow</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$0",
                  description: "Perfect for individuals and small projects",
                  features: [
                    "5 automated workflows",
                    "Basic AI assistant",
                    "Standard integrations",
                    "Community support",
                  ],
                  buttonText: "Start for Free",
                  popular: false,
                  delay: 0.2
                },
                {
                  name: "Professional",
                  price: "$49",
                  period: "/month",
                  description: "Ideal for growing teams and businesses",
                  features: [
                    "Unlimited workflows",
                    "Advanced AI capabilities",
                    "Priority integrations",
                    "24/7 priority support",
                    "Team collaboration features",
                  ],
                  buttonText: "Start Free Trial",
                  popular: true,
                  delay: 0.4
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "For large organizations with complex needs",
                  features: [
                    "Custom AI models",
                    "Advanced analytics",
                    "Dedicated success manager",
                    "Custom integrations",
                    "SLA guarantees",
                    "On-premise options",
                  ],
                  buttonText: "Contact Sales",
                  popular: false,
                  delay: 0.6
                }
              ].map((plan, index) => (
                <div 
                  key={index} 
                  className={`relative bg-white rounded-xl shadow-lg border ${plan.popular ? "border-indigo-300 transform scale-105 md:scale-110" : "border-gray-100"} p-8 flex flex-col animate-fade-in-up`}
                  style={{ animationDelay: `${plan.delay}s` }}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>
                    </div>
                  )}
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && <span className="text-gray-600">{plan.period}</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`${
                      plan.popular 
                        ? "bg-indigo-600 hover:bg-indigo-700 text-white" 
                        : "bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                    } w-full py-2 rounded-lg font-medium`}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Everything you need to know about TechNova AI</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  question: "How does TechNova AI integrate with my existing tools?",
                  answer: "TechNova AI offers seamless integration with popular tools and platforms through our connector library. We support over 100 integrations out-of-the-box, including Slack, Google Workspace, Microsoft Office 365, Salesforce, and more. For custom integrations, our Professional and Enterprise plans include API access."
                },
                {
                  question: "Is my data secure with TechNova AI?",
                  answer: "Yes, we take security seriously. All data is encrypted in transit and at rest. We are SOC 2 compliant and GDPR ready. Enterprise customers can also opt for on-premise deployment for additional security requirements."
                },
                {
                  question: "How long does it take to set up TechNova AI?",
                  answer: "Most customers are up and running in less than 30 minutes. Our guided setup process walks you through connecting your tools and creating your first automation. For more complex use cases, our customer success team provides dedicated onboarding assistance."
                },
                {
                  question: "Can I customize the AI to understand my industry terminology?",
                  answer: "Absolutely! TechNova's AI can be trained on your specific industry terminology, company documents, and processes. The more you use it, the better it gets at understanding your unique needs and context."
                },
                {
                  question: "What kind of support do you offer?",
                  answer: "We offer multiple support tiers. Free plans include community support. Professional plans include 24/7 email and chat support with guaranteed response times. Enterprise plans feature dedicated success managers and phone support."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-indigo-200 transition-colors">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Workflow?</h2>
                <p className="text-lg mb-8 text-white/90">Join thousands of teams already using TechNova AI to revolutionize their productivity.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg">
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
              <span className="mr-2">←</span> Back to REDOX Devs Portfolio
            </Button>
          </Link>
        </div>
      </main>
      
      {/* TechNova-specific Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="font-bold text-2xl mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                TechNova<span className="text-indigo-400">AI</span>
              </h3>
              <p className="text-gray-400 mb-6">
                Revolutionizing workflows with AI-powered automation and insights. Make better decisions, faster.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Integrations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Case Studies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Guides & Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Media Kit</a></li>
                <li><a href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">Investors</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2023 TechNova AI. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-indigo-400 transition-colors">Sitemap</a>
            </div>
            <div className="text-sm text-gray-500 mt-4 md:mt-0 flex items-center">
              <span>Crafted by</span>
              <a href="/#" className="text-redox hover:text-redox-dark ml-1 font-medium">REDOX Devs</a>
              <ExternalLink className="h-3 w-3 ml-1 text-redox" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechNovaLaunch;
