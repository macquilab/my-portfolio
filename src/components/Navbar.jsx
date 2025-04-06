import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Navbar() {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <nav className="navbar flex items-center justify-between text-white px-6 py-4 md:px-10 md:py-6 lg:px-16 lg:py-6 w-full fixed z-30 backdrop-blur-sm">
      <div className="text-2xl font-bold w-auto h-auto">
        <a href="#hero">VAJ</a>
      </div>
      <div className="flex">
        <div className="w-full gap-20 hidden lg:flex lg:items-center font-medium">
          <a href="#about" className="hover:text-gray-400">
            About Me
          </a>
          <a href="#projects" className="hover:text-gray-400">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-400">
            Contact
          </a>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7 lg:hidden text-main-color dark:text-light-main-color"
            onClick={() => setOpenSidebar(true)} // Open the sidebar
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            ></path>
          </svg>

          {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
