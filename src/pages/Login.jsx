import { useState, useContext } from "react";
import { API_URL } from "../config/api";
import { AuthContext } from "../context/AuthContext";
import "./Login.css";

export default function Login() {
  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      login(data.token);
    } catch {
      alert("Error de conexión");
    }
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
        <p>Accede a tu cuenta</p>

        <div className="form-group">
          <label>Correo</label>
          <input
            name="email"
            type="email"
            placeholder="Correo"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            placeholder="Contraseña"
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn-primary">Entrar</button>
      </form>
    </div>
  );
}
