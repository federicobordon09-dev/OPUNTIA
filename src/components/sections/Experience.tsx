import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

const experiences = [
  {
    name: "Té en hebras",
    description:
      "Carta variada de blends servidos en tetera. Cada infusión es un ritual que combina sabores de altura con la vista a la Cordillera.",
    image: "/images/merienda-tetera-tortas-te.jpg",
    alt: "Tetera de té en hebras con tortas artesanales y vajilla cuidada sobre mesa de madera",
  },
  {
    name: "Pastelería artesanal",
    description:
      "Tortas, pastelería fresca con frambuesas y porciones generosas. Todo de elaboración propia con ingredientes de primera calidad.",
    image: "/images/torta-chocolate-frutillas-caramelo.jpg",
    alt: "Porción de torta de chocolate con frutillas y caramelo sobre plato de cerámica",
  },
  {
    name: "Naturaleza y montaña",
    description:
      "Un entorno único de madera y piedra con vista directa a los Andes. El parque, la laguna y el aire puro completan la experiencia.",
    image: "/images/terraza-madera-manta-sauce.jpg",
    alt: "Terraza de madera con manta y vista al sauce llorón en el jardín de Opuntia",
  },
];

export default function Experience() {
  return (
    <section id="experiencia" className="section-padding">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            label="La experiencia"
            title="Té en hebras, pastelería artesanal y naturaleza"
            description="Cada visita es una invitación a desconectar. Merendá con la Cordillera de los Andes como testigo, en un ambiente de madera y piedra que abraza."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <div className="group overflow-hidden rounded-2xl border border-verde-cactus/10 bg-white transition-all duration-300 hover:shadow-lg hover:shadow-verde-cactus/5">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-verde-profundo/40 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-verde-profundo">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-marron-madera">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
