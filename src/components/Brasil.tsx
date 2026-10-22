import { Eyebrow, Titulo } from "@/components/ui";
import MapaBrasil from "@/components/MapaBrasil";
import { brasil } from "@/data/conteudo";

export default function Brasil() {
  return (
    <section id="brasil" className="py-24 md:py-32 bg-sand">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <Eyebrow>Onde atuamos</Eyebrow>
          <Titulo>Atendemos o Sul e o Sudeste.</Titulo>
          <p className="mt-6 text-muted leading-relaxed">
            Nossa base fica em São Paulo e atendemos os sete estados do Sul e do Sudeste.
            O mesmo time que cria o projeto acompanha a montagem e a operação em cada cidade.
          </p>
          <ul className="mt-10 space-y-6">
            {brasil.map((b) => (
              <li key={b.titulo} className="border-l-2 border-brand pl-5">
                <p className="font-bold text-ink">{b.titulo}</p>
                <p className="mt-1 text-sm text-muted leading-relaxed">{b.texto}</p>
              </li>
            ))}
          </ul>
        </div>
        <MapaBrasil />
      </div>
    </section>
  );
}
