"use client";

export default function SecondaryButton({ href, children, className = "", onClick, as: Component = "a", ...props }) {
  const inner = (
    <>
      <span className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <span className="relative z-10 flex items-center justify-center gap-2 tracking-wide" style={{ fontFamily: "var(--font-heading)" }}>
        {children}
      </span>
    </>
  );

  const baseClasses = `group relative w-full sm:w-auto px-8 py-3 text-zinc-300 font-medium rounded-xl border border-[#1f1f1f] overflow-hidden transition-all duration-300 hover:scale-105 hover:text-white hover:border-blue-500/30 text-center ${className}`;

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
