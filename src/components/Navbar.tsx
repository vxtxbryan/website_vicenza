"use client";

import { useState } from "react";
import Image from "next/image";
import { menu, whatsappLink } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-ink text-white border-b border-white/10">
      <nav aria-label="Principal" className="mx-auto max-w-7xl flex items-center justify-between px-6 py-3">
        <a href="#topo" className="flex items-center gap-3">
          <Image src="/logo.png" alt="" width={42} height={42} priority />
          <span className="text-lg font-extrabold tracking-tight uppercase">
            Vicenza <span className="text-brand">Eventos</span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {menu
            .filter((l) => !l.soMobile)
            .map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-white/70 hover:text-white transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          <li>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full bg-brand hover:bg-white transition-colors font-bold text-ink-deep"
            >
              Faça sua cotação
            </a>
          </li>
        </ul>

        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="menu-mobile"
          className="lg:hidden text-sm font-bold uppercase tracking-widest"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </nav>

      {open && (
        <ul id="menu-mobile" className="lg:hidden bg-ink-deep px-6 pb-6 flex flex-col gap-2">
          {menu.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block py-2 text-lg font-semibold">
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full bg-brand text-ink-deep font-bold"
            >
              Faça sua cotação no WhatsApp
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}