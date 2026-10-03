import React from 'react';

export default function FactsStrip() {
  return (
    <div style={styles.strip}>
      <div className="container" style={styles.grid}>
        <div className="reveal reveal-delay-1" style={styles.item}>
          <h3 style={styles.title}>Own manufacturing</h3>
          <p style={styles.desc}>No middlemen on price</p>
        </div>
        <div className="reveal reveal-delay-2" style={styles.item}>
          <h3 style={styles.title}>GST tax invoice</h3>
          <p style={styles.desc}>Full input credit for you</p>
        </div>
        <div className="reveal reveal-delay-3" style={styles.item}>
          <h3 style={styles.title}>Bulk orders</h3>
          <p style={styles.desc}>Priced per piece, by quantity</p>
        </div>
        <div className="reveal reveal-delay-4" style={styles.item}>
          <h3 style={styles.title}>Based in Indore</h3>
          <p style={styles.desc}>Dispatch via your transport</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  strip: {
    backgroundColor: 'var(--card)',
    borderTop: '1px solid var(--line)',
    borderBottom: '1px solid var(--line)',
    padding: '40px 20px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '32px 20px',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  title: {
    fontSize: '18px',
    color: 'var(--teal)',
    marginBottom: '0',
    fontFamily: 'var(--font-heading)',
  },
  desc: {
    fontSize: '15px',
    color: 'var(--mute)',
  }
};

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @media (min-width: 768px) {
      .facts-grid { grid-template-columns: repeat(4, 1fr) !important; }
    }
  `;
  document.head.appendChild(style);
  
  // Need to update inline style to class for media query to work properly
  const origGrid = styles.grid;
  styles.grid = { ...origGrid, className: 'facts-grid' };
}
