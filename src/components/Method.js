import Reveal from "./Reveal";

const ETAPAS = [
  {
    n: "1",
    title: "Diagnóstico",
    desc: "Entendemos seu negócio, seu público e onde está o maior ralo de oportunidade hoje.",
  },
  {
    n: "2",
    title: "Planejamento",
    desc: "Definimos a estratégia de marketing, conversão e vendas alinhada à sua realidade.",
  },
  {
    n: "3",
    title: "Construção tecnológica",
    desc: "Desenvolvemos a landing page e os ativos digitais que sustentam essa estratégia.",
  },
  {
    n: "4",
    title: "Otimização contínua",
    desc: "Acompanhamos os resultados e ajustamos o que for preciso, sempre com dados.",
  },
];

export default function Method() {
  return (
    <section className="method section-pad">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Como trabalhamos</span>
          <h2>O método Koala & Co, em quatro etapas claras.</h2>
          <p>
            Sem caixa preta. Você sabe exatamente em qual fase o seu projeto
            está e o que vem a seguir.
          </p>
        </Reveal>

        <Reveal as="div" className="method-track" stagger={0.15}>
          <div className="method-line" aria-hidden="true" />
          {ETAPAS.map((etapa, i) => (
            <div
              className={`method-step ${i === 0 ? "is-active" : ""}`}
              key={etapa.n}
              data-reveal-item
            >
              <div className="method-num">{etapa.n}</div>
              <h3>{etapa.title}</h3>
              <p>{etapa.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
