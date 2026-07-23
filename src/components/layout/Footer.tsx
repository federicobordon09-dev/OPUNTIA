import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-verde-cactus/10 bg-white/50">
      <div className="container-page py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-serif text-xl font-semibold text-verde-profundo">
              {site.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-marron-madera">
              Casa de té y pastelería artesanal en el corazón del Manzano
              Histórico, Valle de Uco.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-verde-cactus/20 text-verde-cactus transition-all hover:bg-verde-cactus hover:text-white"
                aria-label="Instagram"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex size-10 items-center justify-center rounded-full border border-verde-cactus/20 text-verde-cactus transition-all hover:bg-verde-cactus hover:text-white"
                aria-label="Facebook"
              >
                <svg className="size-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-verde-cactus">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={site.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-marron-madera transition-colors hover:text-verde-cactus"
                >
                  {site.whatsappText}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-marron-madera transition-colors hover:text-verde-cactus"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-verde-cactus">
              Horarios
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-marron-madera">
              <li>{site.hours.general}</li>
              <li>{site.hours.season}</li>
              <li className="text-xs italic">{site.hours.note}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-verde-cactus">
              Ubicación
            </h4>
            <address className="mt-4 not-italic text-sm leading-relaxed text-marron-madera">
              {site.address.street}
              <br />
              {site.address.location}
              <br />
              {site.address.city}, {site.address.province}
            </address>
            <a
              href={site.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-verde-cactus transition-colors hover:text-verde-profundo"
            >
              <svg className="size-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
                <line x1="8" y1="2" x2="8" y2="18" />
                <line x1="16" y1="6" x2="16" y2="22" />
              </svg>
              Abrir en Google Maps
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-verde-cactus/10 pt-8 text-center text-xs text-marron-claro/60">
          <p>© {new Date().getFullYear()} {site.fullName}. Todos los derechos reservados.</p>
          <p className="mt-1">
            Se atiende exclusivamente con reserva previa por WhatsApp.
          </p>
        </div>
      </div>
    </footer>
  );
}
