
import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Info, BadgeDollarSign, BadgeIndianRupee, CircleHelp, CheckCircle2, ArrowRight, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface WebsiteRecommendation {
  pages: number;
  complexity: number;
  features: {
    responsive: boolean;
    animations: boolean;
    contentManagement: boolean;
    seo: boolean;
    analytics: boolean;
  };
  timeline: number;
}

const BudgetCalculatorSection = () => {
  const { toast } = useToast();
  const [currency, setCurrency] = useState<"USD" | "INR">("USD");
  const [pages, setPages] = useState<number>(5);
  const [complexity, setComplexity] = useState<number>(2); // 1-5 scale
  const [features, setFeatures] = useState<{
    responsive: boolean;
    animations: boolean;
    contentManagement: boolean;
    seo: boolean;
    analytics: boolean;
  }>({
    responsive: true,
    animations: false,
    contentManagement: false,
    seo: false,
    analytics: false,
  });
  const [timeline, setTimeline] = useState<number>(30); // days
  const [userBudget, setUserBudget] = useState<string>("");
  const [showNegotiableMessage, setShowNegotiableMessage] = useState<boolean>(false);
  const [websiteTopic, setWebsiteTopic] = useState<string>("");
  const [savingsPercentage, setSavingsPercentage] = useState<number>(15); // Default savings percentage
  
  // Conversion rate (approximate)
  const usdToInr = 82.5;
  
  // Updated cost calculations based on new rates
  // Base page cost updated
  const basePageCost = currency === "USD" ? 36 : 3000;
  
  // Calculate page cost
  const pageCost = pages * basePageCost;
  
  // Complexity cost based on level (1-5)
  const getComplexityCost = () => {
    if (complexity === 1) return currency === "USD" ? 90 : 7500;
    if (complexity === 5) return currency === "USD" ? 145 : 12000;
    
    // Linear interpolation between min and max values
    const ratio = (complexity - 1) / 4;
    const minCost = currency === "USD" ? 90 : 7500;
    const maxCost = currency === "USD" ? 145 : 12000;
    
    return minCost + Math.round(ratio * (maxCost - minCost));
  };
  
  const complexityCost = getComplexityCost();
  
  // Updated feature costs
  const featureCosts = {
    responsive: currency === "USD" ? 120 : 10000,
    animations: currency === "USD" ? 180 : 15000,
    contentManagement: currency === "USD" ? 215 : 18000,
    seo: currency === "USD" ? 150 : 12500,
    analytics: currency === "USD" ? 90 : 7500,
  };
  
  // Calculate total feature cost
  const featureCost = Object.entries(features).reduce((total, [key, isSelected]) => {
    if (isSelected) {
      return total + featureCosts[key as keyof typeof featureCosts];
    }
    return total;
  }, 0);
  
  // Time factor - rush jobs cost more, relaxed jobs cost less
  const getTimelineFactor = () => {
    if (timeline <= 7) return { factor: 1.3, extra: currency === "USD" ? 120 : 10000 };
    if (timeline < 14) return { factor: 1.2, extra: currency === "USD" ? 60 : 5000 };
    if (timeline <= 21) return { factor: 1.0, extra: 0 }; // Standard
    return { factor: 0.95, discount: currency === "USD" ? 60 : 5000 }; // Relaxed
  };
  
  const timelineAdjustment = getTimelineFactor();
  
  // Calculate final estimate
  const subtotal = pageCost + complexityCost + featureCost;
  let estimatedCost = timelineAdjustment.factor ? Math.round(subtotal * timelineAdjustment.factor) : subtotal;
  
  // Apply any extra costs or discounts
  if (timelineAdjustment.extra) estimatedCost += timelineAdjustment.extra;
  if (timelineAdjustment.discount) estimatedCost -= timelineAdjustment.discount;
  
  // Traditional agency rates (for comparison)
  const traditionalAgencyMultiplier = 1.25; // Traditional agencies charge about 25% more
  const traditionalCost = Math.round(estimatedCost * traditionalAgencyMultiplier);
  const moneySaved = traditionalCost - estimatedCost;
  
  // Format currency
  const formatCurrency = (amount: number) => {
    if (currency === "USD") {
      return `$${amount.toLocaleString()}`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
  };

  // Get website recommendations based on budget and topic
  const getRecommendations = (budget: number, topic: string): WebsiteRecommendation => {
    const normalizedBudget = currency === "INR" ? budget / usdToInr : budget;
    
    // Default minimal recommendation
    const defaultRecommendation: WebsiteRecommendation = {
      pages: 1,
      complexity: 1,
      features: {
        responsive: true,
        animations: false,
        contentManagement: false,
        seo: false,
        analytics: false
      },
      timeline: 30
    };
    
    // For small budgets
    if (normalizedBudget < 500) {
      return defaultRecommendation;
    }
    
    // For medium budgets
    else if (normalizedBudget < 1500) {
      return {
        pages: 3,
        complexity: 2,
        features: {
          responsive: true,
          animations: topic.includes("modern") || topic.includes("creative"),
          contentManagement: false,
          seo: topic.includes("seo") || topic.includes("marketing") || topic.includes("business"),
          analytics: false
        },
        timeline: 21
      };
    }
    
    // For large budgets
    else {
      return {
        pages: 5,
        complexity: 3,
        features: {
          responsive: true,
          animations: true,
          contentManagement: topic.includes("blog") || topic.includes("news") || topic.includes("update"),
          seo: true,
          analytics: topic.includes("business") || topic.includes("marketing") || topic.includes("sales")
        },
        timeline: 30
      };
    }
  };
  
  // Apply recommendations
  const applyRecommendations = () => {
    if (!userBudget || isNaN(Number(userBudget)) || !websiteTopic) {
      toast({
        title: "Please provide both budget and website topic",
        description: "We need these details to give you the best recommendations",
      });
      return;
    }
    
    const budget = Number(userBudget);
    const recommendations = getRecommendations(budget, websiteTopic.toLowerCase());
    
    setPages(recommendations.pages);
    setComplexity(recommendations.complexity);
    setFeatures(recommendations.features);
    setTimeline(recommendations.timeline);
    
    toast({
      title: "Recommendations Applied!",
      description: "We've optimized your options based on your budget and needs.",
    });
  };
  
  // Check if user budget is lower than our estimate
  const handleBudgetCheck = () => {
    if (!userBudget || isNaN(Number(userBudget))) {
      toast({
        title: "Please enter a valid budget",
        description: "Enter a number without currency symbols",
      });
      return;
    }
    
    const budget = Number(userBudget);
    const difference = estimatedCost - budget;
    const percentDifference = (difference / estimatedCost) * 100;
    
    if (budget < estimatedCost) {
      if (percentDifference > 30) {
        toast({
          title: "Budget Significantly Lower",
          description: "Your budget is significantly lower than our estimate. Please consider adjusting your requirements or contact us to discuss options.",
        });
      } else {
        setShowNegotiableMessage(true);
        toast({
          title: "We Can Work With Your Budget",
          description: "We're flexible and can discuss options to meet your budget. Let's schedule a consultation!",
        });
      }
    } else {
      setShowNegotiableMessage(false);
      toast({
        title: "Budget Looks Good!",
        description: "Your budget aligns well with our estimate. We look forward to working with you!",
      });
    }
  };
  
  // Handle request quote
  const handleRequestQuote = () => {
    const quoteDetails = {
      pages,
      complexity,
      features,
      timeline,
      estimatedCost,
      currency,
      websiteTopic
    };
    
    console.log("Quote requested:", quoteDetails);
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you with a detailed proposal shortly.",
    });
    
    // In a real implementation, this would send the data to a server
  };
  
  // Generate random savings percentage between 12-20%
  useEffect(() => {
    const randomSavings = Math.floor(Math.random() * 9) + 12; // Random number between 12-20
    setSavingsPercentage(randomSavings);
  }, []);

  return (
    <section id="budget-calculator" className="bg-gray-50 py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">Project Budget Calculator</h2>
          <p className="text-navy-light text-lg max-w-2xl mx-auto">
            Get an instant estimate for your website project. Save up to {savingsPercentage}% compared to traditional agencies.
          </p>
        </div>
        
        {/* Quick Start Card - Always visible */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-10 border-2 border-dashed border-redox/30 animate-fade-in">
          <h3 className="text-xl font-bold text-navy-dark mb-4">Quick Start Wizard</h3>
          <p className="text-navy-light mb-6">
            Tell us your budget and what your website is about, and we'll recommend the best options for you.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="quick-budget" className="block mb-2">Your Budget ({currency})</Label>
              <div className="flex items-center">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    {currency === "USD" ? (
                      <BadgeDollarSign className="h-4 w-4 text-gray-400" />
                    ) : (
                      <BadgeIndianRupee className="h-4 w-4 text-gray-400" />
                    )}
                  </div>
                  <Input 
                    id="quick-budget" 
                    type="text" 
                    placeholder={`Enter your budget in ${currency}`}
                    className="pl-10"
                    value={userBudget}
                    onChange={(e) => setUserBudget(e.target.value)}
                  />
                </div>
              </div>
            </div>
            
            <div>
              <Label htmlFor="website-topic" className="block mb-2">What is your website about?</Label>
              <Input 
                id="website-topic" 
                type="text" 
                placeholder="E.g., Business, Portfolio, E-commerce, Blog..."
                value={websiteTopic}
                onChange={(e) => setWebsiteTopic(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mt-6 flex justify-end">
            <Button 
              className="flex items-center"
              onClick={applyRecommendations}
            >
              Get Recommendations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Controls */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-navy-dark">Customize Your Project</h3>
              
              <div className="flex items-center rounded-lg border border-gray-200 p-1">
                <Button 
                  variant={currency === "USD" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCurrency("USD")}
                  className="flex items-center"
                >
                  <BadgeDollarSign className="mr-1 h-4 w-4" />
                  USD
                </Button>
                <Button 
                  variant={currency === "INR" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCurrency("INR")}
                  className="flex items-center"
                >
                  <BadgeIndianRupee className="mr-1 h-4 w-4" />
                  INR
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Number of Pages</Label>
                  <span className="font-medium text-navy-dark">{pages} pages</span>
                </div>
                <Slider 
                  value={[pages]} 
                  onValueChange={(value) => setPages(value[0])} 
                  min={1} 
                  max={20} 
                  step={1}
                />
                <div className="flex justify-between text-xs text-navy-light mt-1">
                  <span>Simple</span>
                  <span>Complex Site</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Design Complexity</Label>
                  <span className="font-medium text-navy-dark">
                    {complexity === 1 && "Basic"}
                    {complexity === 2 && "Standard"}
                    {complexity === 3 && "Advanced"}
                    {complexity === 4 && "Premium"}
                    {complexity === 5 && "Custom"}
                  </span>
                </div>
                <Slider 
                  value={[complexity]} 
                  onValueChange={(value) => setComplexity(value[0])} 
                  min={1} 
                  max={5} 
                  step={1}
                />
                <div className="flex justify-between text-xs text-navy-light mt-1">
                  <span>Basic</span>
                  <span>Custom</span>
                </div>
              </div>
              
              <div>
                <Label className="block mb-2">Features Needed</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="responsive" 
                      checked={features.responsive}
                      onChange={() => setFeatures({...features, responsive: !features.responsive})}
                      className="rounded text-redox focus:ring-redox"
                    />
                    <Label htmlFor="responsive" className="cursor-pointer">Responsive Design</Label>
                    <span className="text-xs text-navy-light">({formatCurrency(featureCosts.responsive)})</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="animations" 
                      checked={features.animations}
                      onChange={() => setFeatures({...features, animations: !features.animations})}
                      className="rounded text-redox focus:ring-redox"
                    />
                    <Label htmlFor="animations" className="cursor-pointer">Custom Animations</Label>
                    <span className="text-xs text-navy-light">({formatCurrency(featureCosts.animations)})</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="contentManagement" 
                      checked={features.contentManagement}
                      onChange={() => setFeatures({...features, contentManagement: !features.contentManagement})}
                      className="rounded text-redox focus:ring-redox"
                    />
                    <Label htmlFor="contentManagement" className="cursor-pointer">Content Management</Label>
                    <span className="text-xs text-navy-light">({formatCurrency(featureCosts.contentManagement)})</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="seo" 
                      checked={features.seo}
                      onChange={() => setFeatures({...features, seo: !features.seo})}
                      className="rounded text-redox focus:ring-redox"
                    />
                    <Label htmlFor="seo" className="cursor-pointer">SEO Optimization</Label>
                    <span className="text-xs text-navy-light">({formatCurrency(featureCosts.seo)})</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input 
                      type="checkbox" 
                      id="analytics" 
                      checked={features.analytics}
                      onChange={() => setFeatures({...features, analytics: !features.analytics})}
                      className="rounded text-redox focus:ring-redox"
                    />
                    <Label htmlFor="analytics" className="cursor-pointer">Analytics Setup</Label>
                    <span className="text-xs text-navy-light">({formatCurrency(featureCosts.analytics)})</span>
                  </div>
                </div>
                
                <div className="mt-3 text-navy-light text-xs italic">
                  <p className="flex items-center">
                    <Info className="w-3 h-3 mr-1 text-redox" />
                    Not sure what you need? Use the Quick Start Wizard at the top or contact us for guidance.
                  </p>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <Label>Delivery Timeline</Label>
                  <span className="font-medium text-navy-dark">{timeline} days</span>
                </div>
                <Slider 
                  value={[timeline]} 
                  onValueChange={(value) => setTimeline(value[0])} 
                  min={7} 
                  max={60} 
                  step={1}
                />
                <div className="flex justify-between text-xs text-navy-light mt-1">
                  <span>Rush</span>
                  <span>Standard</span>
                  <span>Relaxed</span>
                </div>
                {timeline <= 7 && (
                  <p className="text-xs text-redox mt-2 flex items-center">
                    <Info className="w-3 h-3 mr-1" /> Rush timelines incur a 30% premium plus {formatCurrency(currency === "USD" ? 120 : 10000)} extra
                  </p>
                )}
                {timeline > 7 && timeline < 14 && (
                  <p className="text-xs text-amber-600 mt-2 flex items-center">
                    <Info className="w-3 h-3 mr-1" /> Expedited timelines incur a 20% premium plus {formatCurrency(currency === "USD" ? 60 : 5000)} extra
                  </p>
                )}
                {timeline > 21 && (
                  <p className="text-xs text-green-600 mt-2 flex items-center">
                    <Info className="w-3 h-3 mr-1" /> Relaxed timelines receive a {formatCurrency(currency === "USD" ? 60 : 5000)} discount
                  </p>
                )}
              </div>
              
              <div className="pt-4 border-t border-gray-100">
                <Label htmlFor="budget" className="block mb-2">What's your budget?</Label>
                <div className="flex items-center">
                  <div className="relative w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      {currency === "USD" ? (
                        <BadgeDollarSign className="h-4 w-4 text-gray-400" />
                      ) : (
                        <BadgeIndianRupee className="h-4 w-4 text-gray-400" />
                      )}
                    </div>
                    <Input 
                      id="budget" 
                      type="text" 
                      placeholder="Enter your budget"
                      className="pl-10"
                      value={userBudget}
                      onChange={(e) => setUserBudget(e.target.value)}
                    />
                  </div>
                  <Button 
                    onClick={handleBudgetCheck}
                    className="ml-3"
                    variant="outline"
                  >
                    Check
                  </Button>
                </div>
                
                {/* Negotiable Message with improved visibility */}
                {showNegotiableMessage && (
                  <div className="mt-4 p-3 bg-redox/10 border border-redox/30 rounded-md animate-fade-in">
                    <p className="text-sm text-redox flex items-center font-medium">
                      <CircleHelp className="w-4 h-4 mr-2 flex-shrink-0" /> 
                      <span>We're flexible! Let's discuss how we can meet your budget while delivering a great website.</span>
                    </p>
                    <Button 
                      variant="link" 
                      className="text-redox p-0 h-auto mt-1 text-sm"
                      onClick={() => window.location.href = "#contact"}
                    >
                      Contact us to negotiate
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Estimate Card */}
          <div>
            <Card className="sticky top-24">
              <CardHeader className="bg-navy-dark text-white rounded-t-lg">
                <CardTitle className="flex items-center justify-between">
                  <span>Your Estimate</span>
                  <Calculator className="h-5 w-5" />
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Based on your requirements
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-navy-light">Pages ({pages})</span>
                    <span className="font-medium">{formatCurrency(pageCost)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-navy-light">Design Complexity</span>
                    <span className="font-medium">{formatCurrency(complexityCost)}</span>
                  </div>
                  
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span className="text-navy-light">Features</span>
                    <span className="font-medium">{formatCurrency(featureCost)}</span>
                  </div>
                  
                  {timeline <= 7 && (
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-navy-light">Rush Fee (7 days)</span>
                      <span className="font-medium text-redox">+30% + {formatCurrency(currency === "USD" ? 120 : 10000)}</span>
                    </div>
                  )}
                  
                  {timeline > 7 && timeline < 14 && (
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-navy-light">Expedited Fee</span>
                      <span className="font-medium text-amber-600">+20% + {formatCurrency(currency === "USD" ? 60 : 5000)}</span>
                    </div>
                  )}
                  
                  {timeline > 21 && (
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-navy-light">Relaxed Timeline Discount</span>
                      <span className="font-medium text-green-600">-{formatCurrency(currency === "USD" ? 60 : 5000)}</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Our Price</span>
                    <span className="text-xl font-bold text-redox">{formatCurrency(estimatedCost)}</span>
                  </div>
                  
                  {/* Savings Comparison */}
                  <div className="mt-4 p-3 bg-green-50 rounded-md border border-green-100">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-green-700">Traditional Agency Price</span>
                      <span className="text-sm text-green-700 line-through">{formatCurrency(traditionalCost)}</span>
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="font-medium text-green-800">You Save</span>
                      <span className="font-bold text-green-800">{formatCurrency(moneySaved)}</span>
                    </div>
                    
                    <div className="flex items-center mt-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      <span className="text-xs text-green-700">Save {Math.round((moneySaved/traditionalCost)*100)}% compared to traditional agencies</span>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-4 text-xs text-navy-light">
                  <p className="flex items-start mb-2">
                    <Info className="h-3 w-3 mr-1 mt-0.5 flex-shrink-0" />
                    <span>All prices are negotiable. Contact us to discuss custom requirements.</span>
                  </p>
                </div>
              </CardContent>
              
              <CardFooter className="flex-col space-y-3">
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={handleRequestQuote}
                >
                  Request Detailed Quote
                </Button>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full">
                      See Payment Plans
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Flexible Payment Plans</DialogTitle>
                      <DialogDescription>
                        We offer various payment options to suit your needs
                      </DialogDescription>
                    </DialogHeader>
                    
                    <Tabs defaultValue="standard">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="standard">Standard</TabsTrigger>
                        <TabsTrigger value="milestone">Milestone</TabsTrigger>
                        <TabsTrigger value="monthly">Monthly</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="standard" className="space-y-4 mt-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">50/50 Split</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                              <span>50% upfront</span>
                              <span className="font-bold">{formatCurrency(estimatedCost * 0.5)}</span>
                            </li>
                            <li className="flex justify-between">
                              <span>50% upon completion</span>
                              <span className="font-bold">{formatCurrency(estimatedCost * 0.5)}</span>
                            </li>
                          </ul>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="milestone" className="space-y-4 mt-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">3-Part Milestone</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                              <span>30% to start</span>
                              <span className="font-bold">{formatCurrency(estimatedCost * 0.3)}</span>
                            </li>
                            <li className="flex justify-between">
                              <span>40% at design approval</span>
                              <span className="font-bold">{formatCurrency(estimatedCost * 0.4)}</span>
                            </li>
                            <li className="flex justify-between">
                              <span>30% at launch</span>
                              <span className="font-bold">{formatCurrency(estimatedCost * 0.3)}</span>
                            </li>
                          </ul>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="monthly" className="space-y-4 mt-4">
                        <div className="bg-gray-50 p-4 rounded-md">
                          <h4 className="font-medium mb-2">Monthly Plan (3 months)</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                              <span>Initial payment</span>
                              <span className="font-bold">{formatCurrency(estimatedCost * 0.4)}</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Month 2</span>
                              <span className="font-bold">{formatCurrency(estimatedCost * 0.3)}</span>
                            </li>
                            <li className="flex justify-between">
                              <span>Month 3</span>
                              <span className="font-bold">{formatCurrency(estimatedCost * 0.3)}</span>
                            </li>
                          </ul>
                        </div>
                      </TabsContent>
                    </Tabs>
                    
                    <DialogFooter>
                      <Button
                        onClick={() => {
                          toast({
                            title: "Great choice!",
                            description: "Contact us to set up your preferred payment plan."
                          });
                        }}
                      >
                        Let's Discuss
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4 text-navy-dark">Pricing Breakdown</h3>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feature</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (INR)</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (USD)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Number of Pages (per page)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹3,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$36</td>
                </tr>
                <tr className="bg-gray-50">
                  <td colSpan={3} className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Design Complexity</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 pl-10">- Basic</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹7,500</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$90</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 pl-10">- Custom</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹12,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$145</td>
                </tr>
                <tr className="bg-gray-50">
                  <td colSpan={3} className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Features Needed</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 pl-10">- Responsive Design</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹10,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$120</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 pl-10">- Custom Animations</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹15,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$180</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 pl-10">- Content Management (CMS)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹18,000</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$215</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 pl-10">- SEO Optimization</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹12,500</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$150</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 pl-10">- Analytics Setup</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹7,500</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$90</td>
                </tr>
                <tr className="bg-gray-50">
                  <td colSpan={3} className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">Delivery Timeline</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 pl-10">- Rush (7 days)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹10,000 extra</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$120 extra</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 pl-10">- Standard (14-21 days)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">No Extra Cost</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">No Extra Cost</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 pl-10">- Relaxed (30+ days)</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">₹5,000 Discount</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$60 Discount</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-navy-dark">Frequently Asked Questions</h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-navy-dark">Are these prices negotiable?</h4>
                <p className="text-navy-light mt-1">
                  <span className="text-redox font-medium">Yes, absolutely!</span> We understand that every project is unique and budgets can vary. Our prices are flexible, and we're always ready to work with you to find a solution that meets both your requirements and budget constraints.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-navy-dark">What if my project is more complex?</h4>
                <p className="text-navy-light mt-1">
                  For highly specialized or complex projects, we recommend scheduling a consultation to discuss your requirements in detail so we can provide a more accurate quote.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-navy-dark">How much can I save compared to traditional agencies?</h4>
                <p className="text-navy-light mt-1">
                  Our tech-forward approach allows us to deliver the same quality for 15-25% less than traditional agencies. We achieve this through efficient workflows and advanced development techniques, not by cutting corners.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-navy-dark">Do you offer payment plans?</h4>
                <p className="text-navy-light mt-1">
                  Yes, we offer flexible payment options including milestone-based payments. We typically require a 40% deposit to begin work with the remaining balance paid at agreed milestones.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetCalculatorSection;
