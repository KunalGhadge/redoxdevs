
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark text-white pt-12 pb-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h3 className="font-bold text-2xl mb-4">
              REDOX<span className="text-redox">Devs</span>
            </h3>
            <p className="text-gray-300 mb-6">
              We build websites that convert visitors into customers through exceptional design and development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-redox transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-redox transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-redox transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-redox transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-redox transition-colors">Web Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-redox transition-colors">Web Development</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-redox transition-colors">UI/UX Design</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-redox transition-colors">SEO Optimization</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-redox transition-colors">Performance Optimization</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-redox transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-redox transition-colors">Our Work</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-redox transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-redox transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-redox transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for web design tips and insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-md bg-navy-light/10 border-navy-light/20 text-white w-full focus:outline-none focus:border-redox"
              />
              <button
                type="submit"
                className="bg-redox hover:bg-redox-dark px-4 py-2 rounded-r-md text-white"
              >
                Send
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-navy-light/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-300 text-sm mb-4 md:mb-0">
            © {currentYear} REDOX Devs. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-gray-300">
            <a href="#" className="hover:text-redox transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-redox transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-redox transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-redox hover:bg-redox-dark text-white p-3 rounded-full shadow-lg transition-all hover:transform hover:scale-110"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
