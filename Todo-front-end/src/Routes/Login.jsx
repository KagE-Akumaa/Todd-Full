import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left: Login Form */}
      <div className="md:w-1/2 flex items-center justify-center p-6 bg-white">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Login to TodoApp
          </h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-gray-600 text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>

      {/* Right: Image + Description */}
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-6">
        <img
          src="/Images/Logo.png"
          alt="App preview"
          className="w-full max-w-md object-contain mb-4"
        />
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Stay Organized with TodoApp
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
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
