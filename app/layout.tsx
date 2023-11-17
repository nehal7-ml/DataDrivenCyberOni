import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter, abel, nunito } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import NavBar from "@/components/layout/navbar";
import Notification from "@/components/Notification";
import { Owner } from "@/data/ownerData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Apartment Guru",
  description: Owner.about,
  metadataBase: new URL(process.env.NEXTAUTH_URL as string),
  twitter: {
    card: "summary_large_image",
    title: "Cybertech Shop",
    description: Owner.about,
    creator: "@Cyberoni", // Make sure to include the correct Twitter handle here
    images: ['/logo.png']
  },
  openGraph: {
    title: "Cybertech Shop",
    description: Owner.about,
    url: Owner.company,
    siteName: "Cybertech Shop",
    locale: "en_US",
    type: "website",
  },
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className={`${cx(sfPro.variable, inter.variable, abel.variable, nunito.variable)} `}>
        <div className="fixed h-full w-screen dark:bg-black dark:text-white" />
        <Suspense fallback="...">
          <NavBar session={session} />
        </Suspense>
        <main className="relative min-h-screen w-full dark:bg-black dark:text-white pt-24 px-5 lg:px-20">
          {children}
        </main>
        {
          <Suspense>
            <Notification />
          </Suspense>
        }
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
