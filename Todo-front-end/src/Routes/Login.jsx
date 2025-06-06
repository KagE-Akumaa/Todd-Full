import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col md:flex-row items-center justify-start p-6 transition-colors duration-300 w-full">
      {/* Left: Login Form */}
      <div className="md:w-1/2 flex items-center justify-center p-8 w-full">
        <div className="w-full max-w-md bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-2xl p-8 transition-colors duration-300">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Login to TodoApp
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 transition-colors duration-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-400 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-700 transition-colors duration-300"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-sm text-center">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right: Image + Description */}
      <div className="md:w-1/2 flex flex-col justify-center items-center p-8 w-full">
        <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl shadow-2xl p-8 max-w-md text-center transition-colors duration-300">
          <img
            src="/Images/Logo.png"
            alt="App preview"
            className="w-48 h-48 mx-auto rounded-full object-cover mb-6"
          />
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Stay Organized with TodoApp
          </h3>
          <p className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
            TodoApp helps you keep track of your daily tasks and goals. Store
            your todos locally or sync them after logging in. Perfect for
            personal and team productivity.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
