"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// 👇 UPDATE THIS ARRAY WITH YOUR REAL PROJECTS 👇
const projects = [
  {
    title: "Bahria Town RolePlay",
    description: "An official website for viewing rules and information about a GTA V FiveM roleplay server.",
    image: "/bahria.png", // Update this with your exact filename in the public folder
    tags: ["Next.js", "Tailwind"],
    liveUrl: "https://bahria-town-rp.vercel.app/",
  },
  {
    title: "WeatherWise",
    description: "WeatherWise - Your Personal Weather Companion.",
    image: "/weatherwise.png", // Update this with your exact filename in the public folder
    tags: ["Next.js", "Tailwind"],
    liveUrl: "https://weatherwise-orcin.vercel.app/",
  },
  {
    title: "Quest Free",
    description: "The ultimate gamer vault. Track free deals from Steam, Epic, and GOG.",
    image: "/questfree.png", // Update this with your exact filename in the public folder
    tags: ["Next.js", "Tailwind"],
    liveUrl: "https://www.questfree.site/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <SectionHeading subtitle="My Work" title="Featured" highlight="Projects" />
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.15}>
              <motion.div whileHover={{ y: -8 }} className="group bg-[#141414] border border-[#1f1f1f] rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4),0_0_30px_rgba(59,130,246,0.1)] h-full flex flex-col relative">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="h-48 bg-[#0f0f0f] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10" />
                  
                  {/* Replaced emoji with an image tag pointing to the public folder */}
                  <motion.img 
                    whileHover={{ scale: 1.05 }} 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover relative z-0 transition-all duration-300"
                  />
                  
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-0 rotate-45 z-20">
                    <ArrowUpRight size={14} className="text-white" />
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300" style={{ fontFamily: "var(--font-heading)" }}>{project.title}</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-0.5 bg-[#1f1f1f] text-zinc-400 text-xs rounded-lg hover:bg-blue-500/15 hover:text-blue-400 transition-all duration-200 cursor-default hover:scale-105" style={{ fontFamily: "var(--font-mono)" }}>{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-[#1f1f1f]">
                    {/* GitHub button removed, Live Demo button will naturally stretch to full width thanks to flex-1 */}
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="group/btn relative flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-white rounded-lg text-sm overflow-hidden transition-all duration-300" style={{ fontFamily: "var(--font-heading)" }}>
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover/btn:from-blue-500 group-hover/btn:to-purple-500 transition-all duration-500" />
                      <span className="relative z-10 flex items-center gap-2">
                        <ExternalLink size={14} className="group-hover/btn:rotate-12 transition-transform duration-200" /> Live Demo
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}