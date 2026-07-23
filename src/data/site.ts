export const site = {
  name: "Opuntia",
  fullName: "Opuntia Casa de Té",
  tagline: "Una tarde de té al pie de los Andes",
  description:
    "Casa de té y pastelería artesanal con vista a la Cordillera de los Andes, en el Manzano Histórico, Valle de Uco. Abierto fines de semana y feriados con reserva previa.",
  url: "https://opuntiacasadete.com.ar",
  instagram: "@opuntiacasadete",
  instagramUrl: "https://instagram.com/opuntiacasadete",
  facebookUrl: "https://facebook.com/restauranteopuntia.com.ar",
  whatsapp: "+5492622465808",
  whatsappLink: "https://wa.me/5492622465808",
  whatsappText: "2622-465808",
  phone: "+54 9 2622 46-5808",
  email: "latruchatranqui@hotmail.com.ar",
  address: {
    street: "Ruta Provincial 94, km 15",
    location: "Camino al Manzano Histórico",
    city: "Los Chacayes",
    province: "Tunuyán",
    state: "Mendoza",
    country: "Argentina",
    full: "Ruta Provincial 94, km 15, camino al Manzano Histórico, Los Chacayes, Tunuyán, Mendoza, Argentina",
    mapsQuery: "Opuntia+Casa+de+Té+Tunuyán",
    mapsUrl: "https://maps.app.goo.gl/ZqpBxikedeZwGPJ59",
    coordinates: { lat: -33.601613, lng: -69.297924 },
  },
  hours: {
    general: "Sábados, domingos y feriados",
    season: "Horario invernal: 16 a 20 hs",
    note: "Puede variar por temporada — verificá en Instagram o WhatsApp",
  },
  rating: {
    google: 4.4,
    googleReviews: 90,
    facebook: 4.6,
    tripadvisor: 4.0,
  },
  social: {
    followers: "33.8K",
    verified: true,
  },
  color: {
    crema: "#F6F1E7",
    verdeCactus: "#5F7F4A",
    verdeProfundo: "#33482B",
    terracota: "#C97B4A",
    rosaOpuntia: "#D97BA6",
    marronMadera: "#7A5638",
  },
} as const;

export const menuItems = [
  {
    name: "Té en hebras",
    description: "Carta variada de blends servidos en tetera",
    icon: "tea",
  },
  {
    name: "Cafetería",
    description: "Infusiones de cafetería de especialidad",
    icon: "coffee",
  },
  {
    name: "Pastelería artesanal",
    description: "Tortas, pastelería fresca con frambuesas y porciones generosas",
    icon: "cake",
  },
  {
    name: "Sándwiches",
    description: "Abundantes, con buena calidad de ingredientes",
    icon: "sandwich",
  },
] as const;

export const promos = [
  {
    name: "Promo Otoño",
    items: "Tetera de té en hebras + porción de torta a elección",
    price: "$6.900",
  },
  {
    name: "Experiencia de Mate",
    items: "Agua caliente durante toda la estadía — traé tu propio equipo",
    price: "$7.000 por mesa",
  },
] as const;

export const testimonials = [
  {
    text: "El paisaje es IMPONENTE. Las tortas exquisitas, porciones generosas. La atención de Romi y las chicas es cálida y familiar. La vajilla es de otro nivel.",
    author: "María G.",
    platform: "Google Maps",
    rating: 5,
  },
  {
    text: "Un lugar mágico en medio de la montaña. El té en hebras y la torta de nuez son imperdibles. Volvemos cada vez que podemos.",
    author: "Juan P.",
    platform: "Google Maps",
    rating: 5,
  },
  {
    text: "La vista a la Cordillera mientras merendás es algo que no se olvida. Ambiente acogedor de madera y piedra, atención excelente.",
    author: "Carolina M.",
    platform: "Facebook",
    rating: 5,
  },
  {
    text: "Merienda de domingo perfecta. La pastelería es artesanal de verdad, los precios accesibles y las porciones muy generosas.",
    author: "Andrés L.",
    platform: "Google Maps",
    rating: 5,
  },
  {
    text: "Un tesoro escondido en la Ruta 94. Ideal para desconectarse. El camino de ingreso entre pinos ya es una experiencia.",
    author: "Sofía R.",
    platform: "TripAdvisor",
    rating: 4,
  },
] as const;

export const faq = [
  {
    q: "¿Necesito reservar para ir a Opuntia?",
    a: "Sí, se atiende solo con reserva previa por WhatsApp. Los cupos son limitados y suelen agotarse los fines de semana.",
  },
  {
    q: "¿Qué días abre Opuntia?",
    a: "Sábados, domingos y feriados por la tarde. En algunos meses (como julio) también abren viernes. Consultá el horario de temporada en Instagram o WhatsApp.",
  },
  {
    q: "¿Cuál es el horario?",
    a: "Horario invernal: 16 a 20 hs. Puede variar por temporada, por eso recomendamos verificarlo antes de ir.",
  },
  {
    q: "¿Dónde queda exactamente?",
    a: "Ruta Provincial 94, km 15, camino al Manzano Histórico, Los Chacayes, Tunuyán, Mendoza.",
  },
  {
    q: "¿Cuánto se tarda desde Mendoza capital?",
    a: "Aproximadamente 2 horas en auto por la Ruta 94, en dirección al Manzano Histórico.",
  },
  {
    q: "¿Qué sirven?",
    a: "Carta de té en hebras, cafetería, tortas y pastelería artesanal, sándwiches y promos de merienda.",
  },
  {
    q: "¿Puedo tomar mate?",
    a: "Sí, existe la Experiencia de Mate: traés tu equipo y se provee agua caliente durante toda la estadía.",
  },
  {
    q: "¿Hay señal de celular o WiFi?",
    a: "La señal en la zona es muy limitada. Te recomendamos guardar la ubicación y tu reserva antes de salir.",
  },
] as const;
