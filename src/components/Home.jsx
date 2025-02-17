import React from "react";
import Resume from "./images/Resume.pdf";
import myImage from "./images/myImage.jpg"; // Replace with the actual path to your image
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiCodeforces, SiCodechef, SiLeetcode, SiCodingninjas } from "react-icons/si";

export default function Home() {
  return (
    <>
    <div className="h-10 "></div>
    <div className="relative flex items-center justify-center h-screen bg-cover bg-center ">
      {/* Dark Overlay (No Blur on Outer Div) */}
      
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Main Content */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="flex flex-col sm:flex-row items-center max-w-6xl mx-auto p-6 rounded-lg">
          
          {/* Image Section */}
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-8">
            <img
              src={myImage}
              alt="Rohit"
              className="w-60 h-60 rounded-full object-cover shadow-lg border-2 border-white backdrop-blur-sm"
            />
          </div>

          {/* Content Section */}
          <div className="text-center sm:text-left text-white">
            <h1 className="text-4xl font-bold mb-4">Hello, I am Rohit</h1>
            <p className="text-lg sm:text-xl mb-4">
              I am a tech enthusiast with a passion for competitive coding and
              software development. My perpetual curiosity drives me to stay
              up-to-date with the latest technologies and continuously enhance
              my skills. I am dedicated to leveraging my knowledge and
              experience to create innovative solutions and contribute to the
              tech community.
            </p>
            
            {/* Animated Titles */}
            <div className="text-lg sm:text-xl font-semibold mb-4">
              <div className="typewriter">
                <span className="typewriter-text">Software Engineer</span>
                <span className="typewriter-text">Full-Stack Developer</span>
              </div>
            </div>

            {/* Resume Button */}
            <p className="mt-6">
              <a
                className="bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 transition"
                href={Resume}
                download="Rohit_Resume.pdf"
              >
                Resume
              </a>
            </p>

            {/* Social Icons */}
            <div className="flex space-x-6 mt-10">
              <a href="https://www.linkedin.com/in/rohit-ruhela-2ab553257/" target="_blank" rel="noopener noreferrer" className="text-3xl text-blue-400 hover:text-blue-500">
                <FaLinkedin />
              </a>
              <a href="https://github.com/rohitruhela1" target="_blank" rel="noopener noreferrer" className="text-3xl text-gray-300 hover:text-gray-200">
                <FaGithub />
              </a>
              <a href="https://codeforces.com/profile/rohitruhela" target="_blank" rel="noopener noreferrer" className="text-3xl text-red-300 hover:text-red-400">
                <SiCodeforces />
              </a>
              <a href="https://www.codechef.com/users/rohitruhela35" target="_blank" rel="noopener noreferrer" className="text-3xl text-orange-300 hover:text-orange-400">
                <SiCodechef />
              </a>
              <a href="https://leetcode.com/u/rohitruhela35/" target="_blank" rel="noopener noreferrer" className="text-3xl text-yellow-300 hover:text-yellow-400">
                <SiLeetcode />
              </a>
              <a href="https://www.naukri.com/code360/profile/b2858e8e-df92-4b26-b071-d69a6d333df3" target="_blank" rel="noopener noreferrer" className="text-3xl text-green-300 hover:text-green-400">
                <SiCodingninjas />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
}
