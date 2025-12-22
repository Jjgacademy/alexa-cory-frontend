import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { API_URL } from "../config/api";
import "./EditarPerfil.css";

export default function EditarPerfil() {
  const { user, setUser } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: user.name,
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password && form.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await fetch(`${API_URL}/api/users/profile`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: form.name,
          password: form.password || undefined,
        }),
      });

      const data = await res.json();

      if (!data.ok) {
        alert(data.message || "Error al actualizar perfil");
        return;
      }

      // ✅ ACTUALIZAR CONTEXTO
      setUser(data.user);

      alert("Perfil actualizado correctamente");
      setForm({ ...form, password: "", confirmPassword: "" });
    } catch {
      alert("Error de conexión");
    }
  };

  return (
    <section className="editar-perfil">
      <form className="editar-perfil-form" onSubmit={handleSubmit}>
        <h1>Editar perfil</h1>

        <div className="form-group">
          <label>Nombre</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input value={user.email} disabled />
        </div>

        <hr />

        <h3>Cambiar contraseña</h3>

        <div className="form-group">
          <label>Nueva contraseña</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Dejar vacío para no cambiar"
          />
        </div>

        <div className="form-group">
          <label>Confirmar contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button className="btn-primary">Guardar cambios</button>
      </form>
    </section>
  );
}
