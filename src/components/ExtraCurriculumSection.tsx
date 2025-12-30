import React from "react";
import { Users, Volleyball, Shield, Star, Sparkles } from "lucide-react";

export default function ExtraCurriculumSection() {
  const softSkills = [
    "Effective Communication",
    "Quick Learner",
    "Teamwork & Collaboration",
    "Problem Solving",
    "Adaptability to Situations",
    "Creativity & Innovation",
  ];

  const items = [
    {
      id: "leadership",
      title: "Leadership Roles",
      icon: <Users className="w-6 h-6 text-primary" />,
      bullets: [
        "Inter IIT Head | Sports Council, IIT Bhilai | CoSA 2025–26",
        "Prayatna 7.0 Co-Convenor | Sports Council, IIT Bhilai | CoSA 2024–25",
      ],
    },
    {
      id: "interiit",
      title: "Inter IIT Participation",
      icon: <Shield className="w-6 h-6 text-primary" />,
      bullets: [
        "Represented IIT Bhilai Volleyball & Athletics Team at the 58th Inter IIT Sports Meet, IIT Hyderabad",
        "Represented IIT Bhilai Volleyball Team at the 57th Inter IIT Sports Meet, IIT Kanpur",
      ],
    },
    {
      id: "personal",
      title: "Personal Development",
      icon: <Star className="w-6 h-6 text-primary" />,
      bullets: [
        "Dedicated to improving leadership and organizational skills",
        "Promotes student engagement and sports culture across campus",
      ],
    },
  ];

  return (
    <section id="extracurricular" className="py-20">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1e3a8a]">
            Leadership & Extracurricular
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mt-4" />
        </div>

        {/* VERTICAL STACK OF BOXES — use explicit rowGap for consistent spacing */}
        <div
          className="flex flex-col"
          style={{ rowGap: "52px" }} // <-- reliable spacing (52px ≈ 3.25rem)
        >
          {/* Soft Skills Box */}
          <div className="p-8 rounded-lg border border-border bg-card shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="font-semibold text-lg text-foreground">Soft Skills</h3>
            </div>

            <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-muted-foreground">
              {softSkills.map((skill, i) => (
                <div key={i} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Other Boxes */}
          {items.map((section) => (
            <div
              key={section.id}
              className="p-8 rounded-lg border border-border bg-card shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                {section.icon}
                <h3 className="font-semibold text-lg text-foreground">
                  {section.title}
                </h3>
              </div>

              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-2 ml-2">
                {section.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
