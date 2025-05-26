import React, { useState, useRef, useEffect } from "react";

function Navbar({ currentSection }) {
  const [isOpen, setIsOpen] = useState(false);
  const drawerRef = useRef(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
          <button className="text-gray-700 focus:outline-none" onClick={toggleDrawer}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <hr className="border-gray-300" />
      {/* Slide-in drawer for mobile */}
      <div ref={drawerRef} className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"} z-50`}>
        <div className="p-4">
          <button className="text-gray-700 focus:outline-none mb-4" onClick={toggleDrawer}>
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex flex-col space-y-4">
            <a href="#" className={`font-bold transition-colors ${currentSection === "home" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"}`} onClick={toggleDrawer}>Home</a>
            <a href="#experience" className={`font-bold transition-colors ${currentSection === "experience" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"}`} onClick={toggleDrawer}>Experience</a>
            <a href="#projects" className={`font-bold transition-colors ${currentSection === "projects" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"}`} onClick={toggleDrawer}>Projects</a>
            <a href="#contact" className={`font-bold transition-colors ${currentSection === "contact" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-700 hover:text-blue-600"}`} onClick={toggleDrawer}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
