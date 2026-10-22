import { Eyebrow, Titulo } from "@/components/ui";
import { solucoes } from "@/data/conteudo";
import Reveal from "@/components/Reveal";

export default function Solucoes() {
  return (
    <section id="solucoes" className="py-24 md:py-32 bg-ink-deep text-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow escuro>Soluções</Eyebrow>
          <Titulo escuro>O que fazemos</Titulo>
          <p className="mt-6 max-w-2xl text-white/70 leading-relaxed">
            Projetos completos para marcas que querem uma experiência ao vivo bem pensada e bem
            executada, do conceito à operação.
          </p>
        </Reveal>

        <ul className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solucoes.map((s, i) => (
            <Reveal
              as="li"
              key={s.titulo}
              delay={(i % 4) * 80}
              className="rounded-3xl border border-white/10 p-7 hover:border-brand hover:bg-white/5 transition-colors"
            >
              <span className="text-sm font-extrabold text-brand">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-lg font-bold leading-snug">{s.titulo}</h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{s.descricao}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}