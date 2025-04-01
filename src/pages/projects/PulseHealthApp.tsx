
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Activity, Battery, Clock, Users, Award } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PulseHealthApp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-600 font-medium text-sm mb-4">Health Monitoring Simplified</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-navy-dark">
                  Your <span className="text-rose-500">Health</span>, In Your Hands
                </h1>
                <p className="text-lg md:text-xl text-navy-light mb-8">
                  Pulse Health App gives you a complete picture of your wellbeing with real-time monitoring, personalized insights, and health tracking in one beautiful interface.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-6 text-lg">
                    Download App <ArrowRight className="ml-2" />
                  </Button>
                  <Button variant="outline" className="px-8 py-6 text-lg">
                    Watch How It Works
                  </Button>
                </div>
                <div className="flex items-center mt-8">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((item) => (
                      <div key={item} className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white"></div>
                    ))}
                  </div>
                  <p className="ml-4 text-navy-light text-sm">
                    <span className="font-semibold text-navy-dark">4.9/5</span> from over 10,000+ happy users
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-3xl p-8 relative z-10">
                  <div className="relative mx-auto max-w-xs">
                    <img 
                      src="https://images.unsplash.com/photo-1581093196277-9f6070dd1dc3" 
                      alt="Pulse Health App Interface" 
                      className="rounded-3xl shadow-lg border border-white"
                    />
                    
                    {/* Floating UI Elements */}
                    <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                      <div className="flex items-center">
                        <Heart className="h-6 w-6 text-rose-500 mr-2" />
                        <div>
                          <p className="text-sm text-navy-light">Heart Rate</p>
                          <p className="font-medium text-navy-dark">72 bpm</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-lg">
                      <div className="flex items-center">
                        <Activity className="h-6 w-6 text-emerald-500 mr-2" />
                        <div>
                          <p className="text-sm text-navy-light">Steps Today</p>
                          <p className="font-medium text-navy-dark">8,342</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                  <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-rose-300/20 blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-300/20 blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-600 font-medium text-sm mb-4">Features</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-dark">Everything You Need to Stay Healthy</h2>
              <p className="text-lg text-navy-light">Pulse Health App combines powerful health monitoring tools with an intuitive interface to help you achieve your wellness goals.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Real-time Health Monitoring",
                  description: "Track vital signs like heart rate, blood pressure, and sleep patterns throughout your day.",
                  icon: <Heart className="h-6 w-6 text-rose-500" />,
                },
                {
                  title: "Activity Tracking",
                  description: "Automatically log your steps, workouts, and calorie burn with accurate measurements.",
                  icon: <Activity className="h-6 w-6 text-rose-500" />,
                },
                {
                  title: "Battery-Efficient Design",
                  description: "Our optimized app runs continuously without draining your device battery.",
                  icon: <Battery className="h-6 w-6 text-rose-500" />,
                },
                {
                  title: "Sleep Analysis",
                  description: "Understand your sleep cycles and get recommendations for better rest.",
                  icon: <Clock className="h-6 w-6 text-rose-500" />,
                },
                {
                  title: "Community Challenges",
                  description: "Join health challenges with friends and keep each other motivated.",
                  icon: <Users className="h-6 w-6 text-rose-500" />,
                },
                {
                  title: "Award-Winning Design",
                  description: "Enjoy an intuitive interface that has won multiple design awards.",
                  icon: <Award className="h-6 w-6 text-rose-500" />,
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                  <div className="bg-rose-50 p-3 rounded-lg inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-navy-dark">{feature.title}</h3>
                  <p className="text-navy-light">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* App Flow Demonstration */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-rose-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-600 font-medium text-sm mb-4">App Experience</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-dark">Designed With You In Mind</h2>
              <p className="text-lg text-navy-light">Experience our intuitive, user-friendly interface that makes health tracking a joy.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
              {[
                {
                  title: "Connect Your Devices",
                  description: "Seamlessly pair with your smartwatch, fitness tracker, or medical devices.",
                  image: "https://images.unsplash.com/photo-1581093196277-9f6070dd1dc3",
                  step: "Step 1",
                },
                {
                  title: "Personalize Your Dashboard",
                  description: "Customize what health metrics matter most to you for quick access.",
                  image: "https://images.unsplash.com/photo-1581093196277-9f6070dd1dc3",
                  step: "Step 2",
                },
                {
                  title: "Get Personalized Insights",
                  description: "Receive AI-powered recommendations based on your health data.",
                  image: "https://images.unsplash.com/photo-1581093196277-9f6070dd1dc3",
                  step: "Step 3",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-white p-3 rounded-2xl shadow-lg border border-gray-100 mb-6">
                    <div className="aspect-[9/16] w-48 rounded-xl overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-medium mb-2">{item.step}</span>
                  <h3 className="text-lg font-semibold text-navy-dark mb-2 text-center">{item.title}</h3>
                  <p className="text-navy-light text-center max-w-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-rose-100 text-rose-600 font-medium text-sm mb-4">Testimonials</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy-dark">What Our Users Say</h2>
              <p className="text-lg text-navy-light">Thousands of people have transformed their health with the Pulse Health App.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Jennifer K.",
                  role: "Marathon Runner",
                  quote: "Pulse has completely changed how I train. The insights I get from my daily activities have helped me improve my marathon time by 12 minutes!",
                },
                {
                  name: "Dr. Michael L.",
                  role: "Cardiologist",
                  quote: "I recommend Pulse to all my patients. The accuracy of its measurements and the clarity of data presentation is unmatched in consumer health apps.",
                },
                {
                  name: "Sarah T.",
                  role: "Busy Mom of Three",
                  quote: "Finally an app that helps me keep track of my family's health in one place. The medication reminders and appointment tracking are lifesavers.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-rose-100 mr-4"></div>
                    <div>
                      <p className="font-medium text-navy-dark">{testimonial.name}</p>
                      <p className="text-sm text-navy-light">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-navy-light italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-navy-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Take Control of Your Health Today</h2>
              <p className="text-lg mb-8 text-white/90">Join over 500,000 users who have transformed their health with Pulse Health App.</p>
              
              <div className="flex flex-col md:flex-row justify-center gap-6">
                <a href="#" className="flex items-center bg-black text-white rounded-xl px-6 py-4 hover:bg-gray-900 transition-colors">
                  <div className="mr-3 text-3xl">⚡</div>
                  <div className="text-left">
                    <p className="text-xs text-white/80">Download on the</p>
                    <p className="font-semibold">App Store</p>
                  </div>
                </a>
                <a href="#" className="flex items-center bg-black text-white rounded-xl px-6 py-4 hover:bg-gray-900 transition-colors">
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

export default PulseHealthApp;
