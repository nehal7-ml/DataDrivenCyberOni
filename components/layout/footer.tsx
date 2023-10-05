import Link from "next/link";

export default function Footer() {
  return (
    <div className="relative container mx-auto  z-50 text w-full py-5 text-center  dark:text-white">
      <div className="h-[1px]  bg-gradient-purple"></div>
      <div className="grid gap-3 grid-rows-2 grid-cols-1 lg:grid-rows-1  lg:grid-cols-2 p-4">
        <div className="flex flex-col">
          <div className="font-bold text-lg">Quick Links</div>
          <Link className="hover:underline" href={'/home'}>Home</Link>
          <Link className="hover:underline" href={'/services'}>Services</Link>
          <Link className="hover:underline" href={'/blogs'}>Blogs</Link>
          <Link className="hover:underline" href={'/products'}>Products</Link>

        </div>
        <div className="flex flex-col ">
          <div className="font-bold">Contact Us</div>
          <div>+1 891 989-11-91</div>
          <div>hello@logoipsum.com</div>
          <div>2972 Westheimer Rd. Santa Ana, Illinois 85486 </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-between ">
        <div className="m-2">Copyright © 2023 CyberOni. All rights reserved.</div>
        <Link href={'/privacy'} className="m-2 hover:underline">Terms of Use & Privacy Policy</Link>
      </div>
    </div>
  );
}
