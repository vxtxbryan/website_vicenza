import Hero from "@/components/Hero";
import Numeros from "@/components/Numeros";
import Agencia from "@/components/Agencia";
import Solucoes from "@/components/Solucoes";
import PorQueNos from "@/components/PorQueNos";
import Cases from "@/components/Cases";
import CtaCotacao from "@/components/CtaCotacao";
import Processo from "@/components/Processo";
import TudoEmCasa from "@/components/TudoEmCasa";
import Brasil from "@/components/Brasil";
import Marcas from "@/components/Marcas";
import Faq from "@/components/Faq";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";

export default function Home() {
  return (
    <main id="conteudo">
      <JsonLd />
      <Hero />
      <Numeros />
      <Agencia />
      <Solucoes />
      <PorQueNos />
      <Cases />
      <CtaCotacao
        titulo="Quer um projeto como esses para a sua marca?"
        texto="Conte o tipo de evento, a data e a cidade. A gente responde pelo WhatsApp."
      />
      <Processo />
      <TudoEmCasa />
      <Brasil />
      <CtaCotacao
        titulo="Seu evento em qualquer cidade do Sul e do Sudeste."
        texto="Com o mesmo time do briefing à desmontagem."
      />
      <Marcas />
      <Faq />
      <Contato />
      <Footer />
    </main>
  );
}