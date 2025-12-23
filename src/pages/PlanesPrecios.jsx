import "./PlanesPrecios.css";

export default function PlanesPrecios() {
  return (
    <section className="planes">
      <div className="planes-container">
        <h2>Planes y precios</h2>
        <p className="planes-subtitle">
          Elige el plan que mejor se adapte a tu negocio. Puedes cambiarlo en
          cualquier momento.
        </p>

        <div className="planes-cards">
          {/* PLAN GRATIS */}
          <div className="plan-card">
            <h3>Gratis</h3>
            <p className="plan-price">$0</p>
            <ul>
              <li>✔ Registro de información</li>
              <li>✔ Control básico de gastos</li>
              <li>✔ Acceso a la plataforma</li>
              <li className="disabled">✖ Revisión de contador</li>
              <li className="disabled">✖ Asesoría personalizada</li>
            </ul>
            <button className="btn-plan-outline">Empezar gratis</button>
          </div>

          {/* PLAN EMPRENDEDOR */}
          <div className="plan-card featured">
            <span className="badge">Recomendado</span>
            <h3>Emprendedor</h3>
            <p className="plan-price">$15<span>/mes</span></p>
            <ul>
              <li>✔ Subida completa de información</li>
              <li>✔ Revisión por contador certificado</li>
              <li>✔ Reportes claros y ordenados</li>
              <li>✔ Soporte por chat</li>
              <li>✔ Ideal para pequeños negocios</li>
            </ul>
            <button className="btn-plan">Elegir plan</button>
          </div>

          {/* PLAN PRO */}
          <div className="plan-card">
            <h3>Asesoría Pro</h3>
            <p className="plan-price">$30<span>/mes</span></p>
            <ul>
              <li>✔ Todo lo del plan Emprendedor</li>
              <li>✔ Asesoría humana personalizada</li>
              <li>✔ Revisión avanzada</li>
              <li>✔ Recomendaciones tributarias</li>
              <li>✔ Prioridad en atención</li>
            </ul>
            <button className="btn-plan-outline">Contratar</button>
          </div>
        </div>
      </div>
    </section>
  );
}
