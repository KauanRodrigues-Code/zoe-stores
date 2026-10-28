import Reveal from "@/components/Reveal";
import { SITE } from "@/lib/site";

/**
 * Seção "Visite nossa boutique": endereço em texto (acessibilidade e SEO) + mapa incorporado.
 * O mapa usa o embed do Google sem chave de API e carrega só quando se aproxima da tela.
 * O quadro tem proporção fixa, então o carregamento do iframe não desloca o layout.
 */
export default function Location() {
  return (
    <section
      id="visite"
      className="section section--tint"
      aria-labelledby="visite-title"
    >
      <div className="container">
        <div className="visit">
          <Reveal className="visit__info">
            <p className="eyebrow">Localização</p>
            <h2 id="visite-title" className="section__title">
              Visite nossa boutique
            </h2>

            <address className="visit__address">
              <span>{SITE.address.street}</span>
              <span>
                {SITE.address.district}, {SITE.address.city}
              </span>
            </address>

            <div className="visit__actions">
              <a
                className="btn btn--dark"
                href={SITE.map.searchUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Como chegar
                <span className="sr-only"> (abre o Google Maps em nova aba)</span>
              </a>
              <a
                className="text-link"
                href={SITE.map.openUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir mapa em nova aba
                <span className="sr-only"> (Google Maps)</span>
              </a>
            </div>

            <p className="visit__note">
              O mapa é gerado pelo Google a partir do endereço informado. Confira
              o ponto exato ao traçar a rota.
            </p>
          </Reveal>

          <Reveal className="visit__map" delay={120}>
            <div className="map-frame">
              <iframe
                title="Mapa do Google Maps com a localização da Zoé Stores"
                src={SITE.map.embedUrl}
                loading="lazy"
                referrerPolicy="no-referrer"
                allowFullScreen
              >
                Seu navegador não exibiu o mapa. Use o botão Como chegar para
                abrir o endereço no Google Maps.
              </iframe>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
