import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = async (formData, isSignIn) => {
    if (user) {
      alert("User already logged in!");
      return;
    }

    try {
      const endpoint = isSignIn ? "Login" : "Signup";
      const response = await axios.post(`http://localhost:3000/api/${endpoint}`, formData, { withCredentials: true });

      alert(response.data.message);

      if (isSignIn) {
        localStorage.setItem("user", JSON.stringify(response.data.data.user));
        localStorage.setItem("token", response.data.data.token);
        setUser(response.data.data.user);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  const logout = async () => {
    try {
      await axios.post("http://localhost:3000/api/Logout", {}, { withCredentials: true });

      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser(null);
      alert("Logged out successfully");
    } catch (error) {
      alert("Logout failed");
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
