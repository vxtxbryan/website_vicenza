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

// ---------- SEO ----------
export const SITE_URL = "https://vicenzaeventos.com"; // confirme o domínio final, sem barra no fim
export const SITE_NOME = "Vicenza Eventos";
export const INDEXAVEL = true; // mude para true no dia do lançamento
export const GOOGLE_VERIFICATION = ""; // código do Search Console (opcional)
export const TITULO_SEO = "Agência de eventos e live marketing em SP";
export const DESCRICAO_SEO =
  "Agência de eventos e live marketing em São Paulo: ativações em festivais, convenções, lançamentos de produto e eventos esportivos no Sul e no Sudeste.";
export const TELEFONE_E164 = `+${WHATSAPP.replace(/[^0-9]/g, "")}`;
export const ESTADOS_ATENDIDOS = [
  "São Paulo",
  "Rio de Janeiro",
  "Minas Gerais",
  "Espírito Santo",
  "Paraná",
  "Santa Catarina",
  "Rio Grande do Sul",
];
export const ENDERECO_SCHEMA = {
  rua: "Avenida Paulista, 1399",
  cidade: "São Paulo",
  uf: "SP",
  pais: "BR",
};

export const menu = [
  { href: "#agencia", label: "Agência" },
  { href: "#solucoes", label: "Soluções" },
  { href: "#cases", label: "Cases" },
  { href: "#processo", label: "Como trabalhamos" },
  { href: "#brasil", label: "Onde atuamos", soMobile: true },
  { href: "#faq", label: "Dúvidas" },
];