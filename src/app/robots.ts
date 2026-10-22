import type { MetadataRoute } from "next";
import { SITE_URL, INDEXAVEL } from "@/data/site";

// Antes do lançamento o bloqueio é feito pela meta tag noindex (layout.tsx).
// O robots.txt fica aberto de propósito: se ele bloqueasse o rastreamento,
// o Google nem chegaria a ler o noindex.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(INDEXAVEL ? { sitemap: `${SITE_URL}/sitemap.xml` } : {}),
  };
}
