export function GradientBorderCard({ children, className = "" }) {
  return (
    <div className={`relative p-[2px] rounded-2xl group ${className}`}>
      <div className="absolute inset-0 rounded-2xl bg-outline-variant group-hover:bg-gradient-to-r group-hover:from-[#036135] group-hover:via-[#C9961A] group-hover:to-[#235492] transition-all duration-500" />

      <div className="relative z-10 bg-surface rounded-[14px] h-full">
        {children}
      </div>
    </div>
  );
}
