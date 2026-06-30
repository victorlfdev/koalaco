import Reveal from "./Reveal";

const DORES = [
  "Curtidas e seguidores não pagam boletos no fim do mês.",
  "Site lento ou genérico perde dinheiro em cada clique de anúncio pago.",
  "Mensagens no WhatsApp se perdem e clientes desistem da compra.",
  "Marketing, design e tecnologia tratados como times separados que não conversam.",
];

const SOLUCOES = [
  "Estratégia de conteúdo e posicionamento que atrai o público certo, não qualquer público.",
  "Landing pages em Next.js, rápidas e otimizadas para conversão e SEO.",
  "Fluxo de atendimento estruturado para transformar contato em venda fechada.",
  "Marketing, vendas e desenvolvimento trabalhando juntos, desde o diagnóstico até o resultado.",
];

function Check() {
  return (
    <svg className="mark" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="11" fill="#4E652E" />
      <path d="M6.5 11.2l3 3 6-6.4" stroke="#FAF8F5" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="mark" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="11" fill="rgba(244,241,234,0.12)" />
      <path d="M7.5 7.5l7 7M14.5 7.5l-7 7" stroke="#F4F1EA" strokeWidth="1.6" strokeLinecap="round" opacity="0.85" />
    </svg>
  );
}

export default function ProblemSolution() {
  return (
    <section id="diferenciais" className="problem section-pad">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">O problema do negócio local</span>
          <h2>Visibilidade sem conversão é dinheiro queimado em anúncio.</h2>
          <p>
            A maioria das agências resolve só um pedaço do problema. A Koala
            & Co foi montada para resolver os três ao mesmo tempo.
          </p>
        </Reveal>

        <Reveal as="div" className="problem-grid" stagger={0.15}>
          <div className="problem-card" data-reveal-item>
            <h3>O que está travando o crescimento</h3>
            <ul>
              {DORES.map((item) => (
                <li key={item}>
                  <Cross />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="problem-card solution" data-reveal-item>
            <h3>Como a Koala & Co resolve</h3>
            <ul>
              {SOLUCOES.map((item) => (
                <li key={item}>
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
