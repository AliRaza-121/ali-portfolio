export default function SectionHeading({ subtitle, title, highlight }) {
  return (
    <div className="text-center mb-16">
      <p
        className="text-blue-500 text-xs font-medium tracking-[6px] uppercase mb-4"
        style={{ fontFamily: "var(--font-mono)" }}
      >
        {subtitle}
      </p>
      <h2
        className="text-3xl md:text-5xl font-bold text-white tracking-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}{" "}
        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          {highlight}
        </span>
      </h2>
      <div className="flex items-center justify-center gap-2 mt-5">
        <div className="w-8 h-[2px] bg-[#1f1f1f] rounded-full" />
        <div className="w-12 h-[2px] bg-blue-500 rounded-full" />
        <div className="w-8 h-[2px] bg-[#1f1f1f] rounded-full" />
      </div>
    </div>
  );
}