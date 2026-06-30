"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

/**
 * Wraps a block of content and animates it into view once when it
 * crosses into the viewport. Direct children with [data-reveal-item]
 * are staggered; otherwise the wrapper itself animates as one block.
 */
export default function Reveal({
  as: Tag = "div",
  className = "",
  stagger = 0.1,
  y = 28,
  delay = 0,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll("[data-reveal-item]");
    const targets = items.length ? items : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          stagger: items.length ? stagger : 0,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [stagger, y, delay]);

  return (
    <Tag ref={ref} className={className} {...props} />
  );
}
