import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/data/site";

export default function Location() {
  return (
    <section id="ubicacion" className="section-padding">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            label="Cómo llegar"
            title="En la Ruta 94, camino al Manzano Histórico"
            description="A 2 horas de Mendoza capital, en el corazón del Valle de Uco."
          />
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-2" delay={100}>
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-lg font-semibold text-verde-profundo">
                  Dirección
                </h3>
                <address className="mt-2 not-italic text-sm leading-relaxed text-marron-madera">
                  {site.address.street}
                  <br />
                  {site.address.location}
                  <br />
                  {site.address.city}, {site.address.province}
                  <br />
                  {site.address.state}, {site.address.country}
                </address>
              </div>

              <div>
                <h3 className="font-serif text-lg font-semibold text-verde-profundo">
                  Coordenadas
                </h3>
                <p className="mt-1 text-sm text-marron-madera">
                  {site.address.coordinates.lat}, {site.address.coordinates.lng}
                </p>
              </div>

              <div className="rounded-xl border border-terracota/20 bg-terracota/5 p-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="mt-0.5 size-5 shrink-0 text-terracota"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M18.364 5.636a9 9 0 010 12.728A8.983 8.983 0 0112 21a8.983 8.983 0 01-6.364-2.636 9 9 0 010-12.728A8.983 8.983 0 0112 3a8.983 8.983 0 016.364 2.636z" />
                    <path d="M12 13a3 3 0 100-6 3 3 0 000 6z" />
                  </svg>
                  <div>
                    <p className="text-xs font-semibold text-terracota">
                      IMPORTANTE
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-marron-madera">
                      La señal de celular en la zona es muy limitada. Guardá la
                      ubicación y tu reserva <strong>antes de salir</strong>.
                    </p>
                  </div>
                </div>
              </div>

              <a
                href={site.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-verde-cactus px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-verde-cactus/90"
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                  <line x1="8" y1="2" x2="8" y2="18" />
                  <line x1="16" y1="6" x2="16" y2="22" />
                </svg>
                Abrir en Google Maps
              </a>

              <div className="border-t border-verde-cactus/10 pt-6">
                <h3 className="font-serif text-lg font-semibold text-verde-profundo">
                  Desde Mendoza capital
                </h3>
                <ol className="mt-3 space-y-2 text-sm text-marron-madera">
                  <li className="flex gap-2">
                    <span className="font-semibold text-verde-cactus">1.</span>
                    Tomar Ruta 40 Sur hasta Tunuyán
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-verde-cactus">2.</span>
                    Empalmar con Ruta Provincial 94 hacia el Manzano Histórico
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-verde-cactus">3.</span>
                    Continuar ~15 km hasta el ingreso a La Trucha Tranqui
                  </li>
                </ol>
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={200}>
            <div className="h-[400px] overflow-hidden rounded-2xl border border-verde-cactus/10 lg:h-full lg:min-h-[500px]">
              <iframe
                title="Ubicación de Opuntia Casa de Té"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(site.fullName)}&ll=${site.address.coordinates.lat},${site.address.coordinates.lng}&hl=es&z=15&output=embed`}
                className="size-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
