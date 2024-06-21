/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
<<<<<<< HEAD
import { Owner } from "../data/ownerData";
export const runtime = "edge";
export const alt = Owner.company;
export const contentType = "image/png";

export default async function OG() {
  // console.log("Og Url", import.meta.url);
=======

export const runtime = "edge";
export const alt = "Precedent - Building blocks for your Next.js project";
export const contentType = "image/png";

export default async function OG() {
>>>>>>> upstream/main
  const sfPro = await fetch(
    new URL("./fonts/SF-Pro-Display-Medium.otf", import.meta.url),
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          backgroundImage:
            "linear-gradient(to bottom right, #E0E7FF 25%, #ffffff 50%, #CFFAFE 75%)",
        }}
      >
        <img
<<<<<<< HEAD
          src={`${process.env.HOST}/images/monster_5.jpg`}
          alt="CyberOni Logo"
          className="mb-4 h-20 w-20 opacity-95"
        />
=======
          src={`https://${process.env.VERCEL_URL || "precedent.dev"}/logo.png`}
          alt="Precedent Logo"
          tw="w-20 h-20 mb-4 opacity-95"
        />
        <h1
          style={{
            fontSize: "100px",
            fontFamily: "SF Pro",
            background:
              "linear-gradient(to bottom right, #000000 21.66%, #78716c 86.47%)",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "5rem",
            letterSpacing: "-0.02em",
          }}
        >
          Precedent
        </h1>
>>>>>>> upstream/main
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "SF Pro",
          data: sfPro,
        },
      ],
    },
  );
}
