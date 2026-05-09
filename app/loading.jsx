export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        {/* Logo */}
        <div
          className="text-2xl font-bold text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Ali<span className="text-blue-500">.</span>
        </div>

        {/* Loading bar */}
        <div className="w-32 h-[2px] bg-[#1f1f1f] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
            style={{
              animation: "loading-bar 1.5s ease-in-out infinite",
              width: "40%",
            }}
          />
        </div>
      </div>
    </div>
  );
}