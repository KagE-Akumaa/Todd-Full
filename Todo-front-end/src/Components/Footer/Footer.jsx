import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700 shadow-inner transition-colors duration-300">
      <div className="max-w-screen-xl mx-auto px-6 py-6 flex flex-wrap justify-between items-center">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center space-x-3 mb-4 md:mb-0">
          <img
            src="/Images/Logo.png"
            alt="logo"
            className="h-12 w-12 object-cover rounded-full"
          />
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            TodoApp
          </span>
        </Link>

        {/* Social Icons */}
        <div className="flex space-x-6 text-gray-700 dark:text-gray-300 text-2xl">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-700 dark:hover:text-blue-400 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-300 transition-colors duration-300"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-700 dark:text-gray-400 py-4 border-t border-gray-300 dark:border-gray-700 transition-colors duration-300">
        &copy; {new Date().getFullYear()} TodoApp. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
