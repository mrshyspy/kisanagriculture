import { useState } from 'react';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: 'Precision Tractor',
      description: 'Maximize your yield with our advanced tractor technology.',
      gradientFrom: '#7CFC00',
      gradientTo: '#00FA9A',
      icon: <TractorIcon />,
    },
    {
      title: 'Automated Sprayer',
      description:
        'Effortlessly apply pesticides and fertilizers with precision.',
      gradientFrom: '#FF6B6B',
      gradientTo: '#FFB6C1',
      icon: <SprayCanIcon />,
    },
    {
      title: 'Autonomous Harvester',
      description: 'Revolutionize your harvesting with our self-driving technology.',
      gradientFrom: '#9370DB',
      gradientTo: '#BA55D3',
      icon: <CombineIcon />,
    },
    {
      title: 'Intelligent Planter',
      description: 'Optimize your planting with our advanced seeding technology.',
      gradientFrom: '#FFD700',
      gradientTo: '#FFA500',
      icon: <PlaneIcon />,
    },
    {
      title: 'Smart Irrigation System',
      description: 'Optimize water usage and improve crop yields with our smart irrigation.',
      gradientFrom: '#00BFFF',
      gradientTo: '#1E90FF',
      icon: <CloudRainIcon />,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20">
      <div className="relative rounded-xl overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              currentSlide === index ? 'block' : 'hidden'
            } relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center bg-gradient-to-r from-[${slide.gradientFrom}] to-[${slide.gradientTo}] group`}
          >
            <div className="relative z-10 text-center space-y-4 px-4 sm:px-8 lg:px-12">
              <div className="inline-block px-3 py-1 bg-white/50 rounded-full text-sm font-medium text-white">
                Farming Equipment
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {slide.title}
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-white">
                {slide.description}
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/50 rounded-full flex items-center justify-center text-white">
                  {slide.icon}
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-[${slide.gradientFrom}]/50 to-[${slide.gradientTo}]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
          </div>
        ))}

        {/* Carousel controls */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
        >
          ▶
        </button>
      </div>
    </div>
  );
}

function TractorIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="7" cy="17" r="3" />
      <circle cx="17" cy="17" r="3" />
      <path d="M15 17H9" />
      <path d="M13 13L17 7" />
      <path d="M5 9V4H19V9H5Z" />
    </svg>
  );
}

function SprayCanIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2H15V6H9z" />
      <path d="M10 9H14V21H10z" />
      <path d="M14 4H20V6H14z" />
      <path d="M4 11V21H20V11z" />
    </svg>
  );
}

function CombineIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9.5 19l5.5 1.5L14 10l6-3L2 8l7.5 3L9 14l.5 5z" />
    </svg>
  );
}

function CloudRainIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.9A7 7 0 1 1 15.71 8H17.5a4.5 4.5 0 0 1 0 9h-9" />
      <path d="M8 19l-2 5" />
      <path d="M12 19l-2 5" />
      <path d="M16 19l-2 5" />
    </svg>
  );
}

export default Carousel;
