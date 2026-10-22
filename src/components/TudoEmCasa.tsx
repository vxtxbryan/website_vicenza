import { Eyebrow, Titulo, Foto } from "@/components/ui";
import { tudoEmCasa, fotos } from "@/data/conteudo";
import Reveal from "@/components/Reveal";

export default function TudoEmCasa() {
  return (
    <section className="py-24 md:py-32 bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow escuro>Tudo em casa</Eyebrow>
          <Titulo escuro>Estratégia e criação abrem o projeto. A estrutura entrega a ideia inteira.</Titulo>
        </Reveal>

        <Reveal>
          <Foto src={fotos.palco} className="mt-14 aspect-21/9 rounded-3xl" />
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-3 gap-12">
          <Reveal>
            <h3 className="text-2xl font-extrabold text-brand">Pensamos</h3>
            <ul className="mt-6 space-y-5">
              {tudoEmCasa.pensamos.map((i) => (
                <li key={i.titulo}>
                  <p className="font-bold">{i.titulo}</p>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">{i.texto}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90}>
            <h3 className="text-2xl font-extrabold text-brand">Fazemos</h3>
            <ul className="mt-6 space-y-5">
              {tudoEmCasa.fazemos.map((i) => (
                <li key={i.titulo}>
                  <p className="font-bold">{i.titulo}</p>
                  <p className="mt-1 text-sm text-white/70 leading-relaxed">{i.texto}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={180}>
            <h3 className="text-2xl font-extrabold text-brand">Tecnologia imersiva</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {tudoEmCasa.tecnologia.map((t) => (
                <li key={t} className="px-4 py-2 rounded-full border border-white/25 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}