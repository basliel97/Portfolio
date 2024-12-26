import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import basliel from '../assets/images/basiel.jpg';
import NavBar from './NavBar'; // Import the NavBar component

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
    });
  }, []);

  return (
    <div id = "home" className="bg-white">
      <div className="relative isolate px-6 pt-0 lg:px-8 sm:pt-0"> {/* Set padding to 0 */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
          data-aos="zoom-in"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}
          ></div>
        </div>
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32"> {/* Reduced padding */}
          <div className="text-center" data-aos="fade-up">
            <img
              src={basliel} // Replace with the URL of your photo
              alt="Basliel Getu"
              className="w-48 h-48 mx-auto rounded-full object-cover mb-6 sm:w-64 sm:h-64 md:w-80 md:h-80 border-4 border-indigo-600 shadow-xl hover:shadow-2xl transform transition-all duration-300"
              data-aos="zoom-in"
            />
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              Software Developer
            </h1>
            <p className="mt-8 text-lg text-gray-500 sm:text-xl">
              My name is Basliel Getu, I am a 4th year Software Engineering student at Wolkite University, passionate about being a software developer.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#contact"
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
                sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg"
                data-aos="zoom-in"
              >
                Get In Touch
              </a>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
