"use client";

import { useState } from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { HiShoppingBag } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`text-white relative w-full mx-auto h-full`}>
      <div className="relative">
        <video controls autoPlay muted className="video-player w-full">
          <source src="https://lv-vod.fl.freecaster.net/vod/louisvuitton/iH5lUfELrY_HD.mp4" />
        </video>
        <div className="text-white text-center absolute bottom-2 md:bottom-44 mx-auto w-full">
          <h1 className="text-2xl md:text-3xl">Artycapucines 2023</h1>
          <span className="flex items-center justify-center mt-4">
            <button className="text-xs md:text-base w-44 md:w-60 border border-1 border-white px-5 py-3 rounded-full">
              Discover the Collection
            </button>
          </span>
        </div>
      </div>

      <div
        className={`grid grid-flow-col justify-items-center place-items-center`}
      >
        <div className="absolute left-6 md:left-16 top-9 flex items-start md:items-center justify-center md:gap-4">
          <div>
            {!open && (
              <div className="flex items-center justify-center md:gap-4 cursor-pointer">
                <RxHamburgerMenu
                  className="text-xl"
                  onClick={() => setOpen(!open)}
                />
                <div className="invisible md:visible">
                  <h1>Menu</h1>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center justify-center md:gap-2 cursor-pointer">
            <div>
              <BiSearch className="text-xl" />
            </div>
            <div className="invisible md:visible">
              <h1>Search</h1>
            </div>
          </div>
        </div>
        <div className="absolute left-[37%] lg:left-[44%] w-full top-9">
          <Link href="/">
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              LOUIS VUITTON
            </h1>
          </Link>
        </div>
        <div className="absolute right-4 md:right-16 top-9">
          <ul className=" flex flex-row items-center justify-center gap-x-8">
            <li className="invisible md:visible">
              <Link href="/" className="text-sm ">
                Call Us
              </Link>
            </li>
            <li className="invisible md:visible">
              <Link href="/" className="text-sm">
                Wishlist
              </Link>
            </li>
            <li className="invisible md:visible">
              <Link href="/" className="text-sm ">
                MyLV
              </Link>
            </li>
            <li className="">
              <Link href="/" className="text-2xl">
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
        <div className="flex justify-start md:px-7 py-2">
          {open && (
            <div className="text-black flex items-center justify-center gap-4 cursor-pointer">
              <RxCross1 className="text-xl" onClick={() => setOpen(!open)} />
              <div>
                <h1>Close</h1>
              </div>
            </div>
          )}
        </div>
        <ul className={` flex flex-col justify-start gap-8 md:px-6 mt-8`}>
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
          <ul className={` flex flex-col justify-start gap-4 md:px-6 mt-4`}>
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
