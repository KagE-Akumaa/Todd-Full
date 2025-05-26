import React from "react";

function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About TodoApp</h1>
      <p className="text-lg text-gray-600">
        TodoApp is a lightweight and easy-to-use task manager that helps you
        organize your daily goals and be more productive.
      </p>
      <p className="mt-4 text-gray-500 text-sm">
        Version 1.0.0 | Built with React and Tailwind CSS
      </p>
    </div>
  );
}

export default About;
