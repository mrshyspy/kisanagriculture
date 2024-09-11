import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

function Banner() {
  return (
    <div className=" container mx-auto py-8 px-6 sm:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row items-stretch justify-center space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
      <div className="flex flex-col md:flex-row items-center justify-between bg-yellow-400 dark:bg-gray-800 p-6 md:p-12 lg:px-12 md:w-8/12 lg:w-7/12 xl:w-8/12 2xl:w-9/12 rounded-lg shadow-lg">
      <div className="flex flex-col justify-center md:w-1/2">
            <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-white">
              All <span className="text-green-600">INDIA</span> Delivery
            </h1>
            <p className="text-base lg:text-xl text-gray-700 dark:text-gray-200 mt-2">
              We deliver threshers all over{" "}
              <span className="font-extrabold">INDIA</span>
            </p>
            <a
              href="tel:9828719163"
              className="mt-4 inline-flex items-center bg-white text-gray-800  md:mr-40 py-1.5 text-sm md:text-base rounded-full hover:bg-green-600 hover:text-white focus:outline-none  justify-center  transition duration-300 ease-in-out focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              <FaPhoneAlt className="mr-2" />
              Contact Us Now
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
        <div className="md:w-4/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 bg-yellow-50 dark:bg-yellow-400 flex flex-col justify-center relative rounded-lg shadow-lg">
          <div className="flex flex-col justify-center">
            {/* <h1 className="text-3xl lg:text-5xl font-bold text-gray-800 dark:text-gray-900">
              Game Console
            </h1>
            <p className="text-base lg:text-xl text-gray-700 dark:text-gray-800 mt-2">
              Save Upto <span className="font-extrabold">30%</span>
            </p> */}
          </div>
          <div className="flex justify-end md:absolute md:bottom-4 md:right-4 lg:bottom-0 lg:right-0">
            <img
              src="https://i.imgur.com/6C7cfxi.jpeg"
              alt="Game Console"
              className="md:w-20 md:h-20 lg:w-full lg:h-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
