function Footer() {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#top" className="footer-logo">
                NORDBUILD
              </a>
  
              <p>
                Celtniecība · Renovācija
                <br />
                Rīga, Latvija
              </p>
            </div>
  
            <div className="footer-contact">
              <p className="footer-label">Kontakti</p>
  
              <a href="tel:+37120000000">+371 20 000 000</a>
              <a href="mailto:info@nordbuild.lv">info@nordbuild.lv</a>
            </div>
  
            <div className="footer-navigation">
              <p className="footer-label">Navigācija</p>
  
              <a href="#services">Pakalpojumi</a>
              <a href="#projects">Projekti</a>
              <a href="#process">Process</a>
              <a href="#contact">Kontakti</a>
            </div>
          </div>
  
          <div className="footer-bottom">
            <span>© 2026 NordBuild</span>
  
            <span>Rīga · Latvija</span>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer