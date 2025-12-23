import "./SistemaMixto.css";

export default function SistemaMixto() {
  return (
    <section className="sistema-mixto">
      <div className="sistema-mixto-container">
        <h2>Sistema mixto: App + Asesoría humana</h2>

        <p className="sistema-mixto-subtitle">
          Combinamos tecnología fácil de usar con el respaldo de contadores
          certificados, para que no estés solo en la gestión de tu información.
        </p>

        <div className="sistema-mixto-cards">
          <div className="card">
            <h3>🧾 Subida de información</h3>
            <p>
              Los usuarios registran y cargan su información de forma sencilla y
              segura desde la plataforma.
            </p>
          </div>

          <div className="card">
            <h3>👨‍💼 Revisión profesional</h3>
            <p>
              Un contador certificado revisa los datos y valida que todo esté
              correcto.
            </p>
          </div>

          <div className="card">
            <h3>💬 Asesoría humana</h3>
            <p>
              Recibe acompañamiento y recomendaciones claras adaptadas a tu
              negocio o emprendimiento.
            </p>
          </div>

          <div className="card">
            <h3>💳 Suscripción mensual</h3>
            <p>
              Accede al sistema y a la asesoría profesional mediante una pequeña
              suscripción mensual.
            </p>
          </div>
        </div>

        <div className="sistema-mixto-footer">
          <p>
            Ideal para <strong>pequeños negocios</strong>,{" "}
            <strong>emprendedores</strong> y{" "}
            <strong>profesionales independientes</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
