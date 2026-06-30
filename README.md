# Koala & Co — Landing Page

Landing page de alta conversão construída em **Next.js (App Router)**, com
animações em **GSAP + ScrollTrigger** e scroll suave via **Lenis**.

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Para build de produção:

```bash
npm run build
npm run start
```

> Observação: o build precisa de acesso à internet para baixar as fontes
> Outfit e Inter do Google Fonts (via `next/font/google`) na primeira
> compilação — isso é padrão em qualquer ambiente normal (local, Vercel,
> CI), mas pode falhar em sandboxes com rede restrita.

## Estrutura

```
src/
  app/
    layout.js        # fontes, metadata, LenisProvider
    page.js           # composição das seções
    globals.css       # design tokens + estilos globais
    sitemap.js         # sitemap.xml dinâmico
    robots.js          # robots.txt dinâmico
  components/
    Header.js          # navegação fixa, menu mobile
    Hero.js             # seção de impacto
    AnimatedHeroSVG.js  # elemento de assinatura: fluxo animado (GSAP)
    ProblemSolution.js  # dores x soluções
    Services.js         # ecossistema de serviços
    Method.js           # método em 4 etapas
    Team.js              # trio de sócios
    FaqSection.js        # FAQ em acordeão
    CtaBanner.js          # chamada final para ação
    Footer.js              # rodapé
    LenisProvider.js       # integra Lenis + GSAP ticker/ScrollTrigger
    Reveal.js                # wrapper de reveal-on-scroll reutilizável
```

## Design tokens

- **Verde Koala**: `#4E652E` (primário) / `#2F3D1C` (escuro)
- **Fundo**: `#FAF8F5` (creme) / `#F0ECE2` (creme alternativo)
- **Tipografia**: Outfit (display) + Inter (corpo), via `next/font/google`

## Próximos passos sugeridos

- Trocar os links de WhatsApp (`https://wa.me/55`) pelo número real.
- Conectar o formulário/CTA a um CRM ou ao número de WhatsApp Business.
- Adicionar imagens reais da equipe na seção "Por que a Koala & Co".
- Configurar domínio e atualizar `metadataBase` em `layout.js` e as URLs
  em `sitemap.js` / `robots.js`.
