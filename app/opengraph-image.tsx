import { ImageResponse } from "next/og";

export const alt = "Animal Corporation - Web UI & Experience Design";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        padding: "80px",
        background:
          "linear-gradient(135deg, #f9f6f2 0%, #ffffff 55%, #efe6d5 100%)",
        color: "#151411",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#b3913b",
            marginRight: 18,
          }}
        />

        <div
          style={{
            fontSize: 28,
            fontWeight: 700,
            letterSpacing: 4,
            color: "#9a7a2a",
          }}
        >
          DESIGN × TECHNOLOGY
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 28,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 112,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1.08,
          }}
        >
          Animal
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 112,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1.08,
          }}
        >
          Corporation
        </div>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 30,
          fontSize: 38,
          fontWeight: 500,
          color: "#78633e",
        }}
      >
        Web UI & Experience Design
      </div>

      <div
        style={{
          display: "flex",
          width: 112,
          height: 4,
          marginTop: 42,
          borderRadius: 999,
          background: "#b3913b",
        }}
      />
    </div>,
    size,
  );
}
