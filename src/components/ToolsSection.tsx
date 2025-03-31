
import { useState } from "react";
import { 
  Code, 
  Copy, 
  Check, 
  ExternalLink, 
  Download,
  Search
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const ToolsSection = () => {
  const { toast } = useToast();
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [colorValue, setColorValue] = useState("#EF4444");
  
  // Mock color palette generator
  const generatePalette = (baseColor: string) => {
    // Simple mock function to generate complementary colors
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    };
    
    const rgb = hexToRgb(baseColor);
    if (!rgb) return [];
    
    // Generate some variations
    return [
      baseColor,
      `#${Math.floor(rgb.r * 0.8).toString(16).padStart(2, '0')}${Math.floor(rgb.g * 0.8).toString(16).padStart(2, '0')}${Math.floor(rgb.b * 0.8).toString(16).padStart(2, '0')}`,
      `#${Math.floor(rgb.r * 0.6).toString(16).padStart(2, '0')}${Math.floor(rgb.g * 0.6).toString(16).padStart(2, '0')}${Math.floor(rgb.b * 0.6).toString(16).padStart(2, '0')}`,
      `#${Math.floor((rgb.r + 255) / 2).toString(16).padStart(2, '0')}${Math.floor((rgb.g + 255) / 2).toString(16).padStart(2, '0')}${Math.floor((rgb.b + 255) / 2).toString(16).padStart(2, '0')}`,
      `#${(255 - rgb.r).toString(16).padStart(2, '0')}${(255 - rgb.g).toString(16).padStart(2, '0')}${(255 - rgb.b).toString(16).padStart(2, '0')}`,
    ];
  };
  
  const tools = [
    {
      id: 'color-palette',
      name: 'Color Palette Generator',
      description: 'Generate a harmonious color palette for your website',
      icon: Code,
      component: (
        <div className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-navy-dark mb-1">
              Base Color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={colorValue}
                onChange={(e) => setColorValue(e.target.value)}
                className="w-12 h-12 rounded cursor-pointer border border-gray-200"
              />
              <input
                type="text"
                value={colorValue}
                onChange={(e) => setColorValue(e.target.value)}
                className="border border-gray-200 p-2 rounded"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mt-6">
            {generatePalette(colorValue).map((color, index) => (
              <div 
                key={index} 
                className="group relative aspect-square flex flex-col items-center justify-center rounded-lg cursor-pointer hover:shadow-md transition-shadow" 
                style={{ backgroundColor: color }}
                onClick={() => {
                  navigator.clipboard.writeText(color);
                  toast({
                    title: "Color copied!",
                    description: `${color} has been copied to your clipboard.`
                  });
                }}
              >
                <span className={`font-mono text-xs ${index >= 3 ? 'text-navy-dark' : 'text-white'}`}>
                  {color}
                </span>
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity">
                  <Copy className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-navy-light text-sm">
            <p>Click on any color to copy its hex code to clipboard.</p>
          </div>
        </div>
      )
    },
    {
      id: 'responsive-checker',
      name: 'Responsive Preview',
      description: 'See how your website looks on different devices',
      icon: Search,
      component: (
        <div className="mt-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-navy-dark mb-1">
              Website URL
            </label>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="https://example.com"
              className="w-full border border-gray-200 p-2 rounded"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <div className="mb-3">
                <div className="mx-auto w-12 h-20 border-2 border-navy-dark rounded-lg"></div>
              </div>
              <h4 className="font-medium">Mobile</h4>
              <p className="text-sm text-navy-light mt-1">375px width</p>
              <Button 
                variant="outline" 
                className="mt-3 w-full"
                onClick={() => {
                  if (!searchQuery) {
                    toast({
                      title: "URL required",
                      description: "Please enter a website URL to preview"
                    });
                    return;
                  }
                  window.open(`https://ui.dev/atrule/mobile/${searchQuery}`, '_blank');
                }}
              >
                Preview
                <ExternalLink className="ml-1 w-4 h-4" />
              </Button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <div className="mb-3">
                <div className="mx-auto w-20 h-16 border-2 border-navy-dark rounded-lg"></div>
              </div>
              <h4 className="font-medium">Tablet</h4>
              <p className="text-sm text-navy-light mt-1">768px width</p>
              <Button 
                variant="outline" 
                className="mt-3 w-full"
                onClick={() => {
                  if (!searchQuery) {
                    toast({
                      title: "URL required",
                      description: "Please enter a website URL to preview"
                    });
                    return;
                  }
                  window.open(`https://ui.dev/atrule/tablet/${searchQuery}`, '_blank');
                }}
              >
                Preview
                <ExternalLink className="ml-1 w-4 h-4" />
              </Button>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4 text-center">
              <div className="mb-3">
                <div className="mx-auto w-24 h-14 border-2 border-navy-dark rounded-lg"></div>
              </div>
              <h4 className="font-medium">Desktop</h4>
              <p className="text-sm text-navy-light mt-1">1440px width</p>
              <Button 
                variant="outline" 
                className="mt-3 w-full"
                onClick={() => {
                  if (!searchQuery) {
                    toast({
                      title: "URL required",
                      description: "Please enter a website URL to preview"
                    });
                    return;
                  }
                  window.open(`https://ui.dev/atrule/desktop/${searchQuery}`, '_blank');
                }}
              >
                Preview
                <ExternalLink className="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="mt-8 text-navy-light text-sm">
            <p>Enter your website URL and click preview to see how it looks on different devices.</p>
          </div>
        </div>
      )
    },
    {
      id: 'code-snippets',
      name: 'Frontend Code Snippets',
      description: 'Useful code snippets for front-end development',
      icon: Code,
      component: (
        <div className="mt-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>CSS Snippets</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px] lg:w-[500px] space-y-3">
                    <div className="border rounded-md p-3 bg-gray-50">
                      <h4 className="font-medium mb-2">Modern CSS Reset</h4>
                      <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32">
{`/* Modern CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

body, h1, h2, h3, h4, p, figure, blockquote, dl, dd {
  margin: 0;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}`}
                      </pre>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-2"
                        onClick={() => {
                          navigator.clipboard.writeText(`/* Modern CSS Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

body, h1, h2, h3, h4, p, figure, blockquote, dl, dd {
  margin: 0;
}

html:focus-within {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}`);
                          toast({
                            title: "Copied to clipboard",
                            description: "CSS reset code has been copied"
                          });
                        }}
                      >
                        Copy <Copy className="ml-1 w-3 h-3" />
                      </Button>
                    </div>
                    
                    <div className="border rounded-md p-3 bg-gray-50">
                      <h4 className="font-medium mb-2">Glassmorphism Effect</h4>
                      <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32">
{`.glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}`}
                      </pre>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-2"
                        onClick={() => {
                          navigator.clipboard.writeText(`.glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
}`);
                          toast({
                            title: "Copied to clipboard",
                            description: "Glassmorphism effect code has been copied"
                          });
                        }}
                      >
                        Copy <Copy className="ml-1 w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger>React Snippets</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-[400px] lg:w-[500px] space-y-3">
                    <div className="border rounded-md p-3 bg-gray-50">
                      <h4 className="font-medium mb-2">Simple React Hook</h4>
                      <pre className="text-xs bg-gray-100 p-2 rounded overflow-auto max-h-32">
{`import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return windowSize;
}`}
                      </pre>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="mt-2"
                        onClick={() => {
                          navigator.clipboard.writeText(`import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return windowSize;
}`);
                          toast({
                            title: "Copied to clipboard",
                            description: "React hook code has been copied"
                          });
                        }}
                      >
                        Copy <Copy className="ml-1 w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium flex items-center mb-3">
                <Download className="mr-2 w-4 h-4" />
                Useful Downloads
              </h4>
              <ul className="space-y-2">
                <li>
                  <Button 
                    variant="link" 
                    className="text-navy-dark hover:text-redox p-0 h-auto"
                    onClick={() => {
                      toast({
                        title: "Resource link",
                        description: "Download would start in a real implementation"
                      });
                    }}
                  >
                    Frontend Checklist PDF
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="text-navy-dark hover:text-redox p-0 h-auto"
                    onClick={() => {
                      toast({
                        title: "Resource link",
                        description: "Download would start in a real implementation"
                      });
                    }}
                  >
                    Landing Page Best Practices Guide
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="text-navy-dark hover:text-redox p-0 h-auto"
                    onClick={() => {
                      toast({
                        title: "Resource link",
                        description: "Download would start in a real implementation"
                      });
                    }}
                  >
                    Web Performance Optimization Tips
                  </Button>
                </li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium flex items-center mb-3">
                <ExternalLink className="mr-2 w-4 h-4" />
                Useful Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <Button 
                    variant="link" 
                    className="text-navy-dark hover:text-redox p-0 h-auto"
                    onClick={() => window.open('https://css-tricks.com', '_blank')}
                  >
                    CSS-Tricks
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="text-navy-dark hover:text-redox p-0 h-auto"
                    onClick={() => window.open('https://developer.mozilla.org', '_blank')}
                  >
                    MDN Web Docs
                  </Button>
                </li>
                <li>
                  <Button 
                    variant="link" 
                    className="text-navy-dark hover:text-redox p-0 h-auto"
                    onClick={() => window.open('https://web.dev', '_blank')}
                  >
                    web.dev by Google
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="tools" className="bg-gray-50 py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-dark mb-4">Free Developer Tools</h2>
          <p className="text-navy-light text-lg max-w-2xl mx-auto">
            We've built these tools to help you create better websites. Try them out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className={`border rounded-lg p-6 cursor-pointer transition-all hover:shadow-md ${
                activeTool === tool.id ? "border-redox bg-white shadow-md" : "border-gray-200 bg-white"
              }`}
              onClick={() => setActiveTool(activeTool === tool.id ? null : tool.id)}
            >
              <div className="flex items-center mb-3">
                <div className="bg-redox/10 p-2 rounded-md">
                  <tool.icon className="w-5 h-5 text-redox" />
                </div>
                <h3 className="ml-3 font-bold text-navy-dark">{tool.name}</h3>
              </div>
              <p className="text-navy-light text-sm">{tool.description}</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="text-xs text-navy-light">
                  {activeTool === tool.id ? "Click to collapse" : "Click to expand"}
                </span>
                {activeTool === tool.id ? (
                  <Check className="w-4 h-4 text-redox" />
                ) : (
                  <div className="w-5 h-5 rounded-full border border-redox flex items-center justify-center">
                    <span className="block w-3 h-0.5 bg-redox"></span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {activeTool && (
          <div className="border border-gray-200 rounded-lg p-6 bg-white animate-fade-in">
            {tools.find(t => t.id === activeTool)?.component}
          </div>
        )}
      </div>
    </section>
  );
};

export default ToolsSection;
