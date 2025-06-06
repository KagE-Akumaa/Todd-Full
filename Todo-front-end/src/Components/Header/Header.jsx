import React from "react";
import { Link } from "react-router-dom";

function Header() {
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

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-gray-800 dark:text-gray-200 font-medium text-base">
          <li>
            <Link to="/" className="hover:text-blue-600 transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600 transition">
              Contact
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <Link
            to="/login"
            className="text-blue-600 hover:text-blue-700 font-semibold transition"
          >
            Log In
          </Link>
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition shadow-sm"
          >
            Get Started
          </Link>
          <Link
            to="/test"
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-4 py-2 rounded-xl transition shadow-sm"
          >
            Guest Mode
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
