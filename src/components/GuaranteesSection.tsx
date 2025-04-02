
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Sparkles } from "lucide-react";

const GuaranteesSection = () => {
  const guarantees = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-redox" />,
      title: "100% Satisfaction Guarantee",
      description: "If you're not completely satisfied with our work, we'll revise until you are - at no extra cost."
    },
    {
      icon: <Clock className="h-10 w-10 text-redox" />,
      title: "On-Time Delivery Promise",
      description: "We commit to delivering your project by the agreed deadline, or you'll receive a discount."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-redox" />,
      title: "Conversion Improvement Guarantee",
      description: "Our landing pages are designed to increase conversion rates. If they don't, we'll optimize until they do."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Our <span className="text-redox">Guarantees</span>
          </h2>
          <p className="text-navy-light">
            We stand behind our work with promises that protect your investment and ensure your satisfaction.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guarantees.map((guarantee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 p-4 bg-redox/10 inline-block rounded-full">
                {guarantee.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-dark mb-3">{guarantee.title}</h3>
              <p className="text-navy-light">{guarantee.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuaranteesSection;
