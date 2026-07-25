"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#servicos", label: "Serviços" },
  { href: "#portfolio", label: "Portfólio" },
  { href: "#equipe", label: "Equipe" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Scroll-spy: pick the section whose center is closest to the
      // vertical middle of the viewport — works regardless of section height
      const sections = NAV_LINKS
        .map((l) => document.querySelector(l.href))
        .filter(Boolean);
      let best = "";
      let bestDist = Infinity;
      for (const el of sections) {
        const rect = el.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - window.innerHeight / 2);
        if (dist < bestDist) {
          bestDist = dist;
          best = el.id || el.getAttribute("id") || "";
        }
      }
      setActiveSection(best);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-inner">
        <a href="#topo" className="logo" aria-label="Ir para o início">
          <Image
            src="/logoKoalaCoTransparente2.png"
            alt="Koala & Co"
            width={160}
            height={56}
            sizes="(max-width: 640px) 120px, 160px"
            className="logo-image"
          />
        </a>

        <nav className="nav-links" aria-label="Navegação principal">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={activeSection === link.href.slice(1) ? "active" : ""}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav-cta">
          <a
            href="https://wa.me/5511952093370?text=Ol%C3%A1!%20Vim%20pelo%20site%20KoalaCo.%20Gostaria%20de%20agendar%20um%20diagn%C3%B3stico%20gratuito."
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agendar diagnóstico gratuito
          </a>
          <button
            className="nav-toggle"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              {menuOpen ? (
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              ) : (
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="mobile-menu"
          role="menu"
          aria-hidden={!menuOpen}
        >
          <div className="container mobile-menu-inner">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                role="menuitem"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={
                  "mobile-menu-item" +
                  (activeSection === link.href.slice(1) ? " active" : "")
                }
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
