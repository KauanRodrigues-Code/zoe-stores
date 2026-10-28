import ProductCard from "@/components/ProductCard";
import PriceNote from "@/components/PriceNote";
import { featuredDresses } from "@/lib/catalog";
import Reveal from "@/components/Reveal";

export default function FeaturedCollection() {
  return (
    <section
      id="colecao"
      className="section"
      aria-labelledby="colecao-title"
    >
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Coleção em destaque</p>
          <h2 id="colecao-title" className="section__title">
            Uma seleção para começar
          </h2>
          <p className="section__lead">
            Modelos em diferentes tons e silhuetas. Veja os demais em Explore a
            coleção.
          </p>
        </Reveal>

        <div className="grid grid--featured">
          {featuredDresses.map((product, i) => (
            <Reveal key={product.id} delay={(i % 3) * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>

        <PriceNote />
      </div>
    </section>
  );
}
