"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

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
          } z-50 transition-all lg:h-32`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between w-full text-black dark:text-white">

          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center font-display text-2xl">
              <Image
                src="/logo.png"
                alt="Precedent logo"
                width="30"
                height="30"
                className="mr-2 rounded-sm"
              ></Image>
              <p>CynberOni</p>
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-white hover:text-blue-500 focus:outline-none"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
            <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:flex space-x-4 md:space-x-8 md:items-center`}>
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
              <Link href="#" className="hover:text-blue-500">
                Enterprise
              </Link>
              <div className="relative group">
                <button
                  onClick={toggleExploreDropdown}
                  className="md:focus:outline-none hover:text-blue-500"
                >
                  Explore
                  <ChevronDown className="text-blue-400 inline-block"></ChevronDown>
                </button>
                {exploreDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-gray-700 text-white p-2 space-y-1">
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
        </div>
      </div>
    </>
  );
}
