"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/lib/data";
import { HireMeButton, MobileHireMeButton } from "@/components/ui/HireMeButton";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // adjust thresholds as needed
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          const matchedLink = navLinks.find(link => link.href === `#${id}`);
          if (matchedLink) {
            setActiveLink(matchedLink.name);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navLinks.forEach((link) => {
      const el = document.querySelector(link.href);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50"
    >
      <div
        className={`relative flex items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-500 overflow-hidden ${
          isScrolled
            ? "bg-[#0a0a0a]/70 backdrop-blur-2xl border-[#1f1f1f] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-[#0a0a0a]/30 backdrop-blur-md border-white/5"
        }`}
      >
        <div className="absolute top-0 left-0 w-full h-[1px] overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-blue-500 to-transparent" style={{ animation: "nav-line 3s linear infinite", position: "absolute" }} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Logo */}
        <a href="#home" className="relative group">
          <span
            className="relative z-10 text-xl font-bold text-white tracking-wider"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ali
            <span className="text-blue-500 inline-block group-hover:scale-125 transition-transform duration-300">.Dev</span>
          </span>
          <span className="absolute -inset-2 bg-blue-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-0.5 bg-white/[0.02] rounded-xl p-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-300 group tracking-wide ${
                activeLink === link.name ? "text-blue-400" : "text-zinc-400 hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-sora)" }}
            >
              {activeLink === link.name && (
                <motion.span layoutId="activeNav" className="absolute inset-0 bg-blue-500/10 border border-blue-500/20 rounded-lg" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
              <span className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center" />
              <span className="relative z-10">{link.name}</span>
              {activeLink === link.name && (
                <motion.span layoutId="activeDot" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }} />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:block"><HireMeButton /></div>

        <button onClick={() => setIsMobileOpen(!isMobileOpen)} className="md:hidden relative text-white p-2 rounded-lg hover:bg-white/5 transition-all duration-200">
          <motion.div animate={{ rotate: isMobileOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.div>
        </button>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="mt-2 p-3 rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-2xl border border-[#1f1f1f] md:hidden overflow-hidden relative"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`px-4 py-3 text-sm rounded-xl transition-all duration-200 tracking-wide ${
                    activeLink === link.name ? "text-blue-400 bg-blue-500/10" : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                  style={{ fontFamily: "var(--font-sora)" }}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: navLinks.length * 0.05 }} onClick={() => setIsMobileOpen(false)}>
                <MobileHireMeButton />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}