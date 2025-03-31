
import { Github, Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-github-muted border-t border-github-border py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Github className="h-8 w-8 mr-2 text-github-text" />
              <span className="font-bold text-xl text-github-text">
                REDOX<span className="text-gray-500">Devs</span>
              </span>
            </div>
            <p className="text-github-text/80 mb-6">
              We build exceptional websites and applications with a focus on performance,
              accessibility, and user experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-github-text/60 hover:text-github-link transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-github-text/60 hover:text-github-link transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-github-text/60 hover:text-github-link transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-github-text/60 hover:text-github-link transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-github-text/60 hover:text-github-link transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-github-text mb-3">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-github-text/80 hover:text-github-link transition-colors">Web Development</a></li>
              <li><a href="#" className="text-github-text/80 hover:text-github-link transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-github-text/80 hover:text-github-link transition-colors">eCommerce</a></li>
              <li><a href="#" className="text-github-text/80 hover:text-github-link transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-github-text/80 hover:text-github-link transition-colors">SEO</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-github-text mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-github-text/80 hover:text-github-link transition-colors">About Us</a></li>
              <li><a href="#work" className="text-github-text/80 hover:text-github-link transition-colors">Projects</a></li>
              <li><a href="#process" className="text-github-text/80 hover:text-github-link transition-colors">Process</a></li>
              <li><a href="#testimonials" className="text-github-text/80 hover:text-github-link transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-github-text/80 hover:text-github-link transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-github-text mb-3">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-github-text/80 hover:text-github-link transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-github-text/80 hover:text-github-link transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-github-text/80 hover:text-github-link transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-github-text/80 hover:text-github-link transition-colors">GDPR Compliance</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-github-divider mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-github-text/60 text-sm mb-4 md:mb-0">
            © {currentYear} REDOXDevs. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm text-github-text/60">
            <a href="#" className="hover:text-github-link transition-colors">Status</a>
            <a href="#" className="hover:text-github-link transition-colors">Docs</a>
            <a href="#" className="hover:text-github-link transition-colors">Contact</a>
            <a href="#" className="hover:text-github-link transition-colors">API</a>
            <a href="#" className="hover:text-github-link transition-colors">Training</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
