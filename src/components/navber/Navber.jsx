"use client";
import Link from "next/link";
import { useState } from "react";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="text-white 2xl:w-[1440px] w-full mx-auto pt-7 xl:px-[120px] sm:px-5 flex items-center justify-between">
      <Link href="/" className="text-4xl font-bold cursor-pointer sm:pl-0 pl-5">
        Ashik
      </Link>

      {/* Hamburger and Cross icons */}
      <div
        onClick={() => setOpen(!open)}
        className="text-white md:hidden absolute right-[26px] z-10"
      >
        {open ? <RxCross2 size={24} /> : <RxHamburgerMenu size={24} />}
      </div>

      {/* Navigation Menu */}
      <ul
        className={`flex md:flex-row flex-col md:gap-y-0 gap-y-2 gap-x-10 md:text-lg absolute md:static top-20 md:top-0 left-0 md:w-auto w-full text-sm rounded p-5 md:p-0 bg-white md:bg-transparent text-black md:text-white 
        ${open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 pointer-events-none "} 
        md:pointer-events-auto md:opacity-100 md:transform-none 
        transition-all  duration-700 ease-in-out md:transition-none `}
      >
        <li>
          <Link href="/about" className="cursor-pointer">
            About me
          </Link>
        </li>
        <li>
          <Link href="/services" className="cursor-pointer">
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className="cursor-pointer">
            Contact me
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
