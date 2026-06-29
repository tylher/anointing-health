import { COVERAGE_AREAS, SECTION_HEADINGS } from "@/data/site";
import Image from "next/image";




function AreaCard({ name, subtitle, color, image }) {
  return (
    <div className="group bg-surface rounded-2xl p-7 shadow-sm border border-surface-container-highest hover:-translate-y-[3px] hover:shadow-md transition-all duration-300 flex items-center gap-4">
      {/* Thumbnail */}
      <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex-shrink-0 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-all duration-300 group-hover:brightness-110"
        />
      </div>

      {/* Text */}
      <div className="flex-grow">
        <h3 className="font-sans font-bold text-on-surface text-lg">
          {name}
        </h3>
        <p className="font-serif text-[13px] text-on-surface-variant mb-2">
          {subtitle}
        </p>
        <span
          className="inline-block px-3 py-1 text-[11px] font-bold rounded-full uppercase tracking-wider"
          style={{
            backgroundColor: `${color}1A`, // ~10% opacity
            color,
          }}
        >
          Services Available
        </span>
      </div>
    </div>
  );
}

export default function CoverageSection() {
  return (
    <section className="py-10 relative" style={{ backgroundColor: "#f7f9ff" }}>
      {/* Background map watermark */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center overflow-hidden">
        <Image
          src="https://lh3.googleusercontent.com/aida/AP1WRLubOyiuFbY-yDgJjCfDC2esm15HiEPhQQt3dBvW-bnDvdxLXSiLLqJfBxMCw5p7ePihViQd0SmKFnvjvuOMG05IxbMvC2qi-UjrKxL-4DW4xBIpWdJbVRmXDk39POCoi0XVhMI8HBb7ITiJJ8gX8R9POt0h-eMk3e2R_NqqczmE00BmJ5LUQ2GPjGFtm2FCqB7Nl3mBRp6CxqaUG1qdjpWaI6_QdN1C-4F9mbkt0JlYqnSd-_-nJ1ETyy0U"
          alt="Map of Cumbria"
          width={900}
          height={600}
          className="max-w-5xl w-full object-contain"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 relative z-10">
        <h2
          className="text-[36px] font-semibold text-primary text-center mb-9 italic"
          style={{ fontFamily: "'EB Garamond', serif" }}
        >
          {SECTION_HEADINGS.coverage}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-9">
          {COVERAGE_AREAS.map((area) => (
            <AreaCard key={area.id} {...area} />
          ))}
        </div>

        {/* Footer chip */}
        <div className="w-full bg-[#235492]/10 text-[#235492] rounded-full py-4 px-6 text-center font-label-md text-sm shadow-sm border border-[#235492]/20">
          {SECTION_HEADINGS.coverageFooter}
        </div>
      </div>
    </section>
  );
}
