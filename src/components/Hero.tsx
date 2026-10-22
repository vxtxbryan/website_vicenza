import { BotaoZap } from "@/components/ui";

export default function Hero() {
  return (
    <section id="topo" className="bg-ink text-white border-b border-white/20">
      <div className="mx-auto max-w-7xl min-h-svh flex flex-col justify-end px-6 pt-40 pb-20">
        <h1
          className="fade-up text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight max-w-5xl"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          SOMOS UMA AGÊNCIA DE MARKETING E PRODUÇÃO DE EVENTOS.
        </h1>
        <p
          className="fade-up mt-8 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed"
          style={{ "--delay": "300ms" } as React.CSSProperties}
        >
          Pensamos a estratégia, criamos a experiência e entregamos o evento inteiro. Na região do Sul e Sudeste.
        </p>
        <div
          className="fade-up mt-10 flex flex-wrap gap-4"
          style={{ "--delay": "500ms" } as React.CSSProperties}
        >
          <BotaoZap />
          <a
            href="#cases"
            className="px-8 py-4 rounded-full border border-white/40 hover:bg-white/10 transition-colors font-bold"
          >
            Ver cases
          </a>
        </div>
      </div>
    </section>
  );
}