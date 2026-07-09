import Image from "next/image";
import { MdStar } from "react-icons/md";

export function PhotoCollage({ images }) {
  return (
    <div className="relative  sm:h-150 lg:h-125">
      {images.map((image) => (
        <div
          key={image.id}
          className={`${image.className} overflow-hidden shadow-lg`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />

          {image.featured && (
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-[#C9961A] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm">
                <MdStar/>
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
