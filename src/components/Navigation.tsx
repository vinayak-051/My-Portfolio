import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (eOrHref: any, maybeHref?: string) => {
    let href: string;
    if (typeof eOrHref === "string") {
      href = eOrHref;
    } else {
      eOrHref.preventDefault();
      href = maybeHref || eOrHref.currentTarget.getAttribute("href");
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div
            className={`text-xl font-bold ${isScrolled ? "text-black dark:text-white" : ""}`}
            style={!isScrolled ? { color: "whitesmoke" } : {}}
          >
            &lt; RV /&gt;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isScrolled ? "text-black dark:text-white" : ""
                  }`}
                  style={!isScrolled ? { color: "whitesmoke" } : {}}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <ThemeToggle />
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
          >
            {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left py-2 font-cyber uppercase tracking-wider text-sm ${
                    isScrolled ? "text-black dark:text-white" : ""
                  }`}
                  style={!isScrolled ? { color: "whitesmoke" } : {}}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
