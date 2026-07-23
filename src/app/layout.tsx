import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.fullName} | Merienda y té en hebras en el Manzano Histórico`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "casa de té manzano histórico",
    "casa de té tunuyán",
    "merienda valle de uco",
    "té en hebras mendoza",
    "pastelería artesanal tunuyán",
    "casa de té mendoza",
    "opuntia casa de té",
    "merienda con vista a la montaña",
  ],
  authors: [{ name: site.fullName }],
  metadataBase: new URL(site.url),
  icons: {
    icon: "/images/logo_opuntia.jpg",
    apple: "/images/logo_opuntia.jpg",
  },
  alternates: {
    canonical: site.url,
  },
  openGraph: {
    title: `${site.fullName} – ${site.tagline}`,
    description:
      "Té en hebras, tortas caseras y la mejor vista del Valle de Uco. Sábados, domingos y feriados con reserva previa. Reservá por WhatsApp.",
    url: site.url,
    siteName: site.fullName,
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/images/torta-chocolate-vista-montana.jpg",
        width: 1440,
        height: 1920,
        alt: "Porción de torta de chocolate con vista a la Cordillera de los Andes en Opuntia Casa de Té",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.fullName} – ${site.tagline}`,
    description:
      "Té en hebras, tortas caseras y la mejor vista del Valle de Uco. Sábados, domingos y feriados con reserva previa.",
    images: ["/images/torta-chocolate-vista-montana.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CafeOrCoffeeShop",
              name: site.fullName,
              image: `${site.url}/images/hero.jpg`,
              description: site.description,
              address: {
                "@type": "PostalAddress",
                streetAddress: "Ruta Provincial 94, km 15",
                addressLocality: "Los Chacayes",
                addressRegion: "Tunuyán",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: site.address.coordinates.lat,
                longitude: site.address.coordinates.lng,
              },
              telephone: site.phone,
              servesCuisine: "Casa de té / pastelería artesanal",
              acceptsReservations: "Yes",
              reservationLink: site.whatsappLink,
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Saturday", "Sunday"],
                opens: "16:00",
                closes: "20:00",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: site.rating.google,
                reviewCount: site.rating.googleReviews,
                bestRating: "5",
              },
              sameAs: [
                site.instagramUrl,
                site.facebookUrl,
                site.address.mapsUrl,
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-verde-cactus focus:px-6 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg focus:outline-none"
        >
          Saltar al contenido principal
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  );
}
