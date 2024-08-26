import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          
          {/* Footer Widget 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer-widget flex flex-col items-start">
              <a href="https://www.Kisan.com" className="mb-4">
                <img
                  src="/img/89/1696827795logo.png?h=100"
                  width="100"
                  height="100"
                  alt="Kisan Manufacturing Industries Pvt. Ltd."
                  className="object-contain"
                />
              </a>
              <p className="text-sm text-gray-200">
                Our company manufactures all kinds of threshers such as mini combine, rotavator, straw reaper, etc.
              </p>
            </div>
          </div>
          
          {/* Footer Widget 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer-widget">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="list-none space-y-2">
                <li><a href="/about-us" className="text-white hover:text-gray-300 hover:underline transition">About Us</a></li>
                <li><a href="/our-products" className="text-white hover:text-gray-300 hover:underline transition">Our Products</a></li>
                <li><a href="/quality-policy" className="text-white hover:text-gray-300 hover:underline transition">Quality Policy</a></li>
                <li><a href="/infrastructure" className="text-white hover:text-gray-300 hover:underline transition">Infrastructure</a></li>
                <li><a href="/business-enquiry" className="text-white hover:text-gray-300 hover:underline transition">Business Enquiry</a></li>
                <li><a href="/contact-us" className="text-white hover:text-gray-300 hover:underline transition">Contact Us</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Widget 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer-widget">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="list-none space-y-2">
                <li><a href="/multicrop-thresher" className="text-white hover:text-gray-300 hover:underline transition">Multicrop Thresher</a></li>
                <li><a href="/groundnut-thresher" className="text-white hover:text-gray-300 hover:underline transition">Groundnut Thresher</a></li>
                <li><a href="/paddy-thresher" className="text-white hover:text-gray-300 hover:underline transition">Paddy Thresher</a></li>
                <li><a href="/maize-thresher" className="text-white hover:text-gray-300 hover:underline transition">Maize Thresher</a></li>
                <li><a href="/rotavator" className="text-white hover:text-gray-300 hover:underline transition">Rotavator</a></li>
                <li><a href="/groundnut-digger" className="text-white hover:text-gray-300 hover:underline transition">Groundnut Digger</a></li>
              </ul>
            </div>
          </div>

          {/* Footer Widget 4 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer-widget">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <p className="flex items-center text-white text-sm"><FaMapMarkerAlt className="mr-3" /><a href="https://www.google.com/maps/place/Kisan+MANUFACTURING+INDUSTRIES+PVT.LTD/@29.4996686,73.4500232,15z/data=!4m5!3m4!1s0x0:0x230f22f5764c37d0!8m2!3d29.4996686!4d73.4500232" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 hover:underline transition">Opposite RIICO Industrial Area, 32 NP, Raisinghnagar, Distt. Rajasthan</a></p>
                <p className="flex items-center text-white text-sm"><FaPhone className="mr-3" /> <a href="tel:18002704505" className="hover:text-gray-300 hover:underline transition">Toll Free: 1800 270 4505</a></p>
                <p className="flex items-center text-white text-sm"><FaPhone className="mr-3" /> <a href="tel:+919414503972" className="hover:text-gray-300 hover:underline transition">+91 94145-03972</a>, <a href="tel:+918239300035" className="hover:text-gray-300 hover:underline transition">+91 82393-00035</a></p>
                <p className="flex items-center text-white text-sm"><FaEnvelope className="mr-3" /><a href="mailto:Kisanthreshar@gmail.com" className="hover:text-gray-300 hover:underline transition">Kisanthreshar@gmail.com</a></p>
              </div>
            </div>
          </div>

        </div>
        <div className="text-center mt-8 text-gray-200 text-sm">
          <p>&copy; {new Date().getFullYear()} Kisan Manufacturing Industries Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
