import React from 'react';
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';

const QuickLinks = () => {
  return (
    <div className="bg-green-600 p-3 sm:p-6 rounded-full shadow-md max-w-full sm:max-w-lg mx-6 sm:mx-auto">
      <ul className="flex justify-around text-xl sm:text-2xl">
        <li>
          <a href="https://wa.me/+917665373702" className="flex items-center text-white">
            <FaWhatsapp className="mr-3 sm:mr-4 text-white" />
            Message Us
          </a>
        </li>
        <li>
          <a href="tel:+919828719163" className="flex items-center text-white">
            <FaPhoneAlt className="mr-3 sm:mr-4 text-white" />
            Call Now
          </a>
        </li>
      </ul>
    </div>
  );
};

export default QuickLinks;
