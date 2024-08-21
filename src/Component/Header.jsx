import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import threshers from "./Threshers";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const handleMouseEnter = () => {
    if (!isClicked) {
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isClicked) {
      setDropdownOpen(false);
    }
  };

  const handleClick = () => {
    if (dropdownOpen) {
      setDropdownOpen(false);
      setIsClicked(!isClicked);
    } else {
      setDropdownOpen(true);
      setIsClicked(!isClicked);
    }
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <a href="/" className="flex-none">
            <div className="relative w-full h-16 sm:h-20">
              <img
                alt="logo"
                src="https://i.imgur.com/Z5Hf8eH.png"
                className="object-contain h-full"
              />
            </div>
          </a>
          <div className="ml-4 sm:ml-6 hidden sm:block">
            <h1 className="text-xl sm:text-2xl font-bold">
              KISAN Agriculture Workshop
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 flex items-center">
              <FaMapMarkerAlt className="mr-1 sm:mr-2 text-gray-600" />
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
            className="group flex items-center disabled:opacity-50 hover:opacity-95 justify-center rounded-lg shadow-lg font-semibold 
            px-3 sm:px-4 font-dm focus:outline-none bg-gray-100 border-b-4 border-b-green-600 
            text-gray-800 hover:text-gray-800 active:bg-gray-200 active:text-gray-800 focus-visible:outline-green-500 dark:bg-gray-100 dark:border-gray-700 dark:border-b-green-600"
            href="tel:9828719163"
          >
            <FaPhoneAlt className="mr-1 sm:mr-2 text-black" />
            +91 9828719163
          </a>
        </div>
      </div>

      <div className="w-full bg-gray-100">
        <nav>
          <ul className="flex justify-center text-black uppercase text-xs sm:text-sm font-medium">
            <li className="px-2 py-1 sm:px-4 sm:py-2">
              <a
                href="/"
                className="hover:text-green-600 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li
              className="relative px-2 py-1 sm:px-4 sm:py-2"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              <button
                className="hover:text-green-600 transition-colors duration-300"
              >
                Our Products
              </button>
              {(dropdownOpen || isClicked) && (
                <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-lg z-10">
                <ul className="text-black text-sm">
                  {threshers.map((thresher, index) => (
                    <li key={thresher.productId}>
                      <Link
                        to={`/${thresher.productId}`}
                        className={`block px-4 py-2 transition-colors duration-300 ${
                          index === 0 ? "rounded-t-lg hover:bg-green-600 hover:text-white" : ""
                        } ${
                          index === threshers.length - 1 ? "rounded-b-lg hover:bg-green-600 hover:text-white" : ""
                        } ${
                          index !== 0 && index !== threshers.length - 1 ? "border-b border-gray-200" : ""
                        } ${
                          index !== threshers.length - 1 ? "border-b border-gray-200" : ""
                        } hover:bg-green-600 hover:text-white`}
                        >
                        {thresher.ModelName}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              

              )}
            </li>
            <li className="px-2 py-1 sm:px-4 sm:py-2">
              <a
                href="/investors/overview"
                className="hover:text-green-600 transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li className="px-2 py-1 sm:px-4 sm:py-2">
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
