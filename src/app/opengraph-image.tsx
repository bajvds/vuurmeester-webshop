import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "De Vuurmeester - Premium Haardhout";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1c1917 0%, #292524 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Fire icon */}
        <div
          style={{
            fontSize: 120,
            marginBottom: 20,
          }}
        >
          🔥
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 72,
            fontWeight: "bold",
            color: "#ffffff",
            marginBottom: 16,
          }}
        >
          De Vuurmeester
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: "#f97316",
            marginBottom: 40,
          }}
        >
          Premium Haardhout - Goedkoopste van Nederland
        </div>

        {/* USPs */}
        <div
          style={{
            display: "flex",
            gap: 40,
            color: "#a8a29e",
            fontSize: 24,
          }}
        >
          <span>✓ Heel Nederland</span>
          <span>✓ Persoonlijk Contact</span>
          <span>✓ Scherpe Prijzen</span>
        </div>

        {/* Website */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: "#78716c",
            fontSize: 20,
          }}
        >
          vuurmeester.shop
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
