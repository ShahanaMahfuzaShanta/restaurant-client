import React from "react";
import { Link } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

const Nav = () => {
  const navElement = (
    <>
      <li>
        <Link
          className="block py-2 pl-3 pr-4 text-white hover:text-[#EEFF25] rounded md:bg-transparent md:p-0"
          aria-current="page"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="contact-us"
          className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#EEFF25] md:hover:bg-transparent md:p-0"
        >
          Contact Us
        </Link>
      </li>
      <li>
        <Link
          to="dashboard"
          className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#EEFF25] md:hover:bg-transparent md:p-0"
        >
          dashboard
        </Link>
      </li>
      <li>
        <Link
          to="our-menu"
          className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#EEFF25] md:hover:bg-transparent md:p-0"
        >
          our menu
        </Link>
      </li>
      <li>
        <Link
          to="our-shop"
          className="block py-2 pl-3 pr-4 text-white rounded hover:text-[#EEFF25] md:hover:bg-transparent md:p-0"
        >
          our shop
        </Link>
      </li>
    </>
  );
  return (
    <>
      <nav className="bg-black bg-opacity-50 fixed w-full z-20 top-0 left-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            <div className="grid">
              <span className="text-white self-center text-xs lg:text-2xl font-semibold font-['Cinzel'] whitespace-nowrap uppercase">
                Bistro Boss
              </span>
              <span className="text-white self-center text-xs lg:text-sm lg:tracking-[0.50em] font-['Cinzel'] font-semibold whitespace-nowrap uppercase">
                Restaurant
              </span>
            </div>
          </Link>
          <div className="flex gap-3">
          <div className="flex gap-2 md:order-2">
            <button
              type="button"
              className="text-white focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-full text-sm text-center mr-3 md:mr-0"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.19 17.75H7.53999C6.54999 17.75 5.59999 17.33 4.92999 16.6C4.25999 15.87 3.92 14.89 4 13.9L4.83 3.94C4.86 3.63 4.74999 3.33001 4.53999 3.10001C4.32999 2.87001 4.04 2.75 3.73 2.75H2C1.59 2.75 1.25 2.41 1.25 2C1.25 1.59 1.59 1.25 2 1.25H3.74001C4.47001 1.25 5.15999 1.56 5.64999 2.09C5.91999 2.39 6.12 2.74 6.23 3.13H18.72C19.73 3.13 20.66 3.53 21.34 4.25C22.01 4.98 22.35 5.93 22.27 6.94L21.73 14.44C21.62 16.27 20.02 17.75 18.19 17.75ZM6.28 4.62L5.5 14.02C5.45 14.6 5.64 15.15 6.03 15.58C6.42 16.01 6.95999 16.24 7.53999 16.24H18.19C19.23 16.24 20.17 15.36 20.25 14.32L20.79 6.82001C20.83 6.23001 20.64 5.67001 20.25 5.26001C19.86 4.84001 19.32 4.60999 18.73 4.60999H6.28V4.62Z"
                  fill="white"
                />
                <path
                  d="M16.25 22.75C15.15 22.75 14.25 21.85 14.25 20.75C14.25 19.65 15.15 18.75 16.25 18.75C17.35 18.75 18.25 19.65 18.25 20.75C18.25 21.85 17.35 22.75 16.25 22.75ZM16.25 20.25C15.97 20.25 15.75 20.47 15.75 20.75C15.75 21.03 15.97 21.25 16.25 21.25C16.53 21.25 16.75 21.03 16.75 20.75C16.75 20.47 16.53 20.25 16.25 20.25Z"
                  fill="white"
                />
                <path
                  d="M8.25 22.75C7.15 22.75 6.25 21.85 6.25 20.75C6.25 19.65 7.15 18.75 8.25 18.75C9.35 18.75 10.25 19.65 10.25 20.75C10.25 21.85 9.35 22.75 8.25 22.75ZM8.25 20.25C7.97 20.25 7.75 20.47 7.75 20.75C7.75 21.03 7.97 21.25 8.25 21.25C8.53 21.25 8.75 21.03 8.75 20.75C8.75 20.47 8.53 20.25 8.25 20.25Z"
                  fill="white"
                />
                <path
                  d="M21 8.75H9C8.59 8.75 8.25 8.41 8.25 8C8.25 7.59 8.59 7.25 9 7.25H21C21.41 7.25 21.75 7.59 21.75 8C21.75 8.41 21.41 8.75 21 8.75Z"
                  fill="white"
                />
              </svg>
            </button>
            <button
              type="button"
              className=" text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-xl p-2 text-center mr-3 md:mr-0"
            >
              <FaCircleUser />
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-[#EEFF25] focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:flex-row md:space-x-8 md:mt-0 uppercase">
              {navElement}
            </ul>
          </div>
          </div>

        </div>
      </nav>
    </>
  );
};

export default Nav;
