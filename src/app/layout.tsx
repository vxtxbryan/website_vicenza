import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import ZapFlutuante from "@/components/ZapFlutuante";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Vicenza Eventos | Agência de eventos e live marketing",
  description: "Experiências que movem marcas e pessoas. Do briefing à desmontagem.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="font-sans antialiased">
        <ScrollProgress />
        <Navbar />
        {children}
        <ZapFlutuante />
      </body>
    </html>
  );
}