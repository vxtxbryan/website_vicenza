"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const barra = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;

    const atualizar = () => {
      raf = 0;
      const el = barra.current;
      if (!el) return;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progresso = total > 0 ? Math.min(window.scrollY / total, 1) : 0;
      el.style.transform = `scaleX(${progresso})`;
    };

    // agrupa vários eventos de rolagem em uma única atualização por quadro
    const aoRolar = () => {
      if (!raf) raf = requestAnimationFrame(atualizar);
    };

    atualizar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    window.addEventListener("resize", aoRolar);

    return () => {
      window.removeEventListener("scroll", aoRolar);
      window.removeEventListener("resize", aoRolar);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed top-0 inset-x-0 z-60 h-0.75 pointer-events-none">      <div
        ref={barra}
        className="h-full w-full origin-left bg-brand"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}