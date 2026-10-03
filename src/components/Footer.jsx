import React from 'react';
import { business } from '../data/business';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <p style={styles.text}>
          &copy; {currentYear} {business.name}. All rights reserved.
        </p>
        <p style={styles.terms}>
          {business.terms}
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: 'var(--teal2)',
    color: 'rgba(255,255,255,0.7)',
    padding: '32px 20px',
    borderTop: '1px solid rgba(255,255,255,0.1)',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '12px',
    textAlign: 'center',
  },
  text: {
    fontSize: '15px',
  },
  terms: {
    fontSize: '14px',
    textTransform: 'capitalize',
  }
};

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (min-width: 768px) {
      footer .container {
        flex-direction: row !important;
        justify-content: space-between !important;
        text-align: left !important;
      }
    }
  `;
  document.head.appendChild(style);
}
