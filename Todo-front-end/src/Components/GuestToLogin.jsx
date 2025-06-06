import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function GuestToLogin() {
  const { mode, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      {mode === "guest" && (
        <div className="w-full max-w-4xl mx-auto flex flex-col justify-center items-center bg-yellow-100 dark:bg-yellow-300/10 border border-yellow-300 dark:border-yellow-500 text-yellow-900 dark:text-yellow-200 rounded-xl p-6 my-6 shadow-md">
          <h1 className="text-2xl font-semibold mb-2 tracking-wide">
            You are currently in{" "}
            <span className="text-red-600 dark:text-red-400">Guest Mode</span>
          </h1>
          <p className="text-center text-lg mb-4">
            Tasks will be lost on refresh. For persistent storage, please log
            in.
          </p>
          <button
            onClick={handleLoginClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-xl transition cursor-pointer"
          >
            Log In
          </button>
        </div>
      )}
    </>
  );
}

export default GuestToLogin;
