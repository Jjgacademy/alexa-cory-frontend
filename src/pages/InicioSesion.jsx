import "./Home.css"; // reutilizamos el MISMO diseño

export default function InicioSesion() {
  return (
    <section className="home-hero">
      <div className="home-card">

        <div className="hero-video">
          {/* aquí luego puedes cambiar el video */}
          <div style={{
            width: "100%",
            height: "200px",
            background: "#111",
            borderRadius: "16px"
          }} />
        </div>

        <div className="hero-content">
          <h1>
            Bienvenido a <span>Alexa & Cory</span>
          </h1>

          <p>
            Desde aquí podrás gestionar tu información,
            revisar tus datos y agendar tus citas de forma segura.
          </p>

          <div className="steps">
            <div className="step-card">
              <div className="step-icon">📄</div>
              <span>Registra</span>
            </div>

            <div className="step-card">
              <div className="step-icon">📊</div>
              <span>Analiza</span>
            </div>

            <div className="step-card">
              <div className="step-icon">✔️</div>
              <span>Declara</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
