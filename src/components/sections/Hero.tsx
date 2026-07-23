import Image from "next/image";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-verde-profundo/30 via-verde-profundo/15 to-verde-profundo/70 z-10" />
      <Image
        src="/images/torta-chocolate-vista-montana.jpg"
        alt="Porción de torta de chocolate con vista a la Cordillera de los Andes desde la casa de té Opuntia"
        fill
        className="object-cover object-[center_30%]"
        priority
        sizes="100vw"
      />
      <div className="container-page relative z-20 w-full pb-12 sm:pb-16 lg:pb-24">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
            Casa de té y pastelería artesanal
          </span>
          <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Una tarde de té
            <br />
            <span className="italic">al pie de los Andes</span>
          </h1>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
            En el Manzano Histórico, Valle de Uco. Té en hebras, pastelería
            artesanal y la vista más hermosa de la Cordillera.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <WhatsAppButton variant="primary" />
            <a
              href="#experiencia"
              className="rounded-full border-2 border-white/40 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              Descubrir más
            </a>
          </div>
          <div className="mt-6 flex items-center gap-4 text-xs text-white/70">
            <span className="flex items-center gap-1.5">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Sáb, dom y feriados
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              16 a 20 hs
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Solo con reserva
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
