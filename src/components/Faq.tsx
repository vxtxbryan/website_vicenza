import { Eyebrow, Titulo } from "@/components/ui";
import { faq } from "@/data/conteudo";
import Reveal from "@/components/Reveal";

export default function Faq() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-sand">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <Eyebrow>Dúvidas</Eyebrow>
          <Titulo>O que costumam perguntar antes do primeiro briefing.</Titulo>
        </Reveal>
        <div className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
          {faq.map((f, i) => (
            <Reveal as="details" key={f.p} delay={Math.min(i, 5) * 50} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-bold text-ink">
                {f.p}
                <span className="text-2xl text-brand-deep transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-muted leading-relaxed">{f.r}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}