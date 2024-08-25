import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import threshers from "./Threshers";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
  const carouselRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) {
        const carousel = carouselRef.current;
        const items = itemsRef.current;

        if (carousel) {
          const centerX = carousel.scrollLeft + carousel.offsetWidth / 2;

          items.forEach((item) => {
            const itemCenterX = item.offsetLeft + item.offsetWidth / 2;
            const distance = Math.abs(centerX - itemCenterX);
            const scale = Math.max(0.8, 1 - distance / (carousel.offsetWidth * 2));

            item.style.transform = `scale(${scale})`;
          });
        }
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, [isMobile]);

  const nextSlide = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = carousel.children[0].offsetWidth + 20; // Adjust for gap
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      const newScrollLeft = Math.min(
        carousel.scrollLeft + itemWidth,
        maxScrollLeft
      );
      carousel.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const itemWidth = carousel.children[0].offsetWidth + 20; // Adjust for gap
      const newScrollLeft = Math.max(carousel.scrollLeft - itemWidth, 0);
      carousel.scrollTo({ left: newScrollLeft, behavior: "smooth" });
    }
  };

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
      <div
        className="relative overflow-x-auto whitespace-nowrap scrollbar-hide"
        ref={carouselRef}
        style={{
          padding: '10px', // Adjust for space on the sides if needed
        }}
      >
        {threshers.map((machine, index) => (
          <div
            key={index}
            className="inline-block sm:py-8 py-6 px-4 transition-transform duration-300"
            ref={(el) => (itemsRef.current[index] = el)}
            style={{
              width: isMobile ? 'calc(90vw - 20px)' : 'auto', // Adjust width for mobile view
              margin: isMobile ? '0' : '0', // Fixed gap between cards
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
