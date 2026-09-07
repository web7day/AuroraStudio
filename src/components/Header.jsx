import { useEffect, useRef, useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const nextScrolled = window.scrollY > 50
      setScrolled((current) => (current === nextScrolled ? current : nextScrolled))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setMenuOpen(false)
      }
    }

    const handleResize = () => {
      if (!window.matchMedia('(max-width: 900px)').matches) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [menuOpen])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
<header
  ref={headerRef}
  className={`site-header ${menuOpen ? 'menu-open' : ''} ${scrolled ? 'is-scrolled' : ''}`}
>
      <div className="header-container">
        <a href="/" className="logo" onClick={closeMenu}>
          NORDBUILD
        </a>

        <nav
          id="primary-navigation"
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
          Pieprasīt tāmi <span aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Aizvērt izvēlni' : 'Atvērt izvēlni'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>
    </header>
  )
}

export default Header