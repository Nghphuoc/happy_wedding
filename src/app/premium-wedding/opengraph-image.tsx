import { ImageResponse } from "next/og";

export const alt = "An and Linh wedding celebration";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        <div
            style={{
                alignItems: "center",
                background: "#fbf9f4",
                color: "#721527",
                display: "flex",
                flexDirection: "column",
                fontFamily: "serif",
                height: "100%",
                justifyContent: "center",
                position: "relative",
                width: "100%",
            }}
        >
            <div
                style={{
                    border: "2px solid #dca54c",
                    inset: 36,
                    position: "absolute",
                }}
            />
            <p
                style={{
                    color: "#9b6b24",
                    fontFamily: "sans-serif",
                    fontSize: 24,
                    letterSpacing: 8,
                    margin: 0,
                    textTransform: "uppercase",
                }}
            >
                Wedding invitation
            </p>
            <h1 style={{ fontSize: 112, margin: "28px 0 18px" }}>
                An &amp; Linh
            </h1>
            <p style={{ fontFamily: "sans-serif", fontSize: 30, margin: 0 }}>
                04 · 10 · 2026
            </p>
        </div>,
        size,
    );
}
