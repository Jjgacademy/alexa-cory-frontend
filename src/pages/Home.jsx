import "./Home.css";

export default function Home() {
  return (
    <section className="home-hero">
      <div className="home-card">

        {/* VIDEO */}
        <div className="hero-video">
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
