import { useEffect, useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`site-header ${menuOpen ? 'menu-open' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="header-container">
        <a href="/" className="logo" onClick={closeMenu}>
          NORDBUILD
        </a>

        <nav
          className={`main-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label="Galvenā navigācija"
        >
          <a href="#services" onClick={closeMenu}>Pakalpojumi</a>
          <a href="#projects" onClick={closeMenu}>Projekti</a>
          <a href="#about" onClick={closeMenu}>Par mums</a>
          <a href="#contact" onClick={closeMenu}>Kontakti</a>
        </nav>

        <a
          href="#contact"
          className="header-cta"
          onClick={closeMenu}
        >
          Pieprasīt tāmi <span>→</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Aizvērt izvēlni' : 'Atvērt izvēlni'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}

export default Header