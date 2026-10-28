import Image from "next/image";
import type { Product } from "@/lib/catalog";
import { buildWhatsAppUrl, productMessage } from "@/lib/whatsapp";

type Props = {
  product: Product;
  /** Cartão menor, usado na seção secundária de clutches. */
  compact?: boolean;
  priority?: boolean;
};

const SIZES_DEFAULT = "(min-width: 900px) 30vw, (min-width: 560px) 45vw, 92vw";
const SIZES_COMPACT = "(min-width: 900px) 22vw, (min-width: 560px) 40vw, 80vw";

/**
 * Regra do projeto: a foto fica sozinha na sua área (.card__photo) e todas as
 * informações ficam em .card__body, em outro bloco, abaixo da foto.
 * Nada é posicionado por cima da imagem.
 */
export default function ProductCard({ product, compact, priority }: Props) {
  const [lead, ...rest] = product.nome.split(" — ");
  const title = rest.length > 0 ? rest.join(" — ") : product.nome;
  const eyebrow = rest.length > 0 ? lead : null;
  const href = buildWhatsAppUrl(
    productMessage(product.categoria, product.nome),
  );

  return (
    <article className={compact ? "card card--compact" : "card"}>
      <div className="card__photo">
        <Image
          src={product.src}
          alt={product.alt}
          width={product.width}
          height={product.height}
          sizes={compact ? SIZES_COMPACT : SIZES_DEFAULT}
          quality={90}
          priority={priority}
          className="card__img"
        />
      </div>
      <div className="card__body">
        {eyebrow ? <p className="card__eyebrow">{eyebrow}</p> : null}
        <h3 className="card__title">{title}</h3>
        <p className="card__desc">{product.descricao}</p>
        <p className="card__price">
          <span className="card__price-label">Valor de locação</span>
          <span className="card__price-value">{product.valor_locacao}</span>
        </p>
        <a
          className="btn btn--dark card__cta"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar no WhatsApp
          <span className="sr-only">
            {" "}
            sobre {product.nome} (abre em nova aba)
          </span>
        </a>
      </div>
    </article>
  );
}
