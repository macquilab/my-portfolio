import React from "react";
import heroImage from "../assets/heroImage.png";
import CV from "../assets/Quilab - Internship CV.pdf"

function Hero() {
  return (
    <div
      className="bg-gray-950 text-white text-center flex items-center justify-center py-16 h-screen"
      id="hero"
    >
      <div className="m-8">
        <img
          src={heroImage}
          className="mx-auto mb-8 h-48 w-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
          alt="Profile"
        />
        <h1 className="text-4xl font-bold">
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r  from-blue-900 to-violet-900">
            Viktor Arcane Jisas
          </span>
          , Front-End Developer
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          I specialize in building modern and responsive web application
        </p>
        <div className="mt-8 space-x-4">
          <a href={CV} target="_blank" rel="noopener noreferrer">
            <button className="button font-semibold hover:scale-105 shadow-white border-2 text-main-color dark:text-text-color border-accent-color text-center text-sm py-4 px-6 lg:px-10 mt-6 transform transition-transform duration-300">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
