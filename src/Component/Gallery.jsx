import React, { useState, useEffect, useRef } from "react";
import { FaTimes } from "react-icons/fa";

const images = [
  "https://i.imgur.com/xCvyXTB.jpeg",
  "https://i.imgur.com/5BWijk9.jpeg",
  "https://i.imgur.com/pvvuvbn.jpeg",
  "https://i.imgur.com/Wlyhc44.jpeg",
  "https://i.imgur.com/PQAXdUc.jpeg",
  "https://i.imgur.com/sabDIeh.jpeg",
  "https://i.imgur.com/I0LvqsR.jpeg",
  "https://i.imgur.com/4czkxr3.jpeg",
  "https://i.imgur.com/zpCp12u.jpeg",
  "https://i.imgur.com/s6CqKUM.jpeg",
  "https://i.imgur.com/bHaC9xs.jpeg",
  "https://i.imgur.com/CxPWhlZ.jpeg",
  "https://i.imgur.com/ZoFwCDm.jpeg",
  "https://i.imgur.com/qOt4WTX.jpeg",
  "https://i.imgur.com/lRq04Pw.jpeg",
  "https://i.imgur.com/h9w9ght.jpeg",
  "https://i.imgur.com/o4tdl2J.jpeg",
  "https://i.imgur.com/8pwExIa.jpeg",
  "https://i.imgur.com/UuIURpI.jpeg",
  "https://i.imgur.com/qZqrYGA.jpeg",
  "https://i.imgur.com/yfwOFxV.jpeg",
  "https://i.imgur.com/qZqrYGA.jpeg",
  "https://i.imgur.com/yfwOFxV.jpeg",
  "https://i.imgur.com/2HVpZPI.jpeg",
  "https://i.imgur.com/UuIURpI.jpeg",
  "https://i.imgur.com/TVqRY48.jpeg",
  "https://i.imgur.com/8pwExIa.jpeg",
  "https://i.imgur.com/2BYly07.png",
  "https://i.imgur.com/N6y6DAs.jpeg",
  "https://i.imgur.com/bbcxBen.jpeg",
  "https://i.imgur.com/jZWCa2Y.jpeg",
  "https://imgur.com/xIrBAGR.png",
  "https://imgur.com/AMlx4in.png",
  "https://imgur.com/koUbuBT.png",
  "https://imgur.com/A2q7uo6.png",
  "https://imgur.com/ofXOY8A.png",
  "https://imgur.com/zs0DiuC.png",
  "https://imgur.com/I3OJBJ7.png",
];

const Gallery = () => {
  const [loading, setLoading] = useState(Array(images.length).fill(true));
  const [progress, setProgress] = useState(Array(images.length).fill(0));
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    images.forEach((src, index) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", src, true);
      xhr.responseType = "blob";

      xhr.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentComplete = (event.loaded / event.total) * 100;
          setProgress((prevProgress) => {
            const newProgress = [...prevProgress];
            newProgress[index] = percentComplete;
            return newProgress;
          });
        }
      };

      xhr.onloadend = () => {
        setLoading((prevLoading) => {
          const newLoading = [...prevLoading];
          newLoading[index] = false;
          return newLoading;
        });
      };

      xhr.send();
    });
  }, []);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;

    touchEndX.current = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX.current;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handlePhotoClick = (e) => {
    e.stopPropagation(); // Prevent closing the modal when clicking on the photo
  };

  return (
    <div className="p-6 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Photo Gallery
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
            style={{ paddingBottom: "56.25%" }}
            onClick={() => handleImageClick(index)}
          >
            {loading[index] && (
              <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
                <div className="w-3/4 h-2 bg-gray-300 rounded">
                  <div
                    className="h-2 bg-green-500 rounded"
                    style={{ width: `${progress[index]}%` }}
                  ></div>
                </div>
              </div>
            )}
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform ${
                loading[index] ? "hidden" : "block"
              } hover:scale-110 cursor-pointer`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={handleCloseModal}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative max-w-full max-h-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[selectedImageIndex]}
              alt="Selected"
              className="w-full h-auto max-h-screen object-contain transition-transform duration-300 ease-in-out transform"
              onClick={handlePhotoClick} // Prevent modal close when clicking on photo
            />
            <button
              className="absolute top-4 right-4 text-red-400 z-60"
              onClick={handleCloseModal}
            >
              <FaTimes size={24} />
            </button>
            <button
              className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 text-green-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white hover:bg-gradient-to-r from-green-600 to-green-600 transition-all duration-300 z-60"
              onClick={handlePrev}
              aria-label="Previous image"
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
              className="fixed right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-60 text-green-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white hover:bg-gradient-to-r from-green-600 to-green-600 transition-all duration-300 z-60"
              onClick={handleNext}
              aria-label="Next image"
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
        </div>
      )}
    </div>
  );
};

export default Gallery;
