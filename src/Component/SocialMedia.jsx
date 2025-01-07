// import React from "react";
// import { FaYoutube, FaFacebook } from "react-icons/fa";

// export default function SocialMediaLinks() {
//   return (
//     <div className="w-full max-w-md mx-auto p-6 space-y-4">
//       <h2 className="text-3xl font-bold text-center  mt-6 mb-4 text-gray-800">
//         Connect with us!{" "}
//       </h2>
//       <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
//         <a
//           href="https://www.youtube.com/@KISANAgricultureWorkshop"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 my-2 bg-red-600 text-white rounded-md hover:bg-red-700"
//         >
//           <FaYoutube className="w-5 h-5" />
//           <span>YouTube</span>
//         </a>
//         <a
//           href="https://www.facebook.com/profile.php?id=100094649059141"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
//         >
//           <FaFacebook className="w-5 h-5" />
//           <span>Facebook</span>
//         </a>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { FaFacebookF, FaYoutube, FaInstagram } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Connect With Us</h2>
        <p className="text-gray-600 mb-8">Follow us on social media to stay updated!</p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 text-4xl transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-red-600 text-4xl transition"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-pink-600 text-4xl transition"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
