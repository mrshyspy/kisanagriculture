import React, { useState, useRef, useEffect } from "react";
import { useSwipeable } from "react-swipeable"; // Import swipeable hook
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const imageUrls = [
  "https://i.imgur.com/qOt4WTX.jpeg",
  "https://i.imgur.com/lRq04Pw.jpeg",
  "https://i.imgur.com/h9w9ght.jpeg",
  "https://i.imgur.com/o4tdl2J.jpeg",
  "https://i.imgur.com/8pwExIa.jpeg",
  "https://imgur.com/koUbuBT.png",
  "https://imgur.com/A2q7uo6.png",
  "https://imgur.com/ofXOY8A.png",
  "https://imgur.com/zs0DiuC.png",
  "https://imgur.com/I3OJBJ7.png",
];

export default function ImageSlider({ scrollSpeed = 1 }) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  let totalScrollWidth = 0;

  // Swipe handling using react-swipeable
  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe(-1), // Swipe left
    onSwipedRight: () => handleSwipe(1), // Swipe right
    onTouchStartOrMove: () => setIsPaused(true), // Pause scrolling while touching
    onTouchEnd: () => setIsPaused(false), // Resume scrolling after touch ends
    preventDefaultTouchmoveEvent: true,
    trackMouse: true, // Enable swipe detection with mouse for testing
  });

  const scroll = () => {
    if (!isPaused && containerRef.current) {
      containerRef.current.scrollLeft += scrollSpeed;

      if (containerRef.current.scrollLeft >= totalScrollWidth / 2) {
        containerRef.current.scrollLeft = 0;
      }
    }
    requestAnimationFrame(scroll);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      totalScrollWidth = container.scrollWidth;
      requestAnimationFrame(scroll);

      const handleScroll = () => {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0; // Reset scroll position
        }
      };

      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  const handleSwipe = (direction) => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      containerRef.current.scrollLeft += direction * width * 0.8; // Adjust scroll based on swipe
    }
  };

  return (
    <Link to="/gallery"> {/* Use Link from react-router-dom */}
      <div className="w-full overflow-hidden cursor-pointer" {...handlers}>
        <div
          ref={containerRef}
          className={`flex gap-4 ${isPaused ? "" : "animate-scroll"}`}
          style={{
            width: "max-content",
          }}
        >
          {[...imageUrls, ...imageUrls].map((url, index) => (
            <div key={index} className="flex-shrink-0">
              <img
                src={url}
                alt={`Image ${index + 1}`}
                width={300}
                height={200}
                loading="lazy" // Lazy load images
                className="rounded-lg my-4"
              />
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
