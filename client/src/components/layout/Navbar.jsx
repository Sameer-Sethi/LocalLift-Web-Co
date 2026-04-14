import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowUpRight, Zap } from 'lucide-react'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/case-studies', label: 'Case Studies' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="main-navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <div className="navbar__logo-icon">
            <Zap size={20} />
          </div>
          <span>LocalLift</span>
        </Link>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar__link ${location.pathname === link.path ? 'navbar__link--active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar__actions">
          <Link to="/contact" className="btn btn--secondary btn--sm">
            Free Audit
          </Link>
          <Link to="/contact" className="btn btn--primary btn--sm">
            Get Started <ArrowUpRight size={16} />
          </Link>
          <button
            className="navbar__mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`navbar__mobile-overlay ${mobileOpen ? 'navbar__mobile-overlay--visible' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
      <div className={`navbar__mobile-menu ${mobileOpen ? 'navbar__mobile-menu--open' : ''}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="navbar__mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px', paddingTop: '24px' }}>
          <Link to="/contact" className="btn btn--primary btn--full" onClick={() => setMobileOpen(false)}>
            Get Started <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>
    </nav>
  )
}
