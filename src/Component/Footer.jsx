import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { MapPin, Phone, Mail } from "lucide-react";
import threshers from "./Threshers";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Footer Widget 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer-widget flex flex-col items-start">
              <Link to="/" className="flex-none">
                <div className="relative w-full h-16 sm:h-20">
                  <img
                    alt="logo"
                    src="https://i.imgur.com/Z5Hf8eH.png"
                    className="object-contain h-full"
                  />
                </div>
              </Link>
              <p className="text-sm text-gray-200 pt-4">
                Our company manufactures all kinds of threshers such as single
                fan, double fan, three fan etc.
              </p>
            </div>
          </div>
          {/* Footer Widget 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer-widget">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="list-none space-y-2">
                <li>
                  <Link
                    to="/contact-us"
                    className="text-white hover:text-gray-300 hover:underline transition"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-white hover:text-gray-300 hover:underline transition"
                  >
                    Gallery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Widget 3 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer-widget">
              <h3 className="text-lg font-semibold mb-4">Categories</h3>
              <ul className="list-none space-y-2">
                {threshers.map((thresher) => (
                  <li key={thresher.productId} className="cursor-pointer">
                    <Link
                      to={`/${thresher.productId}`}
                      className="text-white hover:text-gray-300 hover:underline transition"
                    >
                      {thresher.ModelName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Footer Widget 4 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer-widget">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 flex-shrink-0" />
                  <a
                    href="https://www.google.com/maps/place/Kisan+Agriculture+Workshop/@27.5831875,76.8191875,2474m/data=!3m1!1e3!4m6!3m5!1s0x397294b04d338b2b:0xcc9c3f44187307c!8m2!3d27.5831875!4d76.8191875!16s%2Fg%2F11l6tm33d1?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-100 transition-colors"
                  >
                    Ramgarh-Govindgarh Road, Ramgarh, Alwar Distt. Rajasthan
                  </a>
                </li>

                <li className="flex items-center">
                  <Phone className="mr-3 h-5 w-5" />
                  <div>
                    <a
                      href="tel:+919828719163"
                      className="text-white hover:text-gray-100 transition-colors"
                    >
                      +91 9828-719163
                    </a>{" "}
                    ,{" "}
                    <a
                      href="tel:+919929877244"
                      className="text-white hover:text-gray-100 transition-colors"
                    >
                      +91 9929-877244
                    </a>
                  </div>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 h-5 w-5" />
                  <a
                    href="mailto:Kisanagriculture.com@gmail.com"
                    className="text-white hover:text-gray-100 transition-colors"
                  >
                    Kisanagriculture.com@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-500 text-center text-sm text-gray-200">
          <p>
            &copy; {new Date().getFullYear()} Kisan Agriculture Workshop. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
