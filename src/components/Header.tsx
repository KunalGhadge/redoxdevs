
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Code, Search, Bell, Plus, ChevronDown, Github } from "lucide-react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";

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
          ? "bg-github-header text-white shadow-md"
          : "bg-github-header text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="#hero" className="flex items-center">
              <Github className="h-8 w-8 mr-2" />
              <span className="font-bold text-xl text-white">
                REDOX<span className="opacity-80">Devs</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              <button 
                onClick={() => scrollToSection("services")}
                className="px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("work")}
                className="px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("process")}
                className="px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors flex items-center"
              >
                Testimonials <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="px-3 py-2 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                About
              </button>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-white/10 border border-white/20 rounded-md pl-8 pr-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-white/30 w-40 lg:w-64 text-white placeholder:text-white/60"
              />
            </div>
            <button className="text-white p-2 rounded-full hover:bg-white/10">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-white p-2 rounded-full hover:bg-white/10">
              <Plus className="h-5 w-5" />
            </button>
            <Button 
              onClick={() => scrollToSection("contact")} 
              className="github-button ml-2"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-white"
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
          <div className="md:hidden bg-github-header absolute left-0 right-0 top-full shadow-lg animate-fade-in border-t border-white/10">
            <div className="flex flex-col p-4 space-y-3">
              <button 
                onClick={() => scrollToSection("services")}
                className="text-left py-2 px-3 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("work")}
                className="text-left py-2 px-3 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("process")}
                className="text-left py-2 px-3 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection("testimonials")}
                className="text-left py-2 px-3 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                Testimonials
              </button>
              <button 
                onClick={() => scrollToSection("about")}
                className="text-left py-2 px-3 rounded-md text-white hover:bg-white/10 transition-colors"
              >
                About
              </button>
              <div className="relative mt-2">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full bg-white/10 border border-white/20 rounded-md pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-white/30 text-white placeholder:text-white/60"
                />
              </div>
              <Button 
                onClick={() => scrollToSection("contact")} 
                className="github-button w-full mt-2"
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
