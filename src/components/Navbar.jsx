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
        <Link to={isLogged ? "/inicio" : "/"}>Inicio</Link>

        {!isLogged && (
          <>
            <Link to="/login">Iniciar sesión</Link>
            <Link to="/registro">Registrarte</Link>
          </>
        )}

        {isLogged && (
          <>
            <Link to="/perfil">Perfil</Link>
            <Link to="/perfil/editar">Editar perfil</Link>
            <Link to="/cita">Agendar cita</Link>
            <span onClick={cerrarSesion}>Cerrar sesión</span>
          </>
        )}
      </div>
    </nav>
  );
}
