import { whatsappLink } from "@/data/site";

export default function ZapFlutuante() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-brand px-5 py-3.5 text-sm font-bold text-ink-deep shadow-xl hover:bg-white transition-colors"
    >
      <span className="h-2.5 w-2.5 rounded-full bg-ink-deep animate-pulse" />
      WhatsApp
    </a>
  );
}