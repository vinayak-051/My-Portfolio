import React from "react";
import { Calendar, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      id: "ds-2025",
      role: "Data Scientist Intern",
      company: "Evoastra",
      period: "Sep 2025 - Nov 2025",
      location: "Remote",
      bullets: ["Developed an ML model that predicts telecom customer churn"],
    },
    {
      id: "aiml-2024",
      role: "AI/ML Intern",
      company: "IBM CSRBOX",
      period: "June 2024 - July 2024",
      location: "Remote",
      bullets: [
        "Developed a chatbot AQUAGURU",
        "Incorporated scripts of WatsonX Assistant and advanced data analytics",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="px-6 w-full max-w-full">  {/* FULL WIDTH so 20% is correct */}

        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1e3a8a]">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4" />
        </div>

        <div className="relative w-full">

          {/* LINE AT EXACT 20% OF TOTAL WIDTH */}
          <div
            className="
              absolute left-[30%] top-0 bottom-0
              w-px -translate-x-1/2
              bg-blue-500/40 dark:bg-white/70
            "
          />

          <div className="flex flex-col space-y-20 w-full">

            {experiences.map((exp) => (
              <div key={exp.id} className="relative flex w-full">

                {/* NODE DOT AT 20% */}
                <div className="absolute left-[30%] -translate-x-1/2">
                  <div
                    className="
                      w-5 h-5 rounded-full
                      border-4 border-blue-600 dark:border-white
                      bg-white dark:bg-neutral-900
                    "
                  />
                </div>

                {/* CONTENT STARTING FROM 25% */}
                <div className="ml-[35%] w-[65%]">
                  <div className="font-semibold text-lg">{exp.role}</div>
                  <div className="text-sm text-muted-foreground">{exp.company}</div>

                  <div className="flex flex-col text-xs text-muted-foreground mt-2">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="list-disc list-inside mt-3 text-sm">
                    {exp.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>

                </div>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
