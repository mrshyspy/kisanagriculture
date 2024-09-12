import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import threshers from "./Threshers";
import { GreenModernButtonInline } from "../components/green-modern-button-inline";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2.5);
      } else {
        setItemsPerPage(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < threshers.length - itemsPerPage) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative md:px-12 w-full">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mt-16 mb-4 text-gray-800">
        Related Products
      </h2>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 left-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-10 ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentIndex === 0}
        aria-label="Previous Slide"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 z-10 ${
          currentIndex >= threshers.length - itemsPerPage
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        disabled={currentIndex >= threshers.length - itemsPerPage}
        aria-label="Next Slide"
      >
        <FaChevronRight />
      </button>

      {/* Carousel Items */}
      <div className="relative overflow-x-scroll scrollbar-hide touch-pan-x">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${(currentIndex * 100) / itemsPerPage}%)`,
          }}
        >
          {threshers.map((machine, index) => (
            <div
              key={index}
              className="flex-shrink-0 sm:py-8 py-6 px-4"
              style={{
                width: `${100 / itemsPerPage}%`,
              }}
            >
              <div className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
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
                  </div>
                  <div className="text-center pb-6">
                    <GreenModernButtonInline />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
