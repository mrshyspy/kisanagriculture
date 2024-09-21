import React from "react";

function Hero() {
  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8 bg-gradient-to-tr from-yellow-100 to-green-100 rounded-lg rounded-b-none shadow-md">
      <div className="text-center p-2 sm:p-4 lg:p-6">
        <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800 mt-6 sm:mt-8 lg:mt-10">
          Serving Thousands Of Happy Customers{" "}
          <span className="text-red-600 font-semibold"> Since 1998</span>{" "}
        </p>

        <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-8 sm:mb-10 lg:mb-12 mt-1">
          Discover Our Wide Range of{" "}
          <span className="text-green-600">Kisan Threshers</span>!
        </h1>

        <div>
          <p className="border-b-green-600 border-b-4 text-sm sm:text-base md:text-base lg:text-base leading-relaxed text-gray-700 bg-green-50 p-4 sm:p-6 lg:p-8 rounded-lg shadow-md max-w-3xl mx-4 sm:mx-4 md:mx-auto">
            Choose from our efficient and reliable kisan thresher machines, available
            in single, double three fan and four fan models, with or without elevators,
            tailored for various agricultural needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
