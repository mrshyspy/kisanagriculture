import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const imageUrls = [
 "https://i.imgur.com/XMUR1m2.jpeg",
  "https://i.imgur.com/XlL8AiR.jpeg",
  "https://i.imgur.com/Yp96VPg.jpeg",
  "https://i.imgur.com/f072YjR.jpeg",
  "https://i.imgur.com/Z6HS1tQ.jpeg",
  "https://i.imgur.com/77lpp9E.jpeg",
  "https://i.imgur.com/estxTkf.jpeg",
  "https://i.imgur.com/yhY4Xga.jpeg",
  "https://i.imgur.com/DVTdLlh.jpeg",
  "https://i.imgur.com/WNFKBXu.jpeg",
  "https://i.imgur.com/jXkmkkO.jpeg",
  "https://i.imgur.com/PFxNl6G.jpeg",
  "https://i.imgur.com/4aQIAqp.jpeg",
  "https://i.imgur.com/5dQw7q8.jpeg",
  "https://i.imgur.com/UMqQMp6.jpeg",
  "https://i.imgur.com/R7YcI5g.jpeg",
  "https://i.imgur.com/MFnxwz8.jpeg",
  "https://i.imgur.com/kAvYATN.jpeg",
  "https://i.imgur.com/QEVSTyE.jpeg",
  "https://i.imgur.com/2j0XrxR.jpeg",
  "https://i.imgur.com/XP0lxFc.jpeg",
  "https://i.imgur.com/NRJWXPe.jpeg",
  "https://i.imgur.com/ziK5b0k.jpeg",
  "https://i.imgur.com/xamwTiR.jpeg",
  "https://i.imgur.com/yQ0IhBH.jpeg",
  "https://i.imgur.com/fhvCBr5.jpeg",
  "https://i.imgur.com/H0RBZu8.jpeg",
  "https://i.imgur.com/CbxrYde.jpeg",
  "https://i.imgur.com/5Pk04vG.jpeg",
  "https://i.imgur.com/VVvFEN4.jpeg",
  "https://i.imgur.com/HYpo577.jpeg",
  "https://i.imgur.com/S0DaBRZ.jpeg",
  "https://i.imgur.com/83yXxAf.jpeg",
  "https://i.imgur.com/Dpwo88x.jpeg",
  "https://i.imgur.com/cbmawUo.jpeg",
  "https://i.imgur.com/ZyAQW35.jpeg",
  "https://i.imgur.com/VD4f4VU.jpeg",
  "https://i.imgur.com/C87gJXg.jpeg",
  "https://i.imgur.com/bWQtQzC.jpeg",
  "https://i.imgur.com/Cgzqe1s.jpeg",
  "https://i.imgur.com/OXS3Jac.jpeg",
  "https://i.imgur.com/NC6bUfF.jpeg",
  "https://i.imgur.com/0KHXwqZ.jpeg",
  "https://i.imgur.com/ctSVafQ.jpeg",
  "https://i.imgur.com/QxaPIBi.jpeg",
  "https://i.imgur.com/Rz2895H.jpeg",
  "https://i.imgur.com/fm2RI9Z.jpeg",
  "https://i.imgur.com/Ru4ch2X.jpeg",
  "https://i.imgur.com/UDDuGGn.jpeg",
  "https://i.imgur.com/D58oIMi.jpeg",
  "https://i.imgur.com/9cgIu10.jpeg",
  "https://i.imgur.com/FocguYk.jpeg",
  "https://i.imgur.com/t1ndz1Q.jpeg"
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
