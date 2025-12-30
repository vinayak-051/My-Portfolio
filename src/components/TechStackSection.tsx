import { Code, Database, Globe, Wrench } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export const TechStackSection = () => {
  const techCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: <Code className="w-6 h-6 text-primary" />,
      technologies: ["C", "C++", "Python", "Java"],
    },
    {
      id: "frontend",
      title: "Frontend",
      icon: <Globe className="w-6 h-6 text-primary" />,
      technologies: ["HTML", "CSS", "JavaScript", "ReactJs"],
    },
    {
      id: "backend",
      title: "Backend",
      icon: <Globe className="w-6 h-6 text-primary" />,
      technologies: ["NodeJs", "ExpressJs"],
    },
    {
      id: "database",
      title: "Database",
      icon: <Database className="w-6 h-6 text-primary" />,
      technologies: ["MySql", "MongoDB"],
    },
    {
      id: "datascience",
      title: "Data Science",
      icon: <Code className="w-6 h-6 text-primary" />,
      technologies: ["NumPy", "Pandas", "Matplotlib", "SciPy", "Jupyter"],
    },
    {
      id: "tools",
      title: "Tools",
      icon: <Wrench className="w-6 h-6 text-primary" />,
      technologies: ["GitHub", "VS Code", "PyCharm", "Linux", "Anaconda", "Jupyter Notebook"],
    },
  ];

  return (
    <section id="tech" className="py-20 relative">
      <div className="container mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1e3a8a] mb-3">
            Tech Stack
          </h2>

          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          {/* 2 cards per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {techCategories.map((category, index) => (
              <Card
                key={category.id}
                className="cyber-card p-8 min-h-[230px] w-full"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  {category.icon}
                  <div>
                    <h3 className="font-cyber font-bold text-lg text-foreground">
                      {category.title}
                    </h3>
                  </div>
                </div>

                {/* Technologies grid */}
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {category.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-border text-foreground text-xs py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <span className="text-xs text-muted-foreground font-mono">
                    {category.technologies.length} technologies
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
