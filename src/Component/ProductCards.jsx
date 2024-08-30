import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import threshers from './Threshers';

const ProductCard = () => {
  const [showVideo, setShowVideo] = useState(false);
  const topRef = useRef(null);

  const handleVideoClick = (e) => {
    e.preventDefault();
    setShowVideo(true);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeModal = () => {
    setShowVideo(false);
  };

  return (
    <div ref={topRef} className="container mx-auto pb-6 sm:px-3 lg:px-8">
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
                <button
                  className="bg-white border border-gray-300 text-green-600 px-4 py-2 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300 mr-2"
                  onClick={handleVideoClick}
                >
                  Watch Video
                </button>
                <button className="bg-white border border-gray-300 text-green-600 px-4 py-2 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300">
                  Know More →
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3">
            <div className="relative">
              <button
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1"
                onClick={closeModal}
              >
                X
              </button>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/oQUJiOlrc_0?si=d0IgDUm5GKFVbmEV"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
