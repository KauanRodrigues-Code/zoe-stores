import { hasUnconfirmedPrices } from "@/lib/catalog";

/**
 * Aviso exibido enquanto qualquer valor do catálogo estiver marcado como
 * "valor_confirmar_antes_de_publicar": true em data/catalogo.json.
 * Quando a loja confirmar tudo e o JSON for atualizado, o aviso some sozinho.
 */
export default function PriceNote() {
  if (!hasUnconfirmedPrices) return null;
  return (
    <p className="price-note">
      Valores informados em fase de confirmação pela Zoé Stores. Consulte a
      equipe pelo WhatsApp para confirmar valores e disponibilidade.
    </p>
  );
}
