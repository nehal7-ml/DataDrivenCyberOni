<<<<<<< HEAD
=======
import { authOptions } from "@/app/api/auth/[...nextauth]/options";
>>>>>>> upstream/main
import Navbar from "./navbar";
import { getServerSession } from "next-auth/next";

export default async function Nav() {
<<<<<<< HEAD
  // return <Navbar session={session} />;
  return <></>
=======
  const session = await getServerSession(authOptions);
  return <Navbar session={session} />;
>>>>>>> upstream/main
}
