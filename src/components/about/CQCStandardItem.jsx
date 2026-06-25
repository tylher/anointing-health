export default function CQCStandardItem({ title, color, delay }) {
  return (
    <div
      className="cascade-item flex items-center gap-4 border-b border-gray-100 py-3 last:border-b-0"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <svg
        className="h-6 w-6 shrink-0"
        style={{ color }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          className="draw-tick"
          d="M5 13l4 4L19 7"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <span className="font-['DM_Sans'] text-lg font-medium text-[#181c20]">
        {title}
      </span>
    </div>
  );
}
