import React, { useState } from "react";

export default function Banners() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const bannerData = [
    {
      title: "Heavy Duty",
      subtitle: "Maximize your efficiency with our high-performance threshers.",
      bgClass: "from-green-400 to-emerald-600",
      icon: "🚜",
    },
    {
      title: "Advanced Features",
      subtitle: "Experience cutting-edge features designed for modern farming.",
      bgClass: "from-blue-400 to-indigo-600",
      icon: "🔬",
    },
    {
      title: "Affordable Excellence",
      subtitle: "Top quality at great prices. Get the most value for your investment.",
      bgClass: "from-yellow-400 to-amber-600",
      icon: "💰",
    },
    {
      title: "Easy to Use",
      subtitle: "User-friendly machines for effortless operation.",
      bgClass: "from-purple-400 to-fuchsia-600",
      icon: "👌",
    },
    {
      title: "Built to Last",
      subtitle: "Built to last with exceptional performance for every harvest.",
      bgClass: "from-teal-400 to-cyan-600",
      icon: "🏗️",
    },
    {
      title: "Precision Engineering",
      subtitle: "Experience cutting-edge design in every thresher.",
      bgClass: "from-orange-400 to-red-600",
      icon: "⚙️",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-6 sm:px-8 lg:px-12">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 dark:text-gray-200 mb-12 animate-fade-in-down">
        Quality Before Quantity
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {bannerData.map((banner, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br ${banner.bgClass} rounded-xl shadow-lg overflow-hidden `}
            style={{ animationDelay: `${index * 100}ms` }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="p-6 h-full flex flex-col justify-between backdrop-blur-sm bg-white/10">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{banner.title}</h3>
                  <span 
                    className={`text-3xl sm:text-4xl md:text-5xl transition-transform duration-300 ${
                      hoveredIndex === index ? 'rotate-12 scale-110' : ''
                    }`} 
                    role="img" 
                    aria-label={banner.title}
                  >
                    {banner.icon}
                  </span>
                </div>
                <p className="text-xs sm:text-sm md:text-base text-white">{banner.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.5s ease-out;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
