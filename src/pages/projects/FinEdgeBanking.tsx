
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Shield, Smartphone, Lock, Clock, BarChart3, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const FinEdgeBanking = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-navy-dark to-navy-dark/5">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-navy-dark -z-10"></div>
          
          {/* Particle Effects */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/40 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-purple-500/40 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-blue-400/20 text-blue-300 font-medium text-sm mb-4">Next-Gen Banking</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Banking for the <span className="text-blue-400">Digital Age</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8">
                  FinEdge combines cutting-edge technology with personalized banking solutions to give you control over your financial future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg">
                    Open Account <ArrowRight className="ml-2" />
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Explore Features
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3" 
                      alt="FinEdge Banking Dashboard" 
                      className="w-full rounded-lg"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-blue-500 rounded-lg p-4 shadow-lg">
                      <div className="text-white font-semibold">
                        <p className="text-sm opacity-80">Total Balance</p>
                        <p className="text-xl">$12,456.78</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-sm opacity-80">Spending</p>
                      <div className="flex items-end justify-between">
                        <p className="text-lg font-medium">$2,540</p>
                        <p className="text-emerald-400 text-sm">+4.3%</p>
                      </div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <p className="text-sm opacity-80">Savings</p>
                      <div className="flex items-end justify-between">
                        <p className="text-lg font-medium">$8,230</p>
                        <p className="text-emerald-400 text-sm">+12.6%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 bg-blue-500/80 backdrop-blur-sm p-3 rounded-lg shadow-lg hidden lg:block">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-purple-500/80 backdrop-blur-sm p-3 rounded-lg shadow-lg hidden lg:block">
                  <Lock className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">Core Features</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-dark">The Future of Banking is Here</h2>
              <p className="text-lg text-navy-light">Discover how FinEdge is revolutionizing the banking industry with our innovative features.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-time Analytics",
                  description: "Monitor your finances with powerful visualizations and predictive insights.",
                  icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
                },
                {
                  title: "Mobile Banking",
                  description: "Access your accounts, make transfers, and pay bills from anywhere.",
                  icon: <Smartphone className="h-6 w-6 text-blue-500" />,
                },
                {
                  title: "Advanced Security",
                  description: "Rest easy with biometric authentication and real-time fraud detection.",
                  icon: <Shield className="h-6 w-6 text-blue-500" />,
                },
                {
                  title: "Instant Transfers",
                  description: "Send money internationally with zero fees and instant delivery.",
                  icon: <CreditCard className="h-6 w-6 text-blue-500" />,
                },
                {
                  title: "24/7 Support",
                  description: "Our team of experts is always available to assist you with any issues.",
                  icon: <Clock className="h-6 w-6 text-blue-500" />,
                },
                {
                  title: "Smart Budgeting",
                  description: "Create custom budgets that help you meet your financial goals.",
                  icon: <Lock className="h-6 w-6 text-blue-500" />,
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group">
                  <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4 group-hover:bg-blue-500 transition-colors duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-navy-dark">{feature.title}</h3>
                  <p className="text-navy-light mb-4">{feature.description}</p>
                  <a href="#" className="text-blue-500 font-medium flex items-center">
                    Learn more <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Data Visualization */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">Data Visualization</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-dark">Make Informed Financial Decisions</h2>
                <p className="text-lg text-navy-light mb-6">
                  Our advanced analytics platform gives you unprecedented insights into your financial health and spending patterns.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Interactive charts and graphs that break down spending by category",
                    "Predictive models that forecast your cash flow and suggest optimizations",
                    "Comparison tools to benchmark against your financial goals",
                    "Historical trend analysis to identify patterns"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-navy-light">{item}</p>
                    </div>
                  ))}
                </div>
                
                <Button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white">
                  Try Demo Dashboard
                </Button>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="bg-blue-50 rounded-lg p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="font-semibold text-navy-dark">Monthly Overview</h3>
                    <div className="text-sm text-navy-light">May 2023</div>
                  </div>
                  
                  <div className="h-64 rounded-lg bg-white p-4 mb-4">
                    {/* This would be an actual chart in a real implementation */}
                    <div className="h-full flex items-end">
                      <div className="w-1/6 h-40% bg-blue-200 rounded-t-md mx-1"></div>
                      <div className="w-1/6 h-60% bg-blue-300 rounded-t-md mx-1"></div>
                      <div className="w-1/6 h-45% bg-blue-400 rounded-t-md mx-1"></div>
                      <div className="w-1/6 h-70% bg-blue-500 rounded-t-md mx-1"></div>
                      <div className="w-1/6 h-50% bg-blue-600 rounded-t-md mx-1"></div>
                      <div className="w-1/6 h-80% bg-blue-700 rounded-t-md mx-1"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <p className="text-sm text-navy-light">Income</p>
                      <p className="font-semibold text-navy-dark">$6,240</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-navy-light">Expenses</p>
                      <p className="font-semibold text-navy-dark">$3,680</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-navy-light">Savings</p>
                      <p className="font-semibold text-navy-dark">$2,560</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Future of Banking?</h2>
                <p className="text-lg mb-8 text-white/90">Join thousands of satisfied customers who have already made the switch to FinEdge Banking.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg">
                    Open Account Now
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Book a Consultation
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

export default FinEdgeBanking;
