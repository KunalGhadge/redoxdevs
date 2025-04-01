
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Recycle, Trees, BarChart4, GanttChart, Wind, CheckCircle2, XCircle, Droplets, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EcoSolutions = () => {
  // Simple impact calculator state
  const [selectedProduct, setSelectedProduct] = React.useState("bamboo");
  
  const getImpactData = () => {
    switch(selectedProduct) {
      case "bamboo":
        return {
          plastic: 12.5,
          water: 840,
          carbon: 3.2
        };
      case "straw":
        return {
          plastic: 5.8,
          water: 220,
          carbon: 1.6
        };
      case "bottle":
        return {
          plastic: 28.4,
          water: 1250,
          carbon: 5.8
        };
      default:
        return {
          plastic: 0,
          water: 0,
          carbon: 0
        };
    }
  };
  
  const impactData = getImpactData();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm mb-4">Sustainable Products</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-emerald-900">
                  Small Changes, <span className="text-emerald-600">Big Impact</span>
                </h1>
                <p className="text-lg md:text-xl text-emerald-800 mb-8">
                  EcoSolutions offers everyday sustainable alternatives that help reduce your environmental footprint without compromising on quality or convenience.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg">
                    Shop Now <ArrowRight className="ml-2" />
                  </Button>
                  <Button variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-6 text-lg">
                    Calculate Your Impact
                  </Button>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  {["Plastic-free", "Carbon Neutral", "Ethically Sourced", "Biodegradable"].map((tag, index) => (
                    <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800">
                      <CheckCircle2 className="h-4 w-4 mr-1" /> {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-emerald-100 relative z-10">
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09" 
                    alt="EcoSolutions Products" 
                    className="rounded-xl"
                  />
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-6 -left-6 bg-emerald-500 rounded-full p-4 shadow-lg hidden md:flex">
                    <Leaf className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-lg border border-emerald-100 hidden md:block">
                    <div className="flex items-center">
                      <Recycle className="h-6 w-6 text-emerald-600 mr-2" />
                      <div>
                        <p className="text-xs text-emerald-800">Our Impact</p>
                        <p className="font-semibold text-emerald-900">10M+ plastics saved</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Background Elements */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
                  <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-emerald-300/20 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-teal-300/20 blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Impact Calculator Section */}
        <section className="py-16 md:py-24 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm mb-4">Environmental Impact</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-900">Calculate Your Environmental Savings</h2>
              <p className="text-lg text-emerald-800">See the real difference you can make by switching to sustainable alternatives in your everyday life.</p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md border border-emerald-100 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-emerald-900">Select a Product</h3>
                  <div className="space-y-3">
                    <div 
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedProduct === "bamboo" ? "bg-emerald-100 border-emerald-300" : "border-gray-200 hover:bg-emerald-50"
                      }`}
                      onClick={() => setSelectedProduct("bamboo")}
                    >
                      <div className="flex items-center">
                        <div className="bg-emerald-600 rounded-full p-2 mr-4">
                          <Leaf className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-emerald-900">Bamboo Toothbrush</p>
                          <p className="text-sm text-emerald-700">Replace your plastic toothbrush</p>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedProduct === "straw" ? "bg-emerald-100 border-emerald-300" : "border-gray-200 hover:bg-emerald-50"
                      }`}
                      onClick={() => setSelectedProduct("straw")}
                    >
                      <div className="flex items-center">
                        <div className="bg-emerald-600 rounded-full p-2 mr-4">
                          <Recycle className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-emerald-900">Reusable Metal Straw</p>
                          <p className="text-sm text-emerald-700">Replace disposable plastic straws</p>
                        </div>
                      </div>
                    </div>
                    
                    <div 
                      className={`p-4 rounded-lg border cursor-pointer transition-colors ${
                        selectedProduct === "bottle" ? "bg-emerald-100 border-emerald-300" : "border-gray-200 hover:bg-emerald-50"
                      }`}
                      onClick={() => setSelectedProduct("bottle")}
                    >
                      <div className="flex items-center">
                        <div className="bg-emerald-600 rounded-full p-2 mr-4">
                          <Droplets className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-emerald-900">Reusable Water Bottle</p>
                          <p className="text-sm text-emerald-700">Replace disposable plastic bottles</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-emerald-900">Your Annual Impact</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-emerald-800">Plastic Waste Reduced</p>
                        <p className="font-medium text-emerald-900">{impactData.plastic} kg</p>
                      </div>
                      <div className="w-full h-3 bg-emerald-100 rounded-full">
                        <div 
                          className="h-full bg-emerald-600 rounded-full" 
                          style={{ width: `${Math.min(impactData.plastic * 2, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-emerald-800">Water Saved</p>
                        <p className="font-medium text-emerald-900">{impactData.water} liters</p>
                      </div>
                      <div className="w-full h-3 bg-emerald-100 rounded-full">
                        <div 
                          className="h-full bg-emerald-600 rounded-full" 
                          style={{ width: `${Math.min(impactData.water / 14, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <p className="text-emerald-800">Carbon Footprint Reduction</p>
                        <p className="font-medium text-emerald-900">{impactData.carbon} kg CO₂</p>
                      </div>
                      <div className="w-full h-3 bg-emerald-100 rounded-full">
                        <div 
                          className="h-full bg-emerald-600 rounded-full" 
                          style={{ width: `${Math.min(impactData.carbon * 8, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      Shop {selectedProduct === "bamboo" ? "Bamboo Toothbrushes" : selectedProduct === "straw" ? "Reusable Straws" : "Water Bottles"}
                    </Button>
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
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm mb-4">Our Approach</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-900">Sustainable From Start to Finish</h2>
              <p className="text-lg text-emerald-800">Every EcoSolutions product is designed with sustainability in mind, from materials to manufacturing to packaging.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Renewable Materials",
                  description: "Our products are made from rapidly renewable resources like bamboo, organic cotton, and recycled materials.",
                  icon: <Leaf className="h-6 w-6 text-emerald-600" />,
                },
                {
                  title: "Ethical Production",
                  description: "We partner with factories that provide fair wages, safe working conditions, and minimize environmental impact.",
                  icon: <GanttChart className="h-6 w-6 text-emerald-600" />,
                },
                {
                  title: "Zero-Waste Packaging",
                  description: "All our packaging is plastic-free, compostable, and made from recycled materials.",
                  icon: <Recycle className="h-6 w-6 text-emerald-600" />,
                },
                {
                  title: "Carbon Neutral",
                  description: "We offset all carbon emissions from production and shipping through verified reforestation projects.",
                  icon: <Trees className="h-6 w-6 text-emerald-600" />,
                },
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-emerald-100 hover:shadow-lg transition-all duration-300">
                  <div className="bg-emerald-100 p-3 rounded-lg inline-block mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-emerald-900">{feature.title}</h3>
                  <p className="text-emerald-800">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Before/After Visualization */}
        <section className="py-16 md:py-24 bg-emerald-900 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-800 text-emerald-100 font-medium text-sm mb-4">Visualize The Difference</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">See The Impact Of Your Choice</h2>
              <p className="text-lg text-emerald-100">The choices we make today shape the planet we leave for tomorrow.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-emerald-800 rounded-xl p-6 text-center">
                <div className="rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09" 
                    alt="Plastic Waste" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">Before: Single-Use Plastic</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-emerald-100">
                    <XCircle className="h-5 w-5 text-red-400 mr-3" />
                    <p>Takes 450+ years to decompose</p>
                  </div>
                  <div className="flex items-center text-emerald-100">
                    <XCircle className="h-5 w-5 text-red-400 mr-3" />
                    <p>Releases microplastics into waterways</p>
                  </div>
                  <div className="flex items-center text-emerald-100">
                    <XCircle className="h-5 w-5 text-red-400 mr-3" />
                    <p>Petroleum-based production</p>
                  </div>
                  <div className="flex items-center text-emerald-100">
                    <XCircle className="h-5 w-5 text-red-400 mr-3" />
                    <p>Only 9% of plastic is recycled globally</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-emerald-600 rounded-xl p-6 text-center">
                <div className="rounded-lg overflow-hidden mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09" 
                    alt="Sustainable Products" 
                    className="w-full h-64 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4">After: EcoSolutions Products</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center text-white">
                    <CheckCircle2 className="h-5 w-5 text-emerald-200 mr-3" />
                    <p>Biodegradable within 6 months</p>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle2 className="h-5 w-5 text-emerald-200 mr-3" />
                    <p>Plastic-free materials and packaging</p>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle2 className="h-5 w-5 text-emerald-200 mr-3" />
                    <p>Made from renewable resources</p>
                  </div>
                  <div className="flex items-center text-white">
                    <CheckCircle2 className="h-5 w-5 text-emerald-200 mr-3" />
                    <p>Carbon-neutral production and shipping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Categories */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm mb-4">Our Products</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-900">Sustainable Alternatives For Everyday Life</h2>
              <p className="text-lg text-emerald-800">Browse our collections of eco-friendly products designed to replace single-use plastics in your daily routine.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Bathroom Essentials",
                  description: "Bamboo toothbrushes, solid shampoo bars, safety razors, and more.",
                  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                },
                {
                  title: "Kitchen Products",
                  description: "Reusable food wraps, bamboo utensils, stainless steel straws, and more.",
                  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                },
                {
                  title: "On-The-Go Items",
                  description: "Reusable water bottles, coffee cups, shopping bags, and travel cutlery.",
                  image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09"
                },
              ].map((category, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl bg-emerald-900">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900 to-transparent"></div>
                  <div className="relative p-6 flex flex-col h-full min-h-[320px]">
                    <div className="flex-grow"></div>
                    <h3 className="text-xl font-semibold mb-2 text-white">{category.title}</h3>
                    <p className="text-emerald-100 mb-4">{category.description}</p>
                    <Button className="mt-auto self-start bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-500">
                      Shop Collection
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-emerald-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-700 font-medium text-sm mb-4">Customer Stories</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-900">From Our Community</h2>
              <p className="text-lg text-emerald-800">See how our customers are making a difference with small sustainable swaps.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Emily R.",
                  location: "Portland, OR",
                  quote: "I've been gradually replacing plastic items in my home with EcoSolutions products. The bamboo toothbrushes were my first purchase, and now my bathroom is completely plastic-free!",
                },
                {
                  name: "Marcus T.",
                  location: "Austin, TX",
                  quote: "The impact calculator was eye-opening. I had no idea how much waste I was generating. After switching to the reusable water bottle, I've saved hundreds of plastic bottles from landfills.",
                },
                {
                  name: "Sophia K.",
                  location: "Chicago, IL",
                  quote: "As a mom of three, I was worried sustainable products wouldn't hold up to daily use. I'm happy to say EcoSolutions products are not only eco-friendly but extremely durable!",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-emerald-100">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-emerald-100 mr-4"></div>
                    <div>
                      <p className="font-medium text-emerald-900">{testimonial.name}</p>
                      <p className="text-sm text-emerald-700">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-emerald-800">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="mt-4 flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-emerald-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Sustainable Movement</h2>
              <p className="text-lg mb-8 text-emerald-100">Start your journey to a more sustainable lifestyle today with EcoSolutions products.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white border border-emerald-500 px-8 py-6 text-lg">
                  Shop Collection <ArrowRight className="ml-2" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Learn More About Our Mission
                </Button>
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

export default EcoSolutions;
