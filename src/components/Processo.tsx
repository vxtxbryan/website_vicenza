import { Eyebrow, Titulo } from "@/components/ui";
import { etapas } from "@/data/conteudo";
import Reveal from "@/components/Reveal";

export default function Processo() {
  return (
    <section id="processo" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Como trabalhamos</Eyebrow>
          <Titulo>Do briefing à desmontagem.</Titulo>
          <p className="mt-6 max-w-2xl text-muted leading-relaxed">
            Sete etapas, um único time. Você acompanha tudo com uma liderança só, do primeiro
            encontro até a entrega do espaço.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          <Reveal className="rounded-3xl bg-sand p-8">
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-muted">Como costuma ser</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {["Agência", "Produtora", "Montadora", "Técnica terceirizada"].map((t) => (
                <li key={t} className="px-4 py-2 rounded-full border border-ink/20 text-sm text-muted">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted">Um fornecedor diferente a cada etapa.</p>
          </Reveal>
          <Reveal delay={90} className="rounded-3xl bg-ink p-8 text-white">
            <p className="text-xs uppercase tracking-[0.25em] font-bold text-brand">Com a Vicenza</p>
            <p className="mt-4 inline-block px-4 py-2 rounded-full bg-brand text-ink-deep text-sm font-bold">
              Vicenza
            </p>
            <p className="mt-4 text-sm text-white/80">Um time, do briefing à desmontagem.</p>
          </Reveal>
        </div>

        <ol className="mt-16 grid md:grid-cols-2 gap-x-14 gap-y-10">
          {etapas.map((e, i) => (
            <Reveal as="li" key={e.titulo} delay={(i % 2) * 80} className="flex gap-6 border-t border-ink/15 pt-6">
              <span className="text-3xl font-extrabold text-brand-deep">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-xl font-bold text-ink">{e.titulo}</h3>
                <p className="mt-2 text-muted leading-relaxed">{e.texto}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}