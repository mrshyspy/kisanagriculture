import React from 'react';
import ProductDetail from './ProductDetail';
import CallToActions from './CallToAction';
import Breadcrumbs from './Breadcrumb'; // Import the Breadcrumbs component

function TechnicalSpecificationsPage() {
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

  // Define breadcrumb paths
  const breadcrumbPaths = [
    { label: 'Home', href: '/' },
    { label: 'Technical Specifications', href: '/technical-specifications' },
  ];

  return (
    <>
      <div className="container mx-auto p-6 bg-white text-gray-800">
        <Breadcrumbs paths={breadcrumbPaths} /> {/* Add Breadcrumbs here */}
        <ProductDetail />
        <h2 className="mt-8 text-xl md:text-2xl font-semibold mb-4">Technical Specifications</h2>
        <div className="overflow-x-auto mb-12">
          <table className="min-w-full bg-white text-gray-800 shadow-lg rounded-lg border border-gray-300">
            <tbody>
              {specs.map((spec, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-300 ${index % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}
                >
                  <td className="px-4 py-3 border-r border-gray-300 text-sm md:text-base">{spec.label}</td>
                  <td className="px-4 py-3 border-r border-gray-300 text-sm md:text-base">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-green-100 p-6 shadow-lg mb-12">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Features</h3>
          <ul className="text-center text-sm md:text-base" style={{ listStyleType: 'none', paddingLeft: '0' }}>
            {features.map((feature, index) => (
              <li key={index} className="mb-2">{feature}</li>
            ))}
          </ul>
        </div>
        <div className="absolute pt-4">
          <CallToActions />
        </div>
        <div className="bg-white p-6 shadow-lg">
          <h3 className="text-lg md:text-xl font-semibold mb-4">Watch Videos</h3>
          <div className="relative w-full overflow-hidden pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/4n32giNG1rw?si=mFkbgvKpSr52oVWE"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}

export default TechnicalSpecificationsPage;
