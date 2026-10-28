/** Número único do WhatsApp da Zoé Stores (formato internacional, só dígitos). */
export const WHATSAPP_NUMBER = "5519999087085";

export const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Monta o link do WhatsApp com a mensagem já preenchida (sempre codificada). */
export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export const GENERAL_MESSAGE =
  "Olá! Vim pelo site da Zoé Stores e gostaria de conversar sobre vestidos de festa.";

export function productMessage(
  categoria: "vestido" | "clutch",
  nome: string,
): string {
  const item = categoria === "vestido" ? "o vestido" : "a peça";
  return `Olá! Vi ${item} ${nome} no site da Zoé Stores e gostaria de consultar a disponibilidade.`;
}

export function occasionMessage(ocasiao: string): string {
  return `Olá! Gostaria de ver opções de vestidos para ${ocasiao} na Zoé Stores.`;
}
