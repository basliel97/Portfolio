import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import emailjs from "emailjs-com"; // Import EmailJS

const ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // To track loading state
  const [successMessage, setSuccessMessage] = useState(""); // To store success message
  const [errorMessage, setErrorMessage] = useState(""); // To store error message

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.email || !formData.message) {
      alert("Please fill out all required fields.");
      return; // Stop form submission if validation fails
    }

    setLoading(true); // Start loading
    setSuccessMessage(""); // Clear any previous success message
    setErrorMessage(""); // Clear any previous error message

    // Using EmailJS to send the message
    emailjs
      .send(
        "service_q54iibp", // Your EmailJS service ID
        "template_wp29p0z", // Your EmailJS template ID
        formData,
        "x3543WCkx1ZCV-8OQ" // Your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("Message sent successfully", response);
          setLoading(false); // Stop loading
          setSuccessMessage("Message sent successfully!"); // Set success message
          setFormData({ // Reset form fields after successful submission
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
        },
        (error) => {
          console.error("Failed to send message", error);
          setLoading(false); // Stop loading
          setErrorMessage("Failed to send message. Please try again later."); // Set error message
        }
      );
  };

  return (
    <div id = "contact" className="bg-gray-50 py-16 w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12" data-aos="fade-up">
          {/* Contact Information Section */}
          <div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Get in touch</h2>
            <p className="text-gray-600 mb-6">
              You can contact me through my email address or through the contact form below.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <MapPinIcon className="h-6 w-6 text-gray-500 mr-4" />
                <div>
                  <p className="text-gray-800">Ethiopia</p>
                  <p className="text-gray-600">Wolkite, Ethiopia</p>
                </div>
              </li>
              <li className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-gray-500 mr-4" />
                <p className="text-gray-800">+251 (0) 986007275</p>
              </li>
              <li className="flex items-center">
                <EnvelopeIcon className="h-6 w-6 text-gray-500 mr-4" />
                <p className="text-gray-800">baslielgetu97@gmail.com</p>
              </li>
            </ul>
          </div>

          {/* Contact Form Section */}
          <form className="bg-white shadow-lg rounded-lg p-8 w-full" onSubmit={handleSubmit} data-aos="fade-up">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-none h-12 px-4 py-2"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                  Last name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-none h-12 px-4 py-2"
                  placeholder="Doe"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-none h-12 px-4 py-2"
                placeholder="you@example.com"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                Phone number
              </label>
              <input
                type="tel"
                id="phone-number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-none h-12 px-4 py-2"
                placeholder="+1 (555) 234-5678"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-0 focus:border-none px-4 py-2"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            {/* Display success or error message */}
            {successMessage && (
              <div className="mt-4 text-green-600 font-medium">{successMessage}</div>
            )}
            {errorMessage && (
              <div className="mt-4 text-red-600 font-medium">{errorMessage}</div>
            )}

            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                disabled={loading} // Disable button while loading
              >
                {loading ? "Sending..." : "Send message"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
