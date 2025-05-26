import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Side - Signup Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white px-10 py-16">
        <div className="w-full max-w-md space-y-6">
          <h2 className="text-4xl font-bold text-gray-800 text-center">
            Create an Account
          </h2>
          <p className="text-center text-gray-500">
            Sign up to start using TodoApp
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image + Info */}
      <div className="md:w-1/2 flex flex-col justify-center items-center bg-gray-100 p-6">
        <img
          src="/Images/Logo.png"
          alt="App preview"
          className="w-full max-w-md object-contain mb-4"
        />
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Organize Your Life with TodoApp
          </h3>
          <p className="text-gray-600 max-w-md mx-auto">
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
