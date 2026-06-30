import Reveal from "./Reveal";

const TIME = [
  {
    role: "Marketing",
    name: "Estratégia e conteúdo",
    desc: "Garante que a mensagem seja clara, atraia o público certo e posicione a marca localmente.",
  },
  {
    role: "Vendas",
    name: "Conversão e negócios",
    desc: "Foca em transformar atração em faturamento real, otimizando os canais de atendimento.",
  },
  {
    role: "Desenvolvimento",
    name: "Performance e tecnologia",
    desc: "Garante páginas rápidas, seguras e integradas, sem as limitações de plataformas genéricas.",
  },
];

export default function Team() {
  return (
    <section id="equipe" className="section-pad">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Por que a Koala & Co</span>
          <h2>Um trio de sócios, não um time terceirizado.</h2>
          <p>
            Cada especialidade existe dentro de casa — o que muda o ritmo e a
            qualidade de cada entrega.
          </p>
        </Reveal>

        <Reveal as="div" className="team-grid" stagger={0.15}>
          {TIME.map((pessoa) => (
            <article className="team-card" key={pessoa.role} data-reveal-item>
              <span className="team-role">{pessoa.role}</span>
              <h3>{pessoa.name}</h3>
              <p>{pessoa.desc}</p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
