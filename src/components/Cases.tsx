import { Eyebrow, Titulo, Foto } from "@/components/ui";
import { cases, bastidores } from "@/data/conteudo";
import Reveal from "@/components/Reveal";

export default function Cases() {
  return (
    <section id="cases" className="py-24 md:py-32 bg-sand">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Cases</Eyebrow>
          <Titulo>Cada projeto contado do jeito que a gente trabalha.</Titulo>
          <p className="mt-6 max-w-2xl text-muted leading-relaxed">
            O desafio, a ideia e a entrega.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-col gap-24">
          {cases.map((c, i) => (
            <Reveal as="article" key={c.titulo} className="grid lg:grid-cols-2 gap-10 items-center">
              <Foto
                src={c.foto}
                alt={`${c.titulo}: ${c.tipo}`} // troque pela descrição real da foto
                sizes="(min-width: 1024px) 600px, 100vw"
                className={`aspect-4/3 rounded-3xl ${i % 2 ? "lg:order-2" : ""}`}
              />
              <div>
                <h3 className="text-3xl md:text-4xl font-extrabold text-ink tracking-tight">{c.titulo}</h3>
                <p className="mt-2 text-muted">{c.tipo}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <li key={t} className="px-3 py-1 rounded-full border border-ink/30 text-xs font-bold text-ink">
                      {t}
                    </li>
                  ))}
                </ul>
                <dl className="mt-8 space-y-5">
                  {[
                    ["Desafio", c.desafio],
                    ["Ideia", c.ideia],
                    ["Entrega", c.entrega],
                  ].map(([rotulo, texto]) => (
                    <div key={rotulo}>
                      <dt className="text-xs uppercase tracking-[0.25em] font-bold text-brand-deep">{rotulo}</dt>
                      <dd className="mt-1 text-body leading-relaxed">{texto}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="mt-28 text-2xl font-extrabold text-ink">Mais bastidores</h3>
        </Reveal>
        <ul className="mt-6 grid sm:grid-cols-3 gap-4">
          {bastidores.map((b, i) => (
            <Reveal as="li" key={b.legenda} delay={i * 90}>
              <Foto src={b.foto} alt={b.legenda} sizes="(min-width: 640px) 33vw, 100vw" className="aspect-4/3 rounded-2xl" />
              <p className="mt-3 text-sm text-muted">{b.legenda}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}