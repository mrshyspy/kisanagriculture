import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const QuickLinks = () => {
  return (
    <div className="bg-green-600 p-4 sm:p-6 rounded-lg shadow-md mx-auto">
      <ul className="flex justify-around text-lg sm:text-2xl">
        <li>
          <a href="/get-in-touch/dealer-locator" className="flex items-center text-white">
            <FaMapMarkerAlt className="mr-2 sm:mr-4 text-white" />
            Get location
          </a>
        </li>
        <li>
          <a href="tel:1800 2100 700" className="flex items-center text-white">
            <FaPhoneAlt className="mr-2 sm:mr-4 text-white" />
            Call Us Now
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
