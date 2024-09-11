import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { Play } from "lucide-react";
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
    <div ref={topRef} className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {threshers.map((machine, index) => (
          <div
            key={index}
            className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Link to={`/${machine.productId}`} className="block">
              <div className="relative">
                <img
                  className="h-48 sm:h-56 md:h-64 w-full object-cover"
                  src={machine.details.imageUrl}
                  alt={machine.ModelName}
                />
                {/* <img
                className="h-64 w-full object-cover mb-2"
                src={machine.details.imageUrl}
                alt={machine.ModelName}
              /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <h3 className="absolute bottom-4 left-4 text-white text-lg sm:text-xl font-bold">
                  {machine.ModelName}
                </h3>
              </div>
              <div className="p-4 sm:p-6">
                <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                  {Object.entries(machine.details.specification).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between"
                      >
                        <span className="font-medium capitalize">{key}:</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-full">
                          {value}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="text-center pb-6">
                <div className="flex justify-center gap-10">
                  {" "}
                  {/* Added flex layout */}
                  <button
                    className="bg-white border border-gray-300 text-green-600 px-4 py-1 rounded-full hover:bg-green-600 hover:text-white transition-colors duration-300"
                    onClick={handleVideoClick}
                  >
                    Watch Video
                  </button>
                  <GreenModernButtonInline /> {/* Second button in the row */}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl overflow-hidden shadow-2xl w-full max-w-4xl relative">
            <button
              className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 transition-colors duration-300"
              onClick={closeModal}
            >
              <IoClose size={24} />
            </button>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full"
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
