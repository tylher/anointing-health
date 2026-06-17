export default function SafetyChip({ label, className, delay }) {
  return (
    <div
      className={`fade-up px-4 py-2 rounded-full text-[14px] font-ui font-semibold flex items-center gap-2 ${className}`}
      style={{ transitionDelay: delay }}
    >
      {label}
    </div>
  );
}
