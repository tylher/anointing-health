import { safetyData } from "@/data/about";
import SafetyChip from "./SafetyChip";

export default function SafetySection() {
  return (
    <section
      className="relative flex items-center w-full overflow-hidden py-[80px]"
      style={{
        backgroundImage: `url(${safetyData.backgroundImage})`,
        backgroundColor: "rgba(0, 82, 43, 0.88)",
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-(--spacing-page-x-mobile) md:px-(--spacing-page-x-desk)">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-start">
          <div className="flex-shrink-0 fade-up">
            <div className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg">
              <span
                className="material-symbols-outlined text-[#C9961A]"
                style={{ fontSize: 40 }}
              >
                <safetyData.icon />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2
              className="fade-up text-[32px] font-medium text-white"
              style={{ fontFamily: "'EB Garamond', serif" }}
            >
              {safetyData.title}
            </h2>

            <p
              className="fade-up max-w-3xl text-[16px] text-[#b5ffc9]"
              style={{ transitionDelay: "100ms" }}
            >
              {safetyData.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-2">
              {safetyData.chips.map((chip) => (
                <SafetyChip
                  key={chip.label}
                  label={chip.label}
                  className={chip.className}
                  delay={chip.delay}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
