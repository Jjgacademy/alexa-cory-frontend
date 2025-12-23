import { useState } from "react";
import { API_URL } from "../config/api";
import "./RecuperarPassword.css";

export default function RecuperarPassword() {
  const [step, setStep] = useState(1);
  const [username, setUsername] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const enviarCodigo = async () => {
    setError("");
    setSuccess("");

    if (!username) {
      setError("Ingrese el usuario");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/users/recover-by-username`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Usuario no encontrado");
        return;
      }

      setStep(2);
      setSuccess("Código generado. Revisa la consola del servidor.");
    } catch {
      setError("Error de conexión");
    }
  };

  const cambiarPassword = async () => {
    setError("");
    setSuccess("");

    if (!code || !password || !confirm) {
      setError("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirm) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/users/reset-by-username`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          code,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Código inválido o expirado");
        return;
      }

      setSuccess("Contraseña actualizada correctamente");
      setStep(1);
      setUsername("");
      setCode("");
      setPassword("");
      setConfirm("");
    } catch {
      setError("Error de conexión");
    }
  };

  return (
    <div className="recover-page">
      <div className="recover-box">
        <h2>Recuperar contraseña</h2>

        {step === 1 && (
          <>
            <div className="form-group">
              <label>Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Ingrese su usuario"
              />
            </div>

            <button className="btn-primary" onClick={enviarCodigo}>
              Enviar código
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="form-group">
              <label>Código</label>
              <input
                type="text"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Código de verificación"
              />
            </div>

            <div className="form-group">
              <label>Nueva contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Confirmar contraseña</label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>

            <button className="btn-primary" onClick={cambiarPassword}>
              Cambiar contraseña
            </button>
          </>
        )}

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
}
