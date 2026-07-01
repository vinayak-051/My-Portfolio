import React from "react";
import { Users, Shield, Star, Sparkles } from "lucide-react";

const softSkills = [
  "Effective Communication",
  "Quick Learner",
  "Teamwork & Collaboration",
  "Problem Solving",
  "Adaptability to Situations",
  "Creativity & Innovation",
];

type Item = {
  id: string;
  title: string;
  icon: React.ReactNode;
  accent: string;
  bgAccent: string;
  dotColor: string;
  bullets: string[];
};

const items: Item[] = [
  {
    id: "leadership",
    title: "Leadership Roles",
    icon: <Users className="w-5 h-5" />,
    accent: "text-blue-500",
    bgAccent: "bg-blue-500/10 border-blue-500/20",
    dotColor: "bg-blue-500",
    bullets: [
      "Inter IIT Head | Sports Council, IIT Bhilai | CoSA 2025–26",
      "Prayatna 7.0 Co-Convenor | Sports Council, IIT Bhilai | CoSA 2024–25",
    ],
  },
  {
    id: "interiit",
    title: "Sports & Inter IIT Participation",
    icon: <Shield className="w-5 h-5" />,
    accent: "text-emerald-500",
    bgAccent: "bg-emerald-500/10 border-emerald-500/20",
    dotColor: "bg-emerald-500",
    bullets: [
      "Represented IIT Bhilai Volleyball & Athletics Team at the 58th Inter IIT Sports Meet, IIT Hyderabad",
      "Represented IIT Bhilai Volleyball Team at the 57th Inter IIT Sports Meet, IIT Kanpur",
      "Player of the Tournament || Prayatna 8.0",
    ],
  },
  {
    id: "personal",
    title: "Personal Development",
    icon: <Star className="w-5 h-5" />,
    accent: "text-amber-500",
    bgAccent: "bg-amber-500/10 border-amber-500/20",
    dotColor: "bg-amber-500",
    bullets: [
      "Demonstrated strong leadership, team coordination, and decision-making by organizing and managing student-centric initiatives.",
      "Fostered student engagement by promoting sports, wellness, and collaborative campus activities.",
      "Coordinated inter-departmental events, ensuring seamless planning, execution, and participant management.",
    ],
  },
];

export default function ExtraCurriculumSection() {
  return (
    <section id="extracurricular" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-600 dark:text-slate-300">
            Leadership &amp; Extracurricular
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4" />
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {/* Soft Skills card */}
          <div className="rounded-xl border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-md dark:hover:shadow-black/30">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg border bg-violet-500/10 border-violet-500/20 text-violet-500 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-base text-foreground">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-6 text-sm text-muted-foreground">
              {softSkills.map((skill, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-500/60 flex-shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other cards */}
          {items.map((item) => (
            <div
              key={item.id}
              className="rounded-xl border border-border bg-card p-6 transition-shadow duration-200 hover:shadow-md dark:hover:shadow-black/30"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-lg border ${item.bgAccent} ${item.accent} shrink-0`}
                >
                  {item.icon}
                </div>
                <h3 className="font-semibold text-base text-foreground">
                  {item.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {item.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.dotColor}`} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
