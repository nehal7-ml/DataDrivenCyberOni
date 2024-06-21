import localFont from "next/font/local";
<<<<<<< HEAD
import { Abel, Inter, Nunito } from "next/font/google";
=======
import { Inter } from "next/font/google";
>>>>>>> upstream/main

export const sfPro = localFont({
  src: "./SF-Pro-Display-Medium.otf",
  variable: "--font-sf",
});
<<<<<<< HEAD
export const inter = localFont({
  src: [
    {
      path: "./Inter/Inter-VariableFont_slnt,wght.ttf",
    }
  ],
  variable: "--font-inter",
});
export const abel = localFont({
  src: [{
    path: "./Abel/Abel-Regular.ttf",
  }],
  variable: "--font-abel",
});

export const nunito = localFont({
  src: [
    {
      path: "./Nunito/Nunito-VariableFont_wght.ttf",
    }

  ],
  variable: "--font-nunito",
});
export const kyiv = localFont({
  src: [
    {
      path: "./KyivTypeSans-VarGX.ttf",
    }

  ],
  variable: "--font-kyiv",
});



=======

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
>>>>>>> upstream/main
