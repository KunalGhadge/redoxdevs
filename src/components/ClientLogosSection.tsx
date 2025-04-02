
import { motion } from "framer-motion";

const ClientLogosSection = () => {
  const clients = [
    { name: "TechVantage", industry: "Technology" },
    { name: "Wellness Ayurveda", industry: "Health" },
    { name: "EduReach", industry: "Education" },
    { name: "Glamour Fashion", industry: "Fashion" },
    { name: "GreenLeaf", industry: "Eco-Products" },
    { name: "NutriFit", industry: "Health & Fitness" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl font-bold text-navy-dark mb-4">
            Trusted by <span className="text-redox">Leading Brands</span>
          </h2>
          <p className="text-navy-light">
            We've helped businesses of all sizes across India create high-converting landing pages.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center justify-center text-center hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-full bg-redox/10 flex items-center justify-center mb-3">
                <span className="text-xl font-bold text-redox">{client.name.charAt(0)}</span>
              </div>
              <h3 className="font-medium text-navy-dark">{client.name}</h3>
              <p className="text-sm text-navy-light">{client.industry}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
