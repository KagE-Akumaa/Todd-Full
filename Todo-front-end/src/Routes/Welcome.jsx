import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Welcome() {
  const { switchToGuestMode } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGuestClick = () => {
    switchToGuestMode();
    navigate("/todo");
  };

  return (
    <button
      onClick={handleGuestClick}
      className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition cursor-pointer"
      type="button"
    >
      Guest Mode
    </button>
  );
}

export default Welcome;
