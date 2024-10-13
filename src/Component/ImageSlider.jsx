import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const imageUrls = [
  "https://i.imgur.com/qOt4WTX.jpeg",
  "https://i.imgur.com/lRq04Pw.jpeg",
  "https://i.imgur.com/h9w9ght.jpeg",
  "https://i.imgur.com/o4tdl2J.jpeg",
  "https://i.imgur.com/8pwExIa.jpeg",
  // "https://i.imgur.com/UuIURpI.jpeg",
  // "https://i.imgur.com/qZqrYGA.jpeg",
  // "https://i.imgur.com/yfwOFxV.jpeg",
  // "https://i.imgur.com/qZqrYGA.jpeg",
  // "https://i.imgur.com/yfwOFxV.jpeg",
  // "https://i.imgur.com/2HVpZPI.jpeg",
  // "https://i.imgur.com/UuIURpI.jpeg",
  // "https://i.imgur.com/TVqRY48.jpeg",
  // "https://i.imgur.com/8pwExIa.jpeg",
  // "https://i.imgur.com/2BYly07.png",
  // "https://i.imgur.com/N6y6DAs.jpeg",
  // "https://i.imgur.com/bbcxBen.jpeg",
  // "https://i.imgur.com/jZWCa2Y.jpeg",
  // "https://imgur.com/xIrBAGR.png",
  // "https://imgur.com/Bu6SVhp.png",
  // "https://imgur.com/AMlx4in.png",
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
        if (
          container.scrollLeft + container.clientWidth >=
          container.scrollWidth
        ) {
          container.scrollLeft = 0; // Reset scroll position
        }
      };

      container.addEventListener("scroll", handleScroll);

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return (
    <Link to="/gallery"> {/* Use Link from react-router-dom */}
      <div className="w-full overflow-hidden cursor-pointer">
        <div
          ref={containerRef}
          className={`flex gap-4 ${isPaused ? "" : "animate-scroll"}`}
          style={{
            width: "max-content",
          }}
        >
          {[...imageUrls,...imageUrls,...imageUrls,...imageUrls,...imageUrls,...imageUrls,...imageUrls,...imageUrls].map((url, index) => (
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
