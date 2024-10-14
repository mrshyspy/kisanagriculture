import React, { useState, useRef } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleSwipeStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleSwipeMove = (e) => {
    const distance = e.touches[0].clientX - startX.current;
    if (distance < -50) {
      nextSlide();
    } else if (distance > 50) {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container relative overflow-hidden">
      <div
        className="carousel-slides flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        onTouchStart={handleSwipeStart}
        onTouchMove={handleSwipeMove}
      >
        {images.map((image, index) => (
          <div className="carousel-slide flex-shrink-0 w-full" key={index}>
            {image === 'video' ? (
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/M-ob-0Mz8NY?si=RAxapQPvSy_iGe6Z"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <img
                src={image}
                loading="lazy"
                alt={`Slide ${index}`}
                className="w-full h-auto object-cover"
              />
            )}
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
