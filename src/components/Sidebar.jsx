import React from "react";
import { IoMdClose } from "react-icons/io";

function Sidebar({ setOpenSidebar }) {
  return (
    <div className="fixed h-screen bg-gray-900 top-0 bottom-0 right-0 w-[60%] md:w-[40%] flex justify-center items-center shadow-xl z-40 transform">
      <div
        className="absolute top-6 right-6 text-2xl text-white"
        onClick={() => setOpenSidebar(false)} // Close the sidebar
      >
        <IoMdClose />
      </div>
      <div className="flex flex-col gap-6 text-center text-lg text-white">
        <a href="#about" onClick={() => setOpenSidebar(false)}>
          About Me
        </a>
        <a href="#projects" onClick={() => setOpenSidebar(false)}>
          Projects
        </a>
        <a href="#contact" onClick={() => setOpenSidebar(false)}>
          Contact
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
