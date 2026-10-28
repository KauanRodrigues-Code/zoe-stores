import ProductCard from "@/components/ProductCard";
import PriceNote from "@/components/PriceNote";
import { clutches } from "@/lib/catalog";
import Reveal from "@/components/Reveal";

/** Seção secundária: menor e mais discreta que as seções de vestidos. */
export default function Clutches() {
  return (
    <section
      id="clutches"
      className="section section--tint section--compact"
      aria-labelledby="clutches-title"
    >
      <div className="container">
        <Reveal className="section__head section__head--small">
          <p className="eyebrow">Acessórios</p>
          <h2 id="clutches-title" className="section__title section__title--small">
            Clutches e acessórios
          </h2>
        </Reveal>

        <div className="grid grid--clutches">
          {clutches.map((product, i) => (
            <Reveal key={product.id} delay={i * 90}>
              <ProductCard product={product} compact />
            </Reveal>
          ))}
        </div>

        <PriceNote />
      </div>
    </section>
  );
}
