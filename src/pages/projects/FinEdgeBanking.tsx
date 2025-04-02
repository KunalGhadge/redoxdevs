
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ChevronRight, 
  Shield, 
  Smartphone, 
  Lock, 
  Clock, 
  BarChart3, 
  CreditCard,
  Menu,
  X,
  CheckCircle2,
  ArrowUp,
  Search,
  User,
  HelpCircle,
  Bell
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ProjectLayout from "@/components/ProjectLayout";

const FinEdgeBanking = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-blue-900/5">
      {/* FinEdge Banking Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/project/finedge-banking" className="flex items-center">
              <span className={`font-bold text-2xl ${isScrolled ? "text-blue-900" : "text-white"}`}>
                Fin<span className="text-blue-400">Edge</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <div className="relative group">
              <button 
                className={`font-medium ${isScrolled ? "text-blue-900" : "text-white"} hover:text-blue-400 transition-colors`}
                onClick={() => setActiveTab("personal")}
              >
                Personal Banking
              </button>
              <div className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform group-hover:scale-x-100 ${activeTab === "personal" ? "scale-x-100 bg-blue-400" : "bg-blue-400"}`}></div>
            </div>
            <div className="relative group">
              <button 
                className={`font-medium ${isScrolled ? "text-blue-900" : "text-white"} hover:text-blue-400 transition-colors`}
                onClick={() => setActiveTab("business")}
              >
                Business Banking
              </button>
              <div className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform group-hover:scale-x-100 ${activeTab === "business" ? "scale-x-100 bg-blue-400" : "bg-blue-400"}`}></div>
            </div>
            <div className="relative group">
              <button 
                className={`font-medium ${isScrolled ? "text-blue-900" : "text-white"} hover:text-blue-400 transition-colors`}
                onClick={() => setActiveTab("investments")}
              >
                Investments
              </button>
              <div className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform group-hover:scale-x-100 ${activeTab === "investments" ? "scale-x-100 bg-blue-400" : "bg-blue-400"}`}></div>
            </div>
            <div className="relative group">
              <button 
                className={`font-medium ${isScrolled ? "text-blue-900" : "text-white"} hover:text-blue-400 transition-colors`}
                onClick={() => setActiveTab("about")}
              >
                About
              </button>
              <div className={`absolute bottom-0 left-0 w-full h-0.5 transform scale-x-0 transition-transform group-hover:scale-x-100 ${activeTab === "about" ? "scale-x-100 bg-blue-400" : "bg-blue-400"}`}></div>
            </div>
          </nav>

          <div className="hidden md:flex gap-4 items-center">
            <Button className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white rounded-full transition-colors">
              Log in
            </Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full">
              Open Account
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className={`h-6 w-6 ${isScrolled ? "text-blue-900" : "text-white"}`} />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-blue-900 text-white border-l border-blue-800">
              <div className="flex flex-col h-full">
                <div className="pt-6 pb-10">
                  <span className="font-bold text-2xl text-white">
                    Fin<span className="text-blue-400">Edge</span>
                  </span>
                </div>
                <nav className="flex flex-col gap-6">
                  <a href="#" className="text-lg font-medium hover:text-blue-400 transition-colors">
                    Personal Banking
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-blue-400 transition-colors">
                    Business Banking
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-blue-400 transition-colors">
                    Investments
                  </a>
                  <a href="#" className="text-lg font-medium hover:text-blue-400 transition-colors">
                    About
                  </a>
                </nav>
                <div className="mt-auto pt-10 flex flex-col gap-3">
                  <Button className="bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white w-full">
                    Log in
                  </Button>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white w-full">
                    Open Account
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-blue-900 -z-10"></div>
          
          {/* Particle Effects */}
          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/40 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-indigo-500/40 blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <span className="inline-block py-1 px-3 rounded-full bg-blue-400/20 text-blue-300 font-medium text-sm mb-4">Next-Gen Banking</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Banking for the <span className="text-blue-400">Digital Age</span>
                </h1>
                <p className="text-lg md:text-xl text-white/80 mb-8">
                  FinEdge combines cutting-edge technology with personalized banking solutions to give you control over your financial future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-blue-500/20 transition-all hover:shadow-blue-500/40 hover:translate-y-[-2px]">
                    Open Account <ArrowRight className="ml-2" />
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                    Explore Features
                  </Button>
                </div>
              </div>
              <div className="relative animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-lg">
                  <div className="relative">
                    <img 
                      src="https://images.unsplash.com/photo-1563986768609-322da13575f3" 
                      alt="FinEdge Banking Dashboard" 
                      className="w-full rounded-lg"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-blue-500 rounded-lg p-4 shadow-lg animate-float">
                      <div className="text-white font-semibold">
                        <p className="text-sm opacity-80">Total Balance</p>
                        <p className="text-xl">$12,456.78</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-12 grid grid-cols-2 gap-4">
                    <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                      <p className="text-sm opacity-80">Spending</p>
                      <div className="flex items-end justify-between">
                        <p className="text-lg font-medium">$2,540</p>
                        <p className="text-emerald-400 text-sm">+4.3%</p>
                      </div>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                      <p className="text-sm opacity-80">Savings</p>
                      <div className="flex items-end justify-between">
                        <p className="text-lg font-medium">$8,230</p>
                        <p className="text-emerald-400 text-sm">+12.6%</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-8 -left-8 bg-blue-500/80 backdrop-blur-sm p-3 rounded-lg shadow-lg hidden lg:block animate-float" style={{ animationDelay: "1s" }}>
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-indigo-500/80 backdrop-blur-sm p-3 rounded-lg shadow-lg hidden lg:block animate-float" style={{ animationDelay: "1.5s" }}>
                  <Lock className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Wave SVG Divider */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,133.3C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">Core Features</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">The Future of Banking is Here</h2>
              <p className="text-lg text-blue-700/70">Discover how FinEdge is revolutionizing the banking industry with our innovative features.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-time Analytics",
                  description: "Monitor your finances with powerful visualizations and predictive insights.",
                  icon: <BarChart3 className="h-6 w-6 text-blue-500" />,
                  delay: "0.2s"
                },
                {
                  title: "Mobile Banking",
                  description: "Access your accounts, make transfers, and pay bills from anywhere.",
                  icon: <Smartphone className="h-6 w-6 text-blue-500" />,
                  delay: "0.3s"
                },
                {
                  title: "Advanced Security",
                  description: "Rest easy with biometric authentication and real-time fraud detection.",
                  icon: <Shield className="h-6 w-6 text-blue-500" />,
                  delay: "0.4s"
                },
                {
                  title: "Instant Transfers",
                  description: "Send money internationally with zero fees and instant delivery.",
                  icon: <CreditCard className="h-6 w-6 text-blue-500" />,
                  delay: "0.5s"
                },
                {
                  title: "24/7 Support",
                  description: "Our team of experts is always available to assist you with any issues.",
                  icon: <Clock className="h-6 w-6 text-blue-500" />,
                  delay: "0.6s"
                },
                {
                  title: "Smart Budgeting",
                  description: "Create custom budgets that help you meet your financial goals.",
                  icon: <Lock className="h-6 w-6 text-blue-500" />,
                  delay: "0.7s"
                },
              ].map((feature, index) => (
                <Card 
                  key={index} 
                  className="bg-white hover:shadow-xl transition-all duration-300 group border-blue-100 hover:border-blue-300 animate-fade-in-up overflow-hidden" 
                  style={{ animationDelay: feature.delay }}
                >
                  <CardHeader className="pb-2">
                    <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4 group-hover:bg-blue-500 transition-colors duration-300 transform group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold mb-1 text-blue-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700/70 mb-4">{feature.description}</p>
                    <a href="#" className="text-blue-500 font-medium flex items-center group/link">
                      Learn more <ChevronRight className="h-4 w-4 ml-1 transform transition-transform group-hover/link:translate-x-1" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Data Visualization */}
        <section className="py-16 md:py-24 bg-blue-50 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">Data Visualization</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Make Informed Financial Decisions</h2>
                <p className="text-lg text-blue-700/70 mb-6">
                  Our advanced analytics platform gives you unprecedented insights into your financial health and spending patterns.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Interactive charts and graphs that break down spending by category",
                    "Predictive models that forecast your cash flow and suggest optimizations",
                    "Comparison tools to benchmark against your financial goals",
                    "Historical trend analysis to identify patterns"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                      <div className="bg-blue-500 rounded-full p-1 mt-1 mr-3">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-blue-700/70">{item}</p>
                    </div>
                  ))}
                </div>
                
                <Button className="mt-8 bg-blue-500 hover:bg-blue-600 text-white rounded-xl shadow-md transition-all hover:shadow-lg hover:translate-y-[-2px]">
                  Try Demo Dashboard
                </Button>
              </div>
              
              <div className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <Card className="bg-white rounded-xl shadow-xl p-6 border-blue-100 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <div className="flex justify-between items-center mb-6">
                      <h3 className="font-semibold text-blue-900">Monthly Overview</h3>
                      <div className="text-sm text-blue-700/70">May 2023</div>
                    </div>
                    
                    <div className="h-64 rounded-lg bg-white p-4 mb-4 shadow-inner">
                      {/* This would be an actual chart in a real implementation */}
                      <div className="h-full flex items-end">
                        <div className="w-1/6 h-[40%] bg-blue-200 rounded-t-md mx-1"></div>
                        <div className="w-1/6 h-[60%] bg-blue-300 rounded-t-md mx-1"></div>
                        <div className="w-1/6 h-[45%] bg-blue-400 rounded-t-md mx-1"></div>
                        <div className="w-1/6 h-[70%] bg-blue-500 rounded-t-md mx-1"></div>
                        <div className="w-1/6 h-[50%] bg-blue-600 rounded-t-md mx-1"></div>
                        <div className="w-1/6 h-[80%] bg-blue-700 rounded-t-md mx-1"></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                        <p className="text-sm text-blue-700/70">Income</p>
                        <p className="font-semibold text-blue-900">$6,240</p>
                      </div>
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
                        <p className="text-sm text-blue-700/70">Expenses</p>
                        <p className="font-semibold text-blue-900">$3,680</p>
                      </div>
                      <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.9s" }}>
                        <p className="text-sm text-blue-700/70">Savings</p>
                        <p className="font-semibold text-blue-900">$2,560</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mobile Banking Section */}
        <section className="py-20 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                <span className="inline-block py-1 px-3 rounded-full bg-indigo-100 text-indigo-600 font-medium text-sm mb-4">Mobile Banking</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Banking at Your Fingertips</h2>
                <p className="text-lg text-blue-700/70 mb-8">
                  Our award-winning mobile app brings the full power of FinEdge to your smartphone. Manage accounts, make payments, and track investments—all on the go.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Instant Transfers",
                      description: "Send money to anyone, anywhere, instantly",
                      icon: <ArrowRight className="h-5 w-5 text-indigo-500" />
                    },
                    {
                      title: "Biometric Security",
                      description: "Secure access with fingerprint and face ID",
                      icon: <Shield className="h-5 w-5 text-indigo-500" />
                    },
                    {
                      title: "Bill Pay & Reminders",
                      description: "Never miss a payment with automated reminders",
                      icon: <Bell className="h-5 w-5 text-indigo-500" />
                    },
                    {
                      title: "24/7 Support",
                      description: "Chat with our support team anytime",
                      icon: <HelpCircle className="h-5 w-5 text-indigo-500" />
                    }
                  ].map((feature, index) => (
                    <div key={index} className="flex gap-4 animate-fade-in-up" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                      <div className="bg-indigo-50 p-3 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-blue-900 mb-1">{feature.title}</h3>
                        <p className="text-sm text-blue-700/70">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-xl flex gap-2 items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.0711 12.0002C17.0711 13.4702 16.1311 14.7302 14.8311 15.3102L15.2411 16.5002C15.3111 16.7102 15.1711 16.9302 14.9611 16.9902C14.9011 17.0002 14.8511 17.0002 14.7911 16.9902L12.9311 16.3702L11.0711 16.9902C10.8611 17.0602 10.6411 16.9202 10.5711 16.7102C10.5611 16.6502 10.5611 16.6002 10.5711 16.5402L10.9811 15.3502C9.68114 14.7802 8.74114 13.5102 8.74114 12.0402C8.74114 9.95016 10.6511 8.25016 13.0111 8.25016C15.3711 8.25016 17.0711 9.99016 17.0711 12.0002Z" fill="white"/>
                      <path d="M11.5 10C11.5 7.78 9.72 6 7.5 6C5.28 6 3.5 7.78 3.5 10C3.5 11.25 4.09 12.35 5 13.04L4.5 14.52C4.44 14.73 4.58 14.94 4.79 15C4.87 15.02 4.95 15.01 5.02 14.98L7.04 14.25L8.94 15C9.13 15.07 9.34 14.96 9.41 14.78C9.44 14.71 9.45 14.63 9.43 14.56L9 13.18C10.38 12.5 11.5 11.35 11.5 10Z" fill="white"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs opacity-80">Download on the</p>
                      <p className="font-medium">App Store</p>
                    </div>
                  </Button>
                  <Button className="bg-blue-900 hover:bg-blue-800 text-white rounded-xl flex gap-2 items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.6 12L8.3 4.8V19.2L16.6 12Z" fill="white"/>
                      <path d="M6.3 4.8L6.3 19.2L8.3 19.2L8.3 4.8L6.3 4.8Z" fill="white"/>
                      <path d="M17.6 13L16.2 12L14.7 13.8L17.6 13Z" fill="white"/>
                      <path d="M17.6 11L14.7 10.2L16.2 12L17.6 11Z" fill="white"/>
                    </svg>
                    <div className="text-left">
                      <p className="text-xs opacity-80">GET IT ON</p>
                      <p className="font-medium">Google Play</p>
                    </div>
                  </Button>
                </div>
              </div>
              
              <div className="relative mt-10 lg:mt-0 flex justify-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                <div className="relative h-[500px] w-[250px]">
                  <div className="absolute inset-0 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-[40px] shadow-2xl overflow-hidden p-2">
                    <div className="absolute inset-0 rounded-[34px] overflow-hidden bg-white p-2">
                      <img 
                        src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247" 
                        alt="FinEdge Banking Mobile App" 
                        className="w-full h-full object-cover rounded-[30px]"
                      />
                    </div>
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 h-6 w-24 bg-black rounded-full"></div>
                  </div>
                </div>
                
                {/* Floating UI Elements */}
                <div className="absolute right-[20%] top-10 bg-white rounded-xl shadow-xl p-4 animate-float" style={{ animationDelay: "0.7s" }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center">
                      <User className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-900">Account Balance</p>
                      <p className="text-blue-700 text-lg font-bold">$8,567.95</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-[10%] bottom-20 bg-white rounded-xl shadow-xl p-4 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="flex items-center gap-3">
                    <div className="bg-green-500 h-10 w-10 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-900">Payment Sent</p>
                      <p className="text-blue-700 text-lg font-bold">$350.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
              {/* Abstract Shapes */}
              <div className="absolute top-0 right-0 -translate-y-1/3 translate-x-1/3 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10 max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>Ready to Experience the Future of Banking?</h2>
                <p className="text-lg mb-8 text-white/90 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Join thousands of satisfied customers who have already made the switch to FinEdge Banking.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <Button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px]">
                    Open Account Now
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl">
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-4">Customer Voices</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">What Our Customers Say</h2>
              <p className="text-lg text-blue-700/70">Hear from people who have transformed their financial lives with FinEdge Banking.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  position: "Small Business Owner",
                  quote: "FinEdge has revolutionized how I manage my business finances. The mobile app is intuitive, and their customer service team is always responsive and helpful.",
                  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                  delay: "0.1s"
                },
                {
                  name: "Michael Chen",
                  position: "Tech Entrepreneur",
                  quote: "The analytics tools are game-changing. I've gained insights into my spending patterns that have helped me save thousands of dollars this year alone.",
                  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
                  delay: "0.3s"
                },
                {
                  name: "Emma Rodriguez",
                  position: "Financial Advisor",
                  quote: "As someone who works in finance, I have high standards for banking services. FinEdge exceeds all my expectations with their security features and investment tools.",
                  avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
                  delay: "0.5s"
                }
              ].map((testimonial, index) => (
                <Card 
                  key={index} 
                  className="border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl animate-fade-in-up"
                  style={{ animationDelay: testimonial.delay }}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start mb-4">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}
                    </div>
                    <p className="text-blue-700/70 mb-6 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.avatar} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-blue-900">{testimonial.name}</h4>
                        <p className="text-sm text-blue-700/70">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Back to Projects */}
        <div className="bg-white border-t border-blue-100">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center">
              <Link to="/#work">
                <Button variant="outline" className="border-blue-400 text-blue-600 hover:bg-blue-50">
                  Back to REDOX Projects
                </Button>
              </Link>
              <Link to="#" onClick={() => window.location.href = "/project/finedge-banking"}>
                <Button variant="ghost" className="text-blue-600 hover:bg-blue-50 flex gap-2 items-center">
                  View Live Demo <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      {/* FinEdge Banking Footer */}
      <footer className="bg-blue-900 text-white pt-16 pb-8 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <h3 className="font-bold text-2xl mb-4">
                Fin<span className="text-blue-400">Edge</span>
              </h3>
              <p className="text-blue-200 mb-6">
                Next-generation banking for the digital age. Secure, innovative, and designed around you.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-blue-400 transition-colors p-2 bg-blue-800/50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors p-2 bg-blue-800/50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors p-2 bg-blue-800/50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-blue-400 transition-colors p-2 bg-blue-800/50 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Banking</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">Checking Accounts</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">Savings Accounts</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">Credit Cards</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">Loans & Mortgages</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">Wealth Management</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">Careers</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">Press Room</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">Security</a>
                </li>
                <li>
                  <a href="#" className="text-blue-200 hover:text-blue-400 transition-colors">Contact</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Get Started</h3>
              <p className="text-blue-200 mb-4">
                Open an account online in minutes or schedule a consultation with our banking experts.
              </p>
              <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white mb-3 rounded-xl">
                Open Account
              </Button>
              <Button variant="outline" className="w-full border-blue-400 text-blue-200 hover:bg-blue-800 rounded-xl">
                Find a Branch
              </Button>
              
              <div className="mt-6">
                <p className="text-sm text-blue-200 mb-2">Download our app:</p>
                <div className="flex gap-3">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-10" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-blue-300 text-sm">
              © {new Date().getFullYear()} FinEdge Banking Inc. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 text-sm text-blue-300">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
        
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all hover:transform hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </footer>
    </div>
  );
};

export default FinEdgeBanking;
