import React from "react";
import Resume from "./images/Resume.pdf";
import myImage from "./images/myImage.jpg"; // Replace with the actual path to your image
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  SiCodeforces,
  SiCodechef,
  SiLeetcode,
  SiCodingninjas,
} from "react-icons/si";

export default function Home({ mode }) {
  return (
    <div
      className={`relative flex items-center justify-center h-screen bg-cover bg-center ${
        mode ? "text-gray-300" : "text-gray-900"
      }`}
    >
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="flex flex-col sm:flex-row items-center max-w-6xl mx-auto">
          {/* Image section */}
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-8">
            <img
              src={myImage}
              alt="Rohit"
              className="w-60 h-60 rounded-full object-cover"
            />
          </div>
          {/* Content section */}
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">
              Hello, I am Rohit
            </h1>
            <p className="text-lg sm:text-xl mb-4">
              I am a tech enthusiast with a passion for competitive coding and
              software development. My perpetual curiosity drives me to stay
              up-to-date with the latest technologies and continuously enhance
              my skills. I am dedicated to leveraging my knowledge and
              experience to create innovative solutions and contribute to the
              tech community.
            </p>
            <div className="text-lg sm:text-xl font-semibold mb-4">
              <div className="typewriter">
                <span className="typewriter-text">Software Engineer</span>
                <span className="typewriter-text">Front End Developer</span>
              </div>
            </div>
            <p className="mt-6">
              <a
                className={`btn btn-primary px-4 py-2 ${
                  mode ? "bg-gray-900 text-white" : "bg-blue-500 text-white"
                } rounded hover:bg-blue-600`}
                href={Resume}
                download="Rohit_Resume.pdf"
              >
                Resume
              </a>
            </p>
            <div className="flex space-x-6 mt-10">
              <a
                href="https://www.linkedin.com/in/rohit-ruhela-2ab553257/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl ${
                  mode
                    ? "text-blue-300 hover:text-blue-500"
                    : "text-blue-700 hover:text-blue-800"
                }`}
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/rohitruhela1"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl ${
                  mode
                    ? "text-gray-400 hover:text-gray-200"
                    : "text-black hover:text-gray-800"
                }`}
              >
                <FaGithub />
              </a>

              <a
                href="https://codeforces.com/profile/rohitruhela"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl ${
                  mode
                    ? "text-red-400 hover:text-red-300"
                    : "text-red-500 hover:text-red-700"
                }`}
              >
                <SiCodeforces />
              </a>
              <a
                href="https://www.codechef.com/users/rohitruhela35"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl ${
                  mode
                    ? "text-orange-400 hover:text-orange-300"
                    : "text-orange-500 hover:text-orange-700"
                }`}
              >
                <SiCodechef />
              </a>
              <a
                href="https://leetcode.com/u/rohitruhela35/"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl ${
                  mode
                    ? "text-yellow-400 hover:text-yellow-300"
                    : "text-yellow-500 hover:text-yellow-700"
                }`}
              >
                <SiLeetcode />
              </a>
              <a
                href="https://www.naukri.com/code360/profile/b2858e8e-df92-4b26-b071-d69a6d333df3"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-3xl ${
                  mode
                    ? "text-green-400 hover:text-green-300"
                    : "text-green-500 hover:text-green-700"
                }`}
              >
                <SiCodingninjas />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
