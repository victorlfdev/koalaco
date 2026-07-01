"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import Reveal from "./Reveal";

const FAQ = [
  {
    q: "Em quanto tempo a landing page fica pronta?",
    a: "O prazo varia com o escopo, mas projetos padrão saem do diagnóstico ao ar em  poucos dias, já com SEO e performance configurados.",
  },
  {
    q: "Preciso já ter logo e identidade visual prontos?",
    a: "Não. Se você ainda não tem, cuidamos do diagnóstico de marca e da identidade visual como parte do trabalho de Atração & Imagem.",
  },
  {
    q: "Vocês cuidam só do site ou também do tráfego pago?",
    a: "Cuidamos do ecossistema completo: conteúdo, landing page e campanhas de tráfego pago, com análise contínua dos resultados.",
  },
  {
    q: "Por que Next.js em vez de uma plataforma pronta?",
    a: "Next.js entrega páginas muito mais rápidas, sem as limitações de plugins e templates genéricos — o que pesa diretamente no custo dos seus anúncios.",
  },
  {
    q: "Atendem negócios fora da minha cidade?",
    a: "Sim. Trabalhamos remotamente com negócios locais em diferentes cidades, sempre com foco em atrair clientes da região certa.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const answerRefs = useRef([]);

  const toggle = (index) => {
    const isOpening = openIndex !== index;
    const prevIndex = openIndex;

    answerRefs.current.forEach((el, i) => {
      if (!el) return;
      if (i === index && isOpening) {
        gsap.to(el, { height: "auto", duration: 0.45, ease: "power2.out" });
      } else if (i === prevIndex) {
        gsap.to(el, { height: 0, duration: 0.35, ease: "power2.inOut" });
      }
    });

    setOpenIndex(isOpening ? index : null);
  };

  return (
    <section id="faq" className="section-pad">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Perguntas frequentes</span>
          <h2 className="section-title">FAQ</h2>
        </Reveal>

        <Reveal as="div" className="faq-list" stagger={0.06}>
          {FAQ.map((item, i) => (
            <div
              className={`faq-item ${openIndex === i ? "is-open" : ""}`}
              key={item.q}
              data-reveal-item
            >
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                {item.q}
                <span className="faq-icon" aria-hidden="true" />
              </button>
              <div
                className="faq-answer"
                ref={(el) => (answerRefs.current[i] = el)}
                style={{ height: i === 0 ? "auto" : 0 }}
              >
                <div className="faq-answer-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
