import { useState } from "react";
import "./Login.css";

export default function Login() {
  const [form, setForm] = useState({
    correo: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.correo || !form.password) {
      alert("Ambos campos son obligatorios");
      return;
    }

    alert("Inicio de sesión válido (pendiente backend)");
  };

  return (
    <main className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Iniciar sesión</h1>
        <p>Accede a tu cuenta de Alexa & Cory</p>

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
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20C7 20 2.73 16.11 1 12c.64-1.46 1.59-2.8 2.78-3.89" />
      <path d="M1 1l22 22" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
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
          Iniciar sesión
        </button>
      </form>
    </main>
  );
}
