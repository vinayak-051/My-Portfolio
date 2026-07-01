import { Terminal, MonitorSmartphone, ServerCog, Brain, Database, CloudCog, Wrench } from "lucide-react";

type Category = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  bgAccent: string;
  technologies: string[];
};

const techCategories: Category[] = [
  {
    id: "languages",
    title: "Languages",
    description: "Programming languages used for software development",
    icon: <Terminal className="w-5 h-5" />,
    accent: "text-violet-500",
    bgAccent: "bg-violet-500/10 border-violet-500/20",
    technologies: ["Python", "Java", "C++", "C"],
  },
  {
    id: "frontend",
    title: "Frontend",
    description: "Building responsive and accessible UI components",
    icon: <MonitorSmartphone className="w-5 h-5" />,
    accent: "text-sky-500",
    bgAccent: "bg-sky-500/10 border-sky-500/20",
    technologies: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Scalable server-side applications and business logic",
    icon: <ServerCog className="w-5 h-5" />,
    accent: "text-emerald-500",
    bgAccent: "bg-emerald-500/10 border-emerald-500/20",
    technologies: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Building intelligent applications using machine learning",
    icon: <Brain className="w-5 h-5" />,
    accent: "text-orange-500",
    bgAccent: "bg-orange-500/10 border-orange-500/20",
    technologies: ["PyTorch", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Matplotlib", "SciPy", "Jupyter Notebook"],
  },
  {
    id: "database",
    title: "Database",
    description: "Managing relational and NoSQL databases",
    icon: <Database className="w-5 h-5" />,
    accent: "text-cyan-500",
    bgAccent: "bg-cyan-500/10 border-cyan-500/20",
    technologies: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    description: "Deploying and managing applications on cloud platforms",
    icon: <CloudCog className="w-5 h-5" />,
    accent: "text-blue-500",
    bgAccent: "bg-blue-500/10 border-blue-500/20",
    technologies: ["Git", "GitHub", "Docker", "AWS", "Supabase"],
  },
  {
    id: "tools",
    title: "Development Tools",
    description: "Professional tools for development, debugging, and productivity",
    icon: <Wrench className="w-5 h-5" />,
    accent: "text-rose-500",
    bgAccent: "bg-rose-500/10 border-rose-500/20",
    technologies: ["Visual Studio Code", "PyCharm", "Postman", "Linux", "Anaconda", "Jupyter Notebook"],
  },
];

export const TechStackSection = () => {
  return (
    <section id="tech" className="py-20 relative">
      <div className="container mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-600 dark:text-slate-300 mb-3">
            Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techCategories.map((category) => (
              <div
                key={category.id}
                className="group rounded-xl border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-md dark:hover:shadow-black/30"
              >
                {/* Card header */}
                <div className="flex items-start gap-4 mb-5">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-lg border ${category.bgAccent} ${category.accent} shrink-0`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-base text-foreground leading-tight">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border border-border bg-muted/50 text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    {category.technologies.length} {category.technologies.length === 1 ? "technology" : "technologies"}
                  </span>
                  <div className={`w-1.5 h-1.5 rounded-full ${category.accent.replace("text-", "bg-")}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
