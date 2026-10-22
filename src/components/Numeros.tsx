import CountUp from "@/components/CountUp";
import Reveal from "@/components/Reveal";

// Com "valor": o número conta de 0 até ele. Sem "valor": mostra o texto de "destaque".
const itens = [
  { prefixo: "+", valor: 10, sufixo: " anos", texto: "criando experiências que permanecem" },
  { destaque: "Região Sul e Sudeste", texto: "projetos em qualquer estado dessas regiões" },
  { prefixo: "+", valor: 200, texto: "eventos realizados" },
  { valor: 360, sufixo: "°", texto: "da ideia à execução" },
  { destaque: "1 equipe", texto: "do briefing à desmontagem" },
];

export default function Numeros() {
  return (
    <section className="bg-ink-deep text-white">
      <ul className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        {itens.map((i, idx) => (
          <Reveal as="li" delay={idx * 100} key={i.texto} className="border-l-2 border-brand pl-4">
            <p className="text-xl md:text-2xl font-extrabold">
              {i.valor !== undefined ? (
                <CountUp to={i.valor} prefix={i.prefixo} suffix={i.sufixo} />
              ) : (
                i.destaque
              )}
            </p>
            <p className="mt-1 text-sm text-white/70">{i.texto}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}