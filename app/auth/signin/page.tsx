import {
  getProviders,
  signIn,
  getCsrfToken,
  useSession,
} from "next-auth/react";
import NextAuth, { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/nextAuthAdapter";
import ClientInput from "@/components/layout/ClientInput";
import { ArrowRight, ArrowRightCircle } from "lucide-react";
import Image from "next/image";
import { ReadonlyURLSearchParams, redirect } from "next/navigation";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import Link from "next/link";
import LoginForm from "@/components/LoginForm";
import { DisplayUserDTO } from "@/crud/DTOs";

export const dynamic = "force-dynamic";

export default async function SignIn({
  searchParams,
}: {
  searchParams: { callbackUrl: string };
}) {
  const session = await getServerSession(authOptions);

  // console.log(search);
  // If the user is already logged in, redirect.
  // Note: Make sure not to redirect to the same page
  // To avoid an infinite loop!

  if (session) {
    const user = session.user as unknown as DisplayUserDTO;
    if (user) redirect(searchParams.callbackUrl || "/");
  }

  return (
    <div className="relative flex flex-col items-center gap-2 py-5 lg:flex-row lg:justify-between lg:gap-5 ">
      <Image
        src={"/images/login-bg.png"}
        width={700}
        height={900}
        alt="login_bg"
        className="absolute right-10 z-0 h-full w-fit object-contain blur-sm"
      />
      <div className="z-10 flex flex-col items-center justify-center p-5">
        <h1 className="text-center text-4xl lg:text-[96px] ">Welcome Back!</h1>
      </div>
      <div className="z-10 lg:w-1/3">
        <LoginForm />
      </div>
    </div>
  );
}
