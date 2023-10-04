"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import UserDropdown from "./user-dropdown";
import { Session } from "next-auth";
import { useState } from "react";

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
          } z-30 transition-all`}
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
                  <i className="ml-2 fas fa-chevron-down"></i>
                </button>
                {productsDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-gray-700 text-white p-2 space-y-1">
                    <li>
                      <a href="#">Product 1</a>
                    </li>
                    <li>
                      <a href="#">Product 2</a>
                    </li>
                    <li>
                      <a href="#">Product 3</a>
                    </li>
                  </ul>
                )}
              </div>
              <a href="#" className="hover:text-blue-500">
                Team
              </a>
              <a href="#" className="hover:text-blue-500">
                Enterprise
              </a>
              <div className="relative group">
                <button
                  onClick={toggleExploreDropdown}
                  className="md:focus:outline-none hover:text-blue-500"
                >
                  Explore
                  <i className="ml-2 fas fa-chevron-down"></i>
                </button>
                {exploreDropdownOpen && (
                  <ul className="absolute left-0 mt-2 bg-gray-700 text-white p-2 space-y-1">
                    <li>
                      <a href="#">Explore 1</a>
                    </li>
                    <li>
                      <a href="#">Explore 2</a>
                    </li>
                    <li>
                      <a href="#">Explore 3</a>
                    </li>
                  </ul>
                )}
              </div>
              <a href="#" className="hover:text-blue-500">
                Marketplace
              </a>
              <a href="#" className="hover:text-blue-500">
                Pricing
              </a>
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
            <button className="hover:text-blue-500">Sign In</button>
            <button className="ring-[#9E9C9C] ring-2 dark:text-white px-4 py-2 rounded-lg hover:shadow-md">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
