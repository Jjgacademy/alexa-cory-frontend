import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useContext(AuthContext);

  // Mientras carga sesión, no redirijas todavía
  if (loading) return null; // o un <div>Cargando...</div>

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
