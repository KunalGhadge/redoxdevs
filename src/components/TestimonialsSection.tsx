
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CEO, Urban Threads",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "REDOX Devs transformed our online store with a beautiful, user-friendly design that has significantly increased our conversion rates. Their attention to detail and focus on performance has been invaluable.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "Marketing Director, Summit Financial",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "Working with REDOX Devs was a game-changer for our firm. They created a professional website that perfectly represents our brand and has helped us attract high-value clients. Highly recommended!",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    position: "Founder, Pulse Health",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content:
      "As a startup, we needed a website that could grow with us. REDOX Devs delivered a scalable solution that has been instrumental in our early success and fundraising efforts.",
    rating: 5,
  },
  {
    name: "David Park",
    position: "Owner, Gourmet Direct",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    content:
      "The custom ordering system REDOX Devs built for us has streamlined our operations and improved customer satisfaction. Their ongoing support has been exceptional.",
    rating: 5,
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
          Don't just take our word for it. See what our clients have to say about working with us.
        </p>
      </div>

      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
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
                        <p className="text-sm text-navy-light">{testimonial.position}</p>
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
