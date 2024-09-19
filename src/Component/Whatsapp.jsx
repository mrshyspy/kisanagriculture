import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '+917665373702';
  const message = 'Hello! I would like to know more about your services.';

  return (
    <a
      href={`https://api.whatsapp.com/send?phone=+917665373702&text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded-lg font-semibold text-lg hover:bg-green-600 transition duration-300 ease-in-out"
    >
      <svg
        className="w-6 h-6 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 4h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z"
        />
      </svg>
      Send WhatsApp Message
    </a>
  );
};

export default WhatsAppButton;
