import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { promos } from "@/data/site";

const products = [
  {
    name: "Cheesecake de limón",
    image: "/images/cheesecake-limon-crema.jpg",
    alt: "Porción de cheesecake de limón con crema y frutos rojos",
  },
  {
    name: "Crumble de manzana",
    image: "/images/crumble-manzana-porcion.jpg",
    alt: "Porción de crumble de manzana con miga crocante",
  },
  {
    name: "Brownie con crema",
    image: "/images/brownie-chocolate-crema-frutilla.jpg",
    alt: "Brownie de chocolate con crema y frutilla fresca",
  },
  {
    name: "Cheesecake de frutilla",
    image: "/images/cheesecake-frutilla-flor.jpg",
    alt: "Cheesecake de frutilla decorado con flor comestible",
  },
  {
    name: "Sándwich club",
    image: "/images/sandwich-club-tetera.jpg",
    alt: "Sándwich club servido con tetera de té en hebras",
  },
  {
    name: "Café frío con torta",
    image: "/images/cafe-frio-torta-frutos-rojos.jpg",
    alt: "Café frío con porción de torta de frutos rojos",
  },
];

const cafeShots = [
  {
    image: "/images/sirviendo-cafe-latte-vaso.jpg",
    alt: "Manos sirviendo café latte en vaso de cristal",
  },
  {
    image: "/images/mesa-exterior-latte-art-medialunas.jpg",
    alt: "Mesa al aire libre con café latte art y medialunas",
  },
  {
    image: "/images/cafe-latte-art-medialunas-pasto.jpg",
    alt: "Café latte art y medialunas sobre el pasto",
  },
];

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
                <p className="mt-1 text-lg font-semibold text-terracota">
                  {promo.price}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <Reveal>
            <h3 className="font-serif text-2xl font-semibold text-verde-profundo text-center">
              Pastelería artesanal
            </h3>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {products.map((item, i) => (
              <Reveal key={item.name} delay={i * 60}>
                <div className="group overflow-hidden rounded-xl border border-verde-cactus/10 bg-white transition-all duration-300 hover:shadow-md">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      className="object-cover transition-all duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-medium text-verde-profundo text-center">
                      {item.name}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="mt-14">
            <h3 className="font-serif text-2xl font-semibold text-verde-profundo text-center">
              Cafetería
            </h3>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {cafeShots.map((item, i) => (
                <Reveal key={item.image} delay={i * 80}>
                  <div className="group overflow-hidden rounded-xl border border-verde-cactus/10 bg-white transition-all duration-300 hover:shadow-md">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.alt}
                        fill
                        className="object-cover transition-all duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-10 rounded-2xl border border-dashed border-marron-claro/30 bg-white/50 p-8 text-center">
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
    </section>
  );
}
