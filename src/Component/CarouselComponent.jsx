import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Combine Harvester - 512",
      imageUrl: "https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-d-series-tractor.jpg",
      link: "https://www.jangeer.com/combine-harvester/combine-harvester-512"
    },
    {
      title: "Tractor Mounted Combine - 510",
      imageUrl: "https://i.imgur.com/IEAum1D.jpg",
      link: "https://www.jangeer.com/combine-harvester/tractor-mounted-combine-510"
    },
    {
      title: "Multicrop Thresher",
      imageUrl: "https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-d-series-tractor.jpg",
      link: "https://www.jangeer.com/multicrop-thresher"
    },
    {
      title: "Jangeer Rotavator",
      imageUrl: "https://i.imgur.com/IEAum1D.jpg",
      link: "https://www.jangeer.com/rotavator/jangeer-rotavator"
    },
    {
      title: "Chaff Cutter",
      imageUrl: "https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-d-series-tractor.jpg",
      link: "https://www.jangeer.com/chaff-cutter/jangeer-chaff-cutter"
    },
    {
      title: "Groundnut Thresher",
      imageUrl: "https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-d-series-tractor.jpg",
      link: "https://www.jangeer.com/groundnut-thresher/jangeer-groundnut-thresher"
    },
    {
      title: "Maize Thresher",
      imageUrl: "https://www.deere.co.in/assets/images/region-1/products/tractors/john-deere-d-series-tractor.jpg",
      link: "https://www.jangeer.com/maize-thresher/jangeer-maize-thresher"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [items.length]);

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  return (
    <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-screen overflow-hidden">
      <div className="relative w-full h-full flex overflow-hidden">
        <div className="flex flex-nowrap transition-transform duration-1000" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {items.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full flex items-center justify-center relative"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6">
                <div className="text-center text-white max-w-md sm:max-w-lg lg:max-w-2xl px-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{item.title}</h2>
                  <a
                    href={item.link}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    View Detail
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white bg-opacity-60 text-green-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white hover:bg-gradient-to-r from-green-600 to-green-400 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white bg-opacity-60 text-green-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white hover:bg-gradient-to-r from-green-600 to-green-400 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
