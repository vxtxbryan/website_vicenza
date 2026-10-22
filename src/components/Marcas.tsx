import { Eyebrow, Titulo } from "@/components/ui";
import { marcas } from "@/data/conteudo";
import Reveal from "@/components/Reveal";
import Image from 'next/image';

export default function Marcas() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Marcas</Eyebrow>
          <Titulo>BASTIDORES DE GRANDES MARCAS</Titulo>
        </Reveal>
        <ul className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">
          {marcas.map((m, i) => (
            <Reveal
              as="li"
              key={m}
              delay={(i % 4) * 70}
              className="h-24 rounded-2xl bg-sand flex items-center justify-center font-bold text-ink/60"
            >
              {m}
            </Reveal>
          ))}
        </ul>
        <p className="mt-6 text-xs text-muted">
          As marcas pertencem aos seus respectivos donos e aparecem aqui para ilustrar projetos
          dos quais a Vicenza participou.
        </p>
      </div>
    </section>
  );
}