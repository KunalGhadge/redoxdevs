
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Our typical timeline for a standard website is 3-6 weeks from kickoff to launch. Complex e-commerce or custom application development may take 8-12 weeks. We'll provide a detailed timeline during our initial consultation based on your specific requirements.",
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We specialize in modern frontend technologies including React, Next.js, TypeScript, and Tailwind CSS. Our expertise extends to WordPress, Shopify, and custom CMS development. We focus on creating blazing-fast, responsive, and accessible websites that deliver exceptional user experiences.",
    },
    {
      question: "How much does a website cost?",
      answer: "Website costs vary based on complexity, features, and scope. Landing pages typically range from $2,000-$5,000, while full business websites range from $5,000-$15,000. E-commerce or custom applications typically start at $15,000+. Use our budget calculator for a personalized estimate.",
    },
    {
      question: "Do you offer maintenance and support after launch?",
      answer: "Yes, we offer flexible maintenance plans to keep your website secure, updated, and performing optimally. Our support packages include regular updates, performance monitoring, security checks, and content updates. We can tailor a plan to your specific requirements.",
    },
    {
      question: "Will my website be mobile-friendly?",
      answer: "Absolutely! All our websites are built with a mobile-first approach ensuring they work flawlessly across all devices including smartphones, tablets, and desktops. We conduct extensive testing on various device sizes and browsers to ensure consistent performance.",
    },
    {
      question: "Can you help with website hosting and domain registration?",
      answer: "Yes, we provide comprehensive hosting solutions optimized for performance and security. We can assist with domain registration, SSL certificate installation, and ongoing server maintenance. Our hosting packages include regular backups and 24/7 monitoring.",
    },
  ];

  return (
    <section id="faq" className="section bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">Frequently Asked Questions</h2>
          <p className="text-navy-light max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and pricing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <Accordion type="single" collapsible className="bg-white rounded-xl shadow-sm">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-navy-dark hover:text-redox hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-navy-light">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
