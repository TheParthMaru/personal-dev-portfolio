import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faXTwitter,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-300 py-8 text-center">
      <p className="font-bold text-xl mb-4 mt-0">Connect With Me</p>
      <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-4 justify-center items-center w-full">
        <a
          href="https://www.linkedin.com/in/theparthmaru/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border border-gray-400 rounded-lg px-4 py-2 text-blue-700 hover:bg-gray-100 transition"
        >
          <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 mr-2" />
          LinkedIn
        </a>
        <a
          href="https://www.instagram.com/theparthmaru"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border border-gray-400 rounded-lg px-4 py-2 text-pink-600 hover:bg-gray-100 transition"
        >
          <FontAwesomeIcon icon={faInstagram} className="w-5 h-5 mr-2" />
          Instagram
        </a>
        <a
          href="https://www.youtube.com/@parth_codes"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border border-gray-400 rounded-lg px-4 py-2 text-red-600 hover:bg-gray-100 transition"
        >
          <FontAwesomeIcon icon={faYoutube} className="w-5 h-5 mr-2" />
          YouTube
        </a>
        <a
          href="https://github.com/theparthmaru"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border border-gray-400 rounded-lg px-4 py-2 text-gray-800 hover:bg-gray-100 transition"
        >
          <FontAwesomeIcon icon={faGithub} className="w-5 h-5 mr-2" />
          GitHub
        </a>
        <a
          href="https://x.com/theparthmaru"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center border border-gray-400 rounded-lg px-4 py-2 text-black hover:bg-gray-100 transition"
        >
          <FontAwesomeIcon icon={faXTwitter} className="w-5 h-5 mr-2" />
          X
        </a>
      </div>
      <div className="text-gray-500 text-base mt-6 font-semibold mb-14 md:mb-0">
        Made with <span className="text-red-500">❤️</span> and hard work by
        Parth
      </div>
    </footer>
  );
}

export default Footer;
