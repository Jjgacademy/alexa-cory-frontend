import "./Home.css";

export default function Home() {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="home-hero">
        <div className="home-card">
          {/* VIDEO */}
          <div className="hero-video">
            <br />
            <br />
            <br />
            <iframe
              width="100%"
              height="260"
              src="https://www.youtube.com/embed/yPzTtKqBTH0"
              title="Video introductorio"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* TEXTO */}
          <div className="hero-content">
            <h1>
              Controla tus gastos <br />e impuestos en{" "}
              <span>3 simples pasos</span>
            </h1>

            <p>
              Organiza, controla y gestiona tu información tributaria de forma
              clara y segura desde un solo lugar.
            </p>

            {/* PASOS */}
            <div className="steps">
              <div className="step-card">
                <div className="step-icon">📄</div>
                <span>Registra</span>
              </div>
              <br />
              <div className="step-card">
                <div className="step-icon">📊</div>
                <span>Analiza</span>
              </div>
              <br />
              <div className="step-card">
                <div className="step-icon">✔️</div>
                <span>Declara</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SISTEMA MIXTO ================= */}
      <section className="sistema-mixto">
        <div className="sistema-mixto-container">
          <h2>Sistema mixto: App + Asesoría humana</h2>

          <p className="sistema-mixto-subtitle">
            Combinamos tecnología fácil de usar con el respaldo de contadores
            certificados, para que no estés solo en la gestión de tu información.
          </p>

          <div className="sistema-mixto-cards">
            <div className="mixto-card">
              <h3>🧾 Subida de información</h3>
              <p>
                Los usuarios cargan y registran su información de forma sencilla
                y segura desde la plataforma.
              </p>
            </div>

            <div className="mixto-card">
              <h3>👨‍💼 Revisión profesional</h3>
              <p>
                Un contador certificado revisa los datos y valida que todo esté
                correcto.
              </p>
            </div>

            <div className="mixto-card">
              <h3>💬 Asesoría humana</h3>
              <p>
                Recibe acompañamiento y recomendaciones claras adaptadas a tu
                negocio o emprendimiento.
              </p>
            </div>

            <div className="mixto-card">
              <h3>💳 Suscripción mensual</h3>
              <p>
                Accede al sistema y a la asesoría profesional mediante una
                pequeña suscripción mensual.
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
    </>
  );
}
