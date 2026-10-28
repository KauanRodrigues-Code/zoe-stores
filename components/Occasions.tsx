import { buildWhatsAppUrl, occasionMessage } from "@/lib/whatsapp";
import Reveal from "@/components/Reveal";

const OCCASIONS = [
  {
    id: "formandas",
    title: "Formandas",
    text: "Para a noite de formatura, conheça os modelos e converse com a equipe sobre as opções.",
    message: "formandas",
    cta: "Consultar para formatura",
  },
  {
    id: "madrinhas",
    title: "Madrinhas",
    text: "Se você vai ser madrinha, veja os modelos e consulte a equipe pelo WhatsApp.",
    message: "madrinhas",
    cta: "Consultar para madrinhas",
  },
  {
    id: "convidadas",
    title: "Convidadas",
    text: "Para casamentos e festas, explore a coleção e consulte a disponibilidade do modelo escolhido.",
    message: "convidadas",
    cta: "Consultar para convidadas",
  },
];

export default function Occasions() {
  return (
    <section id="ocasioes" className="section" aria-labelledby="ocasioes-title">
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Ocasiões</p>
          <h2 id="ocasioes-title" className="section__title">
            Para cada momento
          </h2>
        </Reveal>

        <ul className="occasions">
          {OCCASIONS.map((o, i) => (
            <li key={o.id}>
              <Reveal className="occasion" delay={i * 100}>
                <h3 className="occasion__title">{o.title}</h3>
                <p className="occasion__text">{o.text}</p>
                <a
                  className="text-link"
                  href={buildWhatsAppUrl(occasionMessage(o.message))}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {o.cta}
                  <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
