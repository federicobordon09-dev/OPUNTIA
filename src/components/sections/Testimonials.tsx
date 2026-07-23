"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { site, testimonials } from "@/data/site";

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section id="resenas" className="section-padding bg-white/50">
      <div className="container-page">
        <Reveal>
          <SectionTitle
            label="Reseñas"
            title={`${site.rating.google}★ — Lo que dicen quienes nos visitan`}
            description={`Más de ${site.rating.googleReviews} reseñas en Google Maps nos respaldan.`}
          />
        </Reveal>

        <div className="mt-14">
          <div className="mx-auto max-w-3xl">
            <div className="relative min-h-[200px]">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ${
                    i === active
                      ? "relative z-10 translate-y-0 opacity-100"
                      : "absolute inset-0 translate-y-4 opacity-0"
                  }`}
                  aria-hidden={i !== active}
                >
                  {i === active && (
                    <blockquote className="text-center">
                      <div className="mb-4 flex justify-center gap-1">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <svg
                            key={s}
                            className={`size-5 ${
                              s < t.rating
                                ? "text-terracota"
                                : "text-marron-claro/20"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="font-serif text-xl leading-relaxed text-verde-profundo sm:text-2xl">
                        &ldquo;{t.text}&rdquo;
                      </p>
                      <footer className="mt-6">
                        <cite className="not-italic">
                          <span className="text-sm font-semibold text-verde-cactus">
                            {t.author}
                          </span>
                          <span className="mx-2 text-marron-claro/50">·</span>
                          <span className="text-xs text-marron-madera">
                            {t.platform}
                          </span>
                        </cite>
                      </footer>
                    </blockquote>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`size-2 rounded-full transition-all ${
                    i === active
                      ? "w-8 bg-verde-cactus"
                      : "bg-verde-cactus/20 hover:bg-verde-cactus/40"
                  }`}
                  aria-label={`Ver reseña ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              { name: "Google", rating: site.rating.google, stars: "4.4" },
              { name: "Facebook", rating: site.rating.facebook, stars: "4.6" },
              { name: "TripAdvisor", rating: site.rating.tripadvisor, stars: "4.0" },
            ].map((p) => (
              <div
                key={p.name}
                className="flex items-center gap-2 rounded-xl border border-verde-cactus/10 bg-white px-4 py-2"
              >
                <span className="text-sm font-semibold text-verde-profundo">
                  {p.name}
                </span>
                <span className="flex items-center gap-1 text-xs text-marron-madera">
                  <svg className="size-3.5 text-terracota" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {p.rating}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
