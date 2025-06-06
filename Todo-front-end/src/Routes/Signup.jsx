import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col md:flex-row items-center justify-start p-6 transition-colors duration-300 w-full">
      {/* Left Side - Signup Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-2xl p-8 transition-colors duration-300">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 text-center mb-2">
            Create an Account
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
            Sign up to start using TodoApp
          </p>

          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-xl transition duration-200"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image + Info */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-8 w-full">
        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-2xl p-8 max-w-md text-center transition-colors duration-300">
          <img
            src="/Images/Logo.png"
            alt="App preview"
            className="w-48 h-48 mx-auto rounded-full object-cover mb-6"
          />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Organize Your Life with TodoApp
          </h3>
          <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            TodoApp helps you manage your daily tasks efficiently and
            effectively. Create, update, and complete your todos from anywhere.
            Store data locally or securely in the cloud after login. Get started
            now and boost your productivity!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
