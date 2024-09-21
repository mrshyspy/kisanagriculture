
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/placeholder.svg?height=400&width=600&text=Image+1",
  "/placeholder.svg?height=400&width=600&text=Image+2",
  "/placeholder.svg?height=400&width=600&text=Image+3",
  "/placeholder.svg?height=400&width=600&text=Image+4",
  "/placeholder.svg?height=400&width=600&text=Image+5",
  "/placeholder.svg?height=400&width=600&text=Image+6",
];

const Component =()=> {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto p-4 bg-gray-50 rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-center h-[300px] md:h-[400px] transition-transform duration-500">
        <div
          className={`absolute w-full h-full transition-transform duration-500 transform ${
            currentIndex === 0 ? "translate-x-0" : currentIndex === 1 ? "-translate-x-full" : currentIndex === images.length - 1 ? "translate-x-full" : ""
          }`}
        >
          <img
            src={images[currentIndex]}
            className="w-full h-full object-cover rounded-lg"
            alt={`Slide ${currentIndex + 1}`}
          />
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-green-600" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 rounded-full p-2 shadow-md hover:bg-opacity-100 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-green-600" />
      </button>
      <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
              index === currentIndex ? "bg-green-600" : "bg-gray-300"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
export default  Component;