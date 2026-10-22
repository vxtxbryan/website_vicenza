import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Vicenza Eventos: agência de eventos e live marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const arquivo = await readFile(join(process.cwd(), "public", "logo.png"));
  const mime = arquivo[0] === 0xff && arquivo[1] === 0xd8 ? "image/jpeg" : "image/png";
  const logo = `data:${mime};base64,${arquivo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 90,
          background: "#082b45",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo} width={96} height={96} alt="" />
          <div style={{ display: "flex", marginLeft: 28, fontSize: 40, fontWeight: 700, letterSpacing: 2 }}>
            <span>VICENZA&nbsp;</span>
            <span style={{ color: "#b9a15c" }}>EVENTOS</span>
          </div>
        </div>
        <div style={{ display: "flex", marginTop: 56, fontSize: 68, fontWeight: 800, lineHeight: 1.1, maxWidth: 980 }}>
          Agência de eventos e live marketing
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 32, color: "#b9a15c" }}>
          Do briefing ao último detalhe. No Sul e no Sudeste.
        </div>
      </div>
    ),
    { ...size }
  );
}
