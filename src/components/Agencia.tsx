import { Eyebrow, Titulo } from "@/components/ui";
import { pilares } from "@/data/conteudo";
import Reveal from "@/components/Reveal";

export default function Agencia() {
  return (
    <section id="agencia" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <Eyebrow>Agência</Eyebrow>
          <Titulo>Não somos fornecedor. Somos extensão estratégica do seu time.</Titulo>
          <p className="mt-6 max-w-2xl text-muted leading-relaxed">
            A Vicenza entra no briefing e só sai depois da desmontagem, com estratégia, criação,
            produção e operação sob uma liderança só.
          </p>
        </Reveal>

        <ul className="mt-16 grid md:grid-cols-3 gap-6">
          {pilares.map((p, i) => (
            <Reveal as="li" key={p.titulo} delay={i * 90} className="rounded-3xl bg-sand p-8">
              <span className="font-extrabold text-brand-deep">0{i + 1}</span>
              <h3 className="mt-4 text-xl font-bold text-ink leading-snug">{p.titulo}</h3>
              <p className="mt-3 text-muted leading-relaxed">{p.texto}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}