import React from 'react';
import { Link } from 'react-router-dom';
import CarouselComponent from './CarouselComponent';
import QuickLinks from './QuickLink';

const ProductPage = () => {
  const videoUrl = "https://www.youtube.com/embed/DHCSpVVPnp0?si=5IXVlz3N_kfypaF_";
  const numberOfVideos = 8;

  const thresherMachines = [
    { name: 'Single Fan Thresher', imgSrc: 'https://i.imgur.com/IEAum1D.jpeg' },
    { name: 'Double Fan Thresher', imgSrc: 'https://i.imgur.com/IEAum1D.jpeg' },
    { name: 'Three Fan Thresher', imgSrc: 'https://i.imgur.com/IEAum1D.jpeg' },
    { name: 'Single Fan with Elevator Thresher', imgSrc: 'https://i.imgur.com/IEAum1D.jpeg' },
    { name: 'Double Fan with Elevator Thresher', imgSrc: 'https://i.imgur.com/IEAum1D.jpeg' },
    { name: 'Three Fan with Elevator Thresher', imgSrc: 'https://i.imgur.com/IEAum1D.jpeg' },
    // Add additional machines as needed
  ];

  return (
    <>
      <CarouselComponent />
      <div className="bg-gray-100 min-h-screen py-3 pb-0 relative">
        {/* Background Image */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 bg-[url('https://i.imgur.com/amI5Tnq.png')] bg-cover bg-no-repeat"
          style={{ zIndex: -1 }}
        ></div>

        <div className="container mx-auto p-6 bg-white rounded-lg rounded-b-none shadow-lg">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
              KISAN Thresher Machines
            </h1>
            <p className="text-gray-700 text-xl leading-relaxed max-w-3xl mx-auto">
              Discover our range of thresher machines designed for different agricultural needs. Choose from single, double, and three fan models, with and without elevators. Each machine is tailored to provide efficiency and reliability in your farming operations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {thresherMachines.map((machine, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl border-b-4 border-green-600"
              >
                <Link to="/technical-specifications" className="block">
                  <img
                    className="h-64 w-full object-cover"
                    src={machine.imgSrc}
                    alt={machine.name}
                  />
                  <div className="p-4">
                    <p className="font-medium text-gray-800 truncate capitalize">
                      {machine.name}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className='pt-10'>
          <QuickLinks />
        </div>
        {/* Google Map Embed */}
        <div className="mt-12">
          <div className="container mx-auto p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Visit Us
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13980.208063654469!2d76.8166126!3d27.5831922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397294b04d338b2b%3A0xcc9c3f44187307c!2sKisan%20Agriculture%20Workshop!5e0!3m2!1sen!2sin!4v1697595514101!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
