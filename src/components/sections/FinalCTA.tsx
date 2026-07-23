import { site } from "@/data/site";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-verde-profundo py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#5F7F4A20,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#C97B4A15,_transparent_50%)]" />

      <div className="container-page relative z-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
              Reservá tu experiencia
            </span>
            <h2 className="font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Asegurá tu mesa
              <br />
              <span className="italic text-terracota">este fin de semana</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Cupos limitados. Reservá con anticipación por WhatsApp y asegurate
              tu lugar con la mejor vista de la Cordillera.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <WhatsAppButton
                variant="primary"
                label="Reservar por WhatsApp"
                className="bg-white text-verde-profundo hover:bg-white/90 hover:shadow-white/25"
              />
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border-2 border-white/30 px-8 py-4 text-sm font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
              >
                Seguir en Instagram
              </a>
            </div>
            <p className="mt-4 text-xs text-white/40">
              {site.hours.general} · {site.hours.season}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
