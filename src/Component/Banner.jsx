import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

function Banner() {
  return (
    <div className="container mx-auto py-8 px-6 sm:px-8 lg:px-12 bg-gray-100 ">
      <div className="flex flex-col md:flex-row items-stretch justify-center space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-yellow-400 to-white dark:bg-gray-800 p-6 md:p-8 lg:p-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 rounded-lg shadow-lg">
          <div className="flex flex-col justify-center md:w-1/2">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-800 dark:text-white">
              All <span className="text-green-600">INDIA</span> Delivery
            </h1>
            <p className="text-base lg:text-lg xl:text-xl text-gray-700 dark:text-gray-200 mt-2">
              We deliver threshers all over{" "}
              <span className="font-extrabold">INDIA</span>
            </p>
            <a
              href="tel:9828719163"
              className="mt-4 inline-flex items-center bg-green-600 text-white  md:mr-40 py-1.5 text-sm md:text-base rounded-full hover:bg-green-600 hover:text-white focus:outline-none  justify-center  transition duration-300 ease-in-out focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              <FaPhoneAlt className="mr-2" />
              Contact Us
            </a>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
            <img
              src="https://i.imgur.com/ksB04tp.jpeg"
              alt="Delivery"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
        <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 flex items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
          <img
            src="https://i.imgur.com/6C7cfxi.jpeg"
            alt="img"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Banner;