import { DAILY_TIMELINE, SECTION_HEADINGS } from "@/data/site";
import Image from "next/image";



function TimelineScene({ time, description, image }) {
  return (
    <div className="flex-none w-[280px] md:w-[320px] snap-center">
      <div className="rounded-xl overflow-hidden mb-3 relative aspect-square">
        <Image src={image} alt={time} fill className="object-cover" />
      </div>
      <p className="font-ui font-semibold text-base text-primary mb-2">{time}</p>
      <p className="font-sans text-sm text-on-surface-variant">
        {description}
      </p>
    </div>
  );
}

export default function DailyTimelineSection() {
  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto ">
        <h2 className="font-semibold font-serif text-3xl italic text-center text-primary mb-7">
          {SECTION_HEADINGS.typicalDay}
        </h2>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-md scrollbar-hide">
          {DAILY_TIMELINE.map((scene) => (
            <TimelineScene key={scene.id} {...scene} />
          ))}
        </div>
      </div>
    </section>
  );
}
