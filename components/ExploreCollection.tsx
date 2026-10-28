"use client";

import { useMemo, useState } from "react";
import ProductCard from "@/components/ProductCard";
import PriceNote from "@/components/PriceNote";
import { TONES, type Product, type ToneId } from "@/lib/catalog";
import Reveal from "@/components/Reveal";

type Props = {
  /** Todos os vestidos do catálogo. */
  dresses: Product[];
};

type Filter = "mais" | ToneId;

/**
 * "Mais modelos" mostra os vestidos que não estão na vitrine de destaque.
 * Ao escolher uma tonalidade, aparecem todos os vestidos daquele tom (destaque inclusive).
 */
export default function ExploreCollection({ dresses }: Props) {
  const [filter, setFilter] = useState<Filter>("mais");

  const visible = useMemo(() => {
    if (filter === "mais") return dresses.filter((d) => !d.featured);
    return dresses.filter((d) => d.tone === filter);
  }, [dresses, filter]);

  const toneLabel =
    filter === "mais"
      ? "Mais modelos"
      : (TONES.find((t) => t.id === filter)?.label ?? "");

  return (
    <section id="explore" className="section section--tint" aria-labelledby="explore-title">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Explore a coleção</p>
          <h2 id="explore-title" className="section__title">
            Encontre pela tonalidade
          </h2>
        </Reveal>

        <div className="chips" role="group" aria-label="Filtrar por tonalidade">
          <button
            type="button"
            className="chip"
            aria-pressed={filter === "mais"}
            onClick={() => setFilter("mais")}
          >
            Mais modelos
          </button>
          {TONES.map((tone) => (
            <button
              key={tone.id}
              type="button"
              className="chip"
              aria-pressed={filter === tone.id}
              onClick={() => setFilter(tone.id)}
            >
              {tone.label}
            </button>
          ))}
        </div>

        <p className="explore__status" role="status" aria-live="polite">
          {toneLabel}: {visible.length}{" "}
          {visible.length === 1 ? "modelo" : "modelos"}
        </p>

        {/* key={filter}: ao trocar a tonalidade a grade é remontada e entra com um fade curto */}
        <div
          key={filter}
          className="grid grid--featured grid--swap"
          data-testid="explore-grid"
        >
          {visible.map((product, i) => (
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
