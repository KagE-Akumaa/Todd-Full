import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Welcome() {
  const { switchToGuestMode } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGuestClick = () => {
    switchToGuestMode();
    navigate("/todo");
  };

  return <button onClick={handleGuestClick}>Guest Mode</button>;
}

export default Welcome;
