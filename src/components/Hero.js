"use client";

import AnimatedHeroSVG from "./AnimatedHeroSVG";
import Reveal from "./Reveal";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="topo" className="hero" aria-live="polite">
      <div className="container hero-grid">
        <Reveal as="div" stagger={0.12}>
          <span className="eyebrow" data-reveal-item>
            Marketing + Vendas + Tecnologia
          </span>
          <h1 className="hero-title" data-reveal-item>
            Mais clientes batendo à sua porta. <em>Mais vendas</em> no seu
            WhatsApp.
          </h1>
          <p className="hero-subtitle" data-reveal-item>
            A união de marketing estratégico, vendas e tecnologia de ponta
            para negócios locais que querem parar de depender de sorte.
          </p>
          <div className="hero-cta-row" data-reveal-item>
            <a
              href="https://wa.me/5511952093370?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+sess%C3%A3o+de+diagn%C3%B3stico."
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Falar com especialista
            </a>
            <a href="#servicos" className="btn btn-secondary">
              Conhecer serviços
            </a>
          </div>
          <div className="hero-trust" data-reveal-item>
            <div className="hero-trust-item">
              <strong>Tudo em 1</strong>
              <span>Um só time, sem intermediários</span>
            </div>
            <div className="hero-trust-item">
              <strong>De perto</strong>
              <span>Entendemos seu mercado</span>
            </div>
            <div className="hero-trust-item">
              <strong>Páginas rápidas</strong>
              <span>Anúncios mais baratos com páginas rápidas</span>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" className="hero-visual" delay={0.2}>
          <div
            className={
              "hero-visual-frame" + (isLoaded ? "" : " hero-loading")
            }
            aria-busy={isLoaded ? "false" : "true"}
          >
            {isLoaded ? (
              <AnimatedHeroSVG />
            ) : (
              <div className="hero-skeleton" aria-hidden="true" />
            )}
          </div>
        </Reveal>

        <div className="hero-scroll-hint" data-reveal-item aria-label="Rolar para baixo">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
