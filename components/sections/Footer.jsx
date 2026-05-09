"use client";

import { Heart } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "GH" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "LI" },
  { label: "Email", href: "mailto:ali@example.com", icon: "✉" },
];

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-[#1f1f1f] relative overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-white tracking-wider group"
          >
            Ali
            <span className="text-blue-500 inline-block group-hover:scale-150 transition-transform duration-300">
              Raza
            </span>
          </motion.a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm text-zinc-500 hover:text-white transition-colors duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-9 h-9 rounded-lg border border-[#1f1f1f] bg-[#141414] flex items-center justify-center text-zinc-500 hover:text-blue-500 hover:border-blue-500/30 transition-all duration-300 text-xs font-bold overflow-hidden"
              >
                <span className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 transition-all duration-300" />
                <span className="relative z-10">{social.icon}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="w-full h-px bg-[#1f1f1f] mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            © {new Date().getFullYear()} Ali Raza. All rights reserved.
          </p>
          <p className="text-xs text-zinc-600 flex items-center gap-1">
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={12} className="text-red-500 mx-1" />
            </motion.span>{" "}
            using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}