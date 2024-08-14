"use client";
import React, { useState } from 'react';
// import { FaTelegramPlane } from "react-icons/fa";


const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              /> */}
              <a href="http://localhost:3000/gemini">   <h1 className='text-cyan-500 cursor-pointer tracking-widest'>Damin</h1></a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href='http://localhost:3000/gemini'
                  className="rounded-md hover:bg-gray-700 px-3 py-2 text-sm font-medium text-white"
                  aria-current="page"
                >
                  O'bek tili
                  {/* <img className='w-[30px]' src='uzb.png'/> */}
                </a>
                <a
                  href='http://localhost:3000'
                  className="content-center rounded-md hover:bg-gray-700 px-3 py-2 text-sm font-medium text-white"
                  aria-current="page"
                >
                  Yapon tili
                  {/* <img className='w-[30px]' src='jpn.png'/> */}
                </a>
                <a
                  href="/resume"
                  className="content-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Resume
                </a>

                <a
                  href="/grammer"
                  className="content-center rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  grammatika
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <a href='https://www.instagram.com/amirjonovshoxrux/'>
              <img
                className="h-8 w-8 rounded-full"
                src="ins.svg"
                alt=""
              />
            </a>
            <div className="relative ml-3 ">
              <div>

                <a href='https://web.telegram.org/k/#@zoyiriydan'>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="telegram.svg"
                    alt=""
                  />
                </a>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`sm:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a
            href='http://localhost:3000/gemini'
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            aria-current="page"
          >
            O'bek tili
            {/* <img className='w-[30px]' src='uzb.png'/> */}
          </a>
          <a
            href='http://localhost:3000'
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            aria-current="page"
          >
            Yapon tili
            {/* <img className='w-[30px]' src='jpn.png'/> */}
          </a>
          <a
            href="/resume"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Resume
          </a>
          <a
            href="/grammer"
            className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >
            Grammatika
          </a>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
