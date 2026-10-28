import { SITE } from "@/lib/site";
import { buildWhatsAppUrl, GENERAL_MESSAGE } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section id="contato" className="section" aria-labelledby="contato-title">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Contato e localização</p>
          <h2 id="contato-title" className="section__title">
            Fale com a Zoé
          </h2>
        </Reveal>

        <Reveal className="contact">
          <address className="contact__block">
            <h3 className="contact__label">Endereço</h3>
            <p>
              {SITE.address.street}
              <br />
              {SITE.address.district}, {SITE.address.city}
            </p>
            <a
              className="text-link"
              href={SITE.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver no mapa
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </address>

          <div className="contact__block">
            <h3 className="contact__label">WhatsApp</h3>
            <p>{SITE.whatsappDisplay}</p>
            <a
              className="text-link"
              href={buildWhatsAppUrl(GENERAL_MESSAGE)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir conversa
              <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
            </a>
          </div>

          <div className="contact__block">
            <h3 className="contact__label">E-mail</h3>
            <p>
              <a className="text-link" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </p>
          </div>

          <div className="contact__block">
            <h3 className="contact__label">Instagram</h3>
            <p>
              <a
                className="text-link"
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {SITE.instagramHandle}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
