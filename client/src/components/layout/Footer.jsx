import { Link } from 'react-router-dom'
import { Zap, Mail, Phone, MapPin, ArrowUpRight, Linkedin, Twitter, Globe2 } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <Link to="/" className="navbar__logo" style={{ color: '#fff', marginBottom: '8px' }}>
              <div className="navbar__logo-icon">
                <Zap size={20} />
              </div>
              <span>LocalLift</span>
            </Link>
            <p>
              We build high-converting websites that turn visitors into customers and drive real revenue growth for your business.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '24px' }}>
              <a href="mailto:hello@locallift.co" className="footer__link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mail size={14} /> hello@locallift.co
              </a>
              <a href="tel:+919876543210" className="footer__link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Phone size={14} /> +91 98765 43210
              </a>
              <span className="footer__link" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={14} /> India (Remote)
              </span>
            </div>
          </div>

          <div>
            <h4 className="footer__heading">Company</h4>
            <Link to="/about" className="footer__link">About Us</Link>
            <Link to="/case-studies" className="footer__link">Case Studies</Link>
            <Link to="/pricing" className="footer__link">Pricing</Link>
            <Link to="/contact" className="footer__link">Contact</Link>
          </div>

          <div>
            <h4 className="footer__heading">Services</h4>
            <Link to="/services" className="footer__link">Website Design</Link>
            <Link to="/services" className="footer__link">Website Redesign</Link>
            <Link to="/services" className="footer__link">Conversion Optimization</Link>
            <Link to="/services" className="footer__link">Speed Optimization</Link>
            <Link to="/services" className="footer__link">SEO Basics</Link>
          </div>

          <div>
            <h4 className="footer__heading">Get Started</h4>
            <Link to="/contact" className="footer__link">Free Website Audit</Link>
            <Link to="/contact" className="footer__link">Book a Call</Link>
            <Link to="/pricing" className="footer__link">View Plans</Link>
            <div style={{ marginTop: '24px' }}>
              <Link to="/contact" className="btn btn--primary btn--sm btn--full">
                Get More Customers <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} LocalLift Web Co. All rights reserved.</p>
          <div className="footer__social">
            <a href="#" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
            <a href="#" aria-label="Website"><Globe2 size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
