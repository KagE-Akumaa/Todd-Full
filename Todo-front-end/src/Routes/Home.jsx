import React from "react";

function Home() {
  return (
    <div className="max-w-screen-md mx-auto p-6 text-center mt-20">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Welcome to TodoApp!
      </h1>
      <p className="text-lg text-gray-600 mb-6">
        Your simple and efficient task manager. Organize your tasks and boost
        your productivity.
      </p>
      <img
        src="/Images/Logo.png"
        alt="TodoApp Logo"
        className="mx-auto w-48 h-48 rounded-full object-cover"
      />
      <p className="mt-6 text-sm text-gray-500">
        Start by navigating to the Todo page to add your tasks.
      </p>
    </div>
  );
}

export default Home;
