import { ImageResponse } from "next/og";

export const alt = "Studio 56 BCN — Cerámica, dibujo y comunidad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#f05d3a", color: "#102f2d", padding: 54, position: "relative", fontFamily: "Arial, sans-serif" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "68%" }}>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 800, letterSpacing: 3 }}>STUDIO 56 · SANTS · BCN</div>
        <div style={{ display: "flex", flexDirection: "column", fontWeight: 900, fontSize: 104, lineHeight: .86 }}>
          <span>UN ESPACIO</span><span>PARA CREAR.</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>CERÁMICA · DIBUJO · COWORKING · EXPOSICIONES</div>
      </div>
      <div style={{ display: "flex", position: "absolute", right: 40, top: -55, fontSize: 400, lineHeight: 1, color: "#dce97a", fontWeight: 900 }}>56</div>
    </div>,
    size,
  );
}
