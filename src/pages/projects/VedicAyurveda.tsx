
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Flower, Sun, Moon, Droplets, Wind, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const VedicAyurveda = () => {
  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="absolute top-0 right-0 -z-10">
            <svg width="800" height="800" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" opacity="0.1">
              <path fill="#A05C2A" d="M37.7,-48.3C47.8,-39.9,54.3,-26.8,59.8,-11.9C65.3,3.1,69.8,19.8,64,31.4C58.2,43,42.1,49.4,26.4,54.6C10.8,59.8,-4.5,63.7,-18.1,60.2C-31.7,56.7,-43.6,45.8,-51.8,32.7C-59.9,19.6,-64.4,4.3,-62.9,-10.7C-61.5,-25.7,-54.3,-40.4,-43.2,-48.8C-32,-57.3,-16,-59.4,-0.9,-58.3C14.2,-57.2,27.5,-56,37.7,-48.3Z" transform="translate(100 100)" />
            </svg>
          </div>
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-4">Ancient Wisdom, Modern Science</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-amber-900">
                  Discover Your Natural <span className="text-amber-600">Balance</span>
                </h1>
                <p className="text-lg md:text-xl text-amber-800 mb-8">
                  Vedic Ayurveda brings the ancient healing wisdom of India to your modern lifestyle with our premium collection of authentic Ayurvedic products.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-amber-700 hover:bg-amber-800 text-amber-50 px-8 py-6 text-lg">
                    Shop Collection <ArrowRight className="ml-2" />
                  </Button>
                  <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50 px-8 py-6 text-lg">
                    Find Your Dosha
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10 bg-white rounded-2xl p-8 shadow-md border border-amber-100">
                  <img 
                    src="https://images.unsplash.com/photo-1611074818835-ccd98ea069f8" 
                    alt="Vedic Ayurveda Products" 
                    className="rounded-xl"
                  />
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-6 -left-6 bg-amber-100 p-4 rounded-full shadow-lg">
                    <Leaf className="h-8 w-8 text-amber-700" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-amber-100 p-4 rounded-full shadow-lg">
                    <Flower className="h-8 w-8 text-amber-700" />
                  </div>
                </div>
                
                {/* Background Pattern */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                  <svg width="400" height="400" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" opacity="0.15">
                    <path fill="#A05C2A" d="M25,-32.9C33.2,-28.8,41.3,-23.7,44.9,-16.5C48.5,-9.4,47.6,-0.3,45.9,9.4C44.1,19.1,41.6,29.3,35,35.9C28.4,42.6,17.9,45.7,7.9,45.6C-2.1,45.5,-12.7,42.2,-21.3,37C-30,31.8,-36.7,24.8,-42.4,15.8C-48.1,6.8,-52.8,-4.4,-50.3,-13.2C-47.9,-22,-38.4,-28.5,-29,-33.1C-19.6,-37.8,-9.8,-40.6,-0.6,-39.7C8.6,-38.9,16.8,-37,25,-32.9Z" transform="translate(50 50)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Three Doshas Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-4">The Three Doshas</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">Balance Your Mind, Body & Spirit</h2>
              <p className="text-lg text-amber-800">Discover how Ayurveda's ancient wisdom can help you find your natural balance through understanding your unique constitution.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Vata",
                  description: "The energy of movement associated with air and space. When in balance, Vata promotes creativity and vitality.",
                  icon: <Wind className="h-10 w-10 text-amber-700" />,
                  color: "bg-blue-50 border-blue-100",
                  textColor: "text-blue-800"
                },
                {
                  title: "Pitta",
                  description: "The energy of transformation associated with fire and water. When in balance, Pitta promotes intelligence and understanding.",
                  icon: <Sun className="h-10 w-10 text-amber-700" />,
                  color: "bg-red-50 border-red-100",
                  textColor: "text-red-800"
                },
                {
                  title: "Kapha",
                  description: "The energy of structure associated with earth and water. When in balance, Kapha promotes love and compassion.",
                  icon: <Droplets className="h-10 w-10 text-amber-700" />,
                  color: "bg-green-50 border-green-100",
                  textColor: "text-green-800"
                },
              ].map((dosha, index) => (
                <div key={index} className={`${dosha.color} p-8 rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-300`}>
                  <div className="flex justify-center mb-6">
                    {dosha.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center text-amber-900">{dosha.title}</h3>
                  <p className={`${dosha.textColor} text-center`}>{dosha.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-amber-700 hover:bg-amber-800 text-amber-50">
                Take Dosha Quiz
              </Button>
            </div>
          </div>
        </section>
        
        {/* Featured Products */}
        <section className="py-16 md:py-24 bg-amber-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-4">Premium Products</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">Our Bestselling Formulations</h2>
              <p className="text-lg text-amber-800">Each product is crafted using traditional methods with ingredients sourced directly from organic farms in India.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Ashwagandha Root Powder",
                  price: "$24.95",
                  description: "Supports stress relief and energy",
                  image: "https://images.unsplash.com/photo-1611074818835-ccd98ea069f8"
                },
                {
                  name: "Triphala Tablets",
                  price: "$19.95",
                  description: "Supports digestive health",
                  image: "https://images.unsplash.com/photo-1611074818835-ccd98ea069f8"
                },
                {
                  name: "Turmeric Curcumin",
                  price: "$22.95",
                  description: "Supports joint health and immunity",
                  image: "https://images.unsplash.com/photo-1611074818835-ccd98ea069f8"
                },
                {
                  name: "Brahmi Extract",
                  price: "$27.95",
                  description: "Supports cognitive function",
                  image: "https://images.unsplash.com/photo-1611074818835-ccd98ea069f8"
                },
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm border border-amber-100 overflow-hidden hover:shadow-md transition-shadow duration-300 group">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-1 text-amber-900">{product.name}</h3>
                    <p className="text-amber-800 mb-2">{product.description}</p>
                    <div className="flex justify-between items-center mt-4">
                      <span className="font-semibold text-lg text-amber-900">{product.price}</span>
                      <Button variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-amber-700 hover:bg-amber-800 text-amber-50">
                View All Products
              </Button>
            </div>
          </div>
        </section>
        
        {/* Ayurvedic Lifestyle */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
              <path fill="#A05C2A" d="M0,0 L100,0 L100,100 L0,100 Z" />
              
              <circle cx="20" cy="20" r="5" fill="#8D4925" />
              <circle cx="40" cy="70" r="8" fill="#8D4925" />
              <circle cx="80" cy="40" r="6" fill="#8D4925" />
              <circle cx="70" cy="90" r="7" fill="#8D4925" />
              <circle cx="10" cy="50" r="4" fill="#8D4925" />
              <circle cx="90" cy="10" r="9" fill="#8D4925" />
            </svg>
          </div>
        
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-amber-100 text-amber-800 font-medium text-sm mb-4">Holistic Living</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">Embrace the Ayurvedic Lifestyle</h2>
              <p className="text-lg text-amber-800">Ayurveda is not just about products but a complete lifestyle that promotes harmony with nature and yourself.</p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-md border border-amber-100">
                <h3 className="text-2xl font-semibold mb-6 text-amber-900">Daily Practices (Dinacharya)</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Morning Routine",
                      description: "Wake before sunrise, drink warm water, scrape tongue, and practice oil pulling for oral health.",
                      icon: <Sun className="h-6 w-6 text-amber-700" />,
                    },
                    {
                      title: "Mindful Eating",
                      description: "Eat your main meal at midday when digestive fire is strongest and favor foods that balance your dosha.",
                      icon: <Flower className="h-6 w-6 text-amber-700" />,
                    },
                    {
                      title: "Evening Routine",
                      description: "Wind down with calming activities, avoid electronic devices, and retire early for quality sleep.",
                      icon: <Moon className="h-6 w-6 text-amber-700" />,
                    },
                  ].map((practice, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-amber-100 p-2 rounded-lg mr-4">
                        {practice.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-amber-900 mb-1">{practice.title}</h4>
                        <p className="text-amber-800">{practice.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-amber-700 to-amber-900 p-8 rounded-xl shadow-md text-amber-50">
                <h3 className="text-2xl font-semibold mb-6">Book a Consultation</h3>
                <p className="mb-6">Discover your unique constitution and receive personalized recommendations from our certified Ayurvedic practitioners.</p>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 rounded-lg bg-white/10 border border-amber-50/30 text-amber-50 placeholder:text-amber-50/70 focus:outline-none focus:ring-2 focus:ring-amber-50/50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 rounded-lg bg-white/10 border border-amber-50/30 text-amber-50 placeholder:text-amber-50/70 focus:outline-none focus:ring-2 focus:ring-amber-50/50"
                    />
                  </div>
                  <div>
                    <select className="w-full p-3 rounded-lg bg-white/10 border border-amber-50/30 text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-50/50">
                      <option value="" disabled selected>Consultation Type</option>
                      <option value="dosha">Dosha Assessment</option>
                      <option value="diet">Diet Planning</option>
                      <option value="herbs">Herbal Recommendations</option>
                    </select>
                  </div>
                  <Button className="w-full bg-amber-50 text-amber-900 hover:bg-amber-100">
                    Schedule Consultation
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-amber-900 text-amber-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Ayurvedic Journey Today</h2>
              <p className="text-lg mb-8 text-amber-50/90">Join thousands who have discovered the transformative power of Vedic Ayurveda's authentic products.</p>
              <Button className="bg-amber-50 text-amber-900 hover:bg-amber-100 px-8 py-6 text-lg">
                Shop the Collection
              </Button>
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

export default VedicAyurveda;
