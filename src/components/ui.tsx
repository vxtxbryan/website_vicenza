import { whatsappLink } from "@/data/site";

export function Eyebrow({ children, escuro = false }: { children: React.ReactNode; escuro?: boolean }) {
  return (
    <p className={`uppercase tracking-[0.3em] text-xs font-bold mb-4 ${escuro ? "text-brand" : "text-brand-deep"}`}>
      {children}
    </p>
  );
}

export function Titulo({ children, escuro = false }: { children: React.ReactNode; escuro?: boolean }) {
  return (
    <h2
      className={`text-4xl md:text-6xl font-extrabold leading-[1.05] tracking-tight max-w-4xl ${
        escuro ? "text-white" : "text-ink"
      }`}
    >
      {children}
    </h2>
  );
}

export function BotaoZap({
  children = "Faça sua cotação no WhatsApp",
  msg,
  variante = "ouro",
}: {
  children?: React.ReactNode;
  msg?: string;
  variante?: "ouro" | "azul";
}) {
  const estilo =
    variante === "ouro"
      ? "bg-brand text-ink-deep hover:bg-white"
      : "bg-ink text-paper hover:bg-ink-deep";
  return (
    <a
      href={whatsappLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block px-8 py-4 rounded-full font-bold transition-colors ${estilo}`}
    >
      {children}
    </a>
  );
}

export function Foto({ src, className = "", children }: { src: string; className?: string; children?: React.ReactNode }) {
  return (
    <div
      className={`bg-cover bg-center bg-ink/20 ${className}`}
      style={{ backgroundImage: `url('${src}?w=1400&q=70')` }}
    >
      {children}
    </div>
  );
}