import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="sobre" className="section section--tint" aria-labelledby="sobre-title">
      <div className="container about">
        <Reveal>
          <p className="eyebrow">A Zoé Stores</p>
          <h2 id="sobre-title" className="section__title">
            Aluguel de vestidos de festa em Campinas
          </h2>
        </Reveal>
        <Reveal className="about__text" delay={100}>
          <p>
            A Zoé Stores é uma boutique de aluguel de vestidos de festa em{" "}
            {SITE.address.city}. Aqui você conhece os modelos, escolhe pelo tom
            e pela silhueta e conversa com a equipe pelo WhatsApp para
            consultar a disponibilidade.
          </p>
          <p>
            Este site apresenta a coleção e leva você direto ao atendimento.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
