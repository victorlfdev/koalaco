import AnimatedHeroSVG from "./AnimatedHeroSVG";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="topo" className="hero">
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
            <a href="#contato" className="btn btn-primary">
              Falar com especialista
            </a>
            <a href="#servicos" className="btn btn-secondary">
              Conhecer serviços
            </a>
          </div>
          <div className="hero-trust" data-reveal-item>
            <div className="hero-trust-item">
              <strong>3 em 1</strong>
              <span>Marketing, vendas e dev fullstack</span>
            </div>
            <div className="hero-trust-item">
              <strong>100% local</strong>
              <span>Foco em negócios de bairro e cidade</span>
            </div>
            <div className="hero-trust-item">
              <strong>Next.js</strong>
              <span>Páginas rápidas para tráfego pago</span>
            </div>
          </div>
        </Reveal>

        <Reveal as="div" className="hero-visual" delay={0.2}>
          <div className="hero-visual-frame">
            <AnimatedHeroSVG />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
