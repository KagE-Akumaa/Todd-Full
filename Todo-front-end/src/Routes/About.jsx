import React from "react";

function About() {
  return (
    <div className="max-w-3xl mx-auto p-8 mt-10 bg-gray-700 border border-gray-600 rounded-xl shadow-lg text-center">
      <h1 className="text-4xl font-bold text-gray-100 mb-6">About TodoApp</h1>
      <p className="text-lg text-gray-300">
        TodoApp is a lightweight and easy-to-use task manager that helps you
        organize your daily goals and be more productive.
      </p>
      <p className="mt-6 text-gray-400 text-sm italic">
        Version 1.0.0 | Built with React and Tailwind CSS
      </p>
    </div>
  );
}

export default About;
