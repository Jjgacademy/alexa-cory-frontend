import "./Cita.css";

export default function Cita() {
  return (
    <main className="cita">
      <section className="cita-card">
        <h1>Agenda tu cita</h1>
        <p className="cita-subtitle">
          Contáctanos por los siguientes medios y con gusto te atenderemos.
        </p>

        <div className="cita-info">
          <div className="info-item">
            <span className="info-label">📞 Teléfono</span>
            <a href="tel:+593987654321">+593 98 765 4321</a>
          </div>

          <div className="info-item">
            <span className="info-label">📞 Teléfono</span>
            <a href="tel:+593912345678">+593 91 234 5678</a>
          </div>

          <div className="info-item">
            <span className="info-label">✉️ Correo</span>
            <a href="mailto:contacto@alexacory.com">
              contacto@alexacory.com
            </a>
          </div>
        </div>

        <a
          href="https://wa.me/593987654321"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-whatsapp"
        >
          💬 Escríbenos por WhatsApp
        </a>
      </section>
    </main>
  );
}
