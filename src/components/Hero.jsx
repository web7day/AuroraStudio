function Hero() {
    return (
      <section className="hero">
        <div className="hero-overlay" aria-hidden="true" />
  
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-eyebrow">Celtniecība · Renovācija · Rīga</p>
  
            <h1>
              Būvējam kvalitāti, kas kalpo gadiem.
            </h1>
  
            <p className="hero-description">
              Celtniecība, renovācija un pilna cikla būvniecības risinājumi
              Rīgā un tās apkārtnē.
            </p>
  
            <div className="hero-actions">
              <a href="#contact" className="button button-primary">
                Pieprasīt tāmi <span aria-hidden="true">→</span>
              </a>
  
              <a href="#projects" className="button button-secondary">
                Apskatīt projektus
              </a>
            </div>
          </div>
  
          <div className="hero-stats">
            <div className="hero-stat">
              <strong>10+</strong>
              <span>gadi pieredzes</span>
            </div>
  
            <div className="hero-stat">
              <strong>100+</strong>
              <span>pabeigti projekti</span>
            </div>
  
            <div className="hero-stat">
              <strong>5★</strong>
              <span>klientu vērtējums</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero