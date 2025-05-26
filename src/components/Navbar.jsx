import React from "react";

function Navbar({ currentSection }) {
  return (
    <nav className="sticky top-0 z-50 bg-white mt-4">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold text-gray-800">Parth Maru</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className={`font-bold transition-colors ${currentSection === "home" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"}`}>Home</a>
          <a href="#experience" className={`font-bold transition-colors ${currentSection === "experience" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"}`}>Experience</a>
          <a href="#projects" className={`font-bold transition-colors ${currentSection === "projects" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"}`}>Projects</a>
          <a href="#contact" className={`font-bold transition-colors ${currentSection === "contact" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"}`}>Contact</a>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button (optional, not functional) */}
          <button className="text-gray-700 focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <hr className="border-gray-300" />
    </nav>
  );
};

export default Navbar;
