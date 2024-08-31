import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-base text-gray-600 sm:text-lg">
            Feel free to reach out to us for any inquiries or assistance. We're here to help!
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="md:w-1/2 bg-white rounded-lg p-6">
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-600 text-white shadow-md">
                  <FaMapMarkerAlt className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Our Address</h3>
                  <p className="text-gray-600">Govingarh-Road, Ramgarh</p>
                  <p className="text-gray-600">Alwar, Rajasthan</p>
                </div>
              </li>
              <li className="flex items-start space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-600 text-white shadow-md">
                  <FaPhoneAlt className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
                  <p className="text-gray-600">Mobile: +91 9828719163</p>
                  <p className="text-gray-600">Mail: tailnext@gmail.com</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-gray-100 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 md:text-2xl">
              Visit Us
            </h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13980.208063654469!2d76.8166126!3d27.5831922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397294b04d338b2b%3A0xcc9c3f44187307c!2sKisan%20Agriculture%20Workshop!5e0!3m2!1sen!2sin!4v1697595514101!5m2!1sen!2sin"
              width="100%"
              height="300"
              allowFullScreen
              loading="lazy"
              style={{ border: 0, borderRadius: '8px' }}
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
