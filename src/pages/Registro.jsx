import { useState } from "react";
import { API_URL } from "../config/api";
import "./Registro.css";

export default function Registro() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Registro exitoso, ahora inicia sesión");
    } catch {
      alert("Error del servidor");
    }
  };

  return (
    <div className="registro">
      <form className="registro-form" onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <p>Crea tu cuenta</p>

        <div className="form-group">
          <label>Nombre</label>
          <input
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            required
          />
        </div>

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

        <button className="btn-primary">Registrarse</button>
      </form>
    </div>
  );
}
