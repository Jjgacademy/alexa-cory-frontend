import { useState } from "react";
import "./ChatBot.css";

const faqs = [
  {
    q: "¿Cómo me registro?",
    a: "Haz clic en 'Registrarte' y completa el formulario con tus datos."
  },
  {
    q: "¿Cómo inicio sesión?",
    a: "Usa tu correo y contraseña registrados previamente."
  },
  {
    q: "¿Cómo agendo una cita?",
    a: "Una vez iniciada sesión, haz clic en 'Agenda una cita'."
  },
  {
    q: "¿Es segura mi información?",
    a: "Sí. Tus datos están protegidos y se usan únicamente para fines tributarios."
  }
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      {/* BOTÓN FLOTANTE */}
      <button className="chatbot-button" onClick={() => setOpen(!open)}>
        💬
      </button>

      {/* VENTANA */}
      {open && (
        <div className="chatbot-box">
          <h4>Preguntas frecuentes</h4>

          {faqs.map((item, index) => (
            <div key={index} className="chatbot-item">
              <button onClick={() => setSelected(index)}>
                {item.q}
              </button>

              {selected === index && (
                <p className="chatbot-answer">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
}
