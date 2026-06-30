"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function AnimatedHeroSVG() {
  const pathRef = useRef(null);
  const dotsRef = useRef([]);
  const nodesRef = useRef([]);

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.to(path, { strokeDashoffset: 0, duration: 1.7, ease: "power2.inOut" })
      .from(
        nodesRef.current,
        {
          opacity: 0,
          scale: 0.55,
          duration: 0.55,
          stagger: 0.16,
          ease: "back.out(2)",
        },
        "-=1.25",
      )
      .from(
        dotsRef.current,
        {
          opacity: 0,
          scale: 0.6,
          duration: 0.45,
          stagger: 0.18,
          ease: "power1.out",
        },
        "-=1.05",
      )
      .add(() => {
        nodesRef.current.forEach((node, i) => {
          if (!node) return;
          gsap.to(node, {
            scale: 1.04,
            duration: 2.3 + i * 0.25,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            transformOrigin: "center center",
          });
        });
      });

    const dotTweens = dotsRef.current.map((dot, i) => {
      if (!dot) return null;
      const obj = { t: 0 };
      return gsap.to(obj, {
        t: 1,
        duration: 3.2,
        repeat: -1,
        delay: 1.6 + i * 0.85,
        ease: "power1.inOut",
        onUpdate: () => {
          const point = path.getPointAtLength(obj.t * length);
          gsap.set(dot, {
            x: point.x,
            y: point.y,
            opacity: obj.t < 0.05 || obj.t > 0.96 ? 0 : 1,
          });
        },
      });
    });

    return () => {
      tl.kill();
      dotTweens.forEach((t) => t && t.kill());
    };
  }, []);

  return (
    <svg
      viewBox="0 0 480 420"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Fluxo de clientes: das redes sociais para a landing page e depois para a venda"
    >
      <defs>
        <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C8F5A" />
          <stop offset="50%" stopColor="#D9E0C6" />
          <stop offset="100%" stopColor="#FFC85D" />
        </linearGradient>

        <linearGradient id="dotGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFCB6A" />
          <stop offset="100%" stopColor="#4E652E" />
        </linearGradient>

        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F6EDD8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F6EDD8" stopOpacity="0.08" />
        </linearGradient>

        <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* background particles */}
      <circle cx="95" cy="80" r="10" fill="#F6EDD8" opacity="0.35" />
      <circle cx="320" cy="35" r="8" fill="#F4F0E9" opacity="0.35" />
      <circle cx="160" cy="190" r="6" fill="#E9E8D9" opacity="0.28" />
      <circle cx="420" cy="170" r="6" fill="#F6EDD8" opacity="0.3" />

      {/* AREA (growth curve fill) */}
      <path
        d="M70 340 
           C 120 320, 180 270, 220 220 
           C 260 180, 300 140, 350 110 
           C 380 95, 400 90, 410 90 
           L410 420 L70 420 Z"
        fill="url(#areaGradient)"
        opacity="0.85"
      />

      {/* MAIN PATH (growth curve) */}
      <path
        ref={pathRef}
        d="M70 340 
           C 120 320, 180 270, 220 220 
           C 260 180, 300 140, 350 110 
           C 380 95, 400 90, 410 90"
        stroke="url(#pathGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.95"
        filter="url(#softGlow)"
      />

      {/* subtle secondary line */}
      <path
        d="M70 340 
           C 120 320, 180 270, 220 220 
           C 260 180, 300 140, 350 110 
           C 380 95, 400 90, 410 90"
        stroke="#D9E0C6"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeDasharray="6 10"
        opacity="0.4"
      />

      {/* moving dots */}
      <circle
        ref={(el) => (dotsRef.current[0] = el)}
        r="5"
        fill="url(#dotGradient)"
        opacity="0"
        filter="url(#softGlow)"
      />
      <circle
        ref={(el) => (dotsRef.current[1] = el)}
        r="4.5"
        fill="#7C8F5A"
        opacity="0"
      />
      <circle
        ref={(el) => (dotsRef.current[2] = el)}
        r="3.8"
        fill="#FFC85D"
        opacity="0"
      />

      {/* NODES (mantidos iguais) */}
      <g ref={(el) => (nodesRef.current[0] = el)}>
        <circle cx="70" cy="340" r="42" fill="#E7EAD9" />
        <circle cx="70" cy="340" r="20" fill="#F6EDD8" />
        <text x="70" y="397" textAnchor="middle" fontSize="12" fill="#5C624F">
          Atenção
        </text>
      </g>

      <g ref={(el) => (nodesRef.current[1] = el)}>
        <circle cx="250" cy="190" r="46" fill="#4E652E" />
        <text x="250" y="250" textAnchor="middle" fontSize="12" fill="#F4F0E9">
          Landing Page
        </text>
      </g>

      <g ref={(el) => (nodesRef.current[2] = el)}>
        <circle cx="410" cy="90" r="40" fill="#E7EAD9" />
        <text x="410" y="155" textAnchor="middle" fontSize="12" fill="#5C624F">
          Conversão
        </text>
      </g>
    </svg>
  );
}
