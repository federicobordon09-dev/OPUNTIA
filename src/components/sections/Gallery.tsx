import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

const images = [
  { id: 1, alt: "Vista de la Cordillera de los Andes desde Opuntia", aspect: "col-span-2 row-span-2" },
  { id: 2, alt: "Mesa de té servida con torta artesanal y vajilla", aspect: "" },
  { id: 3, alt: "Interior acogedor de madera y piedra", aspect: "" },
  { id: 4, alt: "Torta de nuez y pastelería artesanal", aspect: "" },
  { id: 5, alt: "Camino de ingreso entre pinos al atardecer", aspect: "col-span-2" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="section-padding">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            label="Galería"
            title="Un lugar que se vive con los ojos"
            description="La montaña, los sabores y los detalles que hacen de Opuntia una experiencia única."
          />
        </Reveal>
      </div>

      <div className="mt-14 grid gap-3 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {images.map((img, i) => (
          <Reveal key={img.id} delay={i * 80}>
            <div
              className={`group relative overflow-hidden rounded-2xl ${img.aspect} aspect-[4/3] sm:aspect-auto`}
            >
              <div
                className="size-full bg-cover bg-center transition-all duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('/images/gallery-placeholder.jpg')",
                  backgroundColor: i % 2 === 0 ? "#5F7F4A" : "#C97B4A",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-verde-profundo/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs text-white/90">{img.alt}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
