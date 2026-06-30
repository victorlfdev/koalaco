import Reveal from "./Reveal";

const SERVICOS = [
  {
    title: "Atração & Imagem",
    desc: "Construímos a percepção da sua marca antes de pedir qualquer clique.",
    items: [
      "Diagnóstico de marca",
      "Gestão de conteúdo",
      "Identidade visual",
      "Edição de fotos e vídeos",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 4v4M12 16v4M4 12h4M16 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    title: "Conversão & Tecnologia",
    desc: "Páginas rápidas, bonitas e construídas para transformar visita em contato.",
    items: [
      "Landing pages de alta performance (Next.js)",
      "Estruturação de perfis e páginas locais",
      "SEO técnico e estrutura de dados",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="5" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M8 10.5l2 2 4-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Escala & Vendas",
    desc: "Tráfego pago e análise constante para transformar cliques em faturamento.",
    items: [
      "Campanhas de tráfego pago",
      "Análise estratégica de conversão",
      "Alinhamento contínuo de resultados",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 18l5-6 4 4 7-9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 7h4v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section-pad">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">O ecossistema de crescimento</span>
          <h2>Nossos serviços cobrem todo o caminho até a venda.</h2>
          <p>
            Cada frente existe para alimentar a próxima — da primeira
            impressão até o caixa do seu negócio.
          </p>
        </Reveal>

        <Reveal as="div" className="services-grid" stagger={0.14}>
          {SERVICOS.map((servico) => (
            <article className="service-card" key={servico.title} data-reveal-item>
              <div className="service-icon">{servico.icon}</div>
              <h3>{servico.title}</h3>
              <p>{servico.desc}</p>
              <ul className="service-list">
                {servico.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
