import { Eyebrow, Titulo, Foto } from "@/components/ui";
import { porQue, fotos } from "@/data/conteudo";
import Reveal from "@/components/Reveal";

export default function PorQueNos() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Foto src={fotos.festival} className="aspect-21/9 rounded-3xl mb-20" />
        </Reveal>
        <Reveal>
          <Eyebrow>Por que nós?</Eyebrow>
          <Titulo>Excelência, transparência e dedicação.</Titulo>
        </Reveal>
        <ul className="mt-14 grid md:grid-cols-3 gap-10">
          {porQue.map((p, i) => (
            <Reveal as="li" key={p.titulo} delay={i * 90} className="border-t-2 border-brand pt-6">
              <h3 className="text-2xl font-extrabold text-ink">{p.titulo}</h3>
              <p className="mt-3 text-muted leading-relaxed">{p.texto}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}