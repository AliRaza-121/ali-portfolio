"use client";

import { Heart, Mail } from "lucide-react";
import { motion } from "framer-motion";

import { footerLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-[#1f1f1f] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl font-bold text-white tracking-wider group"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ali
            <span className="text-blue-500 inline-block group-hover:scale-150 transition-transform duration-300">
              .Dev
            </span>
          </motion.a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs sm:text-sm text-zinc-500 hover:text-white transition-colors duration-300 group tracking-wide"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Email Only */}
          <motion.a
            href="mailto:aliraaza701@gmail.com"
            aria-label="Email Me"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="group relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-[#1f1f1f] bg-[#141414] flex items-center justify-center text-zinc-500 hover:text-blue-500 hover:border-blue-500/30 transition-all duration-300 overflow-hidden"
          >
            <span className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300" />
            <span className="relative z-10">
              <Mail size={14} />
            </span>
          </motion.a>
        </div>

        <div className="w-full h-px bg-[#1f1f1f] mb-6 sm:mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p
            className="text-[10px] sm:text-xs text-zinc-600"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            © {new Date().getFullYear()} Ali Raza. All rights reserved.
          </p>
          <p
            className="text-[10px] sm:text-xs text-zinc-600 flex items-center gap-1"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={10} className="text-red-500 mx-1" />
            </motion.span>{" "}
            using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}