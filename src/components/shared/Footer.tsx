"use client"

import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <hr />
      <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center mb-16 mt-16">
        <div className="w-96 md:mx-0 mx-auto text-center md:text-left">
          <Link href="/">
            <h2 className="text-xl title-font font-medium text-gray-900 tracking-widest mb-3">
              Help
            </h2>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            Our Client Advisors are available to assist you by phone at
            <span className="underline font-semibold cursor-pointer"> +1.866.VUITTON</span>.
            You can also <span className="underline font-semibold cursor-pointer">chat </span>
            or <span className="underline font-semibold cursor-pointer">email </span> us.
          </p>
          <ul className="flex flex-col text-sm gap-2 mt-2">
            <li>
              <Link href="/">FAQs</Link>
            </li>
            <li>
              <Link href="/">Product care</Link>
            </li>
            <li>
              <Link href="/">Stores</Link>
            </li>
          </ul>
        </div>
        <div className="w-80 px-4">
          <h2 className="text-xl title-font font-medium text-gray-900 tracking-widest mb-3">
            Services
          </h2>
          <ul className="flex flex-col text-sm gap-2 mt-2">
            <li>
              <Link href="/">Repairs</Link>
            </li>
            <li>
              <Link href="/">Personalization</Link>
            </li>
            <li>
              <Link href="/">Art of Gifting</Link>
            </li>
            <li>
              <Link href="/">Download our Apps</Link>
            </li>
          </ul>
        </div>
        <div className="w-80 px-4">
          <h2 className="title-font font-medium text-gray-900 tracking-widest text-xl mb-3">
            About Louis Vuitton
          </h2>
          <ul className="flex flex-col text-sm gap-2 mt-2">
            <li>
              <Link href="/">Fashion Shows</Link>
            </li>
            <li>
              <Link href="/">Arts & Culture</Link>
            </li>
            <li>
              <Link href="/">La Maison</Link>
            </li>
            <li>
              <Link href="/">Sustainability</Link>
            </li>
            <li>
              <Link href="/">Latest News</Link>
            </li>
            <li>
              <Link href="/">Careers</Link>
            </li>
            <li>
              <Link href="/">Foundation Louis Vuitton</Link>
            </li>
          </ul>
        </div>
        <div className="w-80 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <span className="text-xl">Email Sign-up</span>
          </Link>
          <p className="mt-2 text-sm text-gray-500">
            <span className="underline font-semibold cursor-pointer">Sign up</span> for Louis
            Vuitton emails and receive the latest news from the Maison,
            including exclusive online pre-launches and new collections.
          </p>
          <ul className="flex flex-col text-sm gap-2 mt-2">
            <li>
              <Link href="/">Follow us</Link>
            </li>
          </ul>
        </div>
      </footer>
      <hr />
      <div className="mt-12">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            Ship to: <span className="underline cursor-pointer">United States</span>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center gap-x-5 sm:justify-start text-sm">
            <Link href="/" className="text-gray-500">
              Sitemap
            </Link>
            <Link href="/" className="ml-3 text-gray-500">
              Legal Notices
            </Link>
            <Link href="/" className="ml-3 text-gray-500">
              Privacy Policy
            </Link>
            <Link href="/" className="ml-3 text-gray-500">
              California Supply Chains Act
            </Link>
            <Link href="/" className="ml-3 text-gray-500">
              Accessibility
            </Link>
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-12 mb-12">
        <Link href="/">
          <h1 className="text-2xl font-bold">LOUIS VUITTON</h1>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
