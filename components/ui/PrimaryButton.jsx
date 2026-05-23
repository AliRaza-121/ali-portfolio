"use client";

import { motion } from "framer-motion";

export default function PrimaryButton({ href, children, className = "", onClick, as: Component = "a", ...props }) {
  const inner = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-500" />
      <span className="absolute -inset-2 bg-blue-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
        {children}
      </span>
    </>
  );

  const baseClasses = `group relative w-full sm:w-auto px-8 py-3 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 text-center ${className}`;

  if (Component === "button") {
    return (
      <button onClick={onClick} className={baseClasses} {...props}>
        {inner}
      </button>
    );
  }

  return (
    <a href={href} onClick={onClick} className={baseClasses} {...props}>
      {inner}
    </a>
  );
}
