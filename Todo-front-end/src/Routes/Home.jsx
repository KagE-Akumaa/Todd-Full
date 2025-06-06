import React from "react";
import Welcome from "./Welcome";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-800 p-6">
      <div className="max-w-screen-md w-full bg-gray-700 border border-gray-600 rounded-xl shadow-lg p-10 text-center">
        <h1 className="text-4xl font-bold mb-4 text-cyan-400">
          Welcome to TodoApp!
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Your simple and efficient task manager. Organize your tasks and boost
          your productivity.
        </p>
        <img
          src="/Images/Logo.png"
          alt="TodoApp Logo"
          className="mx-auto w-48 h-48 rounded-full object-cover border-4 border-cyan-500 shadow-md"
        />
      
        <Welcome />
      </div>
    </div>
  );
}

export default Home;
