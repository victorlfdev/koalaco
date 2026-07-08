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

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-pad">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Nossos projetos</span>
          <h2>Veja o que criamos para diferentes nichos.</h2>
          <p>
            Cada projeto é único. Conheça os resultados que entregamos para
            audiovisual, beleza, odontologia, fitness e e-commerce.
          </p>
        </Reveal>

        <Reveal as="div" className="portfolio-grid" stagger={0.14}>
          {PROJETOS.map((projeto) => (
            <a
              href={projeto.url}
              target="_blank"
              rel="noopener noreferrer"
              key={projeto.title}
              className="portfolio-card"
              data-reveal-item
            >
              <div className="portfolio-header">
                <h3>{projeto.title}</h3>
                <span className="portfolio-nicho">{projeto.nicho}</span>
              </div>
              <p>{projeto.desc}</p>
              <iframe
                src={projeto.url}
                title={projeto.title}
                className="portfolio-iframe"
                loading="lazy"
              />
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
