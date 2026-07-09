import { badges, collageImages, companyInfo } from "@/data/about";
import { Badge } from "./badge";
import { PhotoCollage } from "./PhotoCollage";


export function AboutHeroSection() {
  return (
    <section className="relative w-full bg-[#eaf5ef] overflow-hidden pt-16 pb-24 lg:pt-24 lg:pb-12 radial-glow">
      <div className="max-w-7xl mx-auto px-(--spacing-page-x-mobile) md:px-(--spacing-page-x-desk) flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-[48%] flex flex-col gap-6 z-10">
          <span className="uppercase tracking-[0.15em] text-primary text-sm font-ui font-semibold">
            {companyInfo.eyebrow}
          </span>

          <h1 className="font-serif font-bold text-2xl md:text-5xl">
            {companyInfo.title}
          </h1>

          <p className="text-on-surface-variant font-medium font-sans text-lg max-w-xl">
            {companyInfo.description}
          </p>
{/* 
          <div className="flex flex-wrap gap-3 mt-4">
            {badges.map((badge) => (
              <Badge
                key={badge.label}
                label={badge.label}
                className={badge.className}
              />
            ))}
          </div> */}
        </div>

        <div className="w-full lg:w-[52%]">
          <PhotoCollage images={collageImages} />
        </div>
      </div>
    </section>
  );
}
