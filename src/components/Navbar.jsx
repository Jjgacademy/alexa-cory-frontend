import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Alexa & Cory</div>

      <div className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/login">Iniciar sesión</Link>
        <Link to="/registro">Registrarte</Link>
        <Link to="/cita" className="btn-cita">Agenda una cita</Link>
      </div>
    </nav>
  );
}
