import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import threshers from "./Threshers";

export default function VideoList() {
  const [showAll, setShowAll] = useState(false);

  const videoUrl = "https://www.youtube.com/embed/DHCSpVVPnp0?si=7Ik3TBs6Xa_IWauo";

  const handleShowMore = () => {
    setShowAll(true);
  };

  return (
    <div className="container mx-auto py-8 px-6 sm:px-8 lg:px-12">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mt-4 mb-8 text-gray-800">Product Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {threshers.slice(0, showAll ? threshers.length : (typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : 2)).map((thresher, index) => (
          <div key={index} className=" transition-transform ease-in-out bg-white rounded-lg shadow-lg overflow-hidden duration-300 hover:scale-105">
            <div className="relative pb-[56.25%]">
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
            <div className="p-4">
              <h2 className="text-base font-medium text-gray-800 text-center">{thresher.ModelName}</h2>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="mt-12 text-center relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative">
            <button
              onClick={handleShowMore}
              className="inline-flex items-center px-6 py-3 bg-white border border-gray-300 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
            >
              Load More
              <ChevronDown className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
