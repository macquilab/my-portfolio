import React from "react";
import heroImage from "../assets/heroImage.png";
import ReactIcon from "../assets/react-original.svg";
import HtmlIcon from "../assets/html5-original.svg";
import CssIcon from "../assets/css3-original.svg";
import TailWindIcon from "../assets/tailwindcss-original.svg";
import PhpIcon from "../assets/php-original.svg";
import JavaSciptIcon from "../assets/javascript-plain.svg";
import FigmaIcon from "../assets/figma-original.svg";

function About() {
  return (
    <div className="bg-gray-950 text-white flex items-center py-16" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12 mt-4">About Me</h2>
        <div className="flex flex-col lg:flex-row gap-14">
          <div className="flex flex-col items-start gap-4 lg:w-[60%]">
            <h1 className="text-2xl font-bold">Hello!</h1>
            <p>
              I am Mark Lourence Quilab, a 21-year-old coding enthusiast from
              Binangonan, Rizal. I am currently pursuing a Bachelor of Science
              in Information Technology at the University of Rizal System.
            </p>
            <p>
              My journey into coding began in 2021, driven by a deep curiosity
              for building websites and exploring the vast possibilities of
              programming languages. Since then, I’ve been committed to not just
              writing code but creating meaningful and innovative solutions.
            </p>
            <p>
              Here, you’ll find a collection of projects that reflect my passion
              and dedication to software development. From applications to
              websites, each project represents a step forward in my growth as a
              developer and showcases my ever-expanding skillset.
            </p>
            <button className="button font-semibold hover:scale-105 shadow-white border-2 text-main-color dark:text-text-color border-accent-color text-center text-sm py-4 px-6 lg:px-10 mt-6 transform transition-transform duration-300">
              Download CV
            </button>
          </div>
          <div className="lg:w-[40%]">
            <h1 className="text-white text-lg font-bold mb-4 text-center">
              Technologies
            </h1>
            <div className="grid grid-cols-3 gap-10 mt-10">
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <img
                  src={HtmlIcon}
                  alt="HTML"
                  className="w-12 h-12 hover:scale-110 transform transition-transform duration-300"
                />
                <h2 className="text-white text-xs">HTML</h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <img
                  src={CssIcon}
                  alt="CSS"
                  className="w-12 h-12 hover:scale-110 transform transition-transform duration-300"
                />
                <h2 className="text-white text-xs">CSS</h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <img
                  src={JavaSciptIcon}
                  alt="JavaScript"
                  className="w-12 h-12 hover:scale-110 transform transition-transform duration-300"
                />
                <h2 className="text-white text-xs">JavaScript</h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <img
                  src={PhpIcon}
                  alt="PHP"
                  className="w-12 h-12 hover:scale-110 transform transition-transform duration-300"
                />
                <h2 className="text-white text-xs">PHP</h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <img
                  src={ReactIcon}
                  alt="ReactJs"
                  className="w-12 h-12 hover:scale-110 transform transition-transform duration-300"
                />
                <h2 className="text-white text-xs">ReactJs</h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <img
                  src={TailWindIcon}
                  alt="TailwindCSS"
                  className="w-12 h-12 hover:scale-110 transform transition-transform duration-300"
                />
                <h2 className="text-white text-xs">Tailwind CSS</h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-2 text-center">
                <img
                  src={FigmaIcon}
                  alt="Figma"
                  className="w-12 h-12 hover:scale-110 transform transition-transform duration-300"
                />
                <h2 className="text-white text-xs">Figma</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
