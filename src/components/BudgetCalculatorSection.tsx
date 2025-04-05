
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BudgetCalculatorSection = () => {
  const [projectType, setProjectType] = useState('website');
  const [selectedPlan, setSelectedPlan] = useState('standard');
  
  // Pricing data
  const pricing = {
    website: {
      basic: { base: 2000, pages: 5, revisions: 2, support: '30 days' },
      standard: { base: 5000, pages: 10, revisions: 3, support: '60 days' },
      premium: { base: 10000, pages: 20, revisions: 'Unlimited', support: '90 days' }
    },
    ecommerce: {
      basic: { base: 5000, products: 50, revisions: 2, support: '30 days' },
      standard: { base: 10000, products: 200, revisions: 3, support: '60 days' },
      premium: { base: 20000, products: 'Unlimited', revisions: 'Unlimited', support: '90 days' }
    },
    app: {
      basic: { base: 10000, screens: 5, revisions: 2, support: '30 days' },
      standard: { base: 20000, screens: 15, revisions: 3, support: '60 days' },
      premium: { base: 35000, screens: 30, revisions: 'Unlimited', support: '90 days' }
    }
  };

  // Calculate price example for selected plan
  const calculatePriceExample = () => {
    const basePrice = pricing[projectType][selectedPlan].base;
    const additionalFeatures = projectType === 'website' ? 1500 : projectType === 'ecommerce' ? 3000 : 5000;
    const estimatedHours = projectType === 'website' ? 80 : projectType === 'ecommerce' ? 160 : 320;
    const totalPrice = basePrice + additionalFeatures;
    
    return {
      basePrice,
      additionalFeatures,
      totalPrice,
      estimatedHours
    };
  };

  const priceExample = calculatePriceExample();

  return (
    <section id="budget-calculator" className="section bg-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">Budget Calculator</h2>
          <p className="text-navy-light max-w-2xl mx-auto">
            Get an estimate for your project by selecting the options below. Prices are approximate and may vary based on specific requirements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12"
        >
          <Tabs defaultValue="website" onValueChange={setProjectType} className="max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="website">Website</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
              <TabsTrigger value="app">Web App</TabsTrigger>
            </TabsList>
            
            <TabsContent value="website" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="price-table">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Features</th>
                          <th className="text-center py-3 px-2 price-column">Basic<br /><span className="text-sm font-normal text-navy-light">$2,000</span></th>
                          <th className="text-center py-3 px-2 price-column bg-gray-50">Standard<br /><span className="text-sm font-normal text-navy-light">$5,000</span></th>
                          <th className="text-center py-3 px-2 price-column">Premium<br /><span className="text-sm font-normal text-navy-light">$10,000</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">Pages</td>
                          <td className="text-center py-3 px-2">5</td>
                          <td className="text-center py-3 px-2 bg-gray-50">10</td>
                          <td className="text-center py-3 px-2">20</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Design Revisions</td>
                          <td className="text-center py-3 px-2">2</td>
                          <td className="text-center py-3 px-2 bg-gray-50">3</td>
                          <td className="text-center py-3 px-2">Unlimited</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Support</td>
                          <td className="text-center py-3 px-2">30 days</td>
                          <td className="text-center py-3 px-2 bg-gray-50">60 days</td>
                          <td className="text-center py-3 px-2">90 days</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Response Time</td>
                          <td className="text-center py-3 px-2">48 hours</td>
                          <td className="text-center py-3 px-2 bg-gray-50">24 hours</td>
                          <td className="text-center py-3 px-2">12 hours</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="ecommerce" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="price-table">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Features</th>
                          <th className="text-center py-3 px-2 price-column">Basic<br /><span className="text-sm font-normal text-navy-light">$5,000</span></th>
                          <th className="text-center py-3 px-2 price-column bg-gray-50">Standard<br /><span className="text-sm font-normal text-navy-light">$10,000</span></th>
                          <th className="text-center py-3 px-2 price-column">Premium<br /><span className="text-sm font-normal text-navy-light">$20,000</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">Products</td>
                          <td className="text-center py-3 px-2">50</td>
                          <td className="text-center py-3 px-2 bg-gray-50">200</td>
                          <td className="text-center py-3 px-2">Unlimited</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Design Revisions</td>
                          <td className="text-center py-3 px-2">2</td>
                          <td className="text-center py-3 px-2 bg-gray-50">3</td>
                          <td className="text-center py-3 px-2">Unlimited</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Support</td>
                          <td className="text-center py-3 px-2">30 days</td>
                          <td className="text-center py-3 px-2 bg-gray-50">60 days</td>
                          <td className="text-center py-3 px-2">90 days</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Payment Gateways</td>
                          <td className="text-center py-3 px-2">1</td>
                          <td className="text-center py-3 px-2 bg-gray-50">3</td>
                          <td className="text-center py-3 px-2">5+</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="app" className="mt-6">
              <Card>
                <CardContent className="pt-6">
                  <div className="price-table">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Features</th>
                          <th className="text-center py-3 px-2 price-column">Basic<br /><span className="text-sm font-normal text-navy-light">$10,000</span></th>
                          <th className="text-center py-3 px-2 price-column bg-gray-50">Standard<br /><span className="text-sm font-normal text-navy-light">$20,000</span></th>
                          <th className="text-center py-3 px-2 price-column">Premium<br /><span className="text-sm font-normal text-navy-light">$35,000</span></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="py-3 px-4">Screens</td>
                          <td className="text-center py-3 px-2">5</td>
                          <td className="text-center py-3 px-2 bg-gray-50">15</td>
                          <td className="text-center py-3 px-2">30</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Design Revisions</td>
                          <td className="text-center py-3 px-2">2</td>
                          <td className="text-center py-3 px-2 bg-gray-50">3</td>
                          <td className="text-center py-3 px-2">Unlimited</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Support</td>
                          <td className="text-center py-3 px-2">30 days</td>
                          <td className="text-center py-3 px-2 bg-gray-50">60 days</td>
                          <td className="text-center py-3 px-2">90 days</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-3 px-4">Advanced Features</td>
                          <td className="text-center py-3 px-2">Basic</td>
                          <td className="text-center py-3 px-2 bg-gray-50">Advanced</td>
                          <td className="text-center py-3 px-2">Enterprise</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-navy-dark mb-4">Sample Price Breakdown</h3>
          <p className="text-navy-light mb-6">
            Here's a sample breakdown for a {projectType === 'website' ? 'standard website' : projectType === 'ecommerce' ? 'standard e-commerce site' : 'standard web application'}.
          </p>
          
          <div className="price-scenario">
            <div className="price-scenario-content">
              <div className="price-scenario-row">
                <span>Base Price ({selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)} Plan)</span>
                <span>${priceExample.basePrice.toLocaleString()}</span>
              </div>
              <div className="price-scenario-row">
                <span>Additional Features & Customization</span>
                <span>${priceExample.additionalFeatures.toLocaleString()}</span>
              </div>
              <div className="price-scenario-row">
                <span>Total Estimated Cost</span>
                <span>${priceExample.totalPrice.toLocaleString()}</span>
              </div>
            </div>
          </div>
          
          <p className="text-sm text-navy-light mt-4">
            Estimated timeline: {priceExample.estimatedHours} hours ({Math.ceil(priceExample.estimatedHours / 40)} weeks)
          </p>
          
          <p className="text-sm text-navy-light mt-2">
            <strong>Note:</strong> Actual pricing may vary based on your specific requirements. Contact us for a personalized quote.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BudgetCalculatorSection;
