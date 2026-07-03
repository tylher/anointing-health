import { WHO_WE_SERVE } from "@/data/site";
import Image from "next/image";


function ServeCard({ title, description, color, icon:Icon, image }) {
  return (
    <div className="group bg-surface-container-lowest rounded-[24px] overflow-hidden tinted-shadow transition-transform hover:scale-[1.02]">
      {/* Image */}
      <div className="relative h-[160px] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />

        {/* Icon Badge */}
        <div
          className="absolute top-4 left-4 w-8 h-8 rounded-full flex items-center justify-center pop-bounce"
          style={{ backgroundColor: `${color}33` }} // 20% opacity via hex
        >
          <span
            className="material-symbols-outlined text-xl"
            style={{ color }}
          >
            <Icon/>
          </span>
        </div>
      </div>

      {/* Body */}
      <div
        className="border-t-[4px] p-5"
        style={{ borderColor: color }}
      >
        <h3
          className="font-serif font-semibold text-lg mb-2"
          style={{ color }}
        >
          {title}
        </h3>
        <p className="font-sans text-on-surface-variant">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function WhoWeServeSection() {
  return (
    <section className="py-10 bg-surface-container-low px-7 md:px-20">
      <div className="max-w-[1280px] mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {WHO_WE_SERVE.map((item) => (
            <ServeCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
