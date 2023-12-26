import NextAuth, { NextAuthOptions, RequestInternal } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import { authorizeWithPassword } from "@/crud/user";
import prisma from "@/lib/prisma";
import { authOptions } from "@/lib/nextAuthAdapter";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
