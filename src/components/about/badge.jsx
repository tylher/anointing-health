
export function Badge({ label, className }) {
  return (
    <div
      className={`px-4 py-2 rounded-full font-label-md text-label-md ${className}`}
    >
      {label}
    </div>
  );
}