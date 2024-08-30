import React from "react";
import { Link } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";
import QuickLinks from "./QuickLink";
import Banner from "./Banner";
import threshers from "./Threshers";
import Banners from "./Banners";
import ProductVideos from "./ProductVideos";

const HomePage = () => {
  return (
    <>
      <CarouselComponent />
      <div className="bg-gray-100 min-h-screen pb-0 relative font-sans ">
        {/* Background Image */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-[url('https://i.imgur.com/amI5Tnq.png')] bg-cover bg-no-repeat"
          style={{ zIndex: -1 }}
        ></div>

        <div className="container mx-auto p-6 bg-gradient-to-tr from-yellow-100 to-green-100 rounded-lg rounded-b-none shadow-md">
          <div className="text-center mb-12 p-2">
          <p className=" text-base sm:text-lg md:text-xl font-medium text-gray-800 mt-8">Serving Thousands Of Happy Custumer Since <span className="text-red-600">Since 1998</span> </p>

            <h1 className="text-3xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-12 mt-1">
              Discover Our Wide Range of{" "}
              <span className="text-green-600">Thresher Machines</span> !
            </h1>

            <div>
            <p className="border-b-green-600 border-b-4 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 bg-green-50 p-6 rounded-lg shadow-md max-w-3xl mx-auto sm:mx-4 md:mx-auto">
              We have designed thresher machines for different agricultural
              needs. Choose from single, double, and three fan models, with and
              without elevators. Each machine is tailored to provide efficiency
              and reliability in your farming operations.
            </p>
            </div>
          </div>
          <div className="container mx-auto pb-6 sm:px-3 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {threshers.map((machine, index) => (
                <div
                  key={index}
                  className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <Link to={`/${machine.productId}`} className="block">
                    <img
                      className="h-64 w-full object-cover mb-2"
                      src={machine.details.imageUrl}
                      alt={machine.ModelName}
                    />
                    <div className="p-6">
                      <p className="text-lg font-semibold mb-1 text-center">
                        {machine.ModelName}
                      </p>
                      <div className="text-sm text-gray-600 mb-4">
                        <div className="flex justify-between mb-1">
                          <span>
                            <strong>Capacity:</strong>
                          </span>
                          <span className="text-center w-full">
                            {machine.details.specification.capacity}
                          </span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span>
                            <strong>Power:</strong>
                          </span>
                          <span className="text-center w-full">
                            {machine.details.specification.power}
                          </span>
                        </div>
                        <div className="flex justify-between mb-1">
                          <span>
                            <strong>Weight:</strong>
                          </span>
                          <span className="text-center w-full">
                            {machine.details.specification.weight}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>
                            <strong>Dimensions:</strong>
                          </span>
                          <span className="text-center w-full">
                            {machine.details.specification.dimensions}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center pb-6">
                      <button className="bg-white border border-gray-300 text-green-600 px-4 py-2 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300">
                        Know More →
                      </button>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Banner />
        </div>
        <div>
          <Banners />
        </div>
        <div>
          <ProductVideos />
        </div>
        <div className="pt-10">
          <QuickLinks />
        </div>

        {/* Google Map Embed */}
        <div className="mt-12">
          <div className="container mx-auto p-6">
            <h2 className="mt-8 text-2xl font-semibold text-gray-800 mb-6">
              Visit Us
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13980.208063654469!2d76.8166126!3d27.5831922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397294b04d338b2b%3A0xcc9c3f44187307c!2sKisan%20Agriculture%20Workshop!5e0!3m2!1sen!2sin!4v1697595514101!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
