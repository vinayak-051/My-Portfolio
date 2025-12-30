import { Navigation } from "./Navigation";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { TechStackSection } from "./TechStackSection";
import { ProjectsSection } from "./ProjectsSection";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import ExperienceSection from "./ExperienceSection";
import ExtraCurriculumSection from "./ExtraCurriculumSection";

export const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ExperienceSection />
      <ProjectsSection />
      <ExtraCurriculumSection />
      <ContactSection />
      <Footer />
    </div>
  );
};
