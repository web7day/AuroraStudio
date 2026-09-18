import { useEffect, useRef, useState } from 'react'
import { site } from '../data/site'

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

    document.documentElement.classList.add('menu-lock')

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('resize', handleResize)

    return () => {
      document.documentElement.classList.remove('menu-lock')
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
          {site.brand.logo}
        </a>

        <nav
          id="primary-navigation"
          className={`main-nav ${menuOpen ? 'is-open' : ''}`}
          aria-label={site.ui.navLabel}
        >
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={site.header.cta.href}
          className="header-cta"
          onClick={closeMenu}
        >
          {site.header.cta.label} <span aria-hidden="true">→</span>
        </a>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? site.ui.menuClose : site.ui.menuOpen}
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