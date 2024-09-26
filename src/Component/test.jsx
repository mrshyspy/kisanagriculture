import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const ImageCarousel = () => {
  const images = [
    "https://i.imgur.com/Xnexzof.jpeg",
    "https://i.imgur.com/BI2C1mk.jpeg",
    "https://i.imgur.com/koUbuBT.jpeg",
    "https://i.imgur.com/4nfQTJs.jpeg",
    "https://i.imgur.com/BBt2yF7.jpeg",
    "https://i.imgur.com/soosGHK.jpeg",
    "https://i.imgur.com/x8QYPav.jpeg",
    "https://i.imgur.com/dTMsEj5.jpeg",
    "https://i.imgur.com/5EOWnfh.jpeg",
    "https://i.imgur.com/TwxZC47.jpeg",
    "https://i.imgur.com/AMlx4in.jpeg",
    "https://i.imgur.com/X0QiHXK.jpeg",
    "https://i.imgur.com/xIrBAGR.jpeg",
    "https://i.imgur.com/lsic2f2.png",
    "https://i.imgur.com/LTnjfGb.png",
    "https://i.imgur.com/Bu6SVhp.png",
    "https://i.imgur.com/yyTYXRT.png",
    "https://i.imgur.com/fGTN5wg.png",
    "https://i.imgur.com/A2q7uo6.png",
    "https://i.imgur.com/UHoEFOz.png",
    "https://i.imgur.com/Z8duUtH.png"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startX, setStartX] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const carouselRef = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 3 + images.length) % images.length
    );
  };

  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    if (diffX > 50) {
      goToNextSlide();
      setIsDragging(false);
    } else if (diffX < -50) {
      goToPreviousSlide();
      setIsDragging(false);
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleSeeMoreClick = () => {
    navigate('/gallery'); // Navigate to the /gallery route
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto overflow-hidden"
      ref={carouselRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Carousel Images */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${(currentIndex / 3) * 100}%)` }} // Adjusting for 3 images at a time
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="carousel-slide flex-shrink-0 w-full md:w-1/3 sm:w-1/2 aspect-w-16 aspect-h-9"
          >
            <img
              src={src}
              alt={`Thresher ${index + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPreviousSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={goToNextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full"
      >
        &#8594;
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              Math.floor(index / 3) === Math.floor(currentIndex / 3) ? 'bg-green-600' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>

      {/* See More Button */}
      <button
        onClick={handleSeeMoreClick}
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white p-2 rounded-md"
      >
        See More
      </button>
    </div>
  );
};

export default ImageCarousel;
