"use client";

import { useActionState } from "react";
import { Eyebrow, Titulo, BotaoZap } from "@/components/ui";
import Reveal from "@/components/Reveal";
import { IconeWhatsapp, IconeEmail, IconeInstagram, IconeLocal } from "@/components/Icones";
import { solucoes } from "@/data/conteudo";
import { enviarContato, type EstadoContato } from "@/app/actions";
import {
  EMAIL,
  INSTAGRAM_URL,
  INSTAGRAM_USER,
  ENDERECO,
  WHATSAPP,
  whatsappLink,
} from "@/data/site";

const campo =
  "w-full rounded-xl bg-white/5 border border-white/20 px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:border-brand";

const iconeBox =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/5 text-brand";
const linkContato = "hover:text-brand transition-colors break-all";

export default function Contato() {
  const [estado, enviar, enviando] = useActionState<EstadoContato, FormData>(enviarContato, {
    status: "idle",
  });

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

          <ul className="mt-12 max-w-lg divide-y divide-white/15 border-y border-white/15 text-sm font-normal text-white md:text-base">
            <li className="flex items-center gap-4 py-4">
              <span className={iconeBox}>
                <IconeWhatsapp />
              </span>
              <span className="sr-only">Telefone e WhatsApp:</span>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={linkContato}>
                +{WHATSAPP}
              </a>
            </li>
            <li className="flex items-center gap-4 py-4">
              <span className={iconeBox}>
                <IconeEmail />
              </span>
              <span className="sr-only">E-mail:</span>
              <a href={`mailto:${EMAIL}`} className={linkContato}>
                {EMAIL}
              </a>
            </li>
            <li className="flex items-center gap-4 py-4">
              <span className={iconeBox}>
                <IconeInstagram />
              </span>
              <span className="sr-only">Instagram:</span>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className={linkContato}>
                {INSTAGRAM_USER}
              </a>
            </li>
            <li className="flex items-center gap-4 py-4">
              <span className={iconeBox}>
                <IconeLocal />
              </span>
              <span className="sr-only">Onde estamos:</span>
              <span>{ENDERECO}</span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={120} className="rounded-3xl bg-white/5 border border-white/10 p-8">
          <h3 className="text-2xl font-extrabold">Enviar contato</h3>
          <p className="mt-2 text-sm text-white/60">
            Conte o que você precisa. A mensagem chega direto em {EMAIL}.
          </p>

          {estado.status === "ok" ? (
            <p role="status" className="mt-8 rounded-xl bg-brand/15 border border-brand/40 p-5 text-brand">
              Mensagem enviada! A gente responde em breve no e-mail que você informou.
            </p>
          ) : (
            <form action={enviar} className="mt-8 space-y-4">
              {/* campo-isca anti-robô: invisível para pessoas */}
              <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
                <label>
                  Não preencha este campo
                  <input type="text" name="site" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <input className={campo} name="nome" placeholder="Nome completo" aria-label="Nome completo" autoComplete="name" maxLength={120} defaultValue={estado.valores?.nome} required />
              <input className={campo} name="email" type="email" placeholder="E-mail" aria-label="E-mail" autoComplete="email" maxLength={160} defaultValue={estado.valores?.email} required />
              <input className={campo} name="assunto" placeholder="Assunto" aria-label="Assunto" maxLength={160} defaultValue={estado.valores?.assunto} />
              <textarea className={campo} name="mensagem" rows={5} placeholder="Mensagem" aria-label="Mensagem" maxLength={4000} defaultValue={estado.valores?.mensagem} required />
              {estado.status === "erro" && (
                <p role="alert" className="rounded-xl border border-red-300/40 bg-red-500/10 p-4 text-sm text-red-200">
                  {estado.mensagem}
                </p>
              )}
              <button
                type="submit"
                disabled={enviando}
                className="px-8 py-4 rounded-full bg-brand text-ink-deep font-bold hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {enviando ? "Enviando..." : "Enviar contato"}
              </button>
              <p className="text-xs text-white/50">Usamos seus dados apenas para responder ao seu contato.</p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}