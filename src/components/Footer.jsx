import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()}   Quilab. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="https://www.facebook.com/mac.quilab" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/mark-lourence-quilab-72a891369/" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/macquilab" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
