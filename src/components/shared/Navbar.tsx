"use client";

import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { HiShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`relative w-full mx-auto shadow-md h-screen ${
        open && "bg-black"
      }`}
    >
      <div
        className={`grid grid-flow-col justify-items-center place-items-center ${
          open && "bg-slate-300"
        } h-24`}
      >
        <div className="absolute left-16 top-10 flex items-center justify-center gap-4">
          <div>
            {!open && (
              <div className="flex items-center justify-center gap-4 cursor-pointer">
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
        <div className="static text-center mx-auto w-full top-10">
          <Link href="/">
            <h1 className="text-3xl font-bold">LOUIS VUITTON</h1>
          </Link>
        </div>
        <div className="absolute right-16 top-10">
          <ul className="flex flex-row items-center justify-center gap-x-8">
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
              <Link href="/" className=" text-gray-500 text-2xl">
                <HiShoppingBag />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div
        className={`absolute left-0 top-0 p-8 w-[500px] h-screen overflow-y-scroll bg-white duration-500 ease-in ${
          open ? "left-0" : "left-[-500px]"
        }`}
      >
        <div className="flex justify-start px-7 py-2">
          {open && (
            <div className="flex items-center justify-center gap-4 cursor-pointer">
              <RxCross1 className="text-xl" onClick={() => setOpen(!open)} />
              <div>
                <h1>Close</h1>
              </div>
            </div>
          )}
        </div>
        <ul className={` flex flex-col justify-start gap-8 px-6 mt-8`}>
          <li className="h-8 text-gray-900 text-2xl">
            <Link
              href="/"
              className="group hover:text-gray-900 transition duration-300"
            >
              Gifts
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
          <li className="h-8 text-gray-900 text-2xl">
            <Link
              href="/"
              className="group hover:text-gray-900 transition duration-300"
            >
              New
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
          <li className="h-8 text-gray-900 text-2xl">
            <Link
              href="/"
              className="group hover:text-gray-900 transition duration-300"
            >
              Bags
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
          <li className="h-8 text-gray-900 text-2xl">
            <Link
              href="/"
              className="group hover:text-gray-900 transition duration-300"
            >
              Women
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
          <li className="h-8 text-gray-900 text-2xl">
            <Link
              href="/"
              className="group hover:text-gray-900 transition duration-300"
            >
              Men
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
          <li className="h-8 text-gray-900 text-2xl">
            <Link
              href="/"
              className="group hover:text-gray-900 transition duration-300"
            >
              Jewelry
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
          <li className="h-8 text-gray-900 text-2xl">
            <Link
              href="/"
              className="group hover:text-gray-900 transition duration-300"
            >
              Watches
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
          <li className="h-8 text-gray-900 text-2xl">
            <Link
              href="/"
              className="group hover:text-gray-900 transition duration-300"
            >
              Perfumes
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
          <li className="h-8 text-gray-900 text-2xl">
            <Link
              href="/"
              className="group hover:text-gray-900 transition duration-300"
            >
              Art Of Living
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
          <li className="h-8 text-gray-900 text-2xl">
            <Link
              href="/"
              className="group hover:text-gray-900 transition duration-300"
            >
              World of Louis Vuitton
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-black"></span>
            </Link>
          </li>
        </ul>
        <hr className="my-12" />
        <div>
          <ul className={` flex flex-col justify-start gap-4 px-6 mt-4`}>
            <li className="h-8 text-gray-900 text-base">
              <Link href="/">Sustainability</Link>
            </li>
            <li className="h-8 text-gray-900 text-base">
              <Link href="/">Find a Store</Link>
            </li>
            <li className="h-8 text-gray-900 text-base">
              <Link href="/">Ship to: United States</Link>
            </li>
            <li className="h-8 text-gray-900 text-base">
              <Link href="/">Can we help you?</Link>
            </li>
            <li className="h-8 text-gray-900 text-base">
              <Link href="/">+1.866.VUITTON</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
