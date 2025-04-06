import React from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";

function Contact() {
  return (
    <div className="bg-gray-950 text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-white mb-4">Let's Talk</h3>
            <p>
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-white-400 mr-2 text-3xl"></FaEnvelope>
              <a
                href="mailto:youremail@example.com"
                className="hover:underline"
              >
                quilabmarklourence@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-white-400 mr-2 text-3xl"></FaPhone>
              <span>+63-955-687-3950</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-white-400 mr-2 text-3xl"></FaMapMarkedAlt>
              <span>Binangonan, Rizal</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full p-2  bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-blue-900"
                  placeholder="Enter your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2  bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-blue-900"
                  placeholder="Enter your Email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full p-2  bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-blue-900"
                  rows="5"
                  placeholder="Enter You Message"
                />
              </div>
              <button className="button font-semibold hover:scale-105 shadow-white border-2 text-main-color dark:text-text-color border-accent-color text-center text-sm py-2 px-6 lg:px-10 mt-6 transform transition-transform duration-300">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
