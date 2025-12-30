import { useState, useEffect } from "react";
import { ChevronDown, Play, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import heroBg from "../assets/hero-bg.jpg";

export const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "Bridging electrical engineering and software development with futuristic vision";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden matrix-bg cyber-grid"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-neon-cyan opacity-60 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto animate-slide-up">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
            {/* Text Content */}
            <div className="text-center space-y-4 md:order-1">
              <h1 className="text-3xl md:text-4xl font-heading font-bold leading-tight" style={{ color: 'rgb(10, 110, 190)' }}>
                Ramavath Vinayak
              </h1>
              <div className="relative">
                <p className="text-base md:text-lg font-medium" style={{ color: 'rgba(210, 231, 249, 1)' }}>
                  Full Stack Web Developer
                </p>
              </div>
            </div>

            {/* Profile Photo */}
            <div className="relative md:order-2">
              <div className="w-60 h-60 mx-auto rounded-full border-4 border-primary/30 bg-gradient-subtle overflow-hidden">
                <img 
                  src="/vinayak-uploads/84b7aed6-504e-437e-bf5f-d69801c8d151.png" 
                  alt="Ramavath Vinayak" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
            </div>
          </div>

          {/* Typing animation tagline */}
          <div className="text-center space-y-6 mt-8">
            <div className="h-20 flex items-center justify-center">
              <p className="text-lg md:text-xl font-mono max-w-3xl" style={{ color: 'rgb(10, 110, 200)' }}>
                {typedText}
                <span className="animate-ping inline-block w-0.5 h-6 bg-primary ml-1" />
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={scrollToProjects}
                className="group relative overflow-hidden"
                size="lg"
              >
                <span className="relative z-10">View My Work</span>
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
              >
                Get In Touch
              </Button>
            </div>

            {/* Status indicator */}
            <div className="flex items-center justify-center space-x-2 text-sm font-mono text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span>ONLINE • AVAILABLE FOR OPPORTUNITIES</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-neon-cyan" />
      </div>

      {/* Noise overlay */}
      <div className="noise-overlay absolute inset-0" />
    </section>
  );
};