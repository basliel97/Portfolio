import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const SimpleFooter = () => {

    
  useEffect(() => {
    AOS.init({ duration: 1500, once: true }); // Initialize AOS with custom options
  }, []);
  const items = [
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
    { label: 'My Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
  ];

  return (
    <footer className="bg-gray-100 text-gray-600 w-full">
      <div className="max-w-7xl mx-auto px-6 py-8 sm:px-8 lg:px-12">
        {/* Navigation Links */}
        <div
          className="flex flex-wrap justify-center space-x-4 md:space-x-6 mb-6"
          data-aos="fade-up"
        >
          {items.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-md md:text-lg text-gray-500 hover:text-gray-800"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6" data-aos="fade-up" data-aos-delay="200">
          <a href="https://web.facebook.com/baslel.unique" aria-label="Facebook" className="text-gray-500 hover:text-gray-800 text-xl md:text-2xl">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.instagram.com/baslelunique/" aria-label="Instagram" className="text-gray-500 hover:text-gray-800 text-xl md:text-2xl">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://x.com/Basliel80337721" aria-label="Twitter" className="text-gray-500 hover:text-gray-800 text-xl md:text-2xl">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://github.com/basliel97" aria-label="GitHub" className="text-gray-500 hover:text-gray-800 text-xl md:text-2xl">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.youtube.com/@baslielgetu1588" aria-label="YouTube" className="text-gray-500 hover:text-gray-800 text-xl md:text-2xl">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </div>

        {/* Copyright */}
        <div
          className="text-center text-sm md:text-base text-gray-500"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          &copy; 2024 Your Company, Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default SimpleFooter;
