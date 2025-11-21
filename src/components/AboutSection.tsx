
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Code, LineChart, Zap, Users, Award, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const team = [
  {
    name: "Kunal Ghadge",
    position: "Lead Developer & Designer",
    bio: "3+ years of experience in web development with expertise in creating high-converting landing pages.",
    initials: "KG",
    icon: Code
  },
  {
    name: "Hitesh Harle",
    position: "Marketing Strategist & Researcher",
    bio: "Expert in market research and digital strategy that helps businesses maximize landing page conversions.",
    initials: "HH",
    icon: LineChart
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-6">
            About <span className="text-redox">REDOX Devs</span>
          </h2>
          <p className="text-lg text-navy-light mb-6">
            Founded in 2019, REDOX Devs is a specialized team dedicated to creating exceptional landing pages that help businesses convert visitors into customers.
          </p>
          <p className="text-lg text-navy-light mb-6">
            We combine technical expertise with creative innovation to deliver landing pages that not only look stunning but also perform exceptionally well, driving real business results for our clients across India and globally.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-4xl font-bold text-redox mb-2 flex items-center">
                <Zap className="mr-2 h-6 w-6" />
                100+
              </h3>
              <p className="text-navy-light">Landing Pages Delivered</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <h3 className="text-4xl font-bold text-redox mb-2 flex items-center">
                <Users className="mr-2 h-6 w-6" />
                95%
              </h3>
              <p className="text-navy-light">Client Retention</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <h3 className="text-4xl font-bold text-redox mb-2 flex items-center">
                <Award className="mr-2 h-6 w-6" />
                15+
              </h3>
              <p className="text-navy-light">Industry Awards</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <h3 className="text-4xl font-bold text-redox mb-2 flex items-center">
                <Headphones className="mr-2 h-6 w-6" />
                24/7
              </h3>
              <p className="text-navy-light">Support Available</p>
            </motion.div>
          </div>
        </motion.div>
        <motion.div 
          className="relative"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-redox/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-redox/10 rounded-full blur-2xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1552581234-26160f608093" 
            alt="REDOX Devs team" 
            className="rounded-lg shadow-lg w-full h-full object-cover"
            style={{ aspectRatio: "3/2" }}
          />
        </motion.div>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-navy-dark mb-10 text-center">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="border-gray-100 overflow-hidden hover:shadow-md transition-all">
                <CardContent className="p-6 flex items-start gap-4">
                  <Avatar className="h-16 w-16 bg-redox/10 text-redox">
                    <AvatarFallback className="text-lg font-medium flex items-center justify-center">
                      <member.icon className="h-8 w-8" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-xl text-navy-dark">{member.name}</h4>
                    <p className="text-redox mb-2">{member.position}</p>
                    <p className="text-navy-light">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
