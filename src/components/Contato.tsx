"use client";

import { useState } from "react";
import { Eyebrow, Titulo, BotaoZap } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { solucoes } from "@/data/conteudo";
import {
  EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_USER,
  ENDERECO,
  WHATSAPP,
  TELEFONE_E164,
  whatsappLink,
} from "@/data/site";

const campo =
  "w-full rounded-xl bg-white/5 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand";

export default function Contato() {
  const [enviado, setEnviado] = useState(false);

  return (
    <section id="contato" className="py-24 md:py-32 bg-ink-deep text-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-16">
        <Reveal>
          <Eyebrow escuro>Contato</Eyebrow>
          <Titulo escuro>CONTE O SEU PRÓXIMO PROJETO</Titulo>
          <p className="mt-6 text-white/70 leading-relaxed max-w-lg">
            Diga o que o público precisa viver, a data e a cidade. A gente cuida do resto.
          </p>
          <div className="mt-8">
            <BotaoZap />
          </div>

          <p className="mt-12 text-sm text-white/60">Ou comece pelo tipo de projeto:</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {solucoes.map((s) => (
              <li key={s.titulo}>
                <a
                  href={whatsappLink(`Olá! Vim pelo site da Vicenza Eventos e quero conversar sobre: ${s.titulo}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded-full border border-white/25 text-sm hover:border-brand hover:text-brand transition-colors"
                >
                  {s.titulo}
                </a>
              </li>
            ))}
          </ul>

          <ul className="mt-12 space-y-3 text-sm text-white/80">
            <li>
              Telefone e WhatsApp:{" "}
              <a href={`tel:${TELEFONE_E164}`} className="underline">
                +{WHATSAPP}
              </a>
            </li>
            <li>
              E-mail:{" "}
              <a href={`mailto:${EMAIL}`} className="underline">
                {EMAIL}
              </a>
            </li>
            <li>
              Instagram:{" "}
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="underline">
                {INSTAGRAM_USER}
              </a>
            </li>
            <li>Onde estamos: {ENDERECO}</li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="rounded-3xl bg-white/5 border border-white/10 p-8">
          <h3 className="text-2xl font-extrabold">Enviar contato</h3>
          <p className="mt-2 text-sm text-white/60">
            Conte o que você precisa. A mensagem chega direto em {EMAIL}.
          </p>

          {enviado ? (
            <p className="mt-8 rounded-xl bg-brand/15 border border-brand/40 p-5 text-brand">
              Mensagem registrada (protótipo). Na versão final, ela será enviada por e-mail.
            </p>
          ) : (
            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setEnviado(true);
              }}
            >
              <input className={campo} name="nome" placeholder="Nome completo" aria-label="Nome completo" autoComplete="name" required />
              <input className={campo} name="email" type="email" placeholder="E-mail" aria-label="E-mail" autoComplete="email" required />
              <input className={campo} name="assunto" placeholder="Assunto" aria-label="Assunto" />
              <textarea className={campo} name="mensagem" rows={5} placeholder="Mensagem" aria-label="Mensagem" required />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-brand text-ink-deep font-bold hover:bg-white transition-colors"
              >
                Enviar contato
              </button>
              <p className="text-xs text-white/50">Usamos seus dados apenas para responder ao seu contato.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}