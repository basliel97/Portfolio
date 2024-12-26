import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: "ease-in-out", // Easing function
      once: false, // Whether the animation should happen only once
    });
  }, []);

  return (
    <div id ="about" className="bg-gray-100 w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-5xl font-bold tracking-tight text-gray-800 sm:text-6xl">
            About Me
          </h2>
          <p className="mt-6 text-lg text-gray-600 sm:text-xl">
            I am a software engineer with a strong academic background, having studied at 
            <span className="font-semibold text-gray-800"> Wolkite University</span> 
            and earned certifications from platforms like 
            <span className="font-semibold text-gray-800"> Coursera</span>, 
            <span className="font-semibold text-gray-800"> Udacity</span>, and 
            <span className="font-semibold text-gray-800"> Oracle</span>. I have been recognized for academic excellence and have expertise in programming and project management.
          </p>
          <p className="mt-4 text-lg text-gray-600 sm:text-xl">
            My technical toolkit includes 
            <span className="font-semibold text-gray-800"> Firebase</span>, 
            <span className="font-semibold text-gray-800"> MERN stack</span>, 
            <span className="font-semibold text-gray-800"> React</span>, 
            <span className="font-semibold text-gray-800"> Java</span>, 
            and <span className="font-semibold text-gray-800"> JavaScript</span>. 
            I thrive in teamwork-oriented environments and am deeply passionate about 
            <span className="font-semibold text-gray-800"> web and mobile app development</span>, as well as 
            <span className="font-semibold text-gray-800"> AI</span>.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-12" data-aos="fade-right">
          <h3 className="text-3xl font-bold text-gray-800">Skills & Technologies</h3>
          <ul className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-gray-600 text-lg">
            <li>React</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Firebase</li>
            <li>Material UI</li>
            <li>Tailwind CSS</li>
            <li>C++</li>
            <li>MongoDB</li>
          </ul>
        </div>

        {/* Statistics Section */}
        <div
          className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
          data-aos="zoom-in"
        >
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-gray-800">2+</p>
            <p className="mt-2 text-gray-600">Years of Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-gray-800">15+</p>
            <p className="mt-2 text-gray-600">Projects Completed</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-gray-800">5+</p>
            <p className="mt-2 text-gray-600">Certifications</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold text-gray-800">∞</p>
            <p className="mt-2 text-gray-600">Passion for Learning</p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-gray-800">Let’s Connect</h3>
          <p className="mt-4 text-lg text-gray-600">
            Reach out to me via email or connect on LinkedIn for collaboration opportunities.
          </p>
          <div className="mt-6 space-x-4">
            <a
              href="#contact"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
             sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg"
             data-aos="zoom-in"
            >
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/ethiopian-news-center-09931828b/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500
             sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg"
             data-aos="zoom-in"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
