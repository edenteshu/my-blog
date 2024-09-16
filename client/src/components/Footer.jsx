import React from "react";
import { FaEnvelope, FaWhatsapp, FaTelegram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-cyan-400  text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <a
            href="mailto:edutesh2124@gmail.com"
            className="mx-2 text-white hover:text-cyan-900"
          >
            <FaEnvelope className="inline text-2xl" />
          </a>
          <a
            href="https://wa.me/+251952497916"
            className="mx-2 text-white hover:text-cyan-900"
          >
            <FaWhatsapp className="inline text-2xl" />
          </a>
          <a
            href="https://t.me/edu_techn"
            className="mx-2 text-white hover:text-cyan-900"
          >
            <FaTelegram className="inline text-2xl" />
          </a>
          <a
            href="https://github.com/edenteshu"
            className="mx-2 text-white hover:text-cyan-900"
          >
            <FaGithub className="inline text-2xl" />
          </a>
        </div>
        <p>&copy; 2024 Edu Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
