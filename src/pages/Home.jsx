import "./Home.css";

export default function Home() {
  return (
    <section className="home-hero">
      <div className="home-card">

        {/* VIDEO */}
        <div className="hero-video">
          <video controls muted>
            <source
              src="https://www.youtube.com/watch?v=85qknEZs6oM&list=RD4D3KhGSakIs&index=14"
              type="video/mp4"
            />
            Tu navegador no soporta video.
          </video>
        </div>

        {/* TEXTO */}
        <div className="hero-content">
          <h1>
            Controla tus gastos <br />
            e impuestos en <span>3 simples pasos</span>
          </h1>

          <p>
            Organiza, controla y gestiona tu información tributaria
            de forma clara y segura desde un solo lugar.
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
  );
}
