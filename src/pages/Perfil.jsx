import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Perfil.css";

export default function Perfil() {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <section className="perfil-container">
      <div className="perfil-card">
        <h2>Mi perfil</h2>
        <p className="perfil-subtitle">
          Información registrada en tu cuenta
        </p>

        <div className="perfil-info">
          <div>
            <span>Nombre</span>
            <p>{user.name}</p>
          </div>

          <div>
            <span>Email</span>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
