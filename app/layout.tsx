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

export const metadata = {
  title: "Precedent - Building blocks for your Next.js project",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://precedent.dev"),
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
        <main className="relative min-h-screen w-full dark:bg-black dark:text-white pt-24 px-10">
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
