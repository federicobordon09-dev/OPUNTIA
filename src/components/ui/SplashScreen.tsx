"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const MIN_MS = 2000;
    const FADE_MS = 500;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const dismiss = () => {
      setFade(true);
      setTimeout(() => {
        setVisible(false);
        document.body.style.overflow = original || "";
      }, FADE_MS);
    };

    const timer = setTimeout(dismiss, MIN_MS);

    const onLoad = () => {
      if (Date.now() - start >= MIN_MS) {
        clearTimeout(timer);
        dismiss();
      }
    };

    if (document.readyState === "complete") onLoad();
    else addEventListener("load", onLoad);

    return () => {
      clearTimeout(timer);
      removeEventListener("load", onLoad);
      document.body.style.overflow = original || "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-verde-profundo transition-opacity duration-500 ${
        fade ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative size-24 sm:size-32">
        <Image
          src="/images/logo_opuntia.jpg"
          alt="Opuntia Casa de Té"
          fill
          className="rounded-full object-cover"
          priority
        />
      </div>
      <h1 className="mt-6 font-serif text-3xl text-white sm:text-4xl">
        Opuntia Casa de Té
      </h1>
      <p className="mt-2 text-sm text-white/70">
        Una tarde de té al pie de los Andes
      </p>
      <div className="mt-10 flex gap-2" aria-hidden="true">
        <span className="size-2 animate-bounce rounded-full bg-terracota [animation-delay:0ms]" />
        <span className="size-2 animate-bounce rounded-full bg-terracota [animation-delay:150ms]" />
        <span className="size-2 animate-bounce rounded-full bg-terracota [animation-delay:300ms]" />
      </div>
    </div>
  );
}
