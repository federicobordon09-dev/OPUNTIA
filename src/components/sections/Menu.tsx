import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { promos } from "@/data/site";

export default function Menu() {
  return (
    <section id="menu" className="section-padding bg-white/50">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            label="Menú y promos"
            title="Para compartir en la montaña"
            description="Productos de elaboración propia, ingredientes frescos y sabores que acompañan la vista."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {promos.map((promo, i) => (
            <Reveal key={promo.name} delay={i * 100}>
              <div className="relative overflow-hidden rounded-2xl border border-verde-cactus/10 bg-white p-8">
                <div className="absolute right-0 top-0 size-32 translate-x-8 -translate-y-8 rounded-full bg-terracota/5" />
                <span className="mb-2 inline-block rounded-full bg-terracota/10 px-3 py-1 text-xs font-semibold text-terracota">
                  {promo.name}
                </span>
                <p className="mt-3 font-serif text-xl font-semibold text-verde-profundo">
                  {promo.items}
                </p>
                <p className="mt-1 text-lg font-semibold text-terracota">{promo.price}</p>
              </div>
            </Reveal>
          ))}

          <Reveal delay={200}>
            <div className="rounded-2xl border border-dashed border-marron-claro/30 bg-white/50 p-8 text-center md:col-span-2">
              <p className="font-serif text-lg text-marron-madera">
                Menú completo con precios actualizados disponible en{" "}
                <strong className="text-verde-cactus">WhatsApp</strong>
              </p>
              <div className="mt-4 flex justify-center">
                <WhatsAppButton variant="outline" label="Ver menú completo" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
