
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-navy-dark/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#hero" className="flex items-center">
              <span className="font-bold text-2xl text-navy-dark">
                REDOX<span className="text-redox">Devs</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <button 
              onClick={() => scrollToSection("services")}
              className="font-medium text-navy-light hover:text-redox transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection("work")}
              className="font-medium text-navy-light hover:text-redox transition-colors"
            >
              Our Work
            </button>
            <button 
              onClick={() => scrollToSection("process")}
              className="font-medium text-navy-light hover:text-redox transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection("testimonials")}
              className="font-medium text-navy-light hover:text-redox transition-colors"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="font-medium text-navy-light hover:text-redox transition-colors"
            >
              About
            </button>
          </nav>

          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="bg-redox hover:bg-redox-dark text-white font-medium"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-navy-dark"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-navy-dark absolute left-0 right-0 top-full shadow-lg animate-fade-in">
            <div className="flex flex-col p-4 space-y-3">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-left py-2 font-medium text-navy-light hover:text-redox transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("work")}
                className="text-left py-2 font-medium text-navy-light hover:text-redox transition-colors"
              >
                Our Work
              </button>
              <button 
                onClick={() => scrollToSection("process")}
                className="text-left py-2 font-medium text-navy-light hover:text-redox transition-colors"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-left py-2 font-medium text-navy-light hover:text-redox transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left py-2 font-medium text-navy-light hover:text-redox transition-colors"
              >
                About
              </button>
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="w-full bg-redox hover:bg-redox-dark text-white font-medium"
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
