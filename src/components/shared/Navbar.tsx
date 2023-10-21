"use client";

import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { HiShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
// import logo from "../../Assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full mx-auto shadow-md h-24">
      <nav className="grid grid-flow-col justify-items-center place-items-center h-24">
        <div className="flex items-center justify-center gap-4">
            <div>
              {open ? (
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                  <RxCross1
                    className="text-xl"
                    onClick={() => setOpen(!open)}
                  />
                  <div>
                    <h1>Close</h1>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 cursor-pointer">
                  <RxHamburgerMenu
                    className="text-xl"
                    onClick={() => setOpen(!open)}
                  />
                  <div>
                    <h1>Menu</h1>
                  </div>
                </div>
              )}
            </div>
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <div>
              <BiSearch className="text-xl" />
            </div>
            <div>
              <h1>Search</h1>
            </div>
          </div>
        </div>
        <div>
          <Link href="/">
            <h1 className="text-3xl font-bold">LOUIS VUITTON</h1>
          </Link>
        </div>
        <div className="">
          <ul className="flex flex-row items-center justify-center gap-x-4">
            <li className="">
              <Link href="/" className=" text-gray-500 text-sm ">
                Call Us
              </Link>
            </li>
            <li className="">
              <Link href="/" className=" text-gray-500 text-sm">
                Wishlist
              </Link>
            </li>
            <li className="">
              <Link href="/" className=" text-gray-500 text-sm ">
                MyLV
              </Link>
            </li>
            <li className="">
              <Link href="/" className=" text-gray-500 text-xl">
                <HiShoppingBag />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <ul
        className={`md:bg-none flex flex-col justify-center md:flex-row md:justify-center bg-sky-300 md:bg-inherit absolute md:static p-4 md:p-6 duration-500 ease-in ${
          open ? "left-0" : "left-[-150px]"
        }`}
      >
        <li className="">
          <Link
            href="/"
            className=" text-gray-900 "
          >
            Hom
          </Link>
        </li>
        <li className="">
          <Link
            href="/about"
            className=" text-gray-900 "
          >
            Abou
          </Link>
        </li>
      </ul> */}
    </div>
  );
};

export default Navbar;
