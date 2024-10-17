import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {  FaYoutube, FaFacebook, FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
const ContactUs = () => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <>
      <section className="mb-16 md:mb-24 lg:mb-32">
        <div
          id="map"
          className="relative h-64 sm:h-80 lg:h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13980.208063654469!2d76.8166126!3d27.5831922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397294b04d338b2b%3A0xcc9c3f44187307c!2sKisan%20Agriculture%20Workshop!5e0!3m2!1sen!2sin!4v1697595514101!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="relative bg-gray-100 rounded-lg px-4 py-8 sm:px-6 sm:py-12 lg:px-12 lg:py-16 shadow-md border border-gray-300 backdrop-blur-md -mt-16 md:-mt-20 lg:-mt-32">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-green-600">
                Get in Touch
              </h2>
              <p className="mt-4 text-sm sm:text-base text-gray-600">
                Feel free to reach out to us for any inquiries or assistance. We're here to help!
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              <div className="bg-gray-100 rounded-lg p-4 sm:p-6">
                <ul className="space-y-4 sm:space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 text-green-600 items-center justify-center">
                      <FaMapMarkerAlt className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        Our Address
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">Govingarh-Road, Ramgarh</p>
                      <p className="text-sm sm:text-base text-gray-600">Alwar, Rajasthan</p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 text-green-600 items-center justify-center">
                      <FaPhoneAlt className="h-6 w-6 sm:h-8 sm:w-8" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                        Contact
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">Mobile: +91 9828719163, +91 7665373702</p>
                      <p className="text-sm sm:text-base text-gray-600">
                        Mail: kisanagriculture.com@gmail.com
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 sm:mb-6">
                  Follow Us
                </h3>
                <div className="flex items-center gap-4 sm:gap-6">
                  <a
                    className="text-gray-700 hover:text-green-600"
                    aria-label="Visit YouTube"
                    href="https://www.youtube.com/c/KISANAgricultureWorkshop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube className="h-6 w-6 sm:h-8 sm:w-8" />
                  </a>
                  <a
                    className="text-gray-700 hover:text-green-600"
                    aria-label="Visit Facebook"
                    href="https://www.facebook.com/profile.php?id=100094649059141"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook className="h-6 w-6 sm:h-8 sm:w-8" />
                  </a>
                  <a
                    className="text-gray-700 hover:text-green-600"
                    aria-label="Visit Instagram"
                    href="https://www.instagram.com/kisan_agriculture_workshop"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="h-6 w-6 sm:h-8 sm:w-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
