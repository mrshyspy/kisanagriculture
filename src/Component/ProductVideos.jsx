import threshers from "./Threshers";
const VideoList = () => {
    const videoUrl = "https://www.youtube.com/embed/DHCSpVVPnp0?si=7Ik3TBs6Xa_IWauo";
  
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Product Videos</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {threshers.map((thresher, index) => (
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
                <h2 className="text-xl font-semibold text-gray-800">{thresher.ModelName}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default VideoList;