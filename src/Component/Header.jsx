import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-lg p-0 sm:p-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex-none min-w-[100px]">
            <div className="relative w-full h-20">
              <img
                alt="logo"
                src="https://i.imgur.com/Z5Hf8eH.png"
                className="object-contain w-2000px h-full  pl-10 mt-3 mb-3"
              />
            </div>
          </a>
          <div className="ml-4 hidden sm:block">
            <h1 className="text-2xl font-bold">KISAN Agriculture Workshop</h1>
            <p className="text-sm text-gray-600 flex items-center">
              <FaMapMarkerAlt className="mr-2 text-gray-600" />
              <a
                href="https://maps.app.goo.gl/2axW9MgXBWHQQ1ek9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-600"
              >
                Ramgarh, Alwar, Rajasthan
              </a>
            </p>
          </div>
        </div>
        <div className="flex items-center">
        <a
  className="group flex h-min items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-semibold 
  py-2 px-4 font-dm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-gray-100 border-b-4 border-b-green-600 disabled:border-0
  disabled:bg-white disabled:text-gray-800 ring-white text-gray-800 hover:border-0 active:border-0 hover:text-gray-800 active:bg-gray-200
  active:text-gray-800 focus-visible:outline-green-500 text-sm sm:text-base dark:bg-gray-100 dark:border-gray-700 dark:border-b-green-600 mr-10"
  href="tel:9828719163"
>
  <FaPhoneAlt className="mr-2 text-black" />
  +91-9828 7191 63
</a>


        </div>
      </div>
      <div className="w-full bg-gray-100">
        <nav className="py-1">
          <ul className="flex gap-6 justify-center text-black uppercase text-sm font-medium">
            <li>
              <a
                href="/"
                className="hover:text-green-600 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/escorts-group/overview"
                className="hover:text-green-600 transition-colors duration-300"
              >
                Our Products
              </a>
            </li>
            <li>
              <a
                href="/investors/overview"
                className="hover:text-green-600 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/media-room/overview"
                className="hover:text-green-600 transition-colors duration-300"
              >
                Gallery
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
