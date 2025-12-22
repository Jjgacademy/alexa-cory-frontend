import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { API_URL } from "../config/api";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ LOGIN
  const login = async (token) => {
    localStorage.setItem("token", token);

    try {
      const res = await fetch(`${API_URL}/api/users/profile`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();

      if (data.ok) {
        setUser(data.user);
      } else {
        logout();
      }
    } catch {
      logout();
    }
  };

  // ✅ LOGOUT
  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  // ✅ CARGAR SESIÓN AL RECARGAR
  useEffect(() => {
    const loadSession = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);
        return;
      }

      await login(token);
      setLoading(false);
    };

    loadSession();
  }, []);

  // ✅ FLAG CLARO
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        loading,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
