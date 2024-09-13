import React, { useState } from 'react';

const ProductDetail = ({threshers}) => {
  console.log(threshers);
  const images = [
    'https://i.imgur.com/nkjprq9.png',
    'https://i.imgur.com/IEAum1D.jpeg',
    'https://i.imgur.com/nkjprq9.png',
    'https://i.imgur.com/IEAum1D.jpeg',
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-12 bg-gray-50 p-4 md:p-6 shadow-md">
      {/* Left side: Carousel */}
      <div className="lg:w-1/2">
        <div
          className="relative overflow-hidden rounded-xl shadow-lg"
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <img
            src={selectedImage}
            alt="Selected"
            className={`object-cover w-full h-56 md:h-80 transition-transform duration-500 ${
              isZoomed ? 'scale-110' : 'scale-100'
            }`}
          />
          {/* Modernized Navigation arrows */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-60 text-green-600 p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white hover:bg-gradient-to-r from-green-600 to-green-600 transition-all duration-300"
            onClick={() => {
              const currentIndex = images.indexOf(selectedImage);
              const nextIndex = (currentIndex - 1 + images.length) % images.length;
              setSelectedImage(images[nextIndex]);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-60 text-green-600 p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white hover:bg-gradient-to-r from-green-600 to-green-600 transition-all duration-300"
            onClick={() => {
              const currentIndex = images.indexOf(selectedImage);
              const nextIndex = (currentIndex + 1) % images.length;
              setSelectedImage(images[nextIndex]);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className="flex space-x-3 mt-4 md:mt-6 justify-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className={`w-16 h-16 md:w-20 md:h-20 cursor-pointer rounded-lg border-b-4 ${
                selectedImage === img ? 'border-b-green-600' : 'border-b-gray-300'
              } shadow-sm transform transition-transform duration-300 hover:scale-110`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right side: Product description */}
      <div className="lg:w-1/2 flex flex-col justify-center space-y-4 md:space-y-6 mt-4 lg:mt-0">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">The Farmtrac 26 Atom</h1>
        <p className="text-gray-700 leading-relaxed">
          The Farmtrac 26 atom, compact tractor is the ultimate companion for orchard, 
          cotton, sugarcane farmers. This 26 HP Category tractor delivers exceptional 
          performance with its powerful engine, versatile PTO (540/540 E), Automatic Depth 
          and Draft Control (ADDC), and 750 Kg heavy lift for various farm implements.
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Get On Road Price
          </button>
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            Download Brochure
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-4">
          Disclaimer: These photographs are for illustrative purposes only and may be subject to change.
        </p>
      </div>
    </div>
  );
};

export default ProductDetail;
