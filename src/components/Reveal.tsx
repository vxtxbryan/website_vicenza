"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
};

// idle: visível (antes do JavaScript carregar)
// hidden: abaixo da tela, esperando a rolagem
// visible: já apareceu
type Estado = "idle" | "hidden" | "visible";

export default function Reveal({ children, className = "", delay = 0, as: Tag = "div" }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [estado, setEstado] = useState<Estado>("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const menosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const jaNaTela = el.getBoundingClientRect().top < window.innerHeight * 0.92;

    if (menosMovimento || jaNaTela || !("IntersectionObserver" in window)) {
      setEstado("visible");
      return;
    }

    setEstado("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEstado("visible");
          io.disconnect();
        }
      },
      { threshold: 0.05 }
    );
    io.observe(el);

    // segurança: se algo falhar, o conteúdo aparece depois de 4 segundos
    const seguranca = window.setTimeout(() => setEstado("visible"), 4000);

    return () => {
      io.disconnect();
      window.clearTimeout(seguranca);
    };
  }, []);

  const escondido = estado === "hidden";

  return (
    <Tag
      ref={ref}
      data-state={estado}
      className={className}
      style={{
        opacity: escondido ? 0 : 1,
        transform: escondido ? "translateY(28px)" : "none",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}