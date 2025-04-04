
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "5d19bef2-0934-43a5-b7ec-c07286a93e54", // Web3Forms API Key
          subject: `New message from ${formData.name} via REDOX Devs website`,
          from_name: "REDOX Devs Website",
          ...formData,
        }),
      });
      
      const result = await response.json();
      
      if (result.success) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
        
        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-navy-dark text-white">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in <span className="text-redox">Touch</span>
        </h2>
        <p className="text-lg text-gray-300">
          Ready to start your project? Contact us today for a free consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-navy-light/10 border-navy-light/20 text-white focus:border-redox"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-navy-light/10 border-navy-light/20 text-white focus:border-redox"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium">
                  Phone (optional)
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-navy-light/10 border-navy-light/20 text-white focus:border-redox"
                />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium">
                  Company (optional)
                </label>
                <Input
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-navy-light/10 border-navy-light/20 text-white focus:border-redox"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-navy-light/10 border-navy-light/20 text-white focus:border-redox"
              />
            </div>
            <Button
              type="submit"
              className="bg-redox hover:bg-redox-dark text-white w-full md:w-auto px-8"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-redox shrink-0 mt-1" />
                <span>(+91) 88798 89389</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-redox shrink-0 mt-1" />
                <span>redoxdevs@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-redox shrink-0 mt-1" />
                <span>We are online for now!</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 3:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
