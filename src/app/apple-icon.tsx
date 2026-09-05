import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#F4E6CF",
        }}
      >
        <div
          style={{
            width: 144,
            height: 144,
            borderRadius: "50%",
            background: "#C1502E",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFF8EC",
            fontSize: 92,
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          L
        </div>
      </div>
    ),
    { ...size }
  );
}
