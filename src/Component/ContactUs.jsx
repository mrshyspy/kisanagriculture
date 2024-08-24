import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <section className="bg-white" id="contact">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
            
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-gray-800 text-3xl sm:text-5xl">
              Get in Touch
            </h2>
            
          </div>
        </div>
        <div className="flex items-stretch justify-center">
          <div className="grid md:grid-cols-2">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg text-gray-800 dark:text-slate-800">
              Feel free to reach out to us for any inquiries or assistance. We're here to help!
              </p>
              <ul className="mb-6 md:mb-0">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-green-600 text-gray-50">
                    <FaMapMarkerAlt className="h-6 w-6" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-800 dark:text-gray-800">Our Address</h3>
                    <p className="text-gray-600 dark:text-slate-400">1230 Maecenas Street Donec Road</p>
                    <p className="text-gray-600 dark:text-slate-400">New York, EEUU</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-green-600 text-gray-50">
                    <FaPhoneAlt className="h-6 w-6" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-gray-800">Contact</h3>
                    <p className="text-gray-600 dark:text-slate-400">Mobile: +91 9828719163</p>
                    <p className="text-gray-600 dark:text-slate-400">Mail: tailnext@gmail.com</p>
                  </div>
                </li>
                
              </ul>
            </div>
            <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
              <h2 className="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
              <form id="contactForm">
                <div className="mb-6">
                  <div className="mx-0 mb-1 sm:mb-4">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input
                        type="text"
                        id="name"
                        autoComplete="given-name"
                        placeholder="Your name"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="name"
                      />
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
                      <input
                        type="email"
                        id="email"
                        autoComplete="email"
                        placeholder="Your email address"
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="mx-0 mb-1 sm:mb-4">
                    <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                    ></textarea>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white px-6 py-3 font-xl rounded-full sm:mb-0"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
