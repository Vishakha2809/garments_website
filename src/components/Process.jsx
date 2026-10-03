import React from 'react';

const steps = [
  {
    title: "Tell us what you need",
    desc: "Share your requirements, categories of interest, and approximate quantities."
  },
  {
    title: "Get rates and samples",
    desc: "We provide today's wholesale rates and dispatch physical samples if needed."
  },
  {
    title: "Confirm and pay",
    desc: "Order confirmed against tax invoice. Payment due within 30 days."
  },
  {
    title: "Dispatch",
    desc: "Packed and handed to your preferred transport from Indore."
  }
];

export default function Process() {
  return (
    <section id="process" style={styles.section}>
      <div className="container">
        <h2 className="reveal" style={styles.heading}>From first call to delivery</h2>
        
        <div style={styles.timeline}>
          <div style={styles.rule}></div>
          <div className="process-grid">
            {steps.map((step, index) => (
              <div key={index} className={`reveal reveal-delay-${index + 1}`} style={styles.step}>
                <div style={styles.numberCircle}>{index + 1}</div>
                <h3 style={styles.stepTitle}>{step.title}</h3>
                <p style={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: 'var(--card)',
    borderTop: '1px solid var(--line)',
  },
  heading: {
    fontSize: '36px',
    color: 'var(--teal)',
    textAlign: 'center',
    marginBottom: '60px',
  },
  timeline: {
    position: 'relative',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  rule: {
    position: 'absolute',
    top: '24px',
    left: '24px',
    right: '24px',
    height: '2px',
    backgroundColor: 'var(--line)',
    zIndex: 1,
  },
  step: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 16px',
  },
  numberCircle: {
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    backgroundColor: 'var(--gold)',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '24px',
    boxShadow: '0 0 0 8px var(--card)',
  },
  stepTitle: {
    fontSize: '20px',
    color: 'var(--teal)',
    marginBottom: '12px',
  },
  stepDesc: {
    color: 'var(--mute)',
    fontSize: '15px',
  }
};

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    .process-grid {
      display: grid;
      grid-template-columns: 1fr;
      gap: 48px;
    }
    @media (max-width: 767px) {
      .process-grid { text-align: left; }
      ${styles.step} { align-items: flex-start; text-align: left; padding: 0; flex-direction: row; gap: 24px;}
      ${styles.rule} { left: 24px; top: 0; bottom: 0; width: 2px; height: auto; right: auto; }
      ${styles.numberCircle} { margin-bottom: 0; flex-shrink: 0; }
    }
    @media (min-width: 768px) {
      .process-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
    }
  `;
  document.head.appendChild(style);
}
