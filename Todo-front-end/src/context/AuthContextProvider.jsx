import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    user: null,
    mode: "guest",
  });

  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("auth");
    if (saved) {
      setAuth(JSON.parse(saved));
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      localStorage.setItem("auth", JSON.stringify(auth));
    }
  }, [auth, hydrated]);

  const login = (userData) => {
    setAuth({
      isAuthenticated: true,
      user: userData,
      mode: "user",
    });
  };

  const logout = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
      mode: "guest",
    });
  };

  const switchToGuestMode = () => {
    setAuth({
      isAuthenticated: false,
      user: null,
      mode: "guest",
    });
  };

  if (!hydrated) return null; // ⛔ Prevent rendering until `auth` is restored

  return (
    <AuthContext.Provider value={{ ...auth, login, logout, switchToGuestMode }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
