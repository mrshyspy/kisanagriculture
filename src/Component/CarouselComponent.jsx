import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Combine Harvester - 512",
      imageUrl: "https://i.imgur.com/c9Dh2wU.jpeg",
      link: "https://www.Kisan.com/combine-harvester/combine-harvester-512",
    },
    {
      title: "Tractor Mounted Combine - 510",
      imageUrl: "https://i.imgur.com/O6J2aAA.jpeg",
      link: "https://www.Kisan.com/combine-harvester/tractor-mounted-combine-510",
    },
    {
      title: "Multicrop Thresher",
      imageUrl: "	https://i.imgur.com/0MGgKUz.jpeg",
      link: "https://www.Kisan.com/multicrop-thresher",
    },
  ];

  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    swipeDuration: 300,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        prevSlide();
      } else if (e.key === "ArrowRight") {
        nextSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };
  // h-[30vh] sm:h-[40vh] md:h-[50vh]
  return (
    <div className="relative w-full  overflow-hidden">
      <div className="relative w-full h-full flex overflow-hidden" {...handlers}>
        <div
          className="flex flex-nowrap transition-transform duration-1000"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex items-center justify-center relative"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="object-contain w-full h-full" // Changed object-fit to object-contain
              />
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                {/* You can add any overlay or text here if needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white bg-opacity-60 text-green-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white hover:bg-gradient-to-r from-green-600 to-green-600 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white bg-opacity-60 text-green-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white hover:bg-gradient-to-r from-green-600 to-green-600 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
