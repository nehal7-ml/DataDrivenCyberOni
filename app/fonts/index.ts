import localFont from "next/font/local";
import { Abel, Inter } from "next/font/google";

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const abel = Abel({
  variable: '--font-abel',
  subsets: ['latin'],
  style: ["normal"],
  weight: ["400"]
})