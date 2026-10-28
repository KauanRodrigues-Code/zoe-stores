import Reveal from "@/components/Reveal";

const STEPS = [
  {
    title: "Explore os modelos",
    text: "Navegue pela coleção e filtre pela tonalidade para encontrar os vestidos que mais combinam com você.",
  },
  {
    title: "Consulte a disponibilidade",
    text: "Toque em Consultar no WhatsApp no modelo escolhido. A conversa abre com o nome do vestido já na mensagem.",
  },
  {
    title: "Combine os próximos passos",
    text: "A equipe da Zoé Stores responde e combina com você os próximos passos.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section"
      aria-labelledby="como-title"
    >
      <div className="container">
        <Reveal className="section__head">
          <p className="eyebrow">Como funciona</p>
          <h2 id="como-title" className="section__title">
            Em três passos
          </h2>
        </Reveal>

        <ol className="steps">
          {STEPS.map((step, i) => (
            <li key={step.title}>
              <Reveal className="step" delay={i * 100}>
                <span className="step__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <p className="fineprint">
          O site não faz reservas nem pagamentos. A disponibilidade e as
          condições são combinadas diretamente com a equipe.
        </p>
      </div>
    </section>
  );
}
