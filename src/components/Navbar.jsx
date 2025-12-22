import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  // 🔹 Leemos directamente el token
  const isLogged = !!localStorage.getItem("token");

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Alexa & Cory</div>

      <div className="navbar-links">
        <Link to={isLogged ? "/inicio" : "/"}>Inicio</Link>

        {!isLogged && (
          <>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/registro">Registrarte</Link>
          </>
        )}

        {isLogged && (
          <span
            onClick={cerrarSesion}
            style={{ cursor: "pointer" }}
          >
            Cerrar sesión
          </span>
        )}

        <Link to="/cita" className="btn-cita">
          Agenda una cita
        </Link>
      </div>
    </nav>
  );
}
