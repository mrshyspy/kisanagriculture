import React, { useState, useEffect } from 'react';

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

  useEffect(() => {
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

  return (
    <div className="p-6 bg-white">
      <h2 className="text-3xl text-gray-800 font-bold mb-6 text-center">Photo Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {images.map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg shadow-lg" style={{ paddingBottom: '56.25%' }}>
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
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105 ${loading[index] ? 'hidden' : 'block'}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
