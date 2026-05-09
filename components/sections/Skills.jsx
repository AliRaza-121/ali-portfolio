"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: "⚛️", level: "Advanced", color: "blue" },
  { name: "Next.js", icon: "▲", level: "Advanced", color: "white" },
  { name: "JavaScript", icon: "🟨", level: "Advanced", color: "yellow" },
  { name: "Node.js", icon: "🟢", level: "Intermediate", color: "green" },
  { name: "MongoDB", icon: "🍃", level: "Intermediate", color: "green" },
  { name: "Tailwind CSS", icon: "🎨", level: "Advanced", color: "cyan" },
  { name: "TypeScript", icon: "🔷", level: "Intermediate", color: "blue" },
  { name: "Git", icon: "📦", level: "Intermediate", color: "orange" },
];

const colorMap = {
  blue: "hover:border-blue-500/40 hover:shadow-blue-500/10",
  white: "hover:border-white/30 hover:shadow-white/5",
  yellow: "hover:border-yellow-500/40 hover:shadow-yellow-500/10",
  green: "hover:border-green-500/40 hover:shadow-green-500/10",
  cyan: "hover:border-cyan-500/40 hover:shadow-cyan-500/10",
  orange: "hover:border-orange-500/40 hover:shadow-orange-500/10",
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeading subtitle="My Skills" title="Tech" highlight="Stack" />
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 0.1}>
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.98 }} className={`group bg-[#141414] border border-[#1f1f1f] p-6 rounded-xl text-center transition-all duration-300 hover:shadow-lg cursor-default relative overflow-hidden ${colorMap[skill.color]}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" style={{ animation: "nav-line 2s linear infinite", position: "absolute" }} />
                </div>
                <div className="relative z-10">
                  <div className="text-3xl mb-3 group-hover:scale-125 transition-transform duration-300">{skill.icon}</div>
                  <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300" style={{ fontFamily: "var(--font-heading)" }}>{skill.name}</h3>
                  <p className="text-xs text-zinc-500" style={{ fontFamily: "var(--font-mono)" }}>{skill.level}</p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}