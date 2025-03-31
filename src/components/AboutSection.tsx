
import { Card, CardContent } from "@/components/ui/card";

const team = [
  {
    name: "Alex Morgan",
    position: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    bio: "10+ years of experience in web development and digital strategy.",
  },
  {
    name: "Jamie Taylor",
    position: "Design Director",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    bio: "Award-winning designer with expertise in UI/UX and brand identity.",
  },
  {
    name: "Chris Roberts",
    position: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    bio: "Full-stack developer specialized in building high-performance websites.",
  },
  {
    name: "Jordan Lee",
    position: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
    bio: "Experienced in leading complex web projects from concept to completion.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-6">
            About <span className="text-redox">REDOX Devs</span>
          </h2>
          <p className="text-lg text-navy-light mb-6">
            Founded in 2015, REDOX Devs is a team of passionate web designers and developers dedicated to creating exceptional digital experiences that help businesses grow.
          </p>
          <p className="text-lg text-navy-light mb-6">
            We combine technical expertise with creative innovation to deliver websites that not only look stunning but also perform exceptionally well, driving real business results for our clients.
          </p>
          <div className="grid grid-cols-2 gap-8 mt-8">
            <div>
              <h3 className="text-4xl font-bold text-redox mb-2">100+</h3>
              <p className="text-navy-light">Projects Completed</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-redox mb-2">95%</h3>
              <p className="text-navy-light">Client Retention</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-redox mb-2">15+</h3>
              <p className="text-navy-light">Industry Awards</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-redox mb-2">24/7</h3>
              <p className="text-navy-light">Support Available</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-redox/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-redox/10 rounded-full blur-2xl"></div>
          <img 
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7" 
            alt="REDOX Devs team" 
            className="rounded-lg shadow-lg w-full h-full object-cover"
            style={{ aspectRatio: "3/2" }}
          />
        </div>
      </div>

      <div>
        <h3 className="text-2xl md:text-3xl font-bold text-navy-dark mb-10 text-center">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="border-gray-100 overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="font-semibold text-xl text-navy-dark">{member.name}</h4>
                <p className="text-redox mb-2">{member.position}</p>
                <p className="text-navy-light">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
