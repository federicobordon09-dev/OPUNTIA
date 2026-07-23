interface SectionTitleProps {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionTitle({
  label,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {label && (
        <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-verde-cactus">
          {label}
        </span>
      )}
      <h2 className="font-serif text-3xl leading-tight text-verde-profundo sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-marron-madera sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
