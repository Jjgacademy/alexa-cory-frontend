import { useState } from "react";
import "./Registro.css";

export default function Registro() {
  const [form, setForm] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.nombres ||
      !form.apellidos ||
      !form.correo ||
      !form.password ||
      !form.confirmPassword
    ) {
      alert("Todos los campos son obligatorios");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    alert("Registro válido (pendiente backend)");
  };

  return (
    <main className="registro">
      <form className="registro-form" onSubmit={handleSubmit}>
        <h1>Registro</h1>
        <p>Crea tu cuenta para acceder al sistema</p>

        <div className="form-group">
          <label>Nombres</label>
          <input
            type="text"
            name="nombres"
            value={form.nombres}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Apellidos</label>
          <input
            type="text"
            name="apellidos"
            value={form.apellidos}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            required
          />
        </div>

        {/* CONTRASEÑA */}
        <div className="form-group">
          <label>Contraseña</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Mostrar u ocultar contraseña"
            >
              {showPassword ? (
                /* OJO CERRADO */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 2.73 16.11 1 12" />
                  <path d="M1 1l22 22" />
                </svg>
              ) : (
                /* OJO ABIERTO */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </span>
          </div>
        </div>

        {/* CONFIRMAR CONTRASEÑA */}
        <div className="form-group">
          <label>Confirmar contraseña</label>
          <div className="password-wrapper">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className="toggle-password"
              onClick={() => setShowConfirm(!showConfirm)}
              aria-label="Mostrar u ocultar contraseña"
            >
              {showConfirm ? (
                /* OJO CERRADO */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 2.73 16.11 1 12" />
                  <path d="M1 1l22 22" />
                </svg>
              ) : (
                /* OJO ABIERTO */
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </span>
          </div>
        </div>

        <button type="submit" className="btn-primary">
          Registrarse
        </button>
      </form>
    </main>
  );
}
