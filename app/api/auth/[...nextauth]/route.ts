import NextAuth from "next-auth";
<<<<<<< HEAD

import { authOptions } from "@/lib/nextAuthAdapter";
=======
import { authOptions } from "./options";
>>>>>>> upstream/main

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
