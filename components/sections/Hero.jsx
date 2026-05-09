"use client";

import { ArrowDown, Mail } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 15 : 40;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }

    let lastTime = 0;
    const targetFPS = isMobile ? 30 : 60;
    const interval = 1000 / targetFPS;

    const animate = (timestamp) => {
      if (timestamp - lastTime < interval) {
        animationId = requestAnimationFrame(animate);
        return;
      }
      lastTime = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();

        if (!isMobile) {
          for (let j = i + 1; j < particles.length; j++) {
            const other = particles[j];
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const dist = dx * dx + dy * dy;

            if (dist < 10000) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.06 * (1 - dist / 10000)})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const isVisible = true;

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 pt-8"
    >
      {mounted && <ParticleBackground />}

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
        <div
          className={`inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 mb-6 sm:mb-8 rounded-full border border-[#1f1f1f] bg-[#141414]/80 cursor-default group transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span
            className="text-[10px] sm:text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300 tracking-widest uppercase"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Available for work
          </span>
        </div>

        <p
          className={`text-sm sm:text-lg md:text-xl text-zinc-500 mb-2 tracking-wide transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ fontFamily: "var(--font-mono)", transitionDelay: "300ms" }}
        >
          {"<Hello World />"}
        </p>

        <h1
          className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{
            fontFamily: "var(--font-heading)",
            letterSpacing: "-0.02em",
            transitionDelay: "400ms",
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

        <div
          className={`flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6 transition-all duration-700 flex-wrap ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
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

        <p
          className={`text-sm sm:text-base md:text-lg text-zinc-500 max-w-xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          I build modern web applications with{" "}
          <span className="text-blue-400 font-medium" style={{ fontFamily: "var(--font-mono)" }}>
            React
          </span>
          ,{" "}
          <span className="text-blue-400 font-medium" style={{ fontFamily: "var(--font-mono)" }}>
            Next.js
          </span>
          ,{" "}
          <span className="text-blue-400 font-medium" style={{ fontFamily: "var(--font-mono)" }}>
            Node.js
          </span>{" "}
          and{" "}
          <span className="text-blue-400 font-medium" style={{ fontFamily: "var(--font-mono)" }}>
            MongoDB
          </span>
          . Turning ideas into clean, functional digital experiences.
        </p>

        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "700ms" }}
        >
          <a
            href="#projects"
            className="group relative w-full sm:w-auto px-8 py-3 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 text-center"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500" />
            <span className="absolute -inset-2 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
              View My Work
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
          </a>
          <a
            href="#contact"
            className="group relative w-full sm:w-auto px-8 py-3 text-zinc-300 font-medium rounded-xl border border-[#1f1f1f] overflow-hidden transition-all duration-300 hover:scale-105 hover:text-white hover:border-blue-500/30 text-center"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
            <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
              Get In Touch
              <span className="group-hover:rotate-45 transition-transform duration-300">↗</span>
            </span>
          </a>
        </div>

        <div
          className={`flex items-center justify-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
          style={{ transitionDelay: "800ms" }}
        >
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

        <div
          className={`absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "1500ms" }}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-[10px] text-zinc-600 tracking-widest uppercase" style={{ fontFamily: "var(--font-mono)" }}>
              Scroll
            </span>
            <ArrowDown size={14} className="text-zinc-600" />
          </div>
        </div>
      </div>
    </section>
  );
}