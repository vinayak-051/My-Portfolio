import { useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

type Project = {
  id: string;
  title: string;
  highlights: string[];
  technologies: string[];
  category: string;
  color?: string;
  status: string;
  github?: string;
  demo?: string;
  demoText?: string;
  report?: string;
};

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects: Project[] = [
    {
      id: "zombie-survivor",
      title: "Zombie Survivor",
      highlights: [
        "Implemented A* pathfinding for human and zombie movement.",
        "Generated random, always-solvable grid environments.",
        "Built a modular Pygame simulation with real-time visuals."
      ],
      technologies: ["Python", "Pygame", "A* Algorithm"],
      category: "Artificial Intelligence",
      color: "text-neon-green",
      status: "Completed",
      github: "https://github.com/vinayak-051/Zombie-Surviver",
      report: "https://drive.google.com/file/d/1clod1M6TUOWu-EP8vrufekpeJWoM2OPA/view?usp=sharing"
    },
    {
      id: "customer-churn",
      title: "Customer Churn Dashboard",
      highlights: [
        "Developed a Streamlit app using a Logistic Regression pipeline.",
        "Added single/batch predictions with threshold and ROI controls.",
        "Integrated SHAP for global and local model explanations.",
        "Ensured stable inference via ColumnTransformer preprocessing."
      ],
      technologies: ["Python", "Streamlit", "scikit-learn", "SHAP"],
      category: "ML / Data Science",
      color: "text-neon-cyan",
      status: "Completed",
      github: "https://github.com/vinayak-051/Telecom-Customer-Churn",
      demo: "https://predictpulse.streamlit.app/"
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker",
      highlights: [
        "Implemented secure JWT authentication with bcrypt hashing.",
        "Designed category-wise income and expense management pages.",
        "Built a fully responsive interface for smooth user experience."
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js"],
      category: "Full Stack",
      color: "text-neon-orange",
      status: "Completed",
      github: "https://github.com/vinayak-051/Expense-Tracker",
      demo: "https://expense-tracker-5-uaeq.onrender.com"
    },
    {
      id: "battery-alarm",
      title: "Battery Overheating Alarm System",
      highlights: [
        "Loaded and visualized noisy vs clean temperature signals.",
        "Applied MA, Median, and Gaussian filters for noise reduction.",
        "Built threshold-based overheating detection and analysis."
      ],
      technologies: ["Python", "Pandas", "Matplotlib"],
      category: "Signal Processing",
      color: "text-neon-yellow",
      status: "Completed",
      github: "https://github.com/vinayak-051/Battery-Heating-Classification",
      report: "https://drive.google.com/file/d/1YzDWd1jp59skvYZpk0yKQdlw2J5YAkSj/view?usp=sharing"
    }
  ];

  const openLink = (url?: string) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1e3a8a] mb-4">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col gap-8 mb-12">
            {projects.map((project, index) => {
              const secondaryLink = project.demo ?? project.report;
              const secondaryLabel = project.demo
                ? project.demoText || "Demo"
                : project.report
                ? "Report"
                : undefined;

              return (
                <Card
                  key={project.id}
                  className="cyber-card group relative overflow-hidden px-6 py-6"
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="relative z-10 flex flex-col text-left">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-cyber font-bold text-xl text-foreground">
                          {project.title}
                        </h3>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {project.category}
                        </Badge>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            project.status === "Completed" ? "bg-neon-green" : "bg-neon-orange"
                          }`}
                        />
                        <span className="text-xs font-mono text-muted-foreground">
                          {project.status}
                        </span>
                      </div>
                    </div>

                    <ul className="mb-4 ml-4 list-disc list-inside text-sm text-muted-foreground">
                      {project.highlights.map((h, i) => (
                        <li key={`${project.id}-h-${i}`} className="leading-snug mb-2">
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <Badge key={`${project.id}-tech-${tech}`} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3 mt-auto">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => openLink(project.github)}
                      >
                        Code
                      </Button>

                      {secondaryLink ? (
                        <Button
                          size="sm"
                          className="flex-1 cyber-btn"
                          onClick={() => openLink(secondaryLink)}
                        >
                          {secondaryLabel}
                        </Button>
                      ) : (
                        <Button size="sm" className="flex-1 cyber-btn" disabled>
                          No Demo/Report
                        </Button>
                      )}
                    </div>
                  </div>

                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 bg-gradient-cyber opacity-10 animate-pulse" />
                  )}

                  <div className="absolute top-0 right-0 w-0 h-0 border-l-[18px] border-l-transparent border-t-[18px] border-t-neon-cyan opacity-20" />
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
