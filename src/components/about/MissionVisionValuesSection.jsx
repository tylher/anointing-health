import { valueCards } from "@/data/about";
import { ValueCard } from "./ValueCard";

export function MissionVisionValuesSection() {
  return (
    <section className="py-10 bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-(--spacing-page-x-mobile) md:px-(--spacing-page-x-desk)">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueCards.map((card) => (
            <ValueCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
