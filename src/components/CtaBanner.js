import Reveal from "./Reveal";

export default function CtaBanner() {
  return (
    <section id="contato" className="container" style={{ paddingBottom: "var(--section-pad)" }}>
      <Reveal as="div" className="cta-banner">
        <h2>Pronto para colocar mais clientes na porta do seu negócio?</h2>
        <a href="https://wa.me/5511948569074?text=Olá! Vim pelo site Koala & Co. Gostaria de agendar um diagnóstico gratuito." className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
          Agendar diagnóstico gratuito
        </a>
      </Reveal>
    </section>
  );
}
