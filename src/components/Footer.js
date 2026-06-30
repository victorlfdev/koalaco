function SocialIcon({ d }) {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d={d}
        stroke="#F4F1EA"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-logo">Koala &amp; Co</div>
            <p className="footer-tagline">
              Marketing, vendas e tecnologia para negócios locais que querem
              crescer de verdade.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <h4>Navegação</h4>
              <a href="#servicos">Serviços</a>
              <a href="#diferenciais">Diferenciais</a>
              <a href="#equipe">Equipe</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="footer-col">
              <h4>Contato</h4>
              <a href="mailto:koalaco@gmail.com">koalaco@gmail.com</a>
              <a
                href="https://wa.me/5511948569074?text=Olá! Vim pelo site Koala & Co. Gostaria de agendar um diagnóstico gratuito."
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} Koala &amp; Co. Todos os direitos
            reservados.
          </span>
          <div className="footer-social">
            <a
              href="https://www.instagram.com/koalaco.br/"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon d="M4 4h16v16H4zM12 8a4 4 0 100 8 4 4 0 000-8zM17 7h.01" />
            </a>
            {/*<a
              href="https://www.linkedin.com/company/koalaco/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon d="M4 9h3v11H4zM5.5 4a1.8 1.8 0 110 3.6 1.8 1.8 0 010-3.6zM11 9h3v2c.7-1.3 2-2.3 4-2.3 3 0 4 2 4 5.3V20h-3v-5.3c0-1.5-.5-2.5-2-2.5-1.5 0-2.3 1-2.3 2.5V20h-3z" />
            </a>*/}
          </div>
        </div>
      </div>
    </footer>
  );
}
