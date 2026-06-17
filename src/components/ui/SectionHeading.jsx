export function SectionHeading({ eyebrow, title }) {
  return (
    <div className="mb-8 fade-up">
      {eyebrow && (
        <span className="font-label-md text-primary uppercase tracking-[0.15em]">
          {eyebrow}
        </span>
      )}

      <h2 className="font-serif text-lg md:text-3xl font-semibold text-on-background mt-2">
        {title}
      </h2>

      <div className="w-24 h-1 tricolour-gradient mt-4" />
    </div>
  );
}
