"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export default function CountUp({ to, prefix = "", suffix = "", duration = 1800 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  // começa com o valor final: se o JavaScript falhar, o número certo continua na tela
  const [valor, setValor] = useState(to);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const menosMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (menosMovimento || !("IntersectionObserver" in window)) return;

    let raf = 0;

    const animar = () => {
      const inicio = performance.now();
      const passo = (agora: number) => {
        const p = Math.min((agora - inicio) / duration, 1);
        const suave = 1 - Math.pow(1 - p, 3); // desacelera no final
        setValor(Math.round(to * suave));
        if (p < 1) raf = requestAnimationFrame(passo);
      };
      raf = requestAnimationFrame(passo);
    };

    setValor(0);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          animar();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {valor.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}