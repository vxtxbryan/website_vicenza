export const WHATSAPP = "55 (11) 96287-2424"; 
export const HERO_VIDEO = ""; // quando tiver o vídeo: "/videos/hero.mp4"
export const EMAIL = "brunamesquita@vicenzaeventos.com";
export const INSTAGRAM_URL = "https://www.instagram.com/vicenza.eventos/";
export const INSTAGRAM_USER = "@vicenza.eventos";
export const ENDERECO = "Avenida Paulista 1399, São Paulo - SP";

export function whatsappLink(
  msg = "Olá! Vim pelo site da Vicenza Eventos e quero conversar sobre um projeto."
) {
  return `https://wa.me/${WHATSAPP.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(msg)}`;
}

export const menu = [
  { href: "#agencia", label: "Agência" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#cases", label: "Cases" },
  { href: "#processo", label: "Como trabalhamos" },
  { href: "#brasil", label: "Todo o Brasil", soMobile: true },
  { href: "#faq", label: "Dúvidas" },
];