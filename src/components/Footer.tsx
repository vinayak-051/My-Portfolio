import { ChevronUp, Terminal, Heart } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#about", label: "About" },
    { href: "#tech", label: "Tech Stack" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="container mx-auto px-6 py-8">

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            <span>© {currentYear} Ramavath Vinayak - All Rights Reserved</span>
          </div>

          {/* Contact Links */}
          <div className="flex space-x-6">
            <a href="#contact" onClick={() => scrollToSection('#contact')} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact Me
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-primary opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-accent opacity-30" />
    </footer>
  );
};