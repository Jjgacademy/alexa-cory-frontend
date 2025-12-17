import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        Alexa & Cory
      </div>

      <nav className="navbar-links">
        <NavLink to="/" className="nav-link">
          Inicio
        </NavLink>

        <NavLink to="/login" className="nav-link">
          Iniciar sesión
        </NavLink>

        <NavLink to="/registro" className="nav-link">
          Registrarte
        </NavLink>

        <NavLink to="/cita" className="nav-link nav-cta">
          Agenda una cita
        </NavLink>
      </nav>
    </header>
  );
}
