import { BotaoZap } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function CtaCotacao({ titulo, texto }: { titulo: string; texto: string }) {
  return (
    <section className="bg-brand text-ink-deep">
      <Reveal className="mx-auto max-w-7xl px-6 py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] font-bold mb-3">Faça sua cotação agora</p>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight max-w-2xl">{titulo}</h2>
          <p className="mt-3 max-w-xl">{texto}</p>
        </div>
        <BotaoZap variante="azul" />
      </Reveal>
    </section>
  );
}