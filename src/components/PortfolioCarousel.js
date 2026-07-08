"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const PROJETOS = [
  {
    title: "Amplifica",
    desc: "Agência AudioVisual para Eventos",
    url: "https://amplifica-landing.vercel.app/",
    nicho: "Audiovisual & Eventos",
  },
  {
    title: "Salão Beauty",
    desc: "Salão de Beleza e Estética",
    url: "https://salao-beauty.vercel.app/",
    nicho: "Beleza & Estética",
  },
  {
    title: "Odontoclinic",
    desc: "Clínica Odontológica",
    url: "https://odontoclinicc.lovable.app/",
    nicho: "Saúde Bucal",
  },
  {
    title: "Trainer Boost",
    desc: "Personal Trainer & Fitness",
    url: "https://trainer-boost-landing.lovable.app/",
    nicho: "Fitness & Wellness",
  },
  {
    title: "Hope'Stor",
    desc: "Loja de Roupas",
    url: "https://shopvip.hopestor.com.br/",
    nicho: "E-commerce Fashion",
  },
];

export default function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animPhase, setAnimPhase] = useState("idle"); // idle | exiting | entering
  const [animDirection, setAnimDirection] = useState("next");
  const [loading, setLoading] = useState(false);

  const transitionTo = (newIndex, direction) => {
    setAnimDirection(direction);
    setAnimPhase("exiting");
    setLoading(true);

    // Wait for exit animation, then switch content and play enter animation
    window.setTimeout(() => {
      setCurrentIndex(newIndex);
      setAnimPhase("entering");
    }, 320);
  };

  const handleIframeLoad = () => {
    setLoading(false);
    window.setTimeout(() => setAnimPhase("idle"), 420);
  };

  const handlePrev = () => {
    const nextIndex =
      currentIndex === 0 ? PROJETOS.length - 1 : currentIndex - 1;
    transitionTo(nextIndex, "prev");
  };

  const handleNext = () => {
    const nextIndex =
      currentIndex === PROJETOS.length - 1 ? 0 : currentIndex + 1;
    transitionTo(nextIndex, "next");
  };

  const projeto = PROJETOS[currentIndex];

  return (
    <section id="portfolio" className="section-pad">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Nossos projetos</span>
          <h2>Veja o que criamos para diferentes nichos.</h2>
          <p>
            Cada projeto é único. Navegue entre os resultados que entregamos
            para audiovisual, beleza, odontologia, fitness e e-commerce.
          </p>
        </Reveal>

        <Reveal as="div" className="carousel-wrapper">
          <div className="carousel-container">
            <div
              className={`carousel-slide phase-${animPhase} dir-${animDirection}`}
              aria-live="polite"
            >
              <div className="slide-content">
                <div className="slide-info">
                  <h3>{projeto.title}</h3>
                  <span className="portfolio-nicho">{projeto.nicho}</span>
                  <p>{projeto.desc}</p>
                  <a
                    href={projeto.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Visitar site
                  </a>
                </div>
                <iframe
                  key={`${projeto.title}-${currentIndex}`}
                  src={projeto.url}
                  title={projeto.title}
                  className="carousel-iframe"
                  loading="lazy"
                  onLoad={handleIframeLoad}
                />
                {loading && (
                  <div
                    className="carousel-loading-overlay"
                    aria-live="assertive"
                  >
                    <span>Carregando próximo projeto...</span>
                  </div>
                )}
              </div>
            </div>

            <button
              className="carousel-button carousel-prev"
              onClick={handlePrev}
              aria-label="Projeto anterior"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              className="carousel-button carousel-next"
              onClick={handleNext}
              aria-label="Próximo projeto"
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 19l7-7-7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="carousel-indicators">
            {PROJETOS.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? "active" : ""}`}
                onClick={() => {
                  if (index === currentIndex) return;
                  let dir = index > currentIndex ? "next" : "prev";
                  if (index === 0 && currentIndex === PROJETOS.length - 1)
                    dir = "next";
                  if (index === PROJETOS.length - 1 && currentIndex === 0)
                    dir = "prev";
                  transitionTo(index, dir);
                }}
                aria-label={`Ir para projeto ${index + 1}`}
                aria-current={index === currentIndex ? "true" : "false"}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
