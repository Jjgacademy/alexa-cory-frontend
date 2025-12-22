import { useState } from "react";
import { API_URL } from "../config/api";
import "./Login.css";

export default function Login() {
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      // ✅ GUARDAMOS TOKEN DIRECTO
      localStorage.setItem("token", data.token);

      // ✅ REDIRIGIMOS
      window.location.href = "/inicio";
    } catch (error) {
      console.error("ERROR LOGIN:", error);
      alert("Error de conexión");
    }
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>

        <div className="form-group">
          <label>Correo</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Contraseña</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
