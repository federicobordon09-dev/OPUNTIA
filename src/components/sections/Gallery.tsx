"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";

const gallery = [
  {
    src: "/images/interior-salon-madera-clientes.jpg",
    alt: "Interior del salón de madera de Opuntia con clientes disfrutando del té",
    aspect: "col-span-2 row-span-2",
  },
  {
    src: "/images/interior-salon-techo-madera.jpg",
    alt: "Salón interior con techo de madera y ventanales con vista al paisaje",
    aspect: "",
  },
  {
    src: "/images/interior-comensales-mesas.jpg",
    alt: "Comensales en mesas de madera dentro del salón de té",
    aspect: "",
  },
  {
    src: "/images/interior-barra-ventana-plantas.jpg",
    alt: "Barra de atención con ventana y plantas naturales",
    aspect: "",
  },
  {
    src: "/images/ventana-cactus-camino-madera.jpg",
    alt: "Ventana con cactus y camino de madera hacia el jardín",
    aspect: "col-span-2",
  },
  {
    src: "/images/mesa-exterior-cafe-medialunas-montana.jpg",
    alt: "Mesa al aire libre con café, medialunas y la Cordillera de los Andes de fondo",
    aspect: "",
  },
  {
    src: "/images/jarra-ceramica-ventana-campo.jpg",
    alt: "Jarra de cerámica artesanal junto a una ventana con vista al campo",
    aspect: "",
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight")
        setLightbox((prev) =>
          prev !== null ? (prev + 1) % gallery.length : null
        );
      if (e.key === "ArrowLeft")
        setLightbox((prev) =>
          prev !== null ? (prev - 1 + gallery.length) % gallery.length : null
        );
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox, closeLightbox]);

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
        {gallery.map((img, i) => (
          <Reveal key={img.src} delay={i * 80}>
            <button
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-2xl w-full text-left ${img.aspect} aspect-[3/4] sm:aspect-auto`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-verde-profundo/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-xs text-white/90">{img.alt}</p>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Vista ampliada de la galería"
        >
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Cerrar galería"
          >
            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (lightbox - 1 + gallery.length) % gallery.length
              );
            }}
            className="absolute left-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Imagen anterior"
          >
            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % gallery.length);
            }}
            className="absolute right-4 bottom-20 z-10 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            aria-label="Imagen siguiente"
          >
            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>

          <div
            className="relative size-full max-h-[90vh] max-w-[90vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={gallery[lightbox].src}
              alt={gallery[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-sm text-white/80">
            {gallery[lightbox].alt}
          </p>
        </div>
      )}
    </section>
  );
}
