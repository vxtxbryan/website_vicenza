import { solucoes } from "@/data/conteudo";
import {
  SITE_URL,
  SITE_NOME,
  EMAIL,
  TELEFONE_E164,
  INSTAGRAM_URL,
  ENDERECO_SCHEMA,
  DESCRICAO_SEO,
} from "@/data/site";

export default function JsonLd() {
  const dados = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NOME,
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE_URL}/#empresa` },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#empresa`,
        name: SITE_NOME,
        url: SITE_URL,
        logo: `${SITE_URL}/logo.png`,
        description: DESCRICAO_SEO,
        email: EMAIL,
        telephone: TELEFONE_E164,
        address: {
          "@type": "PostalAddress",
          streetAddress: ENDERECO_SCHEMA.rua,
          addressLocality: ENDERECO_SCHEMA.cidade,
          addressRegion: ENDERECO_SCHEMA.uf,
          addressCountry: ENDERECO_SCHEMA.pais,
        },
        areaServed: { "@type": "Country", name: "Brasil" },
        sameAs: [INSTAGRAM_URL],
        makesOffer: solucoes.map((s) => ({
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: s.titulo, description: s.descricao },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, "\\u003c") }}
    />
  );
}
