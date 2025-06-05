import React, { useContext } from "react";
import AuthContext from "../context/AuthContext";

const AuthTester = () => {
  const { isAuthenticated, user, mode, login, logout, switchToGuestMode } =
    useContext(AuthContext);

  return (
    <div>
      <p>Mode: {mode}</p>
      <p>Status: {isAuthenticated ? "Logged In" : "Guest"}</p>
      <p>User: {user ? user.name : "None"}</p>

      <button onClick={() => login({ name: "John Doe" })}>Login</button>
      <button onClick={logout}>Logout</button>
      <button onClick={switchToGuestMode}>Guest Mode</button>
    </div>
  );
};

export default AuthTester;
