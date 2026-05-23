"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HireMeButton() {
  return (
    <a href="#contact" className="group relative inline-flex items-center">
      <motion.span
        animate={{
          boxShadow: [
            "0 0 10px rgba(59,130,246,0.3), 0 0 20px rgba(59,130,246,0.1)",
            "0 0 15px rgba(139,92,246,0.4), 0 0 30px rgba(139,92,246,0.15)",
            "0 0 10px rgba(59,130,246,0.3), 0 0 20px rgba(59,130,246,0.1)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-70 blur-[2px] group-hover:opacity-100 group-hover:blur-[4px] transition-all duration-500"
        style={{ backgroundSize: "200% auto", animation: "gradient-text 3s linear infinite" }}
      />
      <span className="absolute -inset-[1px] rounded-xl overflow-hidden">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{ background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)" }}
        />
      </span>
      <span className="relative flex items-center gap-2 px-5 py-2 bg-[#0a0a0a] rounded-xl text-sm transition-all duration-300 group-hover:bg-[#0a0a0a]/80">
        <motion.span animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity }}>
          <Sparkles size={14} className="text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
        </motion.span>
        <span
          className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold tracking-wide"
          style={{ backgroundSize: "200% auto", animation: "gradient-text 3s linear infinite", fontFamily: "var(--font-heading)" }}
        >
          Hire Me
        </span>
        <motion.span animate={{ x: [0, 3, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-purple-400">→</motion.span>
      </span>
    </a>
  );
}

export function MobileHireMeButton() {
  return (
    <a href="#contact" className="group relative block text-center mt-2 overflow-hidden rounded-xl">
      <span className="absolute -inset-[1px] rounded-xl overflow-hidden">
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{ background: "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)" }}
        />
      </span>
      <span className="relative flex items-center justify-center gap-2 px-4 py-3 bg-[#0a0a0a] rounded-xl">
        <Sparkles size={14} className="text-blue-400" />
        <span
          className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold text-sm"
          style={{ backgroundSize: "200% auto", animation: "gradient-text 3s linear infinite", fontFamily: "var(--font-heading)" }}
        >
          Hire Me
        </span>
        <span className="text-purple-400">→</span>
      </span>
    </a>
  );
}
