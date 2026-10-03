import React, { useState } from 'react';
import { business } from '../data/business';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={styles.header}>
      <div className="container" style={styles.container}>
        <div style={styles.logo}>{business.shortName}</div>
        
        <nav style={styles.desktopNav}>
          <a href="#range" style={styles.navLink}>Our range</a>
          <a href="#process" style={styles.navLink}>How it works</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
          <a href="#contact" className="btn btn-gold">Get rates</a>
        </nav>

        <div className="mobile-controls" style={styles.mobileControls}>
          <button 
            style={styles.mobileMenuBtn} 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={styles.mobileNav}>
          <a href="#range" style={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Our range</a>
          <a href="#process" style={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#contact" style={styles.mobileNavLink} onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#contact" className="btn btn-gold" style={styles.mobileBtn} onClick={() => setMenuOpen(false)}>Get rates</a>
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: 'sticky',
    top: 0,
    backgroundColor: 'var(--teal)',
    color: '#fff',
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 20px',
  },
  logo: {
    fontFamily: 'var(--font-heading)',
    fontSize: '24px',
    color: '#fff',
  },
  desktopNav: {
    display: 'none',
    alignItems: 'center',
    gap: '24px',
    '@media (minWidth: 760px)': {
      display: 'flex',
    }
  },
  navLink: {
    color: '#fff',
    fontSize: '16px',
    fontWeight: 500,
  },
  mobileControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  mobileMenuBtn: {
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '4px',
    display: 'flex',
  },
  mobileNav: {
    backgroundColor: 'var(--teal2)',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    borderTop: '1px solid rgba(255,255,255,0.1)'
  },
  mobileNavLink: {
    color: '#fff',
    fontSize: '18px',
    padding: '8px 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
  },
  mobileBtn: {
    marginTop: '8px',
    alignSelf: 'flex-start'
  }
};

// Basic CSS-in-JS media query workaround for desktop nav
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (min-width: 760px) {
      header nav { display: flex !important; }
      header .mobile-controls > button[aria-label="Toggle menu"] { display: none !important; }
      header .mobile-controls { display: none !important; }
    }
  `;
  document.head.appendChild(style);
}
