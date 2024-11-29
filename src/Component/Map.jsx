import React from 'react';

function Map() {
  return (
    <div className="container mx-auto py-8 px-6 sm:px-8 lg:px-12">
      <h2 className="text-3xl font-bold text-center mb-8 mt-4 text-gray-800">
        Visit Us
      </h2>
      <div className="relative w-full" style={{ paddingBottom: '45.25%' }}> {/* 16:9 Aspect Ratio */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13980.208063654469!2d76.8166126!3d27.5831922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397294b04d338b2b%3A0xcc9c3f44187307c!2sKisan%20Agriculture%20Workshop!5e0!3m2!1sen!2sin!4v1697595514101!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
