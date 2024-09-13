import React, { useState, useEffect, useRef } from 'react';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
      <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-extrabold mb-6 text-center">
        Photo Gallery
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out"
            style={{ paddingBottom: '56.25%' }}
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
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out transform ${loading[index] ? 'hidden' : 'block'}`}
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
          <div className="relative max-w-full max-h-full p-4" onClick={e => e.stopPropagation()}>
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
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-60"
              onClick={handlePrev}
            >
              <FaChevronLeft size={24} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-60"
              onClick={handleNext}
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
