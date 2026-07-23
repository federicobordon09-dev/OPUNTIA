import Link from "next/link";
import { site } from "@/data/site";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-crema px-4 text-center">
      <span className="font-serif text-8xl font-bold text-verde-cactus/20">404</span>
      <h1 className="-mt-4 font-serif text-3xl text-verde-profundo">
        Página no encontrada
      </h1>
      <p className="mt-2 text-sm text-marron-madera">
        La página que buscás no existe o fue movida.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-verde-cactus px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-verde-cactus/90"
      >
        Volver al inicio
      </Link>
      <a
        href={site.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 text-xs text-marron-madera underline underline-offset-2 hover:text-verde-cactus"
      >
        Contactar por WhatsApp
      </a>
    </div>
  );
}
