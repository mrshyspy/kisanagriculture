import React from 'react';

const imageUrls = [
  'https://imgur.com/xIrBAGR.png',
  'https://imgur.com/Bu6SVhp.png',
  'https://imgur.com/AMlx4in.png',
  'https://imgur.com/koUbuBT.png',
  'https://imgur.com/A2q7uo6.png',
  'https://imgur.com/qAK4NzA.png',
  'https://imgur.com/a/M6a1jPb.png',
  'https://imgur.com/uFxx1mX.png',
  'https://imgur.com/ofXOY8A.png',
  'https://imgur.com/zs0DiuC.png',
  'https://imgur.com/a/NhMxTXG.png',
  'https://imgur.com/a/YgragRV.png',
  'https://imgur.com/a/FRU6uoT.png',
  'https://imgur.com/G7nhXXV.png',
  'https://imgur.com/I3OJBJ7.png',
  'https://imgur.com/a/ziOvivo.png',
];

const ImageCarousel = () => {
  return (
    <div className="overflow-hidden w-full">
      <div className="animate-scroll flex items-center">
        <div className="flex space-x-6">
          {imageUrls.map((url, index) => (
            <div key={index} className="relative aspect-w-16 aspect-h-9 w-64">
              <img
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={url}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;


// import React, { useState, useEffect, useRef } from "react";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const ImageCarousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerPage, setItemsPerPage] = useState(1);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);
//   const carouselRef = useRef(null);
//   const touchStartRef = useRef(0);
//   const touchEndRef = useRef(0);
//   const intervalRef = useRef(null); // Ref to store the interval

//   const threshers = [
//     "https://i.imgur.com/Xnexzof.jpeg",
//     "https://i.imgur.com/BI2C1mk.jpeg",
//     "https://i.imgur.com/koUbuBT.jpeg",
//     "https://i.imgur.com/4nfQTJs.jpeg",
//     "https://i.imgur.com/BBt2yF7.jpeg",
//     "https://i.imgur.com/soosGHK.jpeg",
//     "https://i.imgur.com/x8QYPav.jpeg",
//     "https://i.imgur.com/dTMsEj5.jpeg",
//     "https://i.imgur.com/5EOWnfh.jpeg",
//     "https://i.imgur.com/TwxZC47.jpeg",
//     "https://i.imgur.com/AMlx4in.jpeg",
//     "https://i.imgur.com/X0QiHXK.jpeg",
//     "https://i.imgur.com/xIrBAGR.jpeg",
//     "https://i.imgur.com/lsic2f2.png",
//     "https://i.imgur.com/LTnjfGb.png",
//     "https://i.imgur.com/Bu6SVhp.png",
//     "https://i.imgur.com/yyTYXRT.png",
//     "https://i.imgur.com/fGTN5wg.png",
//     "https://i.imgur.com/A2q7uo6.png",
//     "https://i.imgur.com/UHoEFOz.png",
//     "https://i.imgur.com/Z8duUtH.png"
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 1024) {
//         setItemsPerPage(3);
//       } else if (window.innerWidth >= 640) {
//         setItemsPerPage(2);
//       } else {
//         setItemsPerPage(1);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     handleResize(); // Set on initial render

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const updateScrollState = () => {
//     if (carouselRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
//       setCanScrollLeft(scrollLeft > 0);
//       const buffer = 5;
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - buffer);
//       const itemWidth = carouselRef.current.offsetWidth / itemsPerPage;
//       const newIndex = Math.round(scrollLeft / itemWidth);
//       setCurrentIndex(newIndex);
//     }
//   };

//   useEffect(() => {
//     const handleScroll = () => updateScrollState();

//     const carousel = carouselRef.current;
//     if (carousel) {
//       carousel.addEventListener("scroll", handleScroll);
//     }

//     updateScrollState();

//     return () => {
//       if (carousel) {
//         carousel.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, [itemsPerPage]);

//   // Automatic slide change every 2 seconds
//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       nextSlide();
//     }, 2000); // Change to next slide every 2 seconds

//     return () => {
//       clearInterval(intervalRef.current); // Clean up the interval on unmount
//     };
//   }, [currentIndex]); // Restart interval when currentIndex changes

//   const nextSlide = () => {
//     if (carouselRef.current && canScrollRight) {
//       const itemWidth = carouselRef.current.offsetWidth / itemsPerPage;
//       const newIndex = Math.min(currentIndex + 1, threshers.length - itemsPerPage);
//       setCurrentIndex(newIndex);
//       carouselRef.current.scrollTo({
//         left: carouselRef.current.scrollLeft + itemWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   const prevSlide = () => {
//     if (carouselRef.current && canScrollLeft) {
//       const itemWidth = carouselRef.current.offsetWidth / itemsPerPage;
//       const newIndex = Math.max(currentIndex - 1, 0);
//       setCurrentIndex(newIndex);
//       carouselRef.current.scrollTo({
//         left: carouselRef.current.scrollLeft - itemWidth,
//         behavior: "smooth",
//       });
//     }
//   };

//   const goToSlide = (index) => {
//     if (carouselRef.current) {
//       const itemWidth = carouselRef.current.offsetWidth / itemsPerPage;
//       setCurrentIndex(index);
//       carouselRef.current.scrollTo({
//         left: itemWidth * index,
//         behavior: "smooth",
//       });
//     }
//   };

//   const totalDots = Math.max(1, threshers.length - itemsPerPage + 1);

//   // Touch event handlers
//   const handleTouchStart = (e) => {
//     touchStartRef.current = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e) => {
//     touchEndRef.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     const distance = touchStartRef.current - touchEndRef.current;
//     const threshold = 50; // Adjust this threshold as needed

//     if (distance > threshold) {
//       nextSlide(); // Move to the next slide
//     } else if (distance < -threshold) {
//       prevSlide(); // Move to the previous slide
//     }
//   };

//   return (
//     <div className="relative md:px-12 w-full mb-6">
//       <h2 className="text-3xl font-bold text-center mt-12 mb-4 text-gray-800">
//         Related Products
//       </h2>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className={`absolute top-1/2 transform -translate-y-1/2 left-2 bg-green-600 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white transition-all duration-300 z-10 ${
//           currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
//         }`}
//         disabled={currentIndex === 0}
//         aria-label="Previous Slide"
//       >
//         <FaChevronLeft />
//       </button>
//       <button
//         onClick={nextSlide}
//         className={`absolute top-1/2 transform -translate-y-1/2 right-2 bg-green-600 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white transition-all duration-300 z-10 ${
//           currentIndex >= threshers.length - itemsPerPage
//             ? "opacity-50 cursor-not-allowed"
//             : ""
//         }`}
//         disabled={currentIndex >= threshers.length - itemsPerPage}
//         aria-label="Next Slide"
//       >
//         <FaChevronRight />
//       </button>

//       {/* Carousel Items */}
//       <div
//         className="relative overflow-x-scroll scrollbar-hide touch-pan-x"
//         ref={carouselRef}
//         style={{ touchAction: "pan-x pan-y" }}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//         onTouchEnd={handleTouchEnd}
//       >
//         <div className="flex transition-transform duration-300 ease-in-out">
//           {threshers.map((machine, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 sm:py-8 py-6 px-4"
//               style={{
//                 width: `${100 / itemsPerPage}%`,
//               }}
//             >
//               <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300">
//                 <Link to="/gallery" className="block">
//                   <div className="relative" style={{ paddingTop: '56.25%' }}>
//                     <img
//                       className="absolute top-0 left-0 w-full h-full object-cover"
//                       src={machine}
//                       alt={`Thresher ${index + 1}`}
//                     />
//                   </div>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex justify-center space-x-2 mt-4">
//         {Array.from({ length: totalDots }, (_, index) => (
//           <button
//             key={index}
//             className={`relative h-3 ${
//               index === currentIndex ? "bg-green-600 w-6" : "bg-gray-300 w-3"
//             } rounded-full transition-all duration-300 ease-in-out`}
//             onClick={() => goToSlide(index)}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageCarousel;
