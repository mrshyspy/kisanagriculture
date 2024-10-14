import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import threshers from "./Threshers";
import { GreenModernButtonInline } from "../components/green-modern-button-inline";

const ProductCard = () => {
  const [showVideo, setShowVideo] = useState(false);
  const topRef = useRef(null);

  const handleVideoClick = (e) => {
    e.preventDefault();
    setShowVideo(true);
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const closeModal = () => {
    setShowVideo(false);
  };

  return (
    <div
      ref={topRef}
      className="container mx-auto py-8 px-6 sm:px-8 lg:px-12 bg-gradient-to-br from-yellow-100 to-green-100"
    >
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {threshers.map((machine, index) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out hover:shadow-xl hover:scale-105"
          >
            <Link to={`/${machine.productId}`} className="block">
              <div className="relative">
                <div className="relative w-full pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                  <img
                    className="absolute inset-0 w-full h-full object-cover mb-0 transition-transform duration-300 ease-in-out lg:hover:scale-105" // Zoom effect with ease-in-out
                    src={machine.details.imageUrl}
                    alt={machine.ModelName}
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-bold">
                  {machine.ModelName}
                </h3>
              </div>

              {/* Card content with border */}
              <div className="border-green-600 rounded-b-lg">
                <div className="p-4 sm:p-6">
                  <div className="space-y-2 text-sm sm:text-sm text-gray-600">
                    {Object.entries(machine.details.specification).map(
                      ([key, value]) => (
                        <div
                          key={key}
                          className="flex items-center justify-between"
                        >
                          <span className="font-medium capitalize pl-4">
                            {key}:
                          </span>
                          <span className="px-2 pr-4 rounded-full">
                            {value}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
                <div className="text-center pb-10 pt-4">
                  <div className="flex justify-center gap-5">
                    <button
                      className="bg-white border border-gray-300 text-green-600 px-4 py-1 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300"
                      onClick={handleVideoClick}
                    >
                      Watch Video
                    </button>
                    <GreenModernButtonInline />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg overflow-hidden shadow-2xl w-full max-w-screen-lg">
            <button
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 transition-colors duration-300 z-10"
              onClick={closeModal}
            >
              <IoClose size={24} />
            </button>
            <div className="relative w-full pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/oQUJiOlrc_0?si=d0IgDUm5GKFVbmEV"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
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
