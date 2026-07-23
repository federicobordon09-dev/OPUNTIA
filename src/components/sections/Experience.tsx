import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { menuItems } from "@/data/site";

const iconMap: Record<string, React.ReactNode> = {
  tea: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M18 8h1a4 4 0 010 8h-1" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  coffee: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M18 8h1a4 4 0 010 8h-1" />
      <path d="M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8z" />
    </svg>
  ),
  cake: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  sandwich: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <path d="M3 11l3-9h12l3 9" />
      <path d="M2 12l1 10h18l1-10" />
      <path d="M8 12l2 5" />
      <path d="M16 12l-2 5" />
    </svg>
  ),
};

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
          {menuItems.map((item, i) => (
            <Reveal key={item.name} delay={i * 100}>
              <div className="group rounded-2xl border border-verde-cactus/10 bg-white p-8 transition-all duration-300 hover:border-verde-cactus/30 hover:shadow-lg hover:shadow-verde-cactus/5">
                <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-verde-cactus/10 text-verde-cactus transition-colors group-hover:bg-verde-cactus group-hover:text-white">
                  {iconMap[item.icon]}
                </div>
                <h3 className="font-serif text-xl font-semibold text-verde-profundo">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-marron-madera">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
