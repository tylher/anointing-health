import Image from "next/image";

import { clinicalApproach, pillars } from "@/data/about";
import { PillarCard } from "./PillarCard";
import { SectionHeading } from "../ui/SectionHeading";



export function ClinicalApproachSection() {
  return (
    <section className="py-10 lg:py-16 bg-surface overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-(--spacing-page-x-mobile) md:px-(--spacing-page-x-desk)">
        <SectionHeading title="Our Clinical Approach" />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="w-full lg:w-[40%] flex flex-col gap-8">
            <div className="relative rounded-[24px] overflow-hidden shadow-lg group">
              <Image
                src={clinicalApproach.image}
                alt={clinicalApproach.author}
                width={800}
                height={1000}
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <blockquote className="text-[32px] text-on-primary leading-tight mb-4 font-ui italic">
                  "{clinicalApproach.quote}"
                </blockquote>

                <div>
                  <div className="text-on-primary font-serif font-semibold">
                    {clinicalApproach.author}
                  </div>

                  <div className="text-primary-fixed-dim text-sm font-sans">
                    {clinicalApproach.role}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-on-surface-variant font-sans">
              {clinicalApproach.description}
            </p>
          </div>

          <div className="w-full lg:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar) => (
              <PillarCard key={pillar.title} {...pillar} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
