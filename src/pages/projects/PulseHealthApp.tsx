
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Activity, Battery, Clock, Users, Award, ArrowDown, Check, Smartphone, Shield, ChevronRight } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { toast } from "@/hooks/use-toast";

const PulseHealthApp = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const reviewsRef = useRef<HTMLDivElement>(null);

  // Animation effects on scroll using Intersection Observer
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

  // Handler for download button
  const handleDownload = () => {
    toast({
      title: "Download Started",
      description: "Thank you for downloading Pulse Health App!",
      duration: 5000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      {/* Custom Header */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-sm border-b border-rose-100">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-rose-500 to-rose-600 w-10 h-10 rounded-full flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-2xl text-rose-600">Pulse<span className="text-gray-800">Health</span></span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-rose-500 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-rose-500 transition-colors font-medium">How It Works</a>
              <a href="#reviews" className="text-gray-600 hover:text-rose-500 transition-colors font-medium">Reviews</a>
              <a href="#faq" className="text-gray-600 hover:text-rose-500 transition-colors font-medium">FAQ</a>
              <Button onClick={handleDownload} className="bg-rose-500 hover:bg-rose-600 text-white">
                Download App
              </Button>
            </nav>
            
            <Button className="md:hidden bg-rose-500 hover:bg-rose-600 text-white" variant="outline" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"/>
                <line x1="4" x2="20" y1="6" y2="6"/>
                <line x1="4" x2="20" y1="18" y2="18"/>
              </svg>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden" ref={heroRef}>
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 -right-48 w-96 h-96 bg-rose-200 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-rose-300 rounded-full opacity-20 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll opacity-0">
                <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-600 font-medium text-sm mb-4">Your Personal Health Coach</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
                  Your <span className="text-rose-500">Health</span>, In Your Hands
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                  Pulse Health App transforms how you monitor your wellbeing with real-time tracking, personalized insights, and health recommendations in one beautiful interface.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg group transition-transform hover:translate-y-[-2px]" onClick={handleDownload}>
                    Download Now <Smartphone className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button variant="outline" className="border-rose-400 text-rose-600 hover:bg-rose-50 px-8 py-6 text-lg">
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center mt-8">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white overflow-hidden">
                        <img 
                          src={`https://randomuser.me/api/portraits/women/${item + 10}.jpg`} 
                          alt="User avatar"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <p className="ml-4 text-gray-600 text-sm">
                    <span className="font-semibold text-gray-800">4.9/5</span> from over 10,000+ happy users
                  </p>
                </div>
              </div>
              
              <div className="relative animate-on-scroll opacity-0" style={{ animationDelay: "0.3s" }}>
                <div className="relative mx-auto max-w-xs md:max-w-sm">
                  <div className="relative z-10">
                    <img 
                      src="https://images.unsplash.com/photo-1581091196277-9f6070dd1dc3" 
                      alt="Pulse Health App Interface" 
                      className="rounded-3xl shadow-2xl border-4 border-white"
                    />
                  </div>
                  
                  {/* Floating UI Elements */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg animate-float">
                    <div className="flex items-center">
                      <Heart className="h-6 w-6 text-rose-500 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Heart Rate</p>
                        <p className="font-medium text-gray-900">72 bpm</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: "1s" }}>
                    <div className="flex items-center">
                      <Activity className="h-6 w-6 text-emerald-500 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Steps Today</p>
                        <p className="font-medium text-gray-900">8,342</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-12 -right-10 bg-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                    <div className="flex items-center">
                      <Clock className="h-6 w-6 text-blue-500 mr-2" />
                      <div>
                        <p className="text-sm text-gray-500">Sleep</p>
                        <p className="font-medium text-gray-900">7h 26m</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 mt-20 text-center">
            <a href="#features" className="inline-flex flex-col items-center text-gray-500 hover:text-rose-500 transition-colors">
              <span className="text-sm font-medium mb-2">Discover More</span>
              <ArrowDown className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </section>
        
        {/* Trusted By Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-gray-400 uppercase text-sm font-medium tracking-wider mb-8">Trusted By Healthcare Professionals</h2>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {["Mayo Clinic", "Cleveland Clinic", "Johns Hopkins", "Stanford Health", "UCSF Medical"].map((partner, index) => (
                <div key={index} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                  <p className="text-xl md:text-2xl font-bold text-gray-400">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20 md:py-28" ref={featuresRef}>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
              <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-600 font-medium text-sm mb-4">Features</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Everything You Need to Stay Healthy</h2>
              <p className="text-lg text-gray-700">Pulse Health App combines powerful health monitoring tools with an intuitive interface to help you achieve your wellness goals.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-time Health Monitoring",
                  description: "Track vital signs like heart rate, blood pressure, and sleep patterns throughout your day.",
                  icon: <Heart className="h-6 w-6 text-white" />,
                  bgClass: "bg-gradient-to-r from-rose-500 to-rose-600",
                  delay: "0s"
                },
                {
                  title: "Activity Tracking",
                  description: "Automatically log your steps, workouts, and calorie burn with accurate measurements.",
                  icon: <Activity className="h-6 w-6 text-white" />,
                  bgClass: "bg-gradient-to-r from-emerald-500 to-emerald-600",
                  delay: "0.1s"
                },
                {
                  title: "Battery-Efficient Design",
                  description: "Our optimized app runs continuously without draining your device battery.",
                  icon: <Battery className="h-6 w-6 text-white" />,
                  bgClass: "bg-gradient-to-r from-blue-500 to-blue-600",
                  delay: "0.2s"
                },
                {
                  title: "Sleep Analysis",
                  description: "Understand your sleep cycles and get recommendations for better rest.",
                  icon: <Clock className="h-6 w-6 text-white" />,
                  bgClass: "bg-gradient-to-r from-indigo-500 to-indigo-600",
                  delay: "0.3s"
                },
                {
                  title: "Community Challenges",
                  description: "Join health challenges with friends and keep each other motivated.",
                  icon: <Users className="h-6 w-6 text-white" />,
                  bgClass: "bg-gradient-to-r from-amber-500 to-amber-600",
                  delay: "0.4s"
                },
                {
                  title: "Privacy Protection",
                  description: "Your health data is encrypted and secure, giving you complete privacy control.",
                  icon: <Shield className="h-6 w-6 text-white" />,
                  bgClass: "bg-gradient-to-r from-purple-500 to-purple-600",
                  delay: "0.5s"
                },
              ].map((feature, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 animate-on-scroll opacity-0 group"
                  style={{ animationDelay: feature.delay }}
                >
                  <div className={`${feature.bgClass} p-3 rounded-lg inline-block mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 md:py-28 bg-gradient-to-b from-white to-rose-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
              <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-600 font-medium text-sm mb-4">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Simple to Use, Powerful Results</h2>
              <p className="text-lg text-gray-700">Getting started with Pulse Health is easy. Just follow these simple steps.</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between max-w-4xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Download & Connect",
                  description: "Download the app and connect your wearable devices for seamless health tracking.",
                  image: "https://images.unsplash.com/photo-1581091196277-9f6070dd1dc3",
                  delay: "0s"
                },
                {
                  step: "02",
                  title: "Personalize Your Dashboard",
                  description: "Set up your profile and customize what health metrics matter most to you.",
                  image: "https://images.unsplash.com/photo-1581091196277-9f6070dd1dc3",
                  delay: "0.2s"
                },
                {
                  step: "03",
                  title: "Get Actionable Insights",
                  description: "Receive personalized recommendations based on your unique health data.",
                  image: "https://images.unsplash.com/photo-1581091196277-9f6070dd1dc3",
                  delay: "0.4s"
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center animate-on-scroll opacity-0 relative"
                  style={{ animationDelay: item.delay }}
                >
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/4 right-[-30%] w-[60%] border-t-2 border-dashed border-rose-200 z-0">
                      <ChevronRight className="absolute top-[-12px] right-0 text-rose-300" />
                    </div>
                  )}
                  <div className="bg-white p-3 rounded-full shadow-lg border border-rose-100 mb-6 z-10">
                    <div className="bg-gradient-to-r from-rose-500 to-rose-600 rounded-full w-16 h-16 flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center max-w-xs">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg" onClick={handleDownload}>
                Download & Get Started
              </Button>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "500K+", label: "Downloads" },
                { value: "94%", label: "User Satisfaction" },
                { value: "30M+", label: "Health Records" },
                { value: "150+", label: "Connected Devices" }
              ].map((stat, index) => (
                <div key={index} className="animate-on-scroll opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 text-rose-400">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section id="reviews" className="py-20 md:py-28" ref={reviewsRef}>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
              <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-600 font-medium text-sm mb-4">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Our Users Say</h2>
              <p className="text-lg text-gray-700">Thousands of people have transformed their health with the Pulse Health App.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Pulse has completely transformed my fitness routine. The insights I get have helped me improve my marathon time by 12 minutes!",
                  name: "Jennifer K.",
                  role: "Marathon Runner",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  delay: "0s"
                },
                {
                  quote: "I recommend Pulse to all my patients. The accuracy of its measurements and the clarity of data presentation is unmatched in consumer health apps.",
                  name: "Dr. Michael L.",
                  role: "Cardiologist",
                  image: "https://randomuser.me/api/portraits/men/46.jpg",
                  delay: "0.2s"
                },
                {
                  quote: "Finally an app that helps me keep track of my family's health in one place. The medication reminders and appointment tracking are lifesavers.",
                  name: "Sarah T.",
                  role: "Busy Mom of Three",
                  image: "https://randomuser.me/api/portraits/women/64.jpg",
                  delay: "0.4s"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100 animate-on-scroll opacity-0"
                  style={{ animationDelay: testimonial.delay }}
                >
                  <div className="mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-amber-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-8 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0">
              <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-600 font-medium text-sm mb-4">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-700">Find answers to common questions about Pulse Health App.</p>
            </div>
            
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  question: "Is my health data secure?",
                  answer: "Yes, we take your privacy seriously. All your health data is encrypted and stored securely. We never share your personal information with third parties without your explicit consent."
                },
                {
                  question: "Which devices are compatible with Pulse Health App?",
                  answer: "Pulse Health App is compatible with most modern smartphones (iOS 12+ and Android 8+) and can connect to popular wearable devices including Apple Watch, Fitbit, Samsung Galaxy Watch, and many more."
                },
                {
                  question: "Is there a subscription fee?",
                  answer: "Pulse Health offers both free and premium plans. The free plan gives you access to basic health tracking features. The premium subscription unlocks advanced analytics, personalized health insights, and unlimited data storage for $9.99/month."
                },
                {
                  question: "How accurate are the health metrics?",
                  answer: "Pulse Health App relies on the sensors in your connected devices for data collection. The accuracy is on par with consumer-grade health monitoring devices. While not medical-grade, our app provides reliable insights for general wellness tracking."
                },
                {
                  question: "Can I export my health data?",
                  answer: "Yes, you can export your health data in various formats (CSV, PDF) or sync with other health platforms through our integrations. This makes it easy to share information with your healthcare providers."
                }
              ].map((item, index) => (
                <Collapsible key={index} className="border border-gray-200 rounded-lg bg-white overflow-hidden animate-on-scroll opacity-0" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CollapsibleTrigger className="w-full text-left py-4 px-6 font-medium text-gray-900 flex justify-between items-center hover:bg-gray-50">
                    {item.question}
                    <ChevronRight className="h-5 w-5 transition-transform ui-open:rotate-90" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-4 text-gray-600">{item.answer}</CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 md:py-28 bg-gradient-to-r from-rose-500 to-rose-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Take Control of Your Health Today</h2>
              <p className="text-xl mb-10 text-white/90">Join over 500,000 users who have transformed their health with Pulse Health App.</p>
              
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="#" onClick={handleDownload} className="flex items-center bg-black text-white rounded-xl px-6 py-4 hover:bg-gray-900 transition-colors">
                  <div className="mr-3 text-3xl">⚡</div>
                  <div className="text-left">
                    <p className="text-xs text-white/80">Download on the</p>
                    <p className="font-semibold">App Store</p>
                  </div>
                </a>
                <a href="#" onClick={handleDownload} className="flex items-center bg-black text-white rounded-xl px-6 py-4 hover:bg-gray-900 transition-colors">
                  <div className="mr-3 text-3xl">📱</div>
                  <div className="text-left">
                    <p className="text-xs text-white/80">Get it on</p>
                    <p className="font-semibold">Google Play</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Back to Projects */}
        <div className="container mx-auto px-4 py-8">
          <Link to="/#work" className="inline-flex items-center text-rose-500 hover:text-rose-600 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to REDOX Devs Portfolio
          </Link>
        </div>
      </main>
      
      {/* Custom Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-gradient-to-r from-rose-500 to-rose-600 w-8 h-8 rounded-full flex items-center justify-center">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold text-xl">Pulse<span className="text-rose-400">Health</span></span>
              </div>
              <p className="text-gray-400 mb-4">
                Your personal health companion that helps you live healthier, happier, and longer.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-gray-400 hover:text-rose-400 transition-colors">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Updates</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Beta Program</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-gray-400 hover:text-rose-400 transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Press</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Pulse Health App. All rights reserved. Designed by <Link to="/" className="text-rose-400 hover:text-rose-300">REDOX Devs</Link>
            </div>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-rose-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PulseHealthApp;

