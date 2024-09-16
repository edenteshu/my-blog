import React, { useState, useEffect } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact",
        formData
      );
      setResponseMessage(response.data.message);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-white py-20 min-h-screen flex items-center"
      data-aos="fade-up"
    >
      <div className="container mx-auto p-4">
        <h1 className=" text-cyan-900 text-5xl font-bold mb-6 text-center ">
          Contact Me
        </h1>
        <form
          className="max-w-xl mx-auto bg-cyan-500 p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
          data-aos="zoom-in"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className=" bg-white hover:bg-cyan-300  text-cyan-400  hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
        {responseMessage && (
          <p className="text-green-500 mt-4 text-center">{responseMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
        )}
      </div>
    </section>
  );
};

export default Contact;
