import NextAuth, { NextAuthOptions, RequestInternal } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { authorizeWithPassword } from "@/crud/user";
import prisma from "@/lib/prisma";
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

    }),
    FacebookProvider({
      clientId:  process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string
    }),
    Credentials ({
      name: "credentials",
            type: 'credentials',
            credentials: {
                username: { label: "Email", type: "text", placeholder: "jsmith@email.com" },
                password: { label: "Password", type: "password" }
            },
            authorize,
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
async function authorize(credentials: Record<"password" | "username", string> | undefined, req: Pick<RequestInternal, "query" | "body" | "headers" | "method">) {
  try {
      const user = await authorizeWithPassword({ email: credentials?.username!, password: credentials?.password! }, prisma)
      if (user) {
          return user
      }
      else return null
      // console.log(user);
  } catch (error) {
      console.log(error);
      return null

  }
  // If no error and we have user data, return it

}
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
