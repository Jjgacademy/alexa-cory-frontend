import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const isLogged = !!localStorage.getItem("token");

  const cerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Alexa & Cory</div>

      <div className="navbar-links">
        {/* INICIO */}
        <Link to={isLogged ? "/inicio" : "/"}>Inicio</Link>

        {/* PLANES SIEMPRE VISIBLE */}
        <Link to="/planes">Planes y precios</Link>

        {/* USUARIO NO LOGUEADO */}
        {!isLogged && (
          <>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/registro">Registrarte</Link>
          </>
        )}

        {/* USUARIO LOGUEADO */}
        {isLogged && (
          <>
            <Link to="/perfil">Perfil</Link>
            <Link to="/perfil/editar">Editar perfil</Link>
            <Link to="/cita">Agendar cita</Link>
            <span
              onClick={cerrarSesion}
              style={{ cursor: "pointer" }}
            >
              Cerrar sesión
            </span>
          </>
        )}
      </div>
    </nav>
  );
}
