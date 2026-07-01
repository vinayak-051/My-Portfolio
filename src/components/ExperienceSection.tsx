import React from "react";
import { Calendar, MapPin, Brain, TrendingUp } from "lucide-react";

type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  accent: string;
  bgAccent: string;
  dotColor: string;
  icon: React.ReactNode;
  bullets: string[];
};

const experiences: Experience[] = [
  {
    id: "aiml-2026",
    role: "AI/ML Intern",
    company: "APTRANSCO",
    period: "May 2026 – July 2026",
    location: "Vijayawada",
    accent: "text-orange-500",
    bgAccent: "bg-orange-500/10 border-orange-500/20",
    dotColor: "bg-orange-500",
    icon: <Brain className="w-5 h-5" />,
    bullets: [
      "Built a multilingual RAG assistant using LangChain to answer queries from internal APTRANSCO documents, supporting both English and Telugu for field engineers.",
    ],
  },
  {
    id: "ds-2025",
    role: "Data Science Intern",
    company: "Evoastra",
    period: "Sep 2025 – Nov 2025",
    location: "Remote",
    accent: "text-emerald-500",
    bgAccent: "bg-emerald-500/10 border-emerald-500/20",
    dotColor: "bg-emerald-500",
    icon: <TrendingUp className="w-5 h-5" />,
    bullets: [
      "Trained a Logistic Regression pipeline with ColumnTransformer preprocessing on a 7,000+ record telecom dataset to predict customer churn with high accuracy.",
    ],
  },
  {
    id: "aiml-2024",
    role: "AI/ML Intern",
    company: "IBM CSRBOX",
    period: "June 2024 – July 2024",
    location: "Remote",
    accent: "text-violet-500",
    bgAccent: "bg-violet-500/10 border-violet-500/20",
    dotColor: "bg-violet-500",
    icon: <Brain className="w-5 h-5" />,
    bullets: [
      "Developed AQUAGURU, a RAG-based chatbot using IBM Watson and LangChain to answer water quality and sanitation questions for rural communities across India.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-600 dark:text-slate-300">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-5 top-6 bottom-6 w-px bg-border" />

            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative flex gap-6">
                  {/* Icon node */}
                  <div
                    className={`relative z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full border ${exp.bgAccent} ${exp.accent}`}
                  >
                    {exp.icon}
                  </div>

                  {/* Card */}
                  <div className="flex-1 rounded-xl border border-border bg-card p-5 transition-shadow duration-200 hover:shadow-md dark:hover:shadow-black/30">
                    <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                      <div>
                        <h3 className="font-semibold text-base text-foreground">
                          {exp.role}
                        </h3>
                        <p className={`text-sm font-medium ${exp.accent}`}>
                          {exp.company}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-xs text-muted-foreground shrink-0">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-1.5">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${exp.dotColor}`} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
