import React from "react";

function Banners() {
  const bannerData = [
    {
      title: "High Performance",
      subtitle: "Maximize your efficiency with our high-performance threshers.",
      bgClass: "bg-gradient-to-br from-green-600 to-green-500" // Custom gradient color
    },
    {
      title: "Advanced Features",
      subtitle: "Experience cutting-edge features designed for modern farming.",
      bgClass: "bg-gradient-to-br from-blue-600 to-blue-500" // Custom gradient color
    },
    {
      title: "Affordable Excellence",
      subtitle: "Exceptional quality at competitive prices. Get the best value for your investment.",
      bgClass: "bg-gradient-to-br from-yellow-600 to-yellow-500" // Custom gradient color
    },
    {
      title: "Ease of Use",
      subtitle: "User-friendly machines for effortless operation.",
      bgClass: "bg-gradient-to-br from-purple-600 to-purple-500" // Custom gradient color
    },
    {
      title: "Built to last",
      subtitle: "Built to last with exceptional performance for every harvest.",
      bgClass: "bg-gradient-to-br from-teal-600 to-teal-500" // Custom gradient color
    },
    {
      title: "Innovative Design",
      subtitle: "Experience cutting-edge design in every thresher.",
      bgClass: "bg-gradient-to-br from-orange-600 to-orange-500" // Custom gradient color
    }
  ];

  return (
    <div className="container mx-auto py-9 md:py-12 px-6 md:px-6">
      <div className="text-center mb-8">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:green-600">
          Quality Before Quantity
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {bannerData.map((banner, index) => (
          <div
            key={index}
            className={`flex flex-col justify-center items-center ${banner.bgClass} py-6 px-6 rounded-lg shadow-lg space-y-4`}
          >
            <h1 className="text-2xl lg:text-3xl font-bold text-white text-center">
              {banner.title}
            </h1>
            <p className="text-base lg:text-lg text-white text-center">
              {banner.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banners;
