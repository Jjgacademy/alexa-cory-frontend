import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      <section className="home-hero">
        {/* IZQUIERDA: VIDEO */}
        <div className="hero-video">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            muted
          />
        </div>

        {/* DERECHA: TEXTO */}
        <div className="hero-content">
          <h1>
            Controla tus gastos <br />
            e impuestos en <span>3 simples pasos</span>
          </h1>

          <p>
            Organiza, controla y gestiona tu información tributaria
            de forma clara y segura desde un solo lugar.
          </p>

          <div className="hero-steps">
  <div className="step-card">
    <div className="step-icon">📄</div>
    <span>Registra</span>
  </div>

  <div className="step-card">
    <div className="step-icon">📊</div>
    <span>Analiza</span>
  </div>

  <div className="step-card">
    <div className="step-icon">✔</div>
    <span>Declara</span>
  </div>
</div>

        </div>
      </section>
    </main>
  );
}
