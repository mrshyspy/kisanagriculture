import { useState } from 'react';
import threshers from "./Threshers";

const VideoList = () => {
  const [showAll, setShowAll] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/DHCSpVVPnp0?si=7Ik3TBs6Xa_IWauo";

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Product Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {threshers.slice(0, showAll ? threshers.length : (window.innerWidth >= 1024 ? 3 : 2)).map((thresher, index) => (
          <div key={index} className="bg-white p-2 rounded-lg ">
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={videoUrl}
                title={`YouTube video player ${index + 1}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-2 text-center">
              <h2 className="text-base sm:text-base md:text-lg lg:text-lg font-normal text-gray-800 p-2">{thresher.ModelName}</h2>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="mt-6 text-center">
          <button
            onClick={handleShowMore}
            className="bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700"
          >
            Load More...
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoList;
