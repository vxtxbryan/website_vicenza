"use server";

import { EMAIL, EMAIL_REMETENTE_SITE, SITE_NOME } from "@/data/site";

export type EstadoContato = {
  status: "idle" | "ok" | "erro";
  mensagem?: string;
  valores?: { nome: string; email: string; assunto: string; mensagem: string };
};

const LIMITES = { nome: 120, email: 160, assunto: 160, mensagem: 4000 };
const EMAIL_VALIDO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// remove quebras de linha para impedir injeção de cabeçalhos de e-mail
const linha = (v: FormDataEntryValue | null, max: number) =>
  String(v ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, max);

const escapar = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function enviarContato(
  _anterior: EstadoContato,
  formData: FormData
): Promise<EstadoContato> {
  // campo-isca: pessoas não veem, robôs preenchem. Finge sucesso e não envia.
  if (String(formData.get("site") ?? "").trim() !== "") {
    return { status: "ok" };
  }

  const valores = {
    nome: linha(formData.get("nome"), LIMITES.nome),
    email: linha(formData.get("email"), LIMITES.email),
    assunto: linha(formData.get("assunto"), LIMITES.assunto),
    mensagem: String(formData.get("mensagem") ?? "")
      .replace(/\r\n/g, "\n")
      .trim()
      .slice(0, LIMITES.mensagem),
  };

  if (!valores.nome || !valores.mensagem || !EMAIL_VALIDO.test(valores.email)) {
    return {
      status: "erro",
      mensagem: "Confira nome, e-mail e mensagem e tente de novo.",
      valores,
    };
  }

  const chave = process.env.RESEND_API_KEY;
  const remetente = process.env.CONTATO_REMETENTE || EMAIL_REMETENTE_SITE;
  const destino = process.env.CONTATO_DESTINO || EMAIL;

  if (!chave) {
    console.error("Formulário de contato: falta a variável RESEND_API_KEY.");
    return {
      status: "erro",
      mensagem: "Não foi possível enviar agora. Fale com a gente pelo WhatsApp.",
      valores,
    };
  }

  try {
    const resposta = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${chave}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${SITE_NOME} <${remetente}>`,
        to: [destino],
        reply_to: valores.email,
        subject: `[Site] ${valores.assunto || "Novo contato"} — ${valores.nome}`,
        text: `Nome: ${valores.nome}\nE-mail: ${valores.email}\nAssunto: ${valores.assunto || "-"}\n\n${valores.mensagem}`,
        html: `<p><strong>Nome:</strong> ${escapar(valores.nome)}<br>
<strong>E-mail:</strong> ${escapar(valores.email)}<br>
<strong>Assunto:</strong> ${escapar(valores.assunto || "-")}</p>
<p style="white-space:pre-wrap">${escapar(valores.mensagem)}</p>`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!resposta.ok) {
      console.error("Formulário de contato: Resend recusou o envio", resposta.status, await resposta.text());
      return {
        status: "erro",
        mensagem: "Não foi possível enviar agora. Tente de novo ou fale com a gente pelo WhatsApp.",
        valores,
      };
    }

    return { status: "ok" };
  } catch (e) {
    console.error("Formulário de contato: falha ao chamar o Resend", e);
    return {
      status: "erro",
      mensagem: "Não foi possível enviar agora. Tente de novo ou fale com a gente pelo WhatsApp.",
      valores,
    };
  }
}
