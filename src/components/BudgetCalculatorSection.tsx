
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Info, BadgeDollarSign, BadgeIndianRupee, CircleHelp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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

  // Conversion rate (approximate)
  const usdToInr = 82.5;
  
  // Base cost calculations
  const basePageCost = currency === "USD" ? 100 : 100 * usdToInr;
  const baseComplexityCost = currency === "USD" ? 200 : 200 * usdToInr;
  
  // Calculate costs
  const pageCost = pages * basePageCost;
  const complexityCost = complexity * baseComplexityCost;
  
  // Feature costs
  const featureCosts = {
    responsive: currency === "USD" ? 300 : 300 * usdToInr,
    animations: currency === "USD" ? 350 : 350 * usdToInr,
    contentManagement: currency === "USD" ? 600 : 600 * usdToInr,
    seo: currency === "USD" ? 400 : 400 * usdToInr,
    analytics: currency === "USD" ? 250 : 250 * usdToInr,
  };
  
  // Calculate total feature cost
  const featureCost = Object.entries(features).reduce((total, [key, isSelected]) => {
    if (isSelected) {
      return total + featureCosts[key as keyof typeof featureCosts];
    }
    return total;
  }, 0);
  
  // Time factor - rush jobs cost more
  const timelineFactor = timeline < 15 ? 1.3 : timeline < 30 ? 1.1 : 1;
  
  // Calculate final estimate
  const estimatedCost = Math.round((pageCost + complexityCost + featureCost) * timelineFactor);
  
  // Format currency
  const formatCurrency = (amount: number) => {
    if (currency === "USD") {
      return `$${amount.toLocaleString()}`;
    } else {
      return `₹${amount.toLocaleString()}`;
    }
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
      currency
    };
    
    console.log("Quote requested:", quoteDetails);
    
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you with a detailed proposal shortly.",
    });
    
    // In a real implementation, this would send the data to a server
  };

  return (
    <section id="budget-calculator" className="bg-gray-50 py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">Project Budget Calculator</h2>
          <p className="text-navy-light text-lg max-w-2xl mx-auto">
            Get an instant estimate for your website project. Adjust the options below to see how different features affect the cost.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Controls */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-end mb-6">
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
                {timeline < 15 && (
                  <p className="text-xs text-redox mt-2 flex items-center">
                    <Info className="w-3 h-3 mr-1" /> Rush timelines incur a 30% premium
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
                {showNegotiableMessage && (
                  <p className="text-sm text-redox mt-2 flex items-center">
                    <CircleHelp className="w-4 h-4 mr-1" /> 
                    We can negotiate and find options that work for your budget!
                  </p>
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
                  
                  {timeline < 15 && (
                    <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                      <span className="text-navy-light">Rush Fee</span>
                      <span className="font-medium text-redox">+30%</span>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 pb-4 border-b border-gray-100">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">Estimated Total</span>
                    <span className="text-xl font-bold text-redox">{formatCurrency(estimatedCost)}</span>
                  </div>
                  <p className="text-xs text-navy-light mt-2">
                    This is an estimate. Final pricing may vary based on specific requirements.
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
                <p className="text-center text-xs text-navy-light">
                  All prices are negotiable based on project scope and timeline.
                  <br />
                  Get in touch with us to discuss your specific needs.
                </p>
              </CardFooter>
            </Card>
          </div>
        </div>
        
        <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4 text-navy-dark">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-navy-dark">Are these prices negotiable?</h4>
              <p className="text-navy-light mt-1">
                Yes, we understand that every project is unique. The calculator provides an estimate, but we're happy to discuss your specific needs and budget constraints.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-navy-dark">What if my project is more complex?</h4>
              <p className="text-navy-light mt-1">
                For highly specialized or complex projects, we recommend scheduling a consultation to discuss your requirements in detail so we can provide a more accurate quote.
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
    </section>
  );
};

export default BudgetCalculatorSection;
