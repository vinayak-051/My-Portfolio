import React from "react";
import { Code, Cpu, Trophy, Target } from "lucide-react";

const highlights = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Electrical Engineering",                                                                          
    description: "Strong foundation from IIT Bhilai",
    accent: "text-sky-500",
    bgAccent: "bg-sky-500/10 border-sky-500/20",
  },
  {
    icon: <Code className="w-5 h-5" />,
    title: "Software Development / AI-ML",
    description: "Building full-stack systems powered by AI",
    accent: "text-amber-500",
    bgAccent: "bg-amber-500/10 border-amber-500/20",
  },
  {
    icon: <Trophy className="w-5 h-5" />,
    title: "Team Player",
    description: "Sports enthusiast with strong team work",
    accent: "text-emerald-500",
    bgAccent: "bg-emerald-500/10 border-emerald-500/20",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Innovation Focus",
    description: "Building innovative software solutions",
    accent: "text-violet-500",
    bgAccent: "bg-violet-500/10 border-violet-500/20",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-600 dark:text-slate-300 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
        </div>

        {/* Full-width bio text */}
        <div className="mx-auto w-full max-w-4xl mb-10">
          <div className="text-lg leading-relaxed space-y-4 text-foreground">

            <p>
              I'm an{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                Electrical Engineering
              </span>{" "}
              undergraduate at{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                IIT Bhilai
              </span>{" "}
              with a deep interest in software development, Artificial Intelligence (AI).
            </p>

            <p>
              Though rooted in electrical systems, I bridge my core knowledge with innovative
              software solutions. My journey combines the precision of engineering with the creativity of code,
              always pushing the boundaries of what's possible in the digital realm.
              I constantly strive to learn, adapt, and build impactful solutions that blend technology with real-world needs.
            </p>

            <p>
              I'm a{" "}
              <span className="text-blue-600 dark:text-blue-400 font-semibold">
                sports enthusiast
              </span>{" "}
              — if you don't find me in class or coding in my room, you'll probably find me on the
              volleyball court, delivering sharp and precise attacks with passion. For me, volleyball
              is the perfect reset button — a place where focus, teamwork come together in
              the best way.
            </p>

          </div>
        </div>

        {/* Terminal */}
        <div className="mx-auto w-full max-w-3xl mb-10">
          <div className="bg-card border border-border rounded-xl p-8 font-mono text-base w-full">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-muted-foreground ml-2 text-sm">terminal</span>
            </div>
            <div className="space-y-2">
              <p>
                <span className="text-primary">➜</span> whoami
              </p>
              <p className="text-primary">ramavath_vinayak</p>
              <p>
                <span className="text-primary">➜</span> cat interests
              </p>
              <p className="text-foreground">
                Software Development | Artificial Intelligence
              </p>
            </div>
          </div>
        </div>

        {/* 4 highlight boxes */}
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-5 transition-shadow duration-200 hover:shadow-md dark:hover:shadow-black/30 flex flex-col items-center text-center space-y-3"
              >
                <div className={`flex items-center justify-center w-10 h-10 rounded-lg border ${item.bgAccent} ${item.accent}`}>
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold text-sm text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
