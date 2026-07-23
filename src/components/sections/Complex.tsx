import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

const features = [
  {
    name: "Cabañas",
    description:
      "Cabañas equipadas: Cactus (5 pers), Piquillín (4 pers) y Coirón (2 pers).",
    icon: "home",
  },
  {
    name: "Laguna y parque",
    description:
      "Amplio parque con laguna, ideal para caminar y disfrutar la naturaleza.",
    icon: "sparkles",
  },
  {
    name: "Criadero de truchas",
    description:
      "Parte de la tradición del complejo con más de 25 años en la zona.",
    icon: "fish",
  },
];

function FeatureIcon({ name }: { name: string }) {
  switch (name) {
    case "home":
      return (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "sparkles":
      return (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
        </svg>
      );
    case "fish":
      return (
        <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M2 16.1A5 5 0 015.9 20M2 12.05A9 9 0 019.95 20M2 8V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2h-6" />
          <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
      );
    default:
      return null;
  }
}

export default function Complex() {
  return (
    <section id="complejo" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/ventana-cactus-camino-madera.jpg"
          alt=""
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>
      <div className="container-page relative z-10">
        <Reveal>
          <SectionTitle
            label="El complejo"
            title="La Trucha Tranqui"
            description="Opuntia es parte de un complejo turístico con cabañas, laguna y criadero de truchas, rodeado de naturaleza."
          />
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {features.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-verde-cactus/10 bg-white/90 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-verde-cactus/5"
              >
                <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-xl bg-verde-cactus/10 text-verde-cactus">
                  <FeatureIcon name={item.icon} />
                </div>
                <h3 className="font-serif text-base font-semibold text-verde-profundo">
                  {item.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-marron-madera">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
