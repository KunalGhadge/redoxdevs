
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star, IndianRupee } from "lucide-react";

const testimonials = [
  {
    name: "Vikram Mehta",
    position: "CEO, TechVantage Solutions, Mumbai",
    image: "https://randomuser.me/api/portraits/men/44.jpg",
    content:
      "REDOX Devs created an outstanding landing page for our SaaS product launch that exceeded our expectations. The conversion rates have been 40% higher than our previous site. Their understanding of the Indian market helped us connect with our target audience.",
    rating: 5,
    location: "Mumbai, India"
  },
  {
    name: "Ananya Sharma",
    position: "Marketing Director, Wellness Ayurveda",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    content:
      "Our Ayurvedic product line needed a landing page that balanced modern design with our traditional values. REDOX Devs delivered perfectly, creating a page that respects our heritage while driving impressive sales. Best investment we've made!",
    rating: 5,
    location: "Delhi, India"
  },
  {
    name: "Raj Patel",
    position: "Founder, EduReach Academy",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
    content:
      "As an education startup in Bangalore, we needed a landing page that could appeal to both students and parents. The team at REDOX understood our unique requirements and delivered a solution that has significantly improved our enrollment rates.",
    rating: 5,
    location: "Bangalore, India"
  },
  {
    name: "Priya Malhotra",
    position: "Director, Glamour Fashion House",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
    content:
      "The landing page REDOX Devs created for our festive collection launch was stunning! It perfectly captured the essence of our brand while making the shopping experience seamless. Our conversion rate doubled within the first week!",
    rating: 5,
    location: "Jaipur, India"
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section bg-gray-50">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">
          Client <span className="text-redox">Testimonials</span>
        </h2>
        <p className="text-lg text-navy-light">
          See what our clients from across India have to say about our landing page services.
        </p>
      </div>

      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2 pl-4">
                <Card className="border-gray-100 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-navy-light mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-navy-dark">{testimonial.name}</h4>
                        <div className="flex items-center gap-1">
                          <p className="text-sm text-navy-light">{testimonial.position}</p>
                        </div>
                        <p className="text-xs text-redox flex items-center gap-1 mt-1">
                          <span className="inline-block w-2 h-2 bg-redox rounded-full"></span>
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute -top-12 right-0 flex gap-2">
            <CarouselPrevious className="relative static" />
            <CarouselNext className="relative static" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
