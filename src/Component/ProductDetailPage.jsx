import React from 'react';
import QuickLinks from './QuickLink';
import Breadcrumbs from './Breadcrumb';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import RelatedProductCarouselComponent from './RelatedProductCarousel';

function ProductDetailPage({ threshers }) {
  const images = [
    'https://i.imgur.com/nkjprq9.png',
    'https://i.imgur.com/IEAum1D.jpeg',
    '	https://i.imgur.com/5haWYRc.jpeg',
    'https://i.imgur.com/IEAum1D.jpeg',
  ];
  const { ProductId } = useParams();
  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [isZoomed, setIsZoomed] = useState(false);

  const thresher = threshers.find(t => t.productId === ProductId);

  const specs = [
    { label: 'Gear Box', value: '21-21 Heavy Duty' },
    { label: 'Drum Size', value: '45 Inch / 49 Inch' },
    { label: 'Basket', value: '1745 mm (5 Feet 8 Inch)' },
    { label: 'Length', value: '5410 mm (17 Feet 9 Inch)' },
    { label: 'Width', value: '2438 mm (8 Feet)' },
    { label: 'Height', value: '2209 mm (7 Feet 3 Inch)' },
  ];

  const features = [
    'Large Sieve Area for Optimum Grain Cleaning.',
    'Faster Unloading System.',
    'High Ground Clearance.',
    'Good working in the light Wet and Soft Fields.',
    'Long Length thresher rotor for complete threshing.',
    'Best quality V-belts, Bearings and accessories used.',
    'Can operate with any tractor above 39 HP.',
    'Heavy Duty Axles.',
    'Highly Fuel Efficient.',
    'Superior Chain Drives.',
  ];

  const breadcrumbPaths = [
    { label: 'Home', href: '/' },
    { label: thresher ? thresher.ModelName : 'Product', href: `/${ProductId}` },
  ];

  if (!thresher) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <div className="container mx-auto p-4 bg-white text-gray-800">
        <Breadcrumbs paths={breadcrumbPaths} />
        <div className="flex flex-col lg:flex-row lg:space-x-12 bg-gray-50 p-4 md:p-6 shadow-md">
          {/* Left side: Carousel */}
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <div
              className="relative overflow-hidden rounded-xl shadow-lg"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
            >
              <img
                src={selectedImage}
                alt="Selected"
                className={`object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 transition-transform duration-500 ${
                  isZoomed ? 'scale-110' : 'scale-100'
                }`}
              />
              {/* Navigation arrows */}
              <button
                className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white bg-opacity-60 text-green-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white hover:bg-gradient-to-r from-green-600 to-green-400 transition-all duration-300"
                onClick={() => {
                  const currentIndex = images.indexOf(selectedImage);
                  const nextIndex = (currentIndex - 1 + images.length) % images.length;
                  setSelectedImage(images[nextIndex]);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white bg-opacity-60 text-green-600 p-2 sm:p-3 rounded-full shadow-lg hover:bg-opacity-100 hover:text-white hover:bg-gradient-to-r from-green-600 to-green-400 transition-all duration-300"
                onClick={() => {
                  const currentIndex = images.indexOf(selectedImage);
                  const nextIndex = (currentIndex + 1) % images.length;
                  setSelectedImage(images[nextIndex]);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            {/* Image thumbnails */}
            <div className="flex space-x-2 mt-4 justify-center">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 cursor-pointer rounded-lg border-b-4 ${
                    selectedImage === img ? 'border-b-green-600' : 'border-b-gray-300'
                  } shadow-sm transform transition-transform duration-300 hover:scale-110`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Right side: Product description */}
          <div className="lg:w-1/2 flex flex-col justify-center space-y-4 md:space-y-6">
            <h1 className="mt-8 text-2xl font-semibold text-gray-800 mb-4">
              {thresher.ModelName}
            </h1>
            <p className="text-gray-700 leading-relaxed">
              {thresher.details.description}
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Get On Road Price
              </button>
              <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 md:px-6 md:py-3 rounded-full shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Download Brochure
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              Disclaimer: These photographs are for illustrative purposes only and may be subject to change.
            </p>
          </div>
        </div>
        <h2 className="mt-8 text-2xl font-semibold mb-4">Technical Specifications</h2>
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full bg-white text-gray-800 shadow-lg rounded-lg border border-gray-300">
            <tbody>
              {specs.map((spec, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-300 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}
                >
                  <td className="px-4 py-3 border-r border-gray-300">{spec.label}</td>
                  <td className="px-4 py-3 border-r border-gray-300">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-gray-100 p-6 shadow-lg mb-12">
          <h3 className="text-2xl font-semibold mb-4">Features</h3>
          <ul className="list-disc list-inside">
            {features.map((feature, index) => (
              <li key={index} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className=" justify-center pt-1 pb-1">
          <QuickLinks />
        </div>

        <div>
          <RelatedProductCarouselComponent/>
        </div>

        <div className="bg-white p-6 shadow-lg">
          <h3 className="text-2xl font-semibold mb-4">Watch Videos</h3>
          <div className="relative w-full overflow-hidden pb-[56.25%] h-0 rounded-xl shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/QK9hM4wU-eU"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailPage;
