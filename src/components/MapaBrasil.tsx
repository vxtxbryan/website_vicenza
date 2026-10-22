"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { MAPA_VIEWBOX, estadosMapa, capitaisMapa } from "@/data/mapaBrasil";

// idle: tudo visível (antes do JavaScript carregar)
// hidden: esperando o mapa aparecer na tela
// visible: animação rodando
type Fase = "idle" | "hidden" | "visible";

const BASE_NOME = "São Paulo";
const base = capitaisMapa.find((c) => c.nome === BASE_NOME)!;
const destinos = capitaisMapa.filter((c) => c.nome !== BASE_NOME);

// Posição dos rótulos das regiões dentro do mapa
const ROTULO_SUDESTE = { x: 463, y: 379 };
const ROTULO_SUL = { x: 322, y: 530 };

function curva(x2: number, y2: number) {
  const dx = x2 - base.x;
  const dy = y2 - base.y;
  const len = Math.hypot(dx, dy);
  let nx = -dy / len;
  let ny = dx / len;
  if (ny > 0) {
    nx = -nx;
    ny = -ny;
  }
  const cx = (base.x + x2) / 2 + nx * len * 0.25;
  const cy = (base.y + y2) / 2 + ny * len * 0.25;
  return `M${base.x},${base.y} Q${cx.toFixed(1)},${cy.toFixed(1)} ${x2},${y2}`;
}

export default function MapaBrasil() {
  const ref = useRef<HTMLDivElement>(null);
  const [fase, setFase] = useState<Fase>("idle");
  // true quando a pessoa pediu "reduzir movimento" no sistema
  const reduz = useSyncExternalStore(
    (aviso) => {
      const m = window.matchMedia("(prefers-reduced-motion: reduce)");
      m.addEventListener("change", aviso);
      return () => m.removeEventListener("change", aviso);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
  const movimento = !reduz;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reduz || !("IntersectionObserver" in window)) {
      const id = requestAnimationFrame(() => setFase("visible"));
      return () => cancelAnimationFrame(id);
    }

    let jaApareceu = false;
    const id = requestAnimationFrame(() => {
      if (!jaApareceu) setFase("hidden");
    });
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          jaApareceu = true;
          setFase("visible");
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => {
      cancelAnimationFrame(id);
      io.disconnect();
    };
  }, [reduz]);

  const oculto = fase === "hidden";
  const atraso = (ms: number) => (fase === "visible" ? ms : 0);

  let ordemSudeste = 0;
  let ordemSul = 0;

  return (
    <div ref={ref} className="rounded-3xl border border-ink/10 bg-paper p-5 md:p-8">
      <svg
        viewBox={MAPA_VIEWBOX}
        role="img"
        aria-label="Mapa do Brasil com os estados do Sudeste e do Sul destacados e a base da Vicenza em São Paulo"
        className="mx-auto block h-auto w-full max-w-lg"
      >
        {/* Estados fora da área de atuação */}
        {estadosMapa
          .filter((e) => e.regiao === "outros")
          .map((e) => (
            <path
              key={e.sigla}
              d={e.d}
              className="fill-ink/8 stroke-ink/25"
              strokeWidth={0.8}
              strokeLinejoin="round"
            />
          ))}

        {/* Sudeste e Sul */}
        {estadosMapa
          .filter((e) => e.regiao !== "outros")
          .map((e) => {
            const i = e.regiao === "sudeste" ? ordemSudeste++ : ordemSul++;
            const delay = atraso(e.regiao === "sudeste" ? i * 140 : 600 + i * 140);
            return (
              <path
                key={e.sigla}
                d={e.d}
                className={`${e.regiao === "sudeste" ? "fill-ink" : "fill-brand"} stroke-paper`}
                strokeWidth={1.4}
                strokeLinejoin="round"
                style={{
                  opacity: oculto ? 0 : 1,
                  transform: oculto ? "scale(0.93)" : "scale(1)",
                  transformBox: "fill-box",
                  transformOrigin: "center",
                  transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
                }}
              >
                <title>{e.nome}</title>
              </path>
            );
          })}

        {/* Rotas a partir da base */}
        {destinos.map((c, i) => (
          <path
            key={`rota-${c.nome}`}
            d={curva(c.x, c.y)}
            pathLength={1}
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.85}
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeDasharray={1}
            style={{
              strokeDashoffset: oculto ? 1 : 0,
              transition: `stroke-dashoffset 1.1s ease ${atraso(1100 + i * 110)}ms`,
            }}
          />
        ))}

        {/* Capitais */}
        {destinos.map((c, i) => (
          <circle
            key={`cap-${c.nome}`}
            cx={c.x}
            cy={c.y}
            r={3.6}
            className="fill-white stroke-ink-deep"
            strokeWidth={1.2}
            style={{
              opacity: oculto ? 0 : 1,
              transition: `opacity 0.5s ease ${atraso(1500 + i * 110)}ms`,
            }}
          >
            <title>{c.nome}</title>
          </circle>
        ))}

        {/* Base: São Paulo */}
        <g
          style={{
            opacity: oculto ? 0 : 1,
            transition: `opacity 0.5s ease ${atraso(1000)}ms`,
          }}
        >
          {movimento && (
            <circle cx={base.x} cy={base.y} r={7} fill="none" stroke="#b9a15c" strokeWidth={2}>
              <animate attributeName="r" values="7;22" dur="2.2s" begin="1.6s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.9;0" dur="2.2s" begin="1.6s" repeatCount="indefinite" />
            </circle>
          )}
          <circle cx={base.x} cy={base.y} r={7} className="fill-brand stroke-white" strokeWidth={2}>
            <title>São Paulo (base da Vicenza)</title>
          </circle>
        </g>

        {/* Rótulos das regiões */}
        <g
          className="pointer-events-none max-sm:hidden"
          fontSize={11}
          fontWeight={800}
          letterSpacing={1.5}
          textAnchor="middle"
          style={{
            opacity: oculto ? 0 : 1,
            transition: `opacity 0.6s ease ${atraso(1700)}ms`,
          }}
        >
          <text x={ROTULO_SUDESTE.x} y={ROTULO_SUDESTE.y} className="fill-white">
            SUDESTE
          </text>
          <text x={ROTULO_SUL.x} y={ROTULO_SUL.y} className="fill-ink-deep">
            SUL
          </text>
        </g>
      </svg>

      <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-body">
        <li className="flex items-center gap-2">
          <span className="size-3 rounded-sm bg-ink" aria-hidden="true" />
          Sudeste: SP, RJ, MG e ES
        </li>
        <li className="flex items-center gap-2">
          <span className="size-3 rounded-sm bg-brand" aria-hidden="true" />
          Sul: PR, SC e RS
        </li>
        <li className="flex items-center gap-2">
          <span className="size-3 rounded-full border-2 border-white bg-brand shadow-[0_0_0_1px_var(--color-ink)]" aria-hidden="true" />
          Base em São Paulo
        </li>
      </ul>
    </div>
  );
}
