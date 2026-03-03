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
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0b1220",
        color: "#f8fafc",
        fontFamily: "Inter, Arial, sans-serif",
        padding: "64px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "inline-flex",
            width: "fit-content",
            padding: "8px 16px",
            fontSize: 24,
            color: "#93c5fd",
            border: "1px solid #1e293b",
          }}
        >
          vernontamba.com
        </div>

        <div
          style={{ display: "flex", flexDirection: "column", marginTop: 20 }}
        >
          <h1
            style={{
              margin: 0,
              fontSize: 92,
              lineHeight: 1.05,
              fontWeight: 700,
            }}
          >
            Vernon Tamba
          </h1>
          <p
            style={{
              margin: "12px 0 0 0",
              fontSize: 40,
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
          height: 2,
          backgroundColor: "#1e293b",
        }}
      />

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 24,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: 30,
            lineHeight: 1.25,
            color: "#cbd5e1",
            maxWidth: "70%",
          }}
        >
          Projects, skills, and experience in one place.
        </p>
        <div
          style={{
            display: "flex",
            fontSize: 24,
            color: "#67e8f9",
          }}
        >
          Visit: vernontamba.com
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
