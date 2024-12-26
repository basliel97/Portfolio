import React, { useState } from 'react';
import icon from '../assets/images/icon.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Define the menu items with hrefs
  const menuItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Me', href: '#about' },
    { label: 'Contact Me', href: '#contact' },
    { label: 'My Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-50 backdrop-blur-md bg-black bg-opacity-10">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-20 max-h-12 w-auto object-contain"
              src={icon}
              alt="Company Logo"
              data-aos="fade-down"
            />
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none transition duration-300 transform hover:scale-110"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-x-8 space-x-8">
          {menuItems.map((item) => (
            <a
              href={item.href}
              key={item.label}
              className="text-lg font-semibold text-gray-800 hover:text-gray-900 transition duration-300 group"
              data-aos="fade-down"
            >
              {item.label}
              <span className="block h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${isOpen ? "flex flex-col absolute top-16 left-0 w-full bg-black bg-opacity-10 backdrop-blur-md p-6 items-start space-y-6 transition-all duration-300" : "hidden"}`}
        >
          {menuItems.map((item) => (
            <a
              href={item.href}
              key={item.label}
              className="text-lg font-semibold text-gray-800 hover:text-gray-900 transition-all duration-500 transform opacity-0 translate-y-4 group animate-slideIn"
              data-aos="fade-down"
            >
              {item.label}
              <span className="block h-0.5 bg-gray-800 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
            </a>
          ))}
        </div>
      </nav>

      {/* Add keyframes in a style block */}
      <style jsx>{`
        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateY(1rem);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideIn {
          animation: slideIn 1s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default NavBar;
