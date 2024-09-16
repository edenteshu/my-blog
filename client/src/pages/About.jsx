import React from "react";
import AboutImg from "../assets/bgimg.jpg";

function About() {
  return (
    <section id="about" className="bg-white  py-20 fadeIn">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:space-x-12 px-4">
        {/* Image Section */}
        <div className="flex justify-center lg:w-1/2 mb-8 lg:mb-0">
          <img
            src={AboutImg}
            alt="profile"
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full shadow-xl object-cover border-4 border-white transform transition duration-1000 ease-in-out hover:scale-105 fadeIn"
          />
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left fadeIn">
          <h2 className="text-5xl font-bold mb-6 text-cyan-900 leading-tight">
            About Me
          </h2>
          <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I'm a passionate full-stack developer with expertise in building
            dynamic and responsive web applications. I specialize in JavaScript,
            React, Node.js, and various other technologies.
          </p>
          <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 mt-6 leading-relaxed">
            I love creating solutions that not only meet client needs but also
            offer a delightful user experience. Let's work together to build
            something great!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
