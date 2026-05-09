"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Code2, Coffee, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const quickFacts = [
  { icon: <Code2 className="w-5 h-5 text-blue-500" />, label: "Experience", value: "3+ Years" },
  { icon: <Rocket className="w-5 h-5 text-blue-500" />, label: "Projects", value: "20+ Done" },
  { icon: <Users className="w-5 h-5 text-blue-500" />, label: "Clients", value: "15+ Happy" },
  { icon: <Coffee className="w-5 h-5 text-blue-500" />, label: "Coffee", value: "∞ Cups" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeading subtitle="About Me" title="Know" highlight="More" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative group">
              <div className="w-full aspect-square max-w-sm mx-auto rounded-2xl bg-[#141414] border border-[#1f1f1f] overflow-hidden relative transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.1)]">
      <Image
  src="/ali.jpg"
  alt="Ali Raza"
  fill
  className="object-cover transition-transform duration-500 group-hover:scale-105"
  priority
  sizes="(max-width: 768px) 280px, 384px"
/>
                <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/5 rounded-bl-3xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:bg-blue-500/10" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-blue-500/5 rounded-tr-3xl transition-all duration-500 group-hover:w-24 group-hover:h-24 group-hover:bg-blue-500/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <motion.div whileHover={{ scale: 1.05, y: -2 }} className="absolute -bottom-4 -right-4 md:right-4 bg-[#141414] border border-[#1f1f1f] rounded-xl px-4 py-2 shadow-lg hover:border-blue-500/30 hover:shadow-blue-500/10 transition-all duration-300 cursor-default" style={{ animation: "float 4s ease-in-out infinite" }}>
                <p className="text-xs text-zinc-400" style={{ fontFamily: "var(--font-mono)" }}> </p>
                <p className="text-sm font-semibold text-blue-500" style={{ fontFamily: "var(--font-heading)" }}>Next.js & MongoDB</p>
              </motion.div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
                A passionate developer building for the web
              </h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                I am Ali Raza, a Full Stack Developer based in Pakistan. I
                specialize in building modern web applications using React,
                Next.js, Node.js, and MongoDB.
              </p>
              <p className="text-zinc-400 leading-relaxed mb-8">
                I love turning complex problems into simple, beautiful, and
                intuitive solutions. When I am not coding, you will find me
                exploring new technologies or enjoying a good cup of coffee.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {quickFacts.map((fact) => (
                  <motion.div key={fact.label} whileHover={{ scale: 1.03, y: -3 }} className="group bg-[#141414] border border-[#1f1f1f] p-4 rounded-xl hover:border-blue-500/30 transition-all duration-300 cursor-default relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="flex items-center gap-3 relative z-10">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all duration-300 group-hover:scale-110">
                        {fact.icon}
                      </div>
                      <div>
                        <p className="text-xs text-zinc-500" style={{ fontFamily: "var(--font-mono)" }}>{fact.label}</p>
                        <p className="text-sm font-semibold text-white" style={{ fontFamily: "var(--font-heading)" }}>{fact.value}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}