import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";


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
