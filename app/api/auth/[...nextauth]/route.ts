import NextAuth, { NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import GoogleProvider from "next-auth/providers/google";
import EmailProvider from "next-auth/providers/email";
import { sendMagicLink } from "@/lib/externalRequests/sendgrid";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

    })

  ],
  callbacks: {
    signIn: signInCallback
  }
};


async function signInCallback({ user, account, profile, email, credentials }: Record<string, any>) {
  if (account.provider === "google") {
    return profile.email_verified && profile.email.endsWith("@example.com")
  }
  return true

}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
