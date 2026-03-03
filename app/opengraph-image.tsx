import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Vernon Tamba frontend developer portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        position: "relative",
        background:
          "radial-gradient(circle at 20% 20%, #1f2937 0%, #09090b 50%, #020617 100%)",
        color: "#f5f5f5",
        fontFamily: "Inter, Arial, sans-serif",
        padding: "56px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          height: 180,
          width: 180,
          borderRadius: "999px",
          border: "1px solid rgba(255,255,255,0.15)",
          background:
            "radial-gradient(circle, rgba(34,211,238,0.24) 0%, rgba(59,130,246,0.15) 40%, rgba(0,0,0,0) 72%)",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            display: "inline-flex",
            width: "fit-content",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: 999,
            padding: "10px 20px",
            fontSize: 22,
            letterSpacing: 0.2,
            color: "#d4d4d8",
          }}
        >
          vernontamba.com
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h1
            style={{
              margin: 0,
              fontSize: 82,
              lineHeight: 1.02,
              fontWeight: 800,
              letterSpacing: -1.2,
            }}
          >
            Vernon Tamba
          </h1>
          <p
            style={{
              margin: 0,
              fontSize: 38,
              lineHeight: 1.2,
              color: "#67e8f9",
              fontWeight: 600,
            }}
          >
            Frontend Developer
          </p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          paddingTop: 24,
          gap: 20,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 30,
            lineHeight: 1.25,
            color: "#e4e4e7",
            maxWidth: "85%",
          }}
        >
          Personal portfolio with projects, skills, and experience.
        </p>
        <div
          style={{
            display: "flex",
            width: 14,
            height: 14,
            borderRadius: "999px",
            backgroundColor: "#22d3ee",
            boxShadow: "0 0 20px rgba(34,211,238,0.75)",
          }}
        />
      </div>
    </div>,
    {
      ...size,
    },
  );
}
