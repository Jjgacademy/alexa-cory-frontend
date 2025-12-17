import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* IZQUIERDA */}
        <div className="footer-info">
          <h4>Alexa & Cory</h4>
          <p>
            Dirección: Av. Ejemplo N°123, Quito – Ecuador
          </p>
          <p>
            © {new Date().getFullYear()} Alexa & Cory. Todos los derechos reservados.
          </p>
        </div>

        {/* DERECHA */}
        <div className="footer-social">
          <span>Síguenos</span>
          <div className="social-links">
            <a href="#" aria-label="Facebook">Facebook</a>
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
