import { Eyebrow, Titulo } from "@/components/ui";
import { brasil } from "@/data/conteudo";
import Reveal from "@/components/Reveal";

export default function Brasil() {
  return (
    <section id="brasil" className="py-24 md:py-32 bg-sand">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Eyebrow>Todo o Brasil</Eyebrow>
          <Titulo>Atendemos todo o Brasil.</Titulo>
          <p className="mt-6 text-muted leading-relaxed">
            Nossa base fica em São Paulo, mas o projeto vai aonde a sua marca precisa
            estar. Quem criou é quem monta e opera.
          </p>
          <ul className="mt-10 space-y-6">
            {brasil.map((b) => (
              <li key={b.titulo} className="border-l-2 border-brand pl-5">
                <p className="font-bold text-ink">{b.titulo}</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">{b.texto}</p>
              </li>
            ))}
          </ul>
        </Reveal>
        {/* Depois: troque por um mapa do Brasil em SVG com rotas saindo da cidade-base */}
        <Reveal delay={120} className="aspect-square rounded-3xl bg-paper border border-ink/10 flex items-center justify-center text-muted text-sm">
          Mapa do Brasil
        </Reveal>
      </div>
    </section>
  );
}