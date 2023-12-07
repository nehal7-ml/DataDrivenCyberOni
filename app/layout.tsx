import ContactButton from "@/components/ConactButton";
import Notification from "@/components/Notification";
import Footer from "@/components/layout/footer";
import NavBar from "@/components/layout/navbar";
import { Owner } from "@/data/ownerData";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { Suspense } from "react";
import Head from "next/head";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { abel, inter, nunito, sfPro } from "./fonts";
import "./globals.css";
import { Facebook } from 'lucide-react';

export const metadata: Metadata = {
  title: Owner.seo.metaTitle,
  description: Owner.seo.metaDescription,
  keywords: Owner.seo.keywords,
  metadataBase: new URL(process.env.NEXTAUTH_URL as string),
  twitter: {
    card: "summary_large_image",
    title: Owner.seo.metaTitle,
    description: Owner.seo.metaDescription,
    creator: "@softwear4u", // Make sure to include the correct Twitter handle here
    images: ["/monster_5.jpg"],
  },
  openGraph: {
    title: Owner.seo.metaTitle,
    description: Owner.seo.metaDescription,
    url: Owner.url,
    siteName: "CyberShopTech | CyberOni",
    locale: "en_US",
    type: "website",
  },
  themeColor: "#0074e4",
  other: {
    "fb:app_id": process.env.FACEBOOK_ID as string
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale:1
  }
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const cookieStore = cookies();
  const theme = cookieStore.get("theme");

  return (
    <html lang="en">
      <Head>
        <link rel="canonical" href="https://www.cybershoptech.com" />
      </Head>
      <body
        className={`${cx(
          sfPro.variable,
          inter.variable,
          abel.variable,
          nunito.variable,
        )} 
                        ${theme?.value} antialiased overflow-x-hidden`}
      >
        <div className="fixed h-full w-screen dark:bg-gray-900 dark:text-white " />
        <Suspense fallback="...">
          <NavBar
            session={session}
            darkMode={theme?.value === "dark" ? true : false}
          />
        </Suspense>
        <main className="relative min-h-screen w-full  pt-24 dark:bg-gray-900 dark:text-white overflow-x-hidden">
          {children}
        </main>
        {
          <Suspense>
            <Notification />
          </Suspense>
        }
        <ContactButton />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
