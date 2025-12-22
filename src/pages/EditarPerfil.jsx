import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./EditarPerfil.css";

export default function EditarPerfil() {
  const { user } = useContext(AuthContext);

  const [form, setForm] = useState({
    name: user?.name || "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔒 Validación básica
    if (form.password && form.password.length < 6) {
      alert("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    // 🔜 Aquí luego conectamos backend
    console.log("Datos a actualizar:", {
      name: form.name,
      password: form.password || "(sin cambio)",
    });

    alert("Perfil actualizado correctamente (simulado)");
  };

  if (!user) return null;

  return (
    <section className="editar-perfil">
      <form className="editar-perfil-form" onSubmit={handleSubmit}>
        <h1>Editar perfil</h1>
        <p>Actualiza tus datos personales</p>

        {/* NOMBRE */}
        <div className="form-group">
          <label>Nombre</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        {/* EMAIL (SOLO LECTURA) */}
        <div className="form-group">
          <label>Email</label>
          <input
            value={user.email}
            disabled
          />
        </div>

        <hr />

        <h3>Cambiar contraseña</h3>

        {/* NUEVA CONTRASEÑA */}
        <div className="form-group">
          <label>Nueva contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Dejar vacío para no cambiar"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        {/* CONFIRMAR CONTRASEÑA */}
        <div className="form-group">
          <label>Confirmar contraseña</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button className="btn-primary">
          Guardar cambios
        </button>
      </form>
    </section>
  );
}
