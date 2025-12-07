"use client";

import Link from "next/link";
import { useState } from "react";
import ButtonCTA from "./buttons/buttonCTA";


function Navbar (){
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Sciences", href: "/sciences"},
    { name: "Art", href: "/art"},
    { name: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav className="block w-full max-w-screen px-4 py-4 mx-auto bg-navbarcolor bg-opacity-90 sticky top-0 shadow lg:px-8 backdrop-blur-lg z-[9999]">
        <div className="container flex flex-wrap items-center justify-between mx-auto text-slate-800 px-6">
          <Link
            href="/"
            className="mr-4 block cursor-pointer py-1.5 text-titlecolor font-bold text-xl"
          >
            Thomas SERAFIN
          </Link>

          {/* Mobile Hamburger */}
          <div className="lg:hidden">
            <button
              className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] rounded-lg text-center text-slate-800"
              onClick={toggleMobileMenu}
            >
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl">
                {isMobileMenuOpen ? "✕" : "☰"}
              </span>
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed top-0 left-0 min-h-screen w-64 bg-navbarcolor shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            } lg:hidden z-50`}
          >
            <div className="flex flex-row items-center border-b pb-4">
              <Link
                href="/"
                className="cursor-pointer text-gray-300 font-bold text-xl pt-4 ps-4"
              >
                Thomas SERAFIN
              </Link>
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-gray-100 hover:text-gray-400"
              >
                ✕
              </button>
            </div>
            <ul className="flex flex-col h-full gap-4 p-4">
              {navItems.map((item, index) => (
                <li key={index} className="flex items-center p-1 text-lg gap-x-2 text-gray-100 hover:text-gray-400">
                  <Link
                    href={item.href}
                    className="flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="mt-4">
                {/* <button className="bg-red-700 text-white px-8 py-2 rounded-md hover:bg-red-500">
                  Contact
                </button> */}
                <ButtonCTA label="Contact"  href="/contact" />
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
              {navItems.map((item, index) => (
                <li key={index} className="flex items-center p-1 text-lg gap-x-2 text-gray-100 hover:text-gray-300">
                  <Link href={item.href} className="flex items-center">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                {/* <button className="bg-red-700 hover:bg-red-500 text-white px-8 py-2 rounded-md">
                  Contact
                </button> */}
                <ButtonCTA label="Contact"  href="/contact" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar