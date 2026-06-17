import Image from "next/image";
import { GradientBorderCard } from "../ui/GradientBordercard";


export function PillarCard({
  featured,
  icon:Icon,
  title,
  description,
  image,
  iconClass,
}) {
  if (featured) {
    return (
      <GradientBorderCard className="md:col-span-2">
        <div className="p-8 flex flex-col sm:flex-row gap-6 items-center">
          <div className="flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center mb-4 ${iconClass}`}
            >
              <span className="material-symbols-outlined"><Icon/></span>
            </div>

            <h3 className="text-lg font-semibold font-serif text-on-background mb-3">
              {title}
            </h3>

            <p className="text-on-surface-variant font-sans">{description}</p>
          </div>

          {image && (
            <div className="w-full sm:w-[200px] h-[150px] relative rounded-xl overflow-hidden">
              <Image src={image} alt={title} fill className="object-cover" />
            </div>
          )}
        </div>
      </GradientBorderCard>
    );
  }

  return (
    <GradientBorderCard>
      <div className="p-6 flex flex-col gap-3 h-full">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center ${iconClass}`}
        >
          <span className="material-symbols-outlined"><Icon/></span>
        </div>

        <h3 className="text-xl font-bold font-serif text-on-background">{title}</h3>

        <p className="text-sm text-on-surface-variant font-sans">{description}</p>
      </div>
    </GradientBorderCard>
  );
}
