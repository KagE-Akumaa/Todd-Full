import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" w-full shadow-2xl">
      <nav className="bg-gray-300 border-b border-gray-500">
        <div className="max-w-screen-xl mx-auto px-6 py-4 flex flex-wrap justify-between items-center">
          {/* Logo + App Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/Images/Logo.png"
              alt="logo"
              className="h-12 w-12 object-cover rounded-full"
            />
            <span className="text-2xl font-bold text-gray-800">TodoApp</span>
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6 text-gray-800 font-medium text-lg">
            <li>
              <Link to="/" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/todo" className="hover:text-blue-600 transition">
                Todo
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
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition"
            >
              Get Started
            </Link>
            <Link
              to="/test"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-xl transition"
            >
              Guest Mode
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
