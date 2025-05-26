import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-300 border-t border-gray-500 shadow-inner mt-auto">
      <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center space-x-3 mb-4 md:mb-0">
          <img
            src="/Images/Logo.png"
            alt="logo"
            className="h-12 w-12 object-cover rounded-full"
          />
          <span className="text-xl font-semibold text-gray-700">TodoApp</span>
        </Link>

        {/* Social Icons */}
        <div className="flex space-x-4 text-gray-700 text-2xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-600 py-2 border-t border-gray-400">
        &copy; {new Date().getFullYear()} TodoApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
