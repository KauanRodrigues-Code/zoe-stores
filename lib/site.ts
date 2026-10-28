import { WHATSAPP_NUMBER } from "@/lib/whatsapp";

const street = "Avenida Barão de Monte Alegre, 96";
const district = "Jardim Bonfim";
const city = "Campinas-SP";
const fullAddress = `${street}, ${district}, ${city}`;

/**
 * Consulta usada em TODOS os links e no mapa incorporado.
 * Para corrigir a localização, defina NEXT_PUBLIC_MAP_QUERY (ex.: "Zoé Stores, Campinas-SP"
 * ou "-22.9,-47.0") ou edite fullAddress acima. Nada é inventado: o mapa é resolvido pelo
 * próprio Google a partir do texto do endereço informado. Não é segredo nem usa chave de API.
 */
const mapQuery = process.env.NEXT_PUBLIC_MAP_QUERY?.trim() || fullAddress;
const encodedQuery = encodeURIComponent(mapQuery);

const MAP = {
  query: mapQuery,
  /** Embed sem chave de API. A origem precisa estar em frame-src na CSP (next.config.mjs). */
  embedUrl: `https://www.google.com/maps?q=${encodedQuery}&hl=pt-BR&z=16&output=embed`,
  /** "Como chegar": abre o Google Maps com busca pelo endereço completo. */
  searchUrl: `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`,
  /** Link alternativo para abrir o mapa em nova aba. */
  openUrl: `https://www.google.com/maps?q=${encodedQuery}&hl=pt-BR`,
} as const;

export const SITE = {
  name: "Zoé Stores",
  tagline: "Aluguel de vestidos de festa em Campinas-SP",
  description:
    "Boutique de aluguel de vestidos de festa em Campinas-SP. Explore modelos para formandas, madrinhas e convidadas e consulte a disponibilidade pelo WhatsApp.",
  /** Defina NEXT_PUBLIC_SITE_URL na hospedagem quando o domínio existir. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    "",
  ),
  instagramUrl: "https://www.instagram.com/zoestores.br/",
  instagramHandle: "@zoestores.br",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplay: "+55 19 99908-7085",
  email: "zoestores.cps@gmail.com",
  address: { street, district, city, full: fullAddress },
  /** Link de busca pelo endereço (sem coordenadas inventadas). */
  mapsUrl: MAP.searchUrl,
  map: MAP,
} as const;
