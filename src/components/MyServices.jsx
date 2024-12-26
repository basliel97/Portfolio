import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Creating fast, responsive websites using modern frameworks like React and Tailwind CSS. Perfect for e-commerce, or custom web apps.",
      icon: "🌐",
    },
    {
      title: "Mobile App Development",
      description:
        "Building cross-platform mobile applications that are user-friendly and perform seamlessly on both iOS and Android devices.",
      icon: "📱",
    },
    {
      title: "UI/UX Design",
      description:
        "Designing intuitive and visually appealing user interfaces that enhance user experience and engagement.",
      icon: "🎨",
    },
    {
      title: "AI Solutions",
      description:
        "Integrating AI features like chatbots, recommendations, and data-driven insights into your applications.",
      icon: "🤖",
    },
  ];
  useEffect(() => {
      AOS.init({ duration: 1300, once: false });
    }, []);

  return (
    <div id = "services" className="bg-gray-100 py-16 w-full" data-aos="fade-up">
      <div className="container mx-auto px-6 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          My Services
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          I provide a range of services to help bring your ideas to life. From
          development to design, I ensure every project is tailored to your
          needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 hover:bg-white hover:scale-105"
              data-aos="fade-up"
            >
              <div className="text-5xl text-indigo-500 mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
