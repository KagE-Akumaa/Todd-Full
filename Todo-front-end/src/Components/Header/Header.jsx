import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full shadow-md bg-gray-200 dark:bg-gray-800 border-b border-gray-400 dark:border-gray-600">
      <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap justify-between items-center">
        {/* Logo + App Name */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/Images/Logo.png"
            alt="logo"
            className="h-10 w-10 object-cover rounded-full shadow-md"
          />
          <span className="text-xl font-bold text-gray-800 dark:text-white tracking-wide">
            TodoApp
          </span>
        </Link>

        {/* Hamburger Button - visible on mobile */}
        <button
          className="md:hidden text-gray-800 dark:text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {/* Simple Hamburger Icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto space-y-4 md:space-y-0 md:space-x-6 text-gray-800 dark:text-gray-200 font-medium text-base mt-4 md:mt-0`}
        >
          <li>
            <Link
              to="/"
              className="block md:inline hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block md:inline hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="block md:inline hover:text-blue-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:w-auto space-y-4 md:space-y-0 md:space-x-3 mt-4 md:mt-0`}
        >
          <Link
            to="/login"
            className="block md:inline bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition shadow-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="block md:inline bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition shadow-sm"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
