"use client";

import { ArrowDown, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-8"
    >
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-blue-500/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[200px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[300px] md:h-[400px] bg-purple-500/5 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0a0a0a_80%)] pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10 py-20">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 mb-6 sm:mb-8 rounded-full border border-[#1f1f1f] bg-[#141414]/80 cursor-default group">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span
            className="text-[10px] sm:text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Available for work
          </span>
        </div>

        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-3 sm:mb-4"
          style={{
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.02em",
          }}
        >
          I&apos;m{" "}
          <span
            className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent"
            style={{
              backgroundSize: "200% auto",
              animation: "gradient-text 4s linear infinite",
            }}
          >
            Ali Raza
          </span>
        </h1>

        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 flex-wrap">
          <div className="hidden sm:block w-8 h-[1px] bg-blue-500/50" />
          <p
            className="text-base sm:text-xl md:text-2xl lg:text-3xl text-zinc-300 font-light tracking-wider uppercase"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Full Stack Developer
          </p>
          <div className="hidden sm:block w-8 h-[1px] bg-blue-500/50" />
          <span
            className="hidden sm:inline-block w-[3px] h-7 bg-blue-500"
            style={{ animation: "blink 1s step-end infinite" }}
          />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-zinc-500 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
          I build modern web applications with{" "}
          <span
            className="text-blue-400 font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            React
          </span>
          ,{" "}
          <span
            className="text-blue-400 font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Next.js
          </span>
          ,{" "}
          <span
            className="text-blue-400 font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Node.js
          </span>{" "}
          and{" "}
          <span
            className="text-blue-400 font-medium"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            MongoDB
          </span>
          . Turning ideas into clean, functional digital experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
          <a
            href="#projects"
            className="group relative w-full sm:w-auto px-8 py-3 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 text-center"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500" />
            <span className="absolute -inset-2 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span
              className="relative z-10 flex items-center justify-center gap-2 tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              View My Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </span>
          </a>
          <a
            href="#contact"
            className="group relative w-full sm:w-auto px-8 py-3 text-zinc-300 font-medium rounded-xl border border-[#1f1f1f] overflow-hidden transition-all duration-300 hover:scale-105 hover:text-white hover:border-blue-500/30 text-center"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
            <span
              className="relative z-10 flex items-center justify-center gap-2 tracking-wide"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Get In Touch
              <span className="group-hover:rotate-45 transition-transform duration-300">
                ↗
              </span>
            </span>
          </a>
        </div>

        <div className="flex items-center justify-center">
          <a
            href="mailto:ali@example.com"
            className="group relative w-10 h-10 rounded-xl border border-[#1f1f1f] bg-[#141414]/80 flex items-center justify-center text-zinc-400 overflow-hidden transition-all duration-300 hover:text-blue-400 hover:border-blue-500/50 hover:scale-110 hover:-translate-y-1"
          >
            <span className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300" />
            <span className="relative z-10">
              <Mail size={18} />
            </span>
          </a>
        </div>

        <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span
              className="text-[10px] text-zinc-600 tracking-widest uppercase"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              Scroll
            </span>
            <ArrowDown size={14} className="text-zinc-600" />
          </div>
        </div>
      </div>
    </section>
  );
}