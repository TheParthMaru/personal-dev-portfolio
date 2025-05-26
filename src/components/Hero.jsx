import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faXTwitter,
  faLinkedin,
  faInstagram,
  faGithub,
  faReact,
  faGit,
  faJava,
  faGolang,
  faJs,
  faNodeJs,
  faPython,
  faHtml5,
  faCss3Alt,
  faDocker,
  faAws,
  faLinux,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
// No code needed here; update the className in the <p> below to add "text-justify" and remove "text-center" from the parent if present.

function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center mt-16 gap-6 md:gap-6">
      <div className="flex-[1] flex justify-center items-center mb-8 md:mb-0 md:order-2">
        <img
          src="/profile-picture.jpeg"
          alt="Profile"
          className="w-[18rem] h-[18rem] md:w-[30rem] md:h-[30rem] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] object-cover rounded-xl border border-gray-100"
        />
      </div>
      <div className="flex-[2] min-w-0 flex flex-col items-center md:items-start justify-center text-left w-full md:order-1">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2 md:mb-3">
          Hi, I'm Parth
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold italic text-pink-700 mb-3 mt-2 md:mb-5">
          Builder, Thinker, Minimalist
        </h2>
        <p className="text-gray-600 max-w-3xl text-justify text-lg mb-6">
          I'm a curious engineer with a backend-first mindset and a passion for
          exploring new technologies across the stack. I enjoy building robust,
          well-architected systems — but I'm just as excited to learn, adapt,
          and step outside my comfort zone when the project demands it. 
          <br /><br />
          Whether it's designing APIs in Java and Go, diving into databases, or
          experimenting with frontend tools like React, I approach every
          challenge with clarity, craftsmanship, and a constant desire to
          improve. <br /><br />I believe great development isn't just about writing code —
          it's about asking the right questions, staying flexible, and building
          solutions that last.

          <br /><br />
          <span className="font-bold flex items-center gap-2 mb-2">Tech I enjoy working with:</span>
          <span className="flex flex-wrap gap-4 mt-2 p-3 rounded-lg border border-gray-200 bg-gray-50">
            <span className="flex items-center gap-1"><FontAwesomeIcon icon={faJava} className="text-[#007396] w-6 h-6" />Java</span>
            <span className="flex items-center gap-1"><FontAwesomeIcon icon={faGolang} className="text-[#00ADD8] w-6 h-6" />Go</span>
            <span className="flex items-center gap-1"><FontAwesomeIcon icon={faDatabase} className="text-[#336791] w-6 h-6" />PostgreSQL</span>
            <span className="flex items-center gap-1"><FontAwesomeIcon icon={faReact} className="text-[#61DAFB] w-6 h-6" />React</span>
            <span className="flex items-center gap-1"><FontAwesomeIcon icon={faGit} className="text-[#F05032] w-6 h-6" />Git</span>
            <span className="flex items-center gap-1"><FontAwesomeIcon icon={faGear} className="text-[#333] w-6 h-6" />REST APIs</span>
          </span>
        </p>
        <div className="flex flex-wrap gap-3 md:gap-4 mt-2">
          <a
            href="https://www.youtube.com/@parth_codes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-400 rounded-lg px-4 py-2 text-red-600 hover:bg-gray-100 transition text-lg"
          >
            <FontAwesomeIcon icon={faYoutube} className="w-7 h-7 mr-2" />
            YouTube
          </a>
          <a
            href="https://x.com/theparthmaru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-400 rounded-lg px-4 py-2 text-black hover:bg-gray-100 transition text-lg"
          >
            <FontAwesomeIcon icon={faXTwitter} className="w-7 h-7 mr-2" />X
          </a>
          <a
            href="https://www.linkedin.com/in/theparthmaru/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-400 rounded-lg px-4 py-2 text-blue-700 hover:bg-gray-100 transition text-lg"
          >
            <FontAwesomeIcon icon={faLinkedin} className="w-7 h-7 mr-2" />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/theparthmaru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-400 rounded-lg px-4 py-2 text-pink-600 hover:bg-gray-100 transition text-lg"
          >
            <FontAwesomeIcon icon={faInstagram} className="w-7 h-7 mr-2" />
            Instagram
          </a>
          <a
            href="https://github.com/theparthmaru"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center border border-gray-400 rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100 transition text-lg"
          >
            <FontAwesomeIcon icon={faGithub} className="w-7 h-7 mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
