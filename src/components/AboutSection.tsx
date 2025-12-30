import React from "react";
import { Code, Cpu, Trophy, Target } from "lucide-react";
import { Card } from "./ui/card";

export const AboutSection = () => {
  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Full-Stack Development",
      description: "Passionate about creating end-to-end web solutions",
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Electrical Engineering",
      description: "Strong foundation from IIT Bhilai",
    },
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Team Player",
      description: "Sports enthusiast with strong team work",
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "Innovation Focus",
      description: "Building innovative software solutions",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-[#1e3a8a] mb-4">
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
              with a deep interest in software development, full-stack web development.
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
              — if you don’t find me in class or coding in my room, you’ll probably find me on the
              volleyball court, delivering sharp and precise attacks with passion. For me, volleyball
              is the perfect reset button — a place where focus, teamwork come together in
              the best way.
            </p>

          </div>
        </div>

        {/* Terminal */}
        <div className="mx-auto w-full max-w-3xl mb-10">
          <div className="bg-card border border-border rounded-lg p-8 font-mono text-base w-full">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-muted-foreground ml-2">terminal</span>
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
                Software Development | Full-Stack Development
              </p>
            </div>
          </div>
        </div>

        {/* 4 highlight boxes in one horizontal row */}
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="cyber-card group cursor-pointer w-full"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-3 p-4">
                  <div>{item.icon}</div>
                  <h3 className="font-cyber font-bold text-sm text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
