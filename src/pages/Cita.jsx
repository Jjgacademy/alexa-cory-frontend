import { useState } from "react";
import "./Cita.css";

export default function Cita() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoPersona: "",
    motivo: "",
    fecha: "",
    hora: "",
    modalidad: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("CITA ENVIADA:", form);

    alert("Cita agendada correctamente. Nos contactaremos contigo.");
  };

  return (
    <section className="cita">
      <form className="cita-form" onSubmit={handleSubmit}>
        <h1>Agendar cita</h1>
        <p>Completa el formulario para recibir asesoría tributaria</p>

        <div className="form-group">
          <label>Nombre completo</label>
          <input
            name="nombre"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Correo electrónico</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Teléfono</label>
          <input
            name="telefono"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Tipo de persona</label>
          <select name="tipoPersona" onChange={handleChange} required>
            <option value="">Seleccione</option>
            <option value="natural">Natural</option>
            <option value="juridica">Jurídica</option>
          </select>
        </div>

        <div className="form-group">
          <label>Motivo de la cita</label>
          <select name="motivo" onChange={handleChange} required>
            <option value="">Seleccione</option>
            <option value="declaracion">Declaración de impuestos</option>
            <option value="iva">IVA</option>
            <option value="ruc">RUC</option>
            <option value="renta">Impuesto a la renta</option>
            <option value="asesoria">Asesoría general</option>
          </select>
        </div>

        <div className="form-group">
          <label>Fecha</label>
          <input
            type="date"
            name="fecha"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Hora</label>
          <input
            type="time"
            name="hora"
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Modalidad</label>
          <select name="modalidad" onChange={handleChange} required>
            <option value="">Seleccione</option>
            <option value="presencial">Presencial</option>
            <option value="virtual">Virtual</option>
          </select>
        </div>

        <div className="form-group">
          <label>Mensaje (opcional)</label>
          <textarea
            name="mensaje"
            rows="3"
            onChange={handleChange}
          />
        </div>

        <button className="btn-primary">Agendar cita</button>
      </form>
    </section>
  );
}
