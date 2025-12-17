import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
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
          Administra tu información tributaria de forma clara, segura
          y ordenada, sin complicaciones.
        </p>

        {/* Lugar para imágenes del proceso (luego) */}
        <div className="hero-steps">
          <div className="step">1</div>
          <div className="step">2</div>
          <div className="step">3</div>
        </div>
      </div>
    </section>
  );
}
