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
  featured?: boolean;
  github?: string;
  demo?: string;
  demoText?: string;
  report?: string;
};

export const ProjectsSection = () => {
  const projects: Project[] = [
    {
      id: "plantnetra",
      title: "PlantNetra",
      highlights: [
        "Designed a custom PlantDiseaseNet with Multi-Scale Atrous Convolution blocks (dilation rates 4–32) and Squeeze-and-Excitation channel attention to classify 22 disease classes across 5 crops (Tomato, Potato, Corn, Apple, Grape).",
        "Exported the trained PyTorch model to ONNX for cross-platform inference and packaged the app as a hybrid mobile + web app using React, Vite, and Capacitor targeting iOS and Android.",
        "Delivered per-diagnosis remedy reports covering disease overview, root causes, curative treatments, prevention steps, and recommended agricultural products for each detected condition."
      ],
      technologies: ["Python", "PyTorch", "ONNX", "React", "Capacitor", "FastAPI"],
      category: "AI/ML & Mobile",
      color: "text-emerald-500",
      status: "Completed",
      github: "https://github.com/vinayak-051/PlantNetra"
    },
    {
      id: "sahayatri",
      title: "Sahayatri",
      highlights: [
        "Built a serverless travel marketplace with React + Supabase, enforcing per-user data isolation through PostgreSQL Row Level Security policies across guides, bookings, and messages.",
        "Implemented real-time tourist–guide chat via Supabase Realtime, alongside a full booking system, review system, buddy trip planning, and Google OAuth authentication.",
        "Achieved end-to-end test coverage with Vitest unit tests, ESLint linting, and Playwright E2E tests against a seeded database of 8 guides across 8 Indian cities."
      ],
      technologies: ["React", "Supabase", "PostgreSQL", "TypeScript", "Playwright"],
      category: "Full Stack",
      color: "text-violet-500",
      status: "Completed",
      featured: true,
      github: "https://github.com/vinayak-051/Sahayatri"
    },
    {
      id: "doctorify",
      title: "DrOne",
      highlights: [
        "Built a modular REST API with FastAPI covering patient management, appointments, real-time queue, medical records, and payments — each as a dedicated router module with clear separation of concerns.",
        "Implemented JWT authentication and a raw-SQL PostgreSQL schema with role-based access control to secure patient and doctor records at the data layer.",
        "Designed a patient queue management system alongside an analytics module to surface clinic operational metrics and reduce patient wait times."
      ],
      technologies: ["Python", "FastAPI", "PostgreSQL", "React", "JavaScript"],
      category: "Full Stack",
      color: "text-sky-500",
      status: "Completed",
      github: "https://github.com/vinayak-051/DrOne"
    },
    {
      id: "customer-churn",
      title: "Customer Churn Dashboard",
      highlights: [
        "Served a scikit-learn Pipeline (ColumnTransformer → Logistic Regression) as a Streamlit app supporting single-record predictions and CSV batch scoring with automatic schema alignment for missing input columns.",
        "Built business-facing controls including an adjustable decision threshold for precision/recall trade-offs and an Expected ROI calculator estimating revenue gained vs. retention cost per targeted cohort.",
        "Integrated SHAP global bar and local waterfall plots for model transparency, exposing top logistic regression coefficients and encoded feature names for non-technical stakeholders."
      ],
      technologies: ["Python", "Streamlit", "scikit-learn", "SHAP", "Pandas"],
      category: "ML / Data Science",
      color: "text-orange-500",
      status: "Completed",
      github: "https://github.com/vinayak-051/Telecom-Customer-Churn",
      demo: "https://predictpulse.streamlit.app/"
    },
    {
      id: "zombie-survivor",
      title: "Zombie Survivor",
      highlights: [
        "Implemented dual A* agents: the human uses danger-weighted node costs to route away from zombies, while zombies use pure shortest-path A* with a tile-claiming mechanism to prevent positional overlap.",
        "Guaranteed map solvability on every run through BFS connectivity checks — randomizing human start, safe zone, obstacles, and zombie positions while verifying a valid path exists before simulation begins.",
        "Designed a modular 5-file architecture (agent, environment, game, visualization, main) with real-time path rendering and a toggle between manual keyboard control and autonomous A* mode."
      ],
      technologies: ["Python", "Pygame", "A* Algorithm"],
      category: "Artificial Intelligence",
      color: "text-amber-500",
      status: "Completed",
      github: "https://github.com/vinayak-051/Zombie-Surviver",
      report: "https://drive.google.com/file/d/1clod1M6TUOWu-EP8vrufekpeJWoM2OPA/view?usp=sharing"
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker",
      highlights: [
        "Built a MERN stack finance app with JWT authentication, per-user data isolation via userId-scoped MongoDB queries, and bcrypt password hashing across separate income and expense collections.",
        "Implemented full CRUD for categorized transactions with icon and date support, date-sorted queries, and a one-click Excel export (ExcelJS) of complete transaction history for offline analysis.",
        "Structured the Express backend across 4 dedicated route modules (auth, expense, income, dashboard) with Mongoose models, JWT middleware, and Multer file upload support."
      ],
      technologies: ["MongoDB", "Express", "React", "Node.js", "ExcelJS"],
      category: "Full Stack",
      color: "text-sky-500",
      status: "Completed",
      github: "https://github.com/vinayak-051/Expense-Tracker",
      demo: "https://expense-tracker-5-uaeq.onrender.com"
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
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-600 dark:text-slate-300 mb-4">
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
                  className="professional-card group relative overflow-hidden px-6 py-6"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="relative z-10 flex flex-col text-left">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-heading font-bold text-xl text-foreground">
                            {project.title}
                          </h3>
                          {project.featured && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-500 border border-emerald-500/30">
                              Featured
                            </span>
                          )}
                        </div>
                        <span className={`inline-block mt-1.5 text-xs font-medium ${project.color}`}>
                          {project.category}
                        </span>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            project.status === "Completed" ? "bg-green-500" : "bg-amber-500"
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

                      <Button
                        size="sm"
                        className="flex-1"
                        onClick={() => openLink(secondaryLink ?? project.github)}
                      >
                        {secondaryLabel ?? "Demo"}
                      </Button>
                    </div>
                  </div>

                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
