
import { motion } from "framer-motion";
import { ShieldCheck, Award, Star, BadgeCheck, Trophy } from "lucide-react";

const TrustBadgesSection = () => {
  const trustBadges = [
    {
      icon: <ShieldCheck className="h-12 w-12 text-redox" />,
      title: "100% Secure",
      description: "Your data and privacy is protected with industry-standard security measures."
    },
    {
      icon: <Award className="h-12 w-12 text-redox" />,
      title: "Award Winning",
      description: "Multiple design and development awards for excellence in web creation."
    },
    {
      icon: <BadgeCheck className="h-12 w-12 text-redox" />,
      title: "Certified Experts",
      description: "Our team includes certified professionals with years of experience."
    },
    {
      icon: <Trophy className="h-12 w-12 text-redox" />,
      title: "Proven Results",
      description: "Our landing pages have averaged a 35% conversion rate improvement."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
            Why <span className="text-redox">Trust Us</span>
          </h2>
          <p className="text-lg text-navy-light">
            We've earned the trust of businesses across India with our commitment to quality, security, and results.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="flex justify-center mb-4">
                {badge.icon}
              </div>
              <h3 className="text-xl font-semibold text-navy-dark mb-2">{badge.title}</h3>
              <p className="text-navy-light">{badge.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-70"
        >
          <div className="text-center">
            <p className="text-sm text-navy-light uppercase tracking-wider mb-2">Featured In</p>
          </div>
          {["YourStory", "Economic Times", "Business Today", "Entrepreneur India", "NASSCOM"].map((partner, index) => (
            <div key={index} className="text-xl font-bold text-navy-dark/60">
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadgesSection;
