import { site } from "@/data/site";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function InfoBar() {
  return (
    <section className="border-b border-verde-cactus/10 bg-white/50">
      <div className="container-page">
        <div className="flex flex-col items-center justify-between gap-4 py-4 sm:flex-row sm:gap-6">
          <div className="flex flex-wrap items-center gap-4 text-xs sm:gap-6 sm:text-sm">
            <div className="flex items-center gap-2 text-marron-madera">
              <svg className="size-4 shrink-0 text-verde-cactus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span>
                <strong className="text-verde-profundo">{site.hours.general}</strong>
                {" · "}
                {site.hours.season}
              </span>
            </div>
            <div className="flex items-center gap-2 text-marron-madera">
              <svg className="size-4 shrink-0 text-verde-cactus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>{site.address.city}, {site.address.province}</span>
            </div>
          </div>
          <WhatsAppButton variant="outline" label="Consultar disponibilidad" />
        </div>
      </div>
    </section>
  );
}
