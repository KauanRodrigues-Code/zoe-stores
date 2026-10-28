import { buildWhatsAppUrl, GENERAL_MESSAGE } from "@/lib/whatsapp";

export default function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-title">
      <div className="container final-cta__inner">
        <h2 id="final-title" className="final-cta__title">
          Já escolheu o seu vestido?
        </h2>
        <p className="final-cta__text">
          Fale com a equipe da Zoé Stores pelo WhatsApp e consulte a
          disponibilidade.
        </p>
        <a
          className="btn btn--light"
          href={buildWhatsAppUrl(GENERAL_MESSAGE)}
          target="_blank"
          rel="noopener noreferrer"
        >
          Fale com a Zoé
          <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
        </a>
      </div>
    </section>
  );
}
