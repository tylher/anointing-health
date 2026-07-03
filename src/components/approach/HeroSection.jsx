import { HERO } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { MdFavorite } from "react-icons/md";

export default function HeroSection() {
  return (
    <section className="hero-bg pt-24 pb-20 px-lg relative px-7 md:px-20">
      <div className="organic-shape" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Content */}
        <div className="flex flex-col items-center text-center mb-xl fade-slide-up">
          <h1 className="font-serif font-semibold text-2xl md:text-4xl text-primary mb-5">
            {HERO.heading}
          </h1>

          <p className="font-sans md:text-xl font-medium text-on-surface-variant max-w-[600px] mb-5">
            {HERO.subheading}
          </p>

          <div className="flex w-full md:w-2/5 justify-center items-center gap-5">
            <Link
              href={HERO.ctaPrimary.href}
              className="bg-primary text-on-primary font-ui text-sm md:text-base md:px-8 md:py-4 px-5 py-2  rounded-full hover:-translate-y-1 transition-transform tinted-shadow w-full text-center"
            >
              {HERO.ctaPrimary.label}
            </Link>

            <Link
              href={HERO.ctaSecondary.href}
              className="bg-tertiary-fixed text-tertiary font-ui text-sm md:text-base md:px-8 md:py-4 px-5 py-2 rounded-full hover:-translate-y-1 transition-transform w-full border border-transparent hover:border-tertiary-fixed-dim"
            >
              {HERO.ctaSecondary.label}
            </Link>
          </div>
        </div>

        {/* Photo Banner */}
        <div className="relative w-full max-w-5xl mx-auto fade-scale-in mt-10">
          <div className="w-full h-70 rounded-3xl overflow-hidden tinted-shadow border border-surface-container-highest bg-primary">
            <Image
              src={HERO.heroBannerImage}
              alt="Anointing Health Care team"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>

          {/* Floating Chip */}
          <div className="absolute -bottom-4 -left-4 md:left-8 bg-surface-container-lowest py-2 px-4 rounded-xl flex items-center gap-3 tinted-shadow border border-surface-container-highest pop-bounce z-20">
            <span
              className="material-symbols-outlined text-secondary-fixed-dim text-xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              <MdFavorite />
            </span>
            <span className="font-sans text-[13px] text-on-surface">
              {HERO.floatingChip}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
