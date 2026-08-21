function Header() {
    return (
      <header className="site-header">
        <div className="header-container">
          <a href="/" className="logo">
            NORDBUILD
          </a>
  
          <nav className="main-nav" aria-label="Galvenā navigācija">
            <a href="#services">Pakalpojumi</a>
            <a href="#projects">Projekti</a>
            <a href="#about">Par mums</a>
            <a href="#contact">Kontakti</a>
          </nav>
  
          <a href="#contact" className="header-cta">
            Pieprasīt tāmi <span>→</span>
          </a>
        </div>
      </header>
    )
  }
  
  export default Header