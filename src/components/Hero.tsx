import { BotaoZap, Foto } from "@/components/ui";
import { fotos } from "@/data/conteudo";
import { HERO_VIDEO } from "@/data/site";

export default function Hero() {
  return (
    <section id="topo" className="relative text-white">
      {HERO_VIDEO ? (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={fotos.convencao}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
      ) : (
        <Foto src={fotos.convencao} className="absolute inset-0" priority sizes="100vw" />
      )}
      <div className="absolute inset-0 bg-linear-to-t from-ink-deep via-ink-deep/75 to-ink-deep/30" />

      <div className="relative mx-auto max-w-7xl min-h-svh flex flex-col justify-end px-6 pb-20 pt-40">
        <h1
          className="fade-up text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight max-w-5xl"
          style={{ "--delay": "100ms" } as React.CSSProperties}
        >
          Somos uma agência de live marketing do briefing ao último detalhe.
        </h1>
        <p
          className="fade-up mt-8 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed"
          style={{ "--delay": "300ms" } as React.CSSProperties}
        >
          Pensamos a estratégia, criamos a experiência e entregamos o evento inteiro. Em qualquer
          lugar do Brasil.
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