import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import threshers from "./Threshers";
import { GreenModernButtonInline } from "../components/green-modern-button-inline";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const carouselRef = useRef(null);
  const touchStartXRef = useRef(0);
  const touchEndXRef = useRef(0);

  // Handle window resize and adjust items per page
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set on initial render

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update scroll state
  const updateScrollState = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      setCanScrollLeft(scrollLeft > 0);

      const buffer = 5; // Buffer to handle rounding
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - buffer);

      const itemWidth = carouselRef.current.offsetWidth / itemsPerPage;
      const newIndex = Math.round(scrollLeft / itemWidth);
      setCurrentIndex(newIndex);
    }
  };

  // Attach and detach scroll listener
  useEffect(() => {
    const handleScroll = () => updateScrollState();

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("scroll", handleScroll);
    }

    updateScrollState();

    return () => {
      if (carousel) {
        carousel.removeEventListener("scroll", handleScroll);
      }
    };
  }, [itemsPerPage]);

  // Handle next and previous slides
  const nextSlide = () => {
    if (carouselRef.current && canScrollRight) {
      const itemWidth = carouselRef.current.offsetWidth / itemsPerPage;
      const newIndex = Math.min(
        currentIndex + 1,
        threshers.length - itemsPerPage
      );
      setCurrentIndex(newIndex);
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft + itemWidth,
        behavior: "smooth",
      });
    }
  };

  const prevSlide = () => {
    if (carouselRef.current && canScrollLeft) {
      const itemWidth = carouselRef.current.offsetWidth / itemsPerPage;
      const newIndex = Math.max(currentIndex - 1, 0);
      setCurrentIndex(newIndex);
      carouselRef.current.scrollTo({
        left: carouselRef.current.scrollLeft - itemWidth,
        behavior: "smooth",
      });
    }
  };

  // Function to handle touch start
  const handleTouchStart = (e) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  // Function to handle touch move
  const handleTouchMove = (e) => {
    touchEndXRef.current = e.touches[0].clientX;
  };

  // Function to handle touch end and decide the slide action
  const handleTouchEnd = () => {
    const itemWidth = carouselRef.current.offsetWidth / itemsPerPage;
    const touchDifference = touchStartXRef.current - touchEndXRef.current;

    if (Math.abs(touchDifference) > itemWidth * 0.5) {
      // If swipe is more than 50% of the card width, move to the next/previous slide
      if (touchDifference > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    } else {
      // If swipe is less than 50%, reset to the current slide
      carouselRef.current.scrollTo({
        left: itemWidth * currentIndex,
        behavior: "smooth",
      });
    }
  };

  const totalDots = Math.max(1, threshers.length - itemsPerPage + 1);

  return (
    <div className="relative md:px-12 w-full mb-6">
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mt-16 mb-4 text-gray-800">
        Related Products
      </h2>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 left-2 bg-green-600 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white hover:bg-gradient-to-r from-green-600 to-green-600 transition-all duration-300 z-10 ${
          currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={currentIndex === 0}
        aria-label="Previous Slide"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className={`absolute top-1/2 transform -translate-y-1/2 right-2 bg-green-600 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white hover:bg-gradient-to-r from-green-600 to-green-600 transition-all duration-300 z-10 ${
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
      <div
        className="relative overflow-x-scroll scrollbar-hide touch-pan-x"
        ref={carouselRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex transition-transform duration-300 ease-in-out">
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

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {Array.from({ length: totalDots }, (_, index) => (
          <button
            key={index}
            className={`relative h-3 ${
              index === currentIndex ? "bg-green-600 w-6" : "bg-gray-300 w-3"
            } rounded-full transition-all duration-300 ease-in-out`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselComponent;
