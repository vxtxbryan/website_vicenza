import Image from "next/image";
import { Eyebrow, Titulo } from "@/components/ui";
import { marcas } from "@/data/conteudo";
import Reveal from "@/components/Reveal";

export default function Marcas() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Marcas</Eyebrow>
          <Titulo>BASTIDORES DE GRANDES MARCAS</Titulo>
        </Reveal>

        <ul className="mt-14 flex flex-wrap justify-center gap-4">
          {marcas.map((m, i) => (
            <Reveal
              as="li"
              key={m.nome}
              delay={(i % 4) * 70}
              className="group relative h-28 w-[calc(50%-0.5rem)] overflow-hidden rounded-2xl border border-ink/10 bg-ink md:h-32 md:w-[calc(25%-0.75rem)]"
            >
              <Image
                src={m.logo}
                alt={`Logo ${m.nome}`}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                unoptimized={m.logo.endsWith(".svg")}
                className="object-contain p-5 opacity-70 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
              />
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