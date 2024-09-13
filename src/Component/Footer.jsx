import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import threshers from "./Threshers";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Footer Widget 1 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer-widget flex flex-col items-start">
              <Link to="/" className="flex-none mb-4">
                <img
                  alt="logo"
                  src="https://i.imgur.com/Z5Hf8eH.png"
                  className="w-32 h-auto object-contain"
                />
              </Link>
              <p className="text-sm text-gray-400">
                We manufacture a wide range of threshers including single fan, double fan, and three fan models.
              </p>
            </div>
          </div>
          {/* Footer Widget 2 */}
          <div className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
            <div className="footer-widget">
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
              <ul className="list-none space-y-2">
                <li>
                  <Link
                    to="/contact-us"
                    className="text-gray-300 hover:text-green-400 hover:underline transition"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className="text-gray-300 hover:text-green-400 hover:underline transition"
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
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Categories</h3>
              <ul className="list-none space-y-2">
                {threshers.map((thresher) => (
                  <li key={thresher.productId}>
                    <Link
                      to={`/${thresher.productId}`}
                      className="text-gray-300 hover:text-green-400 hover:underline transition"
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
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="mr-3 h-6 w-6 text-green-400" />
                  <a
                    href="https://www.google.com/maps/place/Kisan+Agriculture+Workshop/@27.5831875,76.8191875,2474m/data=!3m1!1e3!4m6!3m5!1s0x397294b04d338b2b:0xcc9c3f44187307c!8m2!3d27.5831875!4d76.8191875!16s%2Fg%2F11l6tm33d1?entry=ttu&g_ep=EgoyMDI0MDkwOC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Ramgarh-Govindgarh Road, Ramgarh, Alwar Distt. Rajasthan
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-3 h-6 w-6 text-green-400" />
                  <div>
                    <a
                      href="tel:+919828719163"
                      className="text-gray-300 hover:text-green-400 transition-colors"
                    >
                      +91 9828-719163
                    </a>{" "}
                    ,{" "}
                    <a
                      href="tel:+919929877244"
                      className="text-gray-300 hover:text-green-400 transition-colors"
                    >
                      +91 9929-877244
                    </a>
                  </div>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-3 h-6 w-6 text-green-400" />
                  <a
                    href="mailto:Kisanagriculture.com@gmail.com"
                    className="text-gray-300 hover:text-green-400 transition-colors"
                  >
                    Kisanagriculture.com@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Kisan Agriculture Workshop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
