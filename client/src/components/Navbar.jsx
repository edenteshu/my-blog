import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <nav className="bg-cyan-400 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link to="/">Edu Blog</Link>
        </h1>
        <div className="md:hidden">
          {/* Hamburger Menu Icon */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
        <ul
          className={`md:flex space-x-4 items-center ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-500 font-bold" : ""
              }
            >
              Contact
            </NavLink>
          </li>
          {isAuthenticated && (
            <>
              <li>
                <NavLink
                  to="/create-post"
                  className={({ isActive }) =>
                    isActive ? "text-blue-500 font-bold" : ""
                  }
                >
                  Create Post
                </NavLink>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-white hover:bg-cyan-500  text-blue-400  hover:text-white font-bold py-2 px-4 rounded"
                >
                  Logout
                </button>
              </li>
            </>
          )}
          {!isAuthenticated && (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "bg-white hover:bg-cyan-500  text-blue-400  hover:text-white  font-bold py-2 px-4 rounded"
                    : ""
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
