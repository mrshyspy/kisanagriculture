import React from 'react'

function Hero() {
  return (
   

        <div className="container mx-auto p-6 bg-gradient-to-tr from-yellow-100 to-green-100 rounded-lg rounded-b-none shadow-md">
          <div className="text-center mb-12 p-2">
            <p className=" text-base sm:text-lg md:text-xl font-medium text-gray-800 mt-8">
              Serving Thousands Of Happy Customer{" "}
              <span className="text-red-600 font-semibold "> Since 1998</span>{" "}
            </p>

            <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 mt-1">
              Discover Our Wide Range of{" "}
              <span className="text-green-600">Thresher Machines</span> !
            </h1>

            <div>
              <p className="border-b-green-600 border-b-4 text-base text-balance sm:text-base md:text-base leading-relaxed text-gray-700 bg-green-50 p-6 rounded-lg shadow-md max-w-3xl mx-auto sm:mx-4 md:mx-auto">
                Choose from our efficient and reliable thresher machines,
                available in single, double, and three fan models, with or
                without elevators, tailored for various agricultural needs.
              </p>
            </div>
          </div>
      </div>
  )
}

export default Hero
