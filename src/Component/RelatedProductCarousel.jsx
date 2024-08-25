import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import threshers from "./Threshers";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (currentIndex < threshers.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const scrollAmount = (carouselRef.current.scrollWidth / threshers.length) * currentIndex;
    carouselRef.current.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, [currentIndex]);

  return (
    <div className="relative md:px-12 w-full">
      <h2 className="text-center mt-16 mb-4 text-3xl sm:text-3xl md:text-4xl font-extrabold text-gray-800">
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
          currentIndex >= threshers.length - 1
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
        disabled={currentIndex >= threshers.length - 1}
        aria-label="Next Slide"
      >
        <FaChevronRight />
      </button>

      {/* Carousel Items */}
      <div className="relative overflow-x-auto whitespace-nowrap scrollbar-hide" ref={carouselRef}>
        {threshers.map((machine, index) => (
          <div
            key={index}
            className="inline-block sm:py-8 py-6 px-4 transition-transform duration-300"
            style={{
              transform: isMobile
                ? `scale(${index === currentIndex ? 1 : 0.9})`
                : 'none',
              transition: 'transform 0.3s ease-in-out',
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
