import { ImageResponse } from "next/og";

export const alt = "Apexnet | Software Development & Digital Infrastructure";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 96,
          background: "#FBF9FF",
          color: "#252130",
        }}
      >
        <div style={{ fontSize: 96, fontWeight: 800, letterSpacing: 6, color: "#6842B8" }}>APEXNET</div>
        <div style={{ fontSize: 40, marginTop: 16 }}>Software Development &amp; Digital Infrastructure</div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#6C6678" }}>Powered by Hinata Concepts</div>
      </div>
    ),
    size,
  );
}
