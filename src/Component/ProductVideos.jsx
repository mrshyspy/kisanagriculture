import { useState, useEffect } from 'react';
import threshers from "./Threshers";

const VideoList = () => {
  const [showAll, setShowAll] = useState(false);
  const [initialCount, setInitialCount] = useState(2); // Default to 2 videos on mobile

  const videoUrl = "https://www.youtube.com/embed/DHCSpVVPnp0?si=7Ik3TBs6Xa_IWauo";

  useEffect(() => {
    // Update the number of videos to show initially based on screen size
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setInitialCount(3); // 3 videos on desktop
      } else {
        setInitialCount(2); // 2 videos on mobile
      }
    };

    // Set initial count on component mount
    handleResize();

    // Attach resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Product Videos</h1>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {threshers.slice(0, showAll ? threshers.length : initialCount).map((thresher, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
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
            <div className="mt-4 text-center">
              <h2 className="text-base sm:text-md md:text-xl lg:text-xl font-medium text-gray-800">
                {thresher.ModelName}
              </h2>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="mt-6 text-center">
          <button
            onClick={handleShowMore}
            className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700"
          >
            Watch More
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoList;
