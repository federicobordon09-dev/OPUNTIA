"use client";

import { useState } from "react";
import Image from "next/image";
import { site } from "@/data/site";

const nav = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Menú", href: "#menu" },
  { label: "Galería", href: "#galeria" },
  { label: "Cómo llegar", href: "#ubicacion" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-verde-cactus/10 bg-crema/90 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex cursor-pointer items-center gap-2"
        >
          <Image
            src="/images/logo_opuntia.jpg"
            alt="Opuntia Casa de Té"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="font-serif text-xl font-semibold text-verde-profundo">
            {site.name}
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href.replace("#", ""))}
              className="cursor-pointer text-sm font-medium text-marron-madera transition-colors hover:text-verde-cactus"
            >
              {item.label}
            </button>
          ))}
          <a
            href={site.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-verde-cactus px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-verde-cactus/90"
          >
            Reservar
          </a>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="flex size-10 items-center justify-center md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={`block h-0.5 w-6 bg-verde-profundo transition-all ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-verde-profundo transition-all ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-verde-profundo transition-all ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <nav className="border-t border-verde-cactus/10 bg-crema px-4 pb-6 pt-4 md:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <button
                key={item.href}
                onClick={() => {
                  scrollTo(item.href.replace("#", ""));
                  setOpen(false);
                }}
                className="cursor-pointer text-left text-sm font-medium text-marron-madera transition-colors hover:text-verde-cactus"
              >
                {item.label}
              </button>
            ))}
            <a
              href={site.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center rounded-full bg-verde-cactus px-5 py-3 text-sm font-semibold text-white"
            >
              Reservar por WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
