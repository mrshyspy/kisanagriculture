import React, { useState, useRef, useEffect } from 'react';

const imageUrls = [
  'https://imgur.com/xIrBAGR.png',
  'https://imgur.com/Bu6SVhp.png',
  'https://imgur.com/AMlx4in.png',
  'https://imgur.com/koUbuBT.png',
  'https://imgur.com/A2q7uo6.png',
  'https://imgur.com/ofXOY8A.png',
  'https://imgur.com/zs0DiuC.png',
  'https://imgur.com/I3OJBJ7.png',
];

export default function Carousel({ scrollSpeed = 1 }) {
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);
  let totalScrollWidth = 0;

  const handleTouchStart = (e) => {
    setIsPaused(true);
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (containerRef.current) {
      const touchDiff = touchStart - touchEnd;
      containerRef.current.scrollLeft += touchDiff;
    }
    setIsPaused(false);
  };

  const scroll = () => {
    if (!isPaused && containerRef.current) {
      containerRef.current.scrollLeft += scrollSpeed;

      // If scrolled to the end of the second set of images, reset to the beginning
      if (containerRef.current.scrollLeft >= totalScrollWidth / 2) {
        containerRef.current.scrollLeft = 0;
      }
    }
    requestAnimationFrame(scroll);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      totalScrollWidth = container.scrollWidth; // Total width of the doubled images
      requestAnimationFrame(scroll); // Start scrolling

      const handleScroll = () => {
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
          container.scrollLeft = 0; // Reset scroll position
        }
      };

      container.addEventListener('scroll', handleScroll);

      return () => {
        container.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={containerRef}
        className={`flex gap-4 ${isPaused ? '' : 'animate-scroll'}`}
        style={{
          width: 'max-content',
          touchAction: 'pan-x',
        }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {[...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls, ...imageUrls].map((url, index) => (
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
  );
}
