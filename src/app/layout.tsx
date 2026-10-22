import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import ZapFlutuante from "@/components/ZapFlutuante";
import {
  SITE_URL,
  SITE_NOME,
  INDEXAVEL,
  GOOGLE_VERIFICATION,
  TITULO_SEO,
  DESCRICAO_SEO,
} from "@/data/site";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

const tituloCompleto = `${TITULO_SEO} | ${SITE_NOME}`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: tituloCompleto, template: `%s | ${SITE_NOME}` },
  description: DESCRICAO_SEO,
  applicationName: SITE_NOME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: SITE_NOME,
    title: tituloCompleto,
    description: DESCRICAO_SEO,
  },
  twitter: {
    card: "summary_large_image",
    title: tituloCompleto,
    description: DESCRICAO_SEO,
  },
  robots: INDEXAVEL
    ? {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
      }
    : { index: false, follow: false },
  verification: GOOGLE_VERIFICATION ? { google: GOOGLE_VERIFICATION } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#0c3a5b",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="font-sans antialiased">
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-70 focus:rounded-full focus:bg-brand focus:px-5 focus:py-3 focus:font-bold focus:text-ink-deep"
        >
          Pular para o conteúdo
        </a>
        <ScrollProgress />
        <Navbar />
        {children}
        <ZapFlutuante />
      </body>
    </html>
  );
}
