import Link from "next/link";

export default function Footer() {
  return (
    <div className="text container relative  z-50 mx-auto h-fit w-full py-5  text-center dark:text-white">
      <div className="h-[1px]  bg-gradient-purple"></div>
      <div className="grid grid-cols-1 grid-rows-2 gap-3 p-4  lg:grid-cols-2 lg:grid-rows-1">
        <div className="flex flex-col">
          <div className="text-lg font-bold">Quick Links</div>
          <Link className="hover:underline" href={"/home"}>
            Home
          </Link>
          <Link className="hover:underline" href={"/services"}>
            Services
          </Link>
          <Link className="hover:underline" href={"/blogs"}>
            Blogs
          </Link>
          <Link className="hover:underline" href={"/enterprise"}>
            Enterprise
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            href="https://www.projectskip.me"
          >
            Our Non Profit
          </a>
        </div>
        <div className="flex flex-col ">
          <div className="font-bold">Get In Touch</div>
          <Link className="hover:underline" href={"/contact"}>
            Contact
          </Link>

          <div>support@cybershoptech.com</div>
          <div>Denver, Co </div>
        </div>
      </div>
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between ">
        <div className="m-2">
          Copyright © 2023 CyberOni. All rights reserved.
        </div>
        <Link href={"/privacy"} className="m-2 hover:underline">
          Terms of Use & Privacy Policy
        </Link>
      </div>
    </div>
  );
}
