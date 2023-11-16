"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";

export default function NavBar({ session }: { session: Session | null }) {
  const scrolled = useScroll(50);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleProductsDropdown = () => {
    setProductsDropdownOpen(!productsDropdownOpen);
  };

  const toggleExploreDropdown = () => {
    setExploreDropdownOpen(!exploreDropdownOpen);
  };

  return (
    <>
      <div
        className={`fixed top-0 w-full flex justify-center ${scrolled
          ? "border-b border-gray-200 bg-white/50 dark:bg-black/50 backdrop-blur-xl"
          : "bg-white/0"
          } z-50 lg:h-24`}
      >
        <div className=" flex h-16 max-w-screen-xl items-center justify-between w-full text-black dark:text-white">

          <Link href="/" className="flex items-center font-display text-2xl w-fit">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
            <div>CyberOni</div>
          </Link>


          <div className={` ${mobileMenuOpen ? 'hidden' : 'animate-slide-left-fade flex py-5 text-center z-50' } fixed right-0  bg-white dark:bg-zinc-950 gap-10  top-full h-screen w-full flex-col items-center justify-start lg:static lg:flex lg:flex-row lg:gap-5 lg:justify-center lg:h-full lg:bg-inherit lg:w-fit`}>
            <div className="relative group">
              <button
                onClick={toggleProductsDropdown}
                className="md:focus:outline-none hover:text-blue-500"
              >
                Products
                <ChevronDown className="text-blue-400 inline-block"></ChevronDown>
              </button>
              {productsDropdownOpen && (
                <ul className="absolute left-0 mt-2 bg-gray-700 text-white p-2 space-y-1">
                  <li>
                    <Link href="#">shop</Link>
                  </li>
                  <li>
                    <Link href="#">Cart</Link>
                  </li>

                </ul>
              )}
            </div>
            <Link href="#" className="hover:text-blue-500">
              Team
            </Link>
            <Link href="/enterprise" className="hover:text-blue-500">
              Enterprise
            </Link>
            <div className="relative group">
              <button

                className=" peer md:focus:outline-none hover:text-blue-500"
              >
                Explore
                <ChevronDown className="text-blue-400 inline-block"></ChevronDown>
              </button>
              {(
                <ul className="hidden peer-focus:block hover:block absolute left-0 mt-2 bg-gray-700 text-white p-2 space-y-1">
                  <li>
                    <Link href="/blogs">Blogs</Link>
                  </li>
                  <li>
                    <Link href="/services">services</Link>
                  </li>
                  <li>
                    <Link href="#"></Link>
                  </li>
                </ul>
              )}
            </div>
            <Link href="#" className="hover:text-blue-500">
              Marketplace
            </Link>
            <Link href="#" className="hover:text-blue-500">
              Pricing
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="dark:bg-[#272F43] text-white rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
              </button>
            </div>
            <Link href={'/api/auth/signin'} className="hover:text-blue-500">Sign In</Link>
            <Link href={'/api/auth/signin'} className="ring-[#9E9C9C] ring-2 dark:text-white px-4 py-2 rounded-lg hover:shadow-md">
              Sign Up
            </Link>
          </div>

          <div className=" lg:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Navigation Options"
              className="peer/nav z-50"
            >
              <Menu></Menu>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
