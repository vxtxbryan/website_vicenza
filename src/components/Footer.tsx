import Image from "next/image";
import { menu, ENDERECO, INSTAGRAM_URL, whatsappLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink-deep text-white border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-14 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="Vicenza Eventos" width={42} height={42} />
            <span className="text-lg font-extrabold uppercase tracking-tight">
              Vicenza <span className="text-brand">Eventos</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-white/60 max-w-xs">{ENDERECO}</p>
        </div>

        <ul className="grid grid-cols-2 gap-3 text-sm text-white/80 content-start">
          {menu.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-brand transition-colors">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
              Instagram
            </a>
          </li>
        </ul>

        <div className="md:text-right">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-full bg-brand text-ink-deep font-bold hover:bg-white transition-colors"
          >
            Faça sua cotação no WhatsApp
          </a>
        </div>
      </div>
      <p className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © 2026 Vicenza Eventos. Agência de eventos e live marketing.
      </p>
    </footer>
  );
}