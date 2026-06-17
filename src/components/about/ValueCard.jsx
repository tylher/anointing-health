import Image from "next/image";


export function ValueCard({
  title,
  accent,
  imageBg,
  image,
  content,
  values,
}) {
  return (
    <div className="bg-surface border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 group">
      <div className={`h-1 w-full ${accent}`} />

      <div className={`h-[140px] ${imageBg} overflow-hidden`}>
        <Image
          src={image}
          alt={title}
          width={500}
          height={140}
          className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="p-6 flex flex-col gap-4">
        <h3 className="text-[28px] text-on-background font-serif font-semibold">
          {title}
        </h3>

        {content && (
          <p className="text-on-surface-variant font-body">
            {content}
          </p>
        )}

        {values && (
          <ul className="flex flex-col gap-3">
            {values.map((value) => (
              <li
                key={value}
                className="flex items-center gap-3 text-on-surface-variant"
              >
                <span className="w-2 h-2 rounded-full bg-secondary-container font-body" />
                {value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}