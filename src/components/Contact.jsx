import React, { useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Contact({ mode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const dataToSubmit = {
      ...formData,
      access_key: "de38cdcd-26e5-4ba3-84fc-6027f571f52c"  
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(dataToSubmit),
      }).then((res) => res.json());

      if (res.success) {
        alert("Success! Your message has been sent.");
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        alert("Failed to submit the form.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  return (
    <div
      className={`flex flex-col lg:flex-row p-8 ${
        mode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      {/* Contact Information */}
      <div className="flex-1 lg:mr-8 mb-8 lg:mb-0">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-4">
          Whether you want to get in touch, talk about a project collaboration,
          or just say hi, I'd love to hear from you. Simply fill the form or
          send me an email.
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <span className="font-semibold mr-2">Email:</span>
            <a
              href="mailto:official.rohit0101@gmail.com"
              className="text-blue-500 hover:underline"
            >
              official.rohit0101@gmail.com
            </a>
          </li>
        </ul>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/rohit-ruhela-2ab553257/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-blue-500"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/rohit122__"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl hover:text-pink-500"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Contact Form */}
      <div className="flex-1">
        <h3 className="text-2xl font-semibold mb-4">Contact Form</h3>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className={`block text-sm font-medium mb-1 ${mode ? "text-gray-300" : "text-gray-700"}`}
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md shadow-sm ${mode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className={`block text-sm font-medium mb-1 ${mode ? "text-gray-300" : "text-gray-700"}`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md shadow-sm ${mode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
              required
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className={`block text-sm font-medium mb-1 ${mode ? "text-gray-300" : "text-gray-700"}`}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className={`w-full px-4 py-2 border rounded-md shadow-sm ${mode ? "bg-gray-700 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}`}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className={`px-4 py-2 ${
              mode ? "bg-gray-900 text-white" : "bg-blue-500 text-white"
            } rounded hover:bg-blue-600`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
